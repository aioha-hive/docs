"use strict";(self.webpackChunkaioha_docs=self.webpackChunkaioha_docs||[]).push([[257,678],{395:(e,n,t)=>{t.d(n,{A:()=>s});t(8101);var a=t(3526);const i={tabItem:"tabItem_NrJ7"};var r=t(5105);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,s),hidden:t,children:n})}},896:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"core/get-started","title":"Get Started","description":"Aioha core may be installed through npm or imported through CDN using ES6 module import syntax.","source":"@site/docs/core/get-started.mdx","sourceDirName":"core","slug":"/core/get-started","permalink":"/docs/core/get-started","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core/get-started.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Core API","permalink":"/docs/category/core-api"},"next":{"title":"Usage","permalink":"/docs/core/usage"}}');var i=t(5105),r=t(3881),s=t(1118),l=t(395),o=t(8303);const c={sidebar_position:1},d="Get Started",u={},h=[{value:"NPM Installation",id:"npm-installation",level:2},{value:"CDN Import",id:"cdn-import",level:2},{value:"Usage Example",id:"usage-example",level:2},{value:"HiveSigner Callback Page",id:"hivesigner-callback-page",level:2},{value:"Polyfills",id:"polyfills",level:2},{value:"Chunking",id:"chunking",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"get-started",children:"Get Started"})}),"\n",(0,i.jsx)(n.p,{children:"Aioha core may be installed through npm or imported through CDN using ES6 module import syntax."}),"\n",(0,i.jsx)(n.h2,{id:"npm-installation",children:"NPM Installation"}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(l.A,{value:"npm",label:"npm",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npm i @aioha/aioha\n"})})}),(0,i.jsx)(l.A,{value:"yarn",label:"yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"yarn add @aioha/aioha\n"})})}),(0,i.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"pnpm i @aioha/aioha\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"cdn-import",children:"CDN Import"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:"<script type=\"module\">\n  import { initAioha } from 'https://unpkg.com/@aioha/aioha@latest/dist/bundle.js'\n<\/script>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,i.jsx)(n.p,{children:"Instantiating Aioha, logging in and transacting on Hive can be done with just one or two lines of code for each task. Most configuration are provider-specific."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { initAioha, Asset, KeyTypes, Providers } from '@aioha/aioha'\n\n// Instantiation\nconst aioha = initAioha({\n  hiveauth: {\n    name: 'Aioha',\n    description: 'Aioha test app'\n  },\n  hivesigner: {\n    app: 'ipfsuploader.app',\n    callbackURL: window.location.origin + '/hivesigner.html',\n    scope: ['login', 'vote']\n  }\n})\n\n// Get registered providers\nconsole.log(aioha.getProviders())\n\n// Get current logged in user and provider name\nif (aioha.isLoggedIn()) {\n  console.log(aioha.getCurrentUser(), aioha.getCurrentProvider())\n}\n\n// Login with provider\nconst login = await aioha.login(Providers.Keychain, 'hiveusername', {\n  msg: 'Hello World',\n  keyType: KeyTypes.Posting,\n  hiveauth: {\n    cbWait: (payload, evt) => {\n      // display HiveAuth QR code using `payload` as data\n    }\n  }\n})\n\n// Transfer 1 HIVE using logged in provider\nconst xfer = await aioha.transfer('recipient', 1, Asset.HIVE, 'Transferred using Aioha with memo')\n\n// Vote comment with 100% weight\nconst vote = await aioha.vote('author', 'permlink', 10000)\n\n// Claim rewards\nconst rewardClaim = await aioha.claimRewards()\n"})}),"\n",(0,i.jsx)(n.h2,{id:"hivesigner-callback-page",children:"HiveSigner Callback Page"}),"\n",(0,i.jsxs)(n.p,{children:["HiveSigner provider requires a callback page that stores the login and transaction results into ",(0,i.jsx)(n.code,{children:"localStorage"})," which is then used as callback data for the application. The function is included in ",(0,i.jsx)(n.a,{href:"https://github.com/aioha-hive/aioha/blob/main/src/lib/hivesigner-cb.ts",children:(0,i.jsx)(n.code,{children:"src/lib/hivesigner-cb.ts"})})," file in Aioha core and may be used as such:"]}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(l.A,{value:"cdn",label:"CDN",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<script type=\"module\">\n  import { hivesignerCb } from 'https://unpkg.com/@aioha/aioha@latest/dist/hivesigner-cb.js'\n  hivesignerCb()\n<\/script>\n"})})}),(0,i.jsx)(l.A,{value:"npm",label:"NPM Module",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { hivesignerCb } from '@aioha/aioha/build/lib/hivesigner-cb'\n\nhivesignerCb()\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"polyfills",children:"Polyfills"}),"\n",(0,i.jsx)(n.p,{children:"When using Aioha with bundlers such as Webpack or Vite, you may need to add some polyfills for it to work correctly."}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(l.A,{value:"webpack",label:"Webpack",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="webpack.config.cjs"',children:"const { DefinePlugin, ProvidePlugin } = require('webpack')\n\nmodule.exports = {\n  // ...\n  resolve: {\n    // ...\n    fallback: {\n      url: false,\n      buffer: require.resolve('buffer/')\n    }\n  },\n  plugins: [\n    // ...\n    new DefinePlugin({\n      'process.env.NODE_DEBUG': false\n    }),\n    new ProvidePlugin({\n      Buffer: ['buffer', 'Buffer']\n    })\n  ]\n}\n"})})}),(0,i.jsx)(l.A,{value:"vite",label:"Vite",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="vite.config.ts"',children:"import { defineConfig } from 'vite'\nimport { nodePolyfills } from 'vite-plugin-node-polyfills'\n\nexport default defineConfig({\n  // ...\n  define: {\n    'process.env.NODE_DEBUG': false\n  },\n  plugins: [\n    // ...\n    nodePolyfills({\n      globals: {\n        Buffer: true\n      }\n    })\n  ]\n})\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"chunking",children:"Chunking"}),"\n",(0,i.jsx)(n.p,{children:"To keep the main bundle as lightweight as possible, enable chunking (or code splitting) in your bundler."}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(l.A,{value:"webpack",label:"Webpack",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="webpack.config.cjs"',children:"module.exports = {\n  // ...\n  optimization: {\n    splitChunks: {\n      name: (module, chunks, cacheGroupKey) => {\n        const allChunksNames = chunks.map((chunk) => chunk.name).join('-')\n        return allChunksNames\n      }\n    }\n  }\n}\n"})})}),(0,i.jsxs)(l.A,{value:"vite",label:"Vite/Rollup",children:[(0,i.jsxs)(o.A,{type:"info",children:[(0,i.jsxs)(n.p,{children:["You may need to install the dependencies (of the same version) used by Aioha core for Rollup to detect them. Check that the versions you have correspond with the versions used by Aioha core (depending on the version of ",(0,i.jsx)(n.code,{children:"@aioha/aioha"})," you use)."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"pnpm i -D @engrave/ledger-app-hive @ledgerhq/hw-transport-webusb\n"})})]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="vite.config.ts"',children:"import { defineConfig } from 'vite'\n\nexport default defineConfig({\n  // ...\n  build: {\n    rollupOptions: {\n      output: {\n        assetFileNames: 'assets/[name][extname]',\n        chunkFileNames: 'vendor/[name]-[hash].js',\n        manualChunks: {\n          hiveledger: ['@engrave/ledger-app-hive'],\n          ledger: ['@ledgerhq/hw-transport-webusb']\n        }\n      }\n    }\n  }\n})\n"})})]})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},1118:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(8101),i=t(3526),r=t(6154),s=t(5234),l=t(2333),o=t(4879),c=t(9092),d=t(2886);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,u]=m({queryString:t,groupId:i}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),v=(()=>{const e=c??f;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=t(4895);const v={tabList:"tabList_Dz4W",tabItem:"tabItem_byuv"};var x=t(5105);function b(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),i=l[t].value;i!==a&&(c(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{o.push(e)},onKeyDown:u,onClick:d,...r,className:(0,i.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",v.tabList),children:[(0,x.jsx)(b,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(n))}},3881:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var a=t(8101);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}},8303:(e,n,t)=>{t.d(n,{A:()=>D});var a=t(8101),i=t(5105);function r(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=a.Children.toArray(e),t=n.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),r=n.filter((e=>e!==t)),s=t?.props.children;return{mdxAdmonitionTitle:s,rest:r.length>0?(0,i.jsx)(i.Fragment,{children:r}):null}}(e.children),r=e.title??n;return{...e,...r&&{title:r},children:t}}var s=t(3526),l=t(4750),o=t(3969);const c="admonition_tHht",d="admonitionHeading_Ojxn",u="admonitionIcon_vG9L",h="admonitionContent_Oyba";function p(e){let{type:n,className:t,children:a}=e;return(0,i.jsx)("div",{className:(0,s.A)(o.G.common.admonition,o.G.common.admonitionType(n),c,t),children:a})}function m(e){let{icon:n,title:t}=e;return(0,i.jsxs)("div",{className:d,children:[(0,i.jsx)("span",{className:u,children:n}),t]})}function f(e){let{children:n}=e;return n?(0,i.jsx)("div",{className:h,children:n}):null}function g(e){const{type:n,icon:t,title:a,children:r,className:s}=e;return(0,i.jsxs)(p,{type:n,className:s,children:[a||t?(0,i.jsx)(m,{title:a,icon:t}):null,(0,i.jsx)(f,{children:r})]})}function v(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const x={icon:(0,i.jsx)(v,{}),title:(0,i.jsx)(l.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function b(e){return(0,i.jsx)(g,{...x,...e,className:(0,s.A)("alert alert--secondary",e.className),children:e.children})}function j(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const y={icon:(0,i.jsx)(j,{}),title:(0,i.jsx)(l.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function w(e){return(0,i.jsx)(g,{...y,...e,className:(0,s.A)("alert alert--success",e.className),children:e.children})}function A(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,i.jsx)(A,{}),title:(0,i.jsx)(l.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function k(e){return(0,i.jsx)(g,{...N,...e,className:(0,s.A)("alert alert--info",e.className),children:e.children})}function C(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const I={icon:(0,i.jsx)(C,{}),title:(0,i.jsx)(l.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function T(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const V={icon:(0,i.jsx)(T,{}),title:(0,i.jsx)(l.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const P={icon:(0,i.jsx)(C,{}),title:(0,i.jsx)(l.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const E={...{note:b,tip:w,info:k,warning:function(e){return(0,i.jsx)(g,{...I,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(g,{...V,...e,className:(0,s.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,i.jsx)(b,{title:"secondary",...e}),important:e=>(0,i.jsx)(k,{title:"important",...e}),success:e=>(0,i.jsx)(w,{title:"success",...e}),caution:function(e){return(0,i.jsx)(g,{...P,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})}}};function D(e){const n=r(e),t=(a=n.type,E[a]||(console.warn(`No admonition component found for admonition type "${a}". Using Info as fallback.`),E.info));var a;return(0,i.jsx)(t,{...n})}}}]);