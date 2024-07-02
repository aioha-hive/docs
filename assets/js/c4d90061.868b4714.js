"use strict";(self.webpackChunkaioha_docs=self.webpackChunkaioha_docs||[]).push([[220],{6068:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(6070),t=n(5710);const s={sidebar_position:2},d="Ready-Made UI",a={id:"react/ui",title:"Ready-Made UI",description:"Opinionated React modal UI for Hive logins through Aioha, styled using Tailwind CSS. This provides a quick and easy way to bootstrap a React web app with ready to use Aioha-powered modal component.",source:"@site/docs/react/ui.mdx",sourceDirName:"react",slug:"/react/ui",permalink:"/docs/react/ui",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/ui.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Provider",permalink:"/docs/react/provider"},next:{title:"Branding",permalink:"/docs/branding"}},r={},l=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>AiohaModal</code> component",id:"aiohamodal-component",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"ready-made-ui",children:"Ready-Made UI"}),"\n",(0,o.jsxs)(i.p,{children:["Opinionated React modal UI for Hive logins through Aioha, styled using ",(0,o.jsx)(i.a,{href:"https://tailwindcss.com",children:"Tailwind CSS"}),". This provides a quick and easy way to bootstrap a React web app with ready to use Aioha-powered modal component."]}),"\n",(0,o.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-sh",children:"pnpm i @aioha/react-ui @aioha/aioha\n"})}),"\n",(0,o.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsx)(i.li,{children:"Initialize Aioha and setup the provider at the root of your application. This may be in index.jsx, index.tsx or App.tsx depending on the framework you use."}),"\n"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",metastring:'title="src/App.tsx"',children:"import { initAioha } from '@aioha/aioha'\nimport { AiohaProvider } from '@aioha/react-ui'\n\n// See options: https://aioha.dev/docs/core/usage#instantiation\nconst aioha = initAioha()\n\nconst App = () => {\n  return (\n    <AiohaProvider aioha={aioha}>\n      <TheRestOfYourApplication />\n    </AiohaProvider>\n  )\n}\n"})}),"\n",(0,o.jsxs)(i.ol,{start:"2",children:["\n",(0,o.jsxs)(i.li,{children:["Use the modal component and the ",(0,o.jsxs)(i.a,{href:"/docs/react/provider#usage",children:[(0,o.jsx)(i.code,{children:"useAioha()"})," hook"]})," anywhere within ",(0,o.jsx)(i.code,{children:"AiohaProvider"}),"."]}),"\n"]}),"\n",(0,o.jsx)(i.admonition,{type:"note",children:(0,o.jsxs)(i.p,{children:["If your application is primarily styled using Tailwind CSS, it is not required to import ",(0,o.jsx)(i.code,{children:"@aioha/react-ui/dist/build.css"}),"."]})}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",metastring:'title="src/components/AiohaPage.tsx"',children:"import { useState } from 'react'\nimport { useAioha, AiohaModal } from '@aioha/react-ui'\nimport { KeyTypes } from '@aioha/aioha'\nimport { Button, useColorMode } from '@chakra-ui/react'\nimport '@aioha/react-ui/dist/build.css'\n\nexport const AiohaPage = () => {\n  const { colorMode } = useColorMode()\n  const [modalDisplayed, setModalDisplayed] = useState(false)\n  const { user } = useAioha()\n  return (\n    <>\n      <Button onClick={() => setModalDisplayed(true)}>\n        {user ?? 'Connect Wallet'}\n      </Button>\n      <div className={colorMode}>\n        <AiohaModal\n          displayed={modalDisplayed}\n          loginOptions={{\n            msg: 'Login',\n            keyType: KeyTypes.Posting\n          }}\n          onLogin={console.log}\n          onClose={setModalDisplayed}\n        />\n      </div>\n    </>\n  )\n}\n"})}),"\n",(0,o.jsxs)(i.h2,{id:"aiohamodal-component",children:[(0,o.jsx)(i.code,{children:"AiohaModal"})," component"]}),"\n",(0,o.jsxs)(i.table,{children:[(0,o.jsx)(i.thead,{children:(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.th,{children:"Property"}),(0,o.jsx)(i.th,{children:"Required?"}),(0,o.jsx)(i.th,{children:"Description"}),(0,o.jsx)(i.th,{children:"Default"})]})}),(0,o.jsxs)(i.tbody,{children:[(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:(0,o.jsx)(i.code,{children:"displayed"})}),(0,o.jsx)(i.td,{children:"\u2705"}),(0,o.jsx)(i.td,{children:"Boolean of whether the modal is displayed."}),(0,o.jsx)(i.td,{children:(0,o.jsx)(i.em,{children:"false"})})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:(0,o.jsx)(i.code,{children:"loginTitle"})}),(0,o.jsx)(i.td,{children:"\u274c"}),(0,o.jsx)(i.td,{children:"Login title to be displayed."}),(0,o.jsx)(i.td,{children:"Connect Wallet"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:(0,o.jsx)(i.code,{children:"loginHelpUrl"})}),(0,o.jsx)(i.td,{children:"\u274c"}),(0,o.jsx)(i.td,{children:"Help URL to be linked under provider selection view, if any."}),(0,o.jsx)(i.td,{children:(0,o.jsx)(i.em,{children:"undefined"})})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:(0,o.jsx)(i.code,{children:"loginOptions"})}),(0,o.jsx)(i.td,{children:"\u2705"}),(0,o.jsxs)(i.td,{children:["Aioha login options. See available configuration ",(0,o.jsx)(i.a,{href:"/docs/core/usage#login",children:"here"}),"."]}),(0,o.jsx)(i.td,{})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:(0,o.jsx)(i.code,{children:"onLogin"})}),(0,o.jsx)(i.td,{children:"\u274c"}),(0,o.jsxs)(i.td,{children:["Callback function to be called upon successful login, if any. Parameter contains login result as defined ",(0,o.jsx)(i.a,{href:"/docs/core/usage#login",children:"here"}),"."]}),(0,o.jsx)(i.td,{})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:(0,o.jsx)(i.code,{children:"onClose"})}),(0,o.jsx)(i.td,{children:"\u2705"}),(0,o.jsx)(i.td,{children:"Function to be called to close the modal."}),(0,o.jsx)(i.td,{})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:(0,o.jsx)(i.code,{children:"imageServer"})}),(0,o.jsx)(i.td,{children:"\u274c"}),(0,o.jsx)(i.td,{children:"Image server URL for user avatar."}),(0,o.jsx)(i.td,{children:(0,o.jsx)(i.a,{href:"https://images.hive.blog",children:"https://images.hive.blog"})})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:(0,o.jsx)(i.code,{children:"explorerUrl"})}),(0,o.jsx)(i.td,{children:"\u274c"}),(0,o.jsx)(i.td,{children:"Hive block explorer URL."}),(0,o.jsx)(i.td,{children:(0,o.jsx)(i.a,{href:"https://hivehub.dev",children:"https://hivehub.dev"})})]})]})]}),"\n",(0,o.jsx)(i.admonition,{type:"warning",children:(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"hiveauth.cbWait"})," in ",(0,o.jsx)(i.code,{children:"loginOptions"})," will be overriden as ",(0,o.jsx)(i.code,{children:"AiohaModal"})," will handle the presentation of HiveAuth QR codes."]})})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},5710:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>a});var o=n(758);const t={},s=o.createContext(t);function d(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);