"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5873],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||r;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},89100:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"mutation-background",title:"Background Information on Mutation"},l=void 0,c={unversionedId:"mutation-background",id:"version-v3.11.x/mutation-background",title:"Background Information on Mutation",description:"Mutation webhooks in Kubernetes is a nuanced concept with many gotchas. This",source:"@site/versioned_docs/version-v3.11.x/mutation-background.md",sourceDirName:".",slug:"/mutation-background",permalink:"/gatekeeper/website/docs/v3.11.x/mutation-background",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.11.x/mutation-background.md",tags:[],version:"v3.11.x",frontMatter:{id:"mutation-background",title:"Background Information on Mutation"},sidebar:"docs",previous:{title:"OPA Versions",permalink:"/gatekeeper/website/docs/v3.11.x/opa-versions"},next:{title:"Developers",permalink:"/gatekeeper/website/docs/v3.11.x/developers"}},u={},p=[],h={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Mutation webhooks in Kubernetes is a nuanced concept with many gotchas. This\npage explores some of the background of mutation webhooks in Kubernetes, their\noperational and syntactical implications, and how Gatekeeper is trying to provide\nvalue on top of the basic Kubernetes webhook ecosystem."),(0,r.kt)("h1",{id:"mutation-chaining"},"Mutation Chaining"),(0,r.kt)("p",null,"A key difference between mutating webhooks and validating webhooks are that\nmutating webhooks are called in series, whereas validating webhooks are called in parallel."),(0,r.kt)("p",null,"This makes sense, since validating webhooks can only approve or deny (or warn) for a given\ninput and have no other side effects. This means that the result of one validating webhook\ncannot impact the result of any other validating webhook, and it's trivial to aggregate\nall of the validation responses as they come in: reject if at least one deny comes in, return\nall warnings and denies that are encountered back to the user."),(0,r.kt)("p",null,"Mutation, however, changes what the input resource looks like. This means that the output\nof one mutating webhook can have an effect on the output of another mutating webhook.\nFor example, if one mutating webhook adds a sidecar container, and another webhook sets\n",(0,r.kt)("inlineCode",{parentName:"p"},"imagePullPolicy")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Always"),", then the new sidecar container means that this second webhook\nhas one more container to mutate."),(0,r.kt)("p",null,"The biggest practical issue with this call-in-sequence behavior is latency. Validation webhooks\n(which are called in parallel), have a latency equivalent to the slowest-responding webhook.\nMutation webhooks have a total latency that is the sum of all mutating webhooks to be called. This\nmakes mutation much more latency-sensitive."),(0,r.kt)("p",null,"This can be particularly harmful for something like external data, where a webhook reaches out to\na secondary service to gather necessary information. This extra hop can be extra expensive,\nespecially if these external calls are not minimized. Gatekeeper translates external data\nreferences scattered across multiple mutators into a single batched call per external data provider,\nand calls each provider in parallel, minimizing latency."),(0,r.kt)("h1",{id:"mutation-recursion"},"Mutation Recursion"),(0,r.kt)("p",null,"Not only are mutators chained, but they recurse as well. This is not only due to Kubernetes'\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#reinvocation-policy"},"reinvocation policy"),",\nbut also due to the nature of the Kubernetes control plane itself, since controllers may modify resources periodically.\nWhether because of the reinvocation policy, or because of control plane behavior, mutators are likely to\noperate on their own output. This has some operational risk. Consider a mutating webhook that prepends a hostname to a docker\nimage reference (e.g. prepend ",(0,r.kt)("inlineCode",{parentName:"p"},"gcr.io/"),"), if written naievly, each successive mutation would add another prefix, leading to results\nlike ",(0,r.kt)("inlineCode",{parentName:"p"},"gcr.io/gcr.io/gcr.io/my-favorite-image:latest"),". Because of this, Kubernetes requires mutation webhooks to be\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#idempotence"},"idempotent"),"."),(0,r.kt)("p",null,"This is a good idea, but there is one problem: webhooks that are idempotent in isolation may not be idempotent as a group.\nLet's take the above mutator and make it idempotent. We'll give it the following behavior: \"if an image reference does\nnot start with ",(0,r.kt)("inlineCode",{parentName:"p"},"gcr.io/"),", prepend ",(0,r.kt)("inlineCode",{parentName:"p"},"gcr.io/"),'". This makes the webhook idempotent, for sure. But, what if there is another\nteam working on the cluster, and they want their own image mutation rule: "if an image reference for the ',(0,r.kt)("inlineCode",{parentName:"p"},"billing"),"\nnamespace does not start with ",(0,r.kt)("inlineCode",{parentName:"p"},"billing.company.com/"),", prepend ",(0,r.kt)("inlineCode",{parentName:"p"},"billing.company.com/"),"\". Each of these webhooks would\nbe idempotent in isolation, but when chained together you'll see results like\n",(0,r.kt)("inlineCode",{parentName:"p"},"billing.company.com/gcr.io/billing.company.com/gcr.io/my-favorite-image:latest"),"."),(0,r.kt)("p",null,"At small scales, with small teams, it's relatively easy to ensure that mutations don't interfere with each other,\nbut at larger scales, or when multiple non-communicating parties have their own rules that they want to set, it\ncan be hard, or impossible to maintain this requirement of \"global idempotence\"."),(0,r.kt)("p",null,'Gatekeeper attempts to make this easier by designing mutation in such a way that "global idempotence" is an\nemergent property of all mutators, no matter how they are configured. Here is a ',(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1mCHHhBABzUwP8FtUuEf_B-FX-HHgh_k4bwZcGUYm7Sw/edit#heading=h.j5thjfnqybpn"},"proof"),", where we attempt to show that our language\nfor expressing mutation always converges on a stable result."),(0,r.kt)("h1",{id:"summary"},"Summary"),(0,r.kt)("p",null,"By using Gatekeeper for mutation, it is possible to reduce the number of mutation webhooks, which should improve latency\nconsiderations. It should also help prevent decoupled management of mutation policies from violating the Kubernetes API\nserver's requirement of idempotence."))}m.isMDXComponent=!0}}]);