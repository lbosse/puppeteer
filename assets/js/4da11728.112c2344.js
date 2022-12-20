"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18023],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=o(a),m=r,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(g,p(p({ref:t},s),{},{components:a})):n.createElement(g,p({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},78775:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>u,toc:()=>s});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={sidebar_label:"Page.evaluateHandle"},i="Page.evaluateHandle() method",u={unversionedId:"api/puppeteer.page.evaluatehandle",id:"version-19.4.1/api/puppeteer.page.evaluatehandle",title:"Page.evaluateHandle() method",description:"Signature:",source:"@site/versioned_docs/version-19.4.1/api/puppeteer.page.evaluatehandle.md",sourceDirName:"api",slug:"/api/puppeteer.page.evaluatehandle",permalink:"/api/puppeteer.page.evaluatehandle",draft:!1,tags:[],version:"19.4.1",frontMatter:{sidebar_label:"Page.evaluateHandle"},sidebar:"api",previous:{title:"Page.evaluate",permalink:"/api/puppeteer.page.evaluate"},next:{title:"Page.evaluateOnNewDocument",permalink:"/api/puppeteer.page.evaluateonnewdocument"}},o={},s=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}],c={toc:s};function d(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",r({},{id:"pageevaluatehandle-method"}),"Page.evaluateHandle() method"),(0,n.kt)("h4",r({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  evaluateHandle<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n")),(0,n.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"pageFunction"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Func ","|"," string"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"a function that is run within the page")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"args"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Params"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"arguments to be passed to the pageFunction")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",r({parentName:"p"},{href:"/api/puppeteer.handlefor"}),"HandleFor"),"<","Awaited","<","ReturnType","<","Func",">",">",">",">"),(0,n.kt)("h2",r({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"The only difference between ",(0,n.kt)("a",r({parentName:"p"},{href:"/api/puppeteer.page.evaluate"}),"page.evaluate")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"page.evaluateHandle")," is that ",(0,n.kt)("inlineCode",{parentName:"p"},"evaluateHandle")," will return the value wrapped in an in-page object."),(0,n.kt)("p",null,"If the function passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"page.evaluateHandle")," returns a Promise, the function will wait for the promise to resolve and return its value."),(0,n.kt)("p",null,"You can pass a string instead of a function (although functions are recommended as they are easier to debug and use with TypeScript):"),(0,n.kt)("h2",r({},{id:"example-1"}),"Example 1"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const aHandle = await page.evaluateHandle('document');\n")),(0,n.kt)("h2",r({},{id:"example-2"}),"Example 2"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"/api/puppeteer.jshandle"}),"JSHandle")," instances can be passed as arguments to the ",(0,n.kt)("inlineCode",{parentName:"p"},"pageFunction"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const aHandle = await page.evaluateHandle(() => document.body);\nconst resultHandle = await page.evaluateHandle(body => body.innerHTML, aHandle);\nconsole.log(await resultHandle.jsonValue());\nawait resultHandle.dispose();\n")),(0,n.kt)("p",null,"Most of the time this function returns a ",(0,n.kt)("a",r({parentName:"p"},{href:"/api/puppeteer.jshandle"}),"JSHandle"),", but if ",(0,n.kt)("inlineCode",{parentName:"p"},"pageFunction")," returns a reference to an element, you instead get an ",(0,n.kt)("a",r({parentName:"p"},{href:"/api/puppeteer.elementhandle"}),"ElementHandle")," back:"),(0,n.kt)("h2",r({},{id:"example-3"}),"Example 3"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const button = await page.evaluateHandle(() =>\n  document.querySelector('button')\n);\n// can call `click` because `button` is an `ElementHandle`\nawait button.click();\n")),(0,n.kt)("p",null,"The TypeScript definitions assume that ",(0,n.kt)("inlineCode",{parentName:"p"},"evaluateHandle")," returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"JSHandle"),", but if you know it's going to return an ",(0,n.kt)("inlineCode",{parentName:"p"},"ElementHandle"),", pass it as the generic argument:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const button = await page.evaluateHandle<ElementHandle>(...);\n")))}d.isMDXComponent=!0}}]);