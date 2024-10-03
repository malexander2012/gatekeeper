"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8291],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>m});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(r),m=n,h=g["".concat(l,".").concat(m)]||g[m]||u[m]||i;return r?o.createElement(h,a(a({ref:t},c),{},{components:r})):o.createElement(h,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},99166:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var o=r(58168),n=r(98587),i=(r(96540),r(15680)),a=["components"],s={id:"help",title:"How to contribute"},l=void 0,p={unversionedId:"help",id:"version-v3.11.x/help",title:"How to contribute",description:"Thanks for your interest in contributing to the Gatekeeper project! This document will help answer common questions you may have during your contribution.",source:"@site/versioned_docs/version-v3.11.x/help.md",sourceDirName:".",slug:"/help",permalink:"/gatekeeper/website/docs/v3.11.x/help",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.11.x/help.md",tags:[],version:"v3.11.x",frontMatter:{id:"help",title:"How to contribute"},sidebar:"docs",previous:{title:"Developers",permalink:"/gatekeeper/website/docs/v3.11.x/developers"},next:{title:"Security",permalink:"/gatekeeper/website/docs/v3.11.x/security"}},c={},u=[{value:"Where to start?",id:"where-to-start",level:2},{value:"Contributing Process",id:"contributing-process",level:2},{value:"Developer Certification of Origin (DCO)",id:"developer-certification-of-origin-dco",level:3},{value:"DCO Sign-Off via the command line",id:"dco-sign-off-via-the-command-line",level:4},{value:"Pull Request Review Process",id:"pull-request-review-process",level:3},{value:"Pull Request Test Requirements",id:"pull-request-test-requirements",level:4},{value:"Contributing to Docs",id:"contributing-to-docs",level:2},{value:"Contributing to Helm Chart",id:"contributing-to-helm-chart",level:2},{value:"Contributing to Code",id:"contributing-to-code",level:2}],g={toc:u};function m(e){var t=e.components,r=(0,n.A)(e,a);return(0,i.yg)("wrapper",(0,o.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Thanks for your interest in contributing to the Gatekeeper project! This document will help answer common questions you may have during your contribution."),(0,i.yg)("h2",{id:"where-to-start"},"Where to start?"),(0,i.yg)("p",null,"Join us to help define the direction and implementation of this project!"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"File ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/issues"},"GitHub Issues"),"\nto report bugs, request features, or ask questions asynchronously.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Ask questions in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/community/discussions/categories/gatekeeper"},"OPA Gatekeeper Community Discussions"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Join the ",(0,i.yg)("a",{parentName:"p",href:"https://openpolicyagent.slack.com/messages/CDTN970AX"},(0,i.yg)("inlineCode",{parentName:"a"},"#opa-gatekeeper")),"\nchannel on ",(0,i.yg)("a",{parentName:"p",href:"https://slack.openpolicyagent.org/"},"OPA Slack")," to talk to the maintainers and other contributors asynchronously.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Join ",(0,i.yg)("a",{parentName:"p",href:"https://docs.google.com/document/d/1A1-Q-1OMw3QODs1wT6eqfLTagcGmgzAJAjJihiO3T48/edit"},"weekly meetings")," to discuss development, issues, use cases, etc with maintainers and other contributors.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Add a policy to the ",(0,i.yg)("a",{parentName:"p",href:"https://www.github.com/open-policy-agent/gatekeeper-library"},"Gatekeeper policy library"),"."))),(0,i.yg)("h2",{id:"contributing-process"},"Contributing Process"),(0,i.yg)("p",null,"Please follow these 3 steps for contributions:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Commit changes to a git branch in your fork, making sure to sign-off those changes for the ",(0,i.yg)("a",{parentName:"li",href:"#developer-certification-of-origin-dco"},"Developer Certificate of Origin"),"."),(0,i.yg)("li",{parentName:"ol"},"Create a GitHub Pull Request for your change, following the instructions in the pull request template and use ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/zeke/semantic-pull-requests"},"semantic PR title")),(0,i.yg)("li",{parentName:"ol"},"Perform a ",(0,i.yg)("a",{parentName:"li",href:"#pull-request-review-process"},"Pull Request Review")," with the project maintainers on the pull request.")),(0,i.yg)("h3",{id:"developer-certification-of-origin-dco"},"Developer Certification of Origin (DCO)"),(0,i.yg)("p",null,"This project requires contributors to sign a DCO (Developer Certificate of Origin) to ensure that the project has the proper rights to use your code. "),(0,i.yg)("p",null,"The DCO is an attestation attached to every commit made by every developer. In the commit message of the contribution, the developer simply adds a Signed-off-by statement and thereby agrees to the DCO, which you can find at ",(0,i.yg)("a",{parentName:"p",href:"http://developercertificate.org/"},"http://developercertificate.org/"),"."),(0,i.yg)("h4",{id:"dco-sign-off-via-the-command-line"},"DCO Sign-Off via the command line"),(0,i.yg)("p",null,"Configure your local git to sign off your username and email address that is associated with your GitHub user account."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},'$ git config --global user.name "John Doe" \n$ git config --global user.email johndoe@example.com \n')),(0,i.yg)("p",null,"Then, for every commit, add a signoff statement via the ",(0,i.yg)("inlineCode",{parentName:"p"},"-s")," flag. "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},'$ git commit -s -m "This is my commit message"\n')),(0,i.yg)("p",null,"If you forget to add the sign-off you can also amend a previous commit with the sign-off by running ",(0,i.yg)("inlineCode",{parentName:"p"},"git commit --amend -s"),". If you've pushed your changes to GitHub already you'll need to force push your branch with ",(0,i.yg)("inlineCode",{parentName:"p"},"git push -f"),"."),(0,i.yg)("h3",{id:"pull-request-review-process"},"Pull Request Review Process"),(0,i.yg)("p",null,"Please take a look at ",(0,i.yg)("a",{parentName:"p",href:"https://help.github.com/articles/about-pull-requests/"},"this article")," if you're not familiar with GitHub Pull Requests."),(0,i.yg)("p",null,"Once you open a pull request, project maintainers will review your changes and respond to your pull request with any feedback they might have."),(0,i.yg)("h4",{id:"pull-request-test-requirements"},"Pull Request Test Requirements"),(0,i.yg)("p",null,"For code updates, to ensure high quality commits, we require that all pull requests to this project meet these specifications:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Tests:")," We require all the code in Gatekeeper to have at least unit test coverage."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Green CI Tests:")," We require these test runs to succeed on every pull request before being merged.")),(0,i.yg)("h2",{id:"contributing-to-docs"},"Contributing to Docs"),(0,i.yg)("p",null,"If you want to contribute to docs, Gatekeeper auto-generates versioned docs. If you have any doc changes for a particular version, please update in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/tree/master/website/docs"},"website/docs")," as well as in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/tree/master/website/versioned_docs"},"website/versioned_docs/version-vx.y.z")," directory. If the change is for next release, please update in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/tree/master/website/docs"},"website/docs"),", then the change will be part of next versioned doc when we do a new release."),(0,i.yg)("h2",{id:"contributing-to-helm-chart"},"Contributing to Helm Chart"),(0,i.yg)("p",null,"If you want to contribute to Helm chart, Gatekeeper auto-generates versioned Helm charts from static manifests. If you have any changes in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/tree/master/charts"},"charts")," directory, they will get clobbered when we do a new release. The generator code lives under ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/tree/master/cmd/build/helmify"},"cmd/build/helmify"),". To make modifications to this template, please edit ",(0,i.yg)("inlineCode",{parentName:"p"},"kustomization.yaml"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"kustomize-for-helm.yaml")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"replacements.go")," under that directory and then run ",(0,i.yg)("inlineCode",{parentName:"p"},"make manifests")," to generate changes in the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/tree/master/manifest_staging"},"manifest_staging")," directory. You should push all the modified files to your PR. Once it's merged, the changes will be promoted to the root charts directory the next time a Gatekeeper release is cut."),(0,i.yg)("h2",{id:"contributing-to-code"},"Contributing to Code"),(0,i.yg)("p",null,"If you want to contribute code, check out the ",(0,i.yg)("a",{parentName:"p",href:"/gatekeeper/website/docs/v3.11.x/developers"},"Developers")," guide to get started."))}m.isMDXComponent=!0}}]);