"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68571],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,b=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(b,l(l({ref:n},c),{},{components:t})):r.createElement(b,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37755:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});t(67294);var r=t(3905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const l={sidebar_label:"ElementHandle.boundingBox"},i="ElementHandle.boundingBox() method",p={unversionedId:"api/puppeteer.elementhandle.boundingbox",id:"version-19.4.1/api/puppeteer.elementhandle.boundingbox",title:"ElementHandle.boundingBox() method",description:"This method returns the bounding box of the element (relative to the main frame), or null if the element is not visible.",source:"@site/versioned_docs/version-19.4.1/api/puppeteer.elementhandle.boundingbox.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.boundingbox",permalink:"/api/puppeteer.elementhandle.boundingbox",draft:!1,tags:[],version:"19.4.1",frontMatter:{sidebar_label:"ElementHandle.boundingBox"},sidebar:"api",previous:{title:"ElementHandle.asElement",permalink:"/api/puppeteer.elementhandle.aselement"},next:{title:"ElementHandle.boxModel",permalink:"/api/puppeteer.elementhandle.boxmodel"}},u={},c=[{value:"Signature:",id:"signature",level:4}],s={toc:c};function d(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",o({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"elementhandleboundingbox-method"}),"ElementHandle.boundingBox() method"),(0,r.kt)("p",null,"This method returns the bounding box of the element (relative to the main frame), or ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if the element is not visible."),(0,r.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class ElementHandle {\n  boundingBox(): Promise<BoundingBox | null>;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<",(0,r.kt)("a",o({parentName:"p"},{href:"/api/puppeteer.boundingbox"}),"BoundingBox")," ","|"," null",">"))}d.isMDXComponent=!0}}]);