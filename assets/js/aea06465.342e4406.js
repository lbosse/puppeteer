"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return r?a.createElement(f,p(p({ref:t},s),{},{components:r})):a.createElement(f,p({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var u=2;u<l;u++)p[u]=r[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},49551:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>s});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const p={sidebar_label:"Frame.addStyleTag_1"},o="Frame.addStyleTag() method",i={unversionedId:"api/puppeteer.frame.addstyletag_1",id:"version-19.4.1/api/puppeteer.frame.addstyletag_1",title:"Frame.addStyleTag() method",description:"Signature:",source:"@site/versioned_docs/version-19.4.1/api/puppeteer.frame.addstyletag_1.md",sourceDirName:"api",slug:"/api/puppeteer.frame.addstyletag_1",permalink:"/api/puppeteer.frame.addstyletag_1",draft:!1,tags:[],version:"19.4.1",frontMatter:{sidebar_label:"Frame.addStyleTag_1"},sidebar:"api",previous:{title:"Frame.addStyleTag",permalink:"/api/puppeteer.frame.addstyletag"},next:{title:"Frame.childFrames",permalink:"/api/puppeteer.frame.childframes"}},u={},s=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}],m={toc:s};function c(e){var{components:t}=e,r=l(e,["components"]);return(0,a.kt)("wrapper",n({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"frameaddstyletag-method"}),"Frame.addStyleTag() method"),(0,a.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"class Frame {\n  addStyleTag(\n    options: FrameAddStyleTagOptions\n  ): Promise<ElementHandle<HTMLLinkElement>>;\n}\n")),(0,a.kt)("h2",n({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"options"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.frameaddstyletagoptions"}),"FrameAddStyleTagOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.elementhandle"}),"ElementHandle"),"<","HTMLLinkElement",">",">"))}c.isMDXComponent=!0}}]);