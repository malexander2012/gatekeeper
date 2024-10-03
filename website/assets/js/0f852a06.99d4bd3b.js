"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1605],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>y});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=l(t),y=o,d=g["".concat(s,".").concat(y)]||g[y]||u[y]||i;return t?n.createElement(d,a(a({ref:r},p),{},{components:t})):n.createElement(d,a({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},13246:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=t(58168),o=t(98587),i=(t(96540),t(15680)),a=["components"],c={id:"emergency",title:"Emergency Recovery"},s=void 0,l={unversionedId:"emergency",id:"version-v3.17.x/emergency",title:"Emergency Recovery",description:"If a situation arises where Gatekeeper is preventing the cluster from operating correctly,",source:"@site/versioned_docs/version-v3.17.x/emergency.md",sourceDirName:".",slug:"/emergency",permalink:"/gatekeeper/website/docs/emergency",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.17.x/emergency.md",tags:[],version:"v3.17.x",frontMatter:{id:"emergency",title:"Emergency Recovery"},sidebar:"docs",previous:{title:"Debugging",permalink:"/gatekeeper/website/docs/debug"},next:{title:"Cloud and Vendor Specific Fixes",permalink:"/gatekeeper/website/docs/vendor-specific"}},p={},u=[],g={toc:u};function y(e){var r=e.components,t=(0,o.A)(e,a);return(0,i.yg)("wrapper",(0,n.A)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"If a situation arises where Gatekeeper is preventing the cluster from operating correctly,\nthe webhook can be disabled. This will remove all Gatekeeper admission checks. Assuming\nthe default webhook name has been used this can be achieved by running:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"kubectl delete validatingwebhookconfigurations.admissionregistration.k8s.io gatekeeper-validating-webhook-configuration")),(0,i.yg)("p",null,"Redeploying the webhook configuration will re-enable Gatekeeper."))}y.isMDXComponent=!0}}]);