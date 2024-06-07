"use strict";(self.webpackChunkaioha_docs=self.webpackChunkaioha_docs||[]).push([[969],{4099:(e,t,n)=>{n.d(t,{A:()=>g});n(758);var s=n(3526),i=n(978),r=n(6067),a=n(4488),l=n(7901),o=n(8199),c=n(2186),d=n(6070);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_jWVc"};function h(){const e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.A,{"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_SGes"};function p(e){let{children:t,href:n,isLast:s}=e;const i="breadcrumbs__link";return s?(0,d.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,d.jsx)(l.A,{className:i,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:i,children:t})}function x(e){let{children:t,active:n,index:i,addMicrodata:r}=e;return(0,d.jsxs)("li",{...r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function g(){const e=(0,r.OF)(),t=(0,a.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(i.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(x,{active:s,index:n,addMicrodata:!!i,children:(0,d.jsx)(p,{href:i,isLast:s,children:t.label})},n)}))]})}):null}},1610:(e,t,n)=>{n.r(t),n.d(t,{default:()=>V});var s=n(758),i=n(1324),r=n(6067),a=n(2186),l=n(3526),o=n(7901),c=n(2553);const d=["zero","one","two","few","many","other"];function u(e){return d.filter((t=>e.includes(t)))}const m={locale:"en",pluralForms:u(["one","other"]),select:e=>1===e?"one":"other"};function h(){const{i18n:{currentLocale:e}}=(0,c.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:u(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),m}}),[e])}function b(){const e=h();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const i=n.select(t),r=n.pluralForms.indexOf(i);return s[Math.min(r,s.length-1)]}(n,t,e)}}var p=n(6979),x=n(8199),g=n(7725);const v={cardContainer:"cardContainer_nawf",cardTitle:"cardTitle_K9XE",cardDescription:"cardDescription_ObFt"};var f=n(6070);function j(e){let{href:t,children:n}=e;return(0,f.jsx)(o.A,{href:t,className:(0,l.A)("card padding--lg",v.cardContainer),children:n})}function A(e){let{href:t,icon:n,title:s,description:i}=e;return(0,f.jsxs)(j,{href:t,children:[(0,f.jsxs)(g.A,{as:"h2",className:(0,l.A)("text--truncate",v.cardTitle),title:s,children:[n," ",s]}),i&&(0,f.jsx)("p",{className:(0,l.A)("text--truncate",v.cardDescription),title:i,children:i})]})}function N(e){let{item:t}=e;const n=(0,r.Nr)(t),s=function(){const{selectMessage:e}=b();return t=>e(t,(0,x.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,f.jsx)(A,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function T(e){let{item:t}=e;const n=(0,p.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.cC)(t.docId??void 0);return(0,f.jsx)(A,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function _(e){let{item:t}=e;switch(t.type){case"link":return(0,f.jsx)(T,{item:t});case"category":return(0,f.jsx)(N,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function L(e){let{className:t}=e;const n=(0,r.$S)();return(0,f.jsx)(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return(0,f.jsx)(L,{...e});const s=(0,r.d1)(t);return(0,f.jsx)("section",{className:(0,l.A)("row",n),children:s.map(((e,t)=>(0,f.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,f.jsx)(_,{item:e})},t)))})}var y=n(3555),w=n(6551),I=n(3716),C=n(4099);const F={generatedIndexPage:"generatedIndexPage_TncF",list:"list_UpyX",title:"title_Bu2H"};function M(e){let{categoryGeneratedIndex:t}=e;return(0,f.jsx)(i.be,{title:t.title,description:t.description,keywords:t.keywords,image:(0,a.Ay)(t.image)})}function P(e){let{categoryGeneratedIndex:t}=e;const n=(0,r.$S)();return(0,f.jsxs)("div",{className:F.generatedIndexPage,children:[(0,f.jsx)(w.A,{}),(0,f.jsx)(C.A,{}),(0,f.jsx)(I.A,{}),(0,f.jsxs)("header",{children:[(0,f.jsx)(g.A,{as:"h1",className:F.title,children:t.title}),t.description&&(0,f.jsx)("p",{children:t.description})]}),(0,f.jsx)("article",{className:"margin-top--lg",children:(0,f.jsx)(k,{items:n.items,className:F.list})}),(0,f.jsx)("footer",{className:"margin-top--lg",children:(0,f.jsx)(y.A,{previous:t.navigation.previous,next:t.navigation.next})})]})}function V(e){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(M,{...e}),(0,f.jsx)(P,{...e})]})}},3555:(e,t,n)=>{n.d(t,{A:()=>o});n(758);var s=n(8199),i=n(3526),r=n(7901),a=n(6070);function l(e){const{permalink:t,title:n,subLabel:s,isNext:l}=e;return(0,a.jsxs)(r.A,{className:(0,i.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,a.jsx)("div",{className:"pagination-nav__label",children:n})]})}function o(e){const{previous:t,next:n}=e;return(0,a.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,a.jsx)(l,{...t,subLabel:(0,a.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,a.jsx)(l,{...n,subLabel:(0,a.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},3716:(e,t,n)=>{n.d(t,{A:()=>o});n(758);var s=n(3526),i=n(8199),r=n(978),a=n(9727),l=n(6070);function o(e){let{className:t}=e;const n=(0,a.r)();return n.badge?(0,l.jsx)("span",{className:(0,s.A)(t,r.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},6551:(e,t,n)=>{n.d(t,{A:()=>x});n(758);var s=n(3526),i=n(2553),r=n(7901),a=n(8199),l=n(1989),o=n(978),c=n(2224),d=n(9727),u=n(6070);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(a.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(a.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(a.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(r.A,{to:n,onClick:s,children:(0,u.jsx)(a.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function p(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,i.A)(),{pluginId:a}=(0,l.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(a),{latestDocSuggestion:m,latestVersionSuggestion:p}=(0,l.HW)(a),x=m??(g=p).docs.find((e=>e.id===g.mainDocId));var g;return(0,u.jsxs)("div",{className:(0,s.A)(t,o.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:r,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:p.label,to:x.path,onClick:()=>d(p.name)})})]})}function x(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(p,{className:t,versionMetadata:n}):null}}}]);