import { visit } from 'unist-util-visit'

const SHELL_LANGS = new Set([
  'sh',
  'bash',
  'shell',
  'zsh',
  'fish',
  'python',
  'py',
  'yaml',
  'yml',
  'ruby',
  'rb',
  'toml',
  'dockerfile',
  'makefile',
  'ini',
  'conf'
])
const MARKUP_LANGS = new Set(['html', 'xml', 'svg', 'vue', 'markdown', 'md', 'jsx', 'tsx'])

const classList = (node) => {
  const cn = node.properties?.className
  return Array.isArray(cn) ? cn : []
}
const hasClass = (node, name) => classList(node).includes(name)
const hasClassStarting = (node, prefix) => classList(node).some((c) => typeof c === 'string' && c.startsWith(prefix))
const firstClassStarting = (node, prefix) => classList(node).find((c) => typeof c === 'string' && c.startsWith(prefix))

function textOf(node) {
  if (!node) return ''
  if (node.type === 'text') return node.value
  if (node.type !== 'element') return ''
  if (hasClassStarting(node, 'admonitionIcon')) return ''
  if (node.tagName === 'svg') return ''
  return (node.children || []).map(textOf).join('')
}

function flattenCodeText(node, out) {
  if (!node) return
  if (node.type === 'text') {
    out.push(node.value)
    return
  }
  if (node.type !== 'element') return
  if (node.tagName === 'br') {
    out.push('\n')
    return
  }
  for (const child of node.children || []) flattenCodeText(child, out)
}

function commentSyntax(lang) {
  if (!lang) return { type: 'line', prefix: '// ' }
  if (SHELL_LANGS.has(lang)) return { type: 'line', prefix: '# ' }
  if (MARKUP_LANGS.has(lang)) return { type: 'wrap', open: '<!-- ', close: ' -->' }
  return { type: 'line', prefix: '// ' }
}

function stripHashLinks(node) {
  node.children = (node.children || []).filter(
    (c) => !(c.type === 'element' && c.tagName === 'a' && hasClass(c, 'hash-link'))
  )
}

function findDescendant(node, predicate) {
  if (!node || node.type !== 'element') return null
  if (predicate(node)) return node
  for (const child of node.children || []) {
    const found = findDescendant(child, predicate)
    if (found) return found
  }
  return null
}

function normalizeCodeBlock(container) {
  const title = (() => {
    const titleDiv = (container.children || []).find(
      (c) => c.type === 'element' && hasClassStarting(c, 'codeBlockTitle')
    )
    return titleDiv ? textOf(titleDiv).trim() : ''
  })()

  const pre = findDescendant(container, (n) => n.tagName === 'pre')
  if (!pre) return

  const containerLang = firstClassStarting(container, 'language-')
  const preLang = firstClassStarting(pre, 'language-')
  const langClass = containerLang || preLang || null
  const langName = langClass ? langClass.slice('language-'.length) : ''

  const buf = []
  flattenCodeText(pre, buf)
  let text = buf.join('').replace(/\n+$/, '')

  if (title) {
    const c = commentSyntax(langName)
    const header = c.type === 'line' ? `${c.prefix}${title}` : `${c.open}${title}${c.close}`
    text = header + '\n' + text
  }

  container.tagName = 'pre'
  container.properties = {}
  container.children = [
    {
      type: 'element',
      tagName: 'code',
      properties: langClass ? { className: [langClass] } : {},
      children: [{ type: 'text', value: text }]
    }
  ]
}

function transformTabs(node) {
  let tablist = null
  let panelWrapper = null
  for (const c of node.children || []) {
    if (c.type !== 'element') continue
    if (c.tagName === 'ul' && c.properties?.role === 'tablist') {
      tablist = c
    } else if (c.tagName === 'div') {
      panelWrapper = c
    }
  }
  if (!tablist || !panelWrapper) return

  const labels = (tablist.children || [])
    .filter((c) => c.type === 'element' && c.tagName === 'li' && c.properties?.role === 'tab')
    .map((li) => textOf(li).trim())

  const panels = (panelWrapper.children || []).filter(
    (c) => c.type === 'element' && c.properties?.role === 'tabpanel'
  )
  if (panels.length === 0) return

  const out = []
  for (let i = 0; i < panels.length; i++) {
    const label = labels[i] ?? `Tab ${i + 1}`
    out.push({
      type: 'element',
      tagName: 'p',
      properties: {},
      children: [
        {
          type: 'element',
          tagName: 'strong',
          properties: {},
          children: [{ type: 'text', value: `${label}:` }]
        }
      ]
    })
    for (const child of panels[i].children || []) out.push(child)
  }

  node.tagName = 'div'
  node.properties = {}
  node.children = out
}

function transformAdmonition(node) {
  let heading = null
  let content = null
  for (const c of node.children || []) {
    if (c.type !== 'element') continue
    if (hasClassStarting(c, 'admonitionHeading')) heading = c
    else if (hasClassStarting(c, 'admonitionContent')) content = c
  }
  if (!content) return

  const rawType = heading ? textOf(heading).trim() : ''
  const typeLabel = rawType ? rawType.charAt(0).toUpperCase() + rawType.slice(1).toLowerCase() : 'Note'

  node.tagName = 'blockquote'
  node.properties = {}
  node.children = [
    {
      type: 'element',
      tagName: 'p',
      properties: {},
      children: [
        {
          type: 'element',
          tagName: 'strong',
          properties: {},
          children: [{ type: 'text', value: typeLabel }]
        }
      ]
    },
    ...(content.children || [])
  ]
}

export default function rehypeDocusaurusLlms() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (/^h[1-6]$/.test(node.tagName)) {
        stripHashLinks(node)
        return
      }
      if (node.tagName !== 'div') return
      if (hasClass(node, 'tabs-container')) {
        transformTabs(node)
        return
      }
      if (hasClass(node, 'theme-admonition')) {
        transformAdmonition(node)
        return
      }
      if (hasClass(node, 'theme-code-block')) {
        normalizeCodeBlock(node)
        return
      }
    })
  }
}
