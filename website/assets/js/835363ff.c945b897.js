"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1977],{15680:(e,n,a)=>{a.d(n,{xA:()=>l,yg:()=>g});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),c=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},l=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(a),g=r,d=u["".concat(p,".").concat(g)]||u[g]||m[g]||o;return a?t.createElement(d,s(s({ref:n},l),{},{components:a})):t.createElement(d,s({ref:n},l))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},16014:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var t=a(58168),r=a(98587),o=(a(96540),a(15680)),s=["components"],i={id:"exempt-namespaces",title:"Exempting Namespaces"},p=void 0,c={unversionedId:"exempt-namespaces",id:"version-v3.12.x/exempt-namespaces",title:"Exempting Namespaces",description:"Feature State: The Config resource is currently alpha.",source:"@site/versioned_docs/version-v3.12.x/exempt-namespaces.md",sourceDirName:".",slug:"/exempt-namespaces",permalink:"/gatekeeper/website/docs/v3.12.x/exempt-namespaces",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.12.x/exempt-namespaces.md",tags:[],version:"v3.12.x",frontMatter:{id:"exempt-namespaces",title:"Exempting Namespaces"},sidebar:"docs",previous:{title:"Replicating Data",permalink:"/gatekeeper/website/docs/v3.12.x/sync"},next:{title:"Policy Library",permalink:"/gatekeeper/website/docs/v3.12.x/library"}},l={},m=[{value:"Exempting Namespaces from Gatekeeper using config resource",id:"exempting-namespaces-from-gatekeeper-using-config-resource",level:2},{value:"Exempting Namespaces from the Gatekeeper Admission Webhook using <code>--exempt-namespace</code> flag",id:"exempting-namespaces-from-the-gatekeeper-admission-webhook-using---exempt-namespace-flag",level:2},{value:"Difference between exclusion using config resource and <code>--exempt-namespace</code> flag",id:"difference-between-exclusion-using-config-resource-and---exempt-namespace-flag",level:2}],u={toc:m};function g(e){var n=e.components,a=(0,r.A)(e,s);return(0,o.yg)("wrapper",(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Feature State"),": The ",(0,o.yg)("inlineCode",{parentName:"p"},"Config")," resource is currently alpha."),(0,o.yg)("h2",{id:"exempting-namespaces-from-gatekeeper-using-config-resource"},"Exempting Namespaces from Gatekeeper using config resource"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},'The "Config" resource must be named ',(0,o.yg)("inlineCode",{parentName:"p"},"config")," for it to be reconciled by Gatekeeper. Gatekeeper will ignore the resource if you do not name it ",(0,o.yg)("inlineCode",{parentName:"p"},"config"),".")),(0,o.yg)("p",null,"The config resource can be used as follows to exclude namespaces from certain processes for all constraints in the cluster. An asterisk can be used for wildcard matching (e.g. ",(0,o.yg)("inlineCode",{parentName:"p"},"kube-*"),"). To exclude namespaces at a constraint level, use ",(0,o.yg)("inlineCode",{parentName:"p"},"excludedNamespaces")," in the ",(0,o.yg)("a",{parentName:"p",href:"/gatekeeper/website/docs/v3.12.x/howto#constraints"},"constraint")," instead."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: config.gatekeeper.sh/v1alpha1\nkind: Config\nmetadata:\n  name: config\n  namespace: "gatekeeper-system"\nspec:\n  match:\n    - excludedNamespaces: ["kube-*", "my-namespace"]\n      processes: ["*"]\n    - excludedNamespaces: ["audit-excluded-ns"]\n      processes: ["audit"]\n    - excludedNamespaces: ["audit-webhook-sync-excluded-ns"]\n      processes: ["audit", "webhook", "sync"]\n    - excludedNamespaces: ["mutation-excluded-ns"]\n      processes: ["mutation-webhook"]\n...\n')),(0,o.yg)("p",null,"Available processes:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"audit")," process exclusion will exclude resources from specified namespace(s) in audit results."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"webhook")," process exclusion will exclude resources from specified namespace(s) from the admission webhook."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"sync")," process exclusion will exclude resources from specified namespace(s) from being synced into OPA."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mutation-webhook")," process exclusion will exclude resources from specified namespace(s) from the mutation webhook."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"*")," includes all current processes above and includes any future processes.")),(0,o.yg)("h2",{id:"exempting-namespaces-from-the-gatekeeper-admission-webhook-using---exempt-namespace-flag"},"Exempting Namespaces from the Gatekeeper Admission Webhook using ",(0,o.yg)("inlineCode",{parentName:"h2"},"--exempt-namespace")," flag"),(0,o.yg)("p",null,"Note that the following only exempts resources from the admission webhook. They will still be audited. Editing individual constraints or ",(0,o.yg)("a",{parentName:"p",href:"#exempting-namespaces-from-gatekeeper-using-config-resource"},"config resource")," is\nnecessary to exclude them from audit."),(0,o.yg)("p",null,"If it becomes necessary to exempt a namespace from Gatekeeper webhook entirely (e.g. you want ",(0,o.yg)("inlineCode",{parentName:"p"},"kube-system")," to bypass admission checks), here's how to do it:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Make sure the validating admission webhook configuration for Gatekeeper has the following namespace selector:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"  namespaceSelector:\n    matchExpressions:\n    - key: admission.gatekeeper.sh/ignore\n      operator: DoesNotExist\n")),(0,o.yg)("p",{parentName:"li"},"the default Gatekeeper manifest should already have added this. The default name for the\nwebhook configuration is ",(0,o.yg)("inlineCode",{parentName:"p"},"gatekeeper-validating-webhook-configuration")," and the default\nname for the webhook that needs the namespace selector is ",(0,o.yg)("inlineCode",{parentName:"p"},"validation.gatekeeper.sh"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Tell Gatekeeper it's okay for the namespace to be ignored by adding a flag to the pod:\n",(0,o.yg)("inlineCode",{parentName:"p"},"--exempt-namespace=<NAMESPACE NAME>"),". This step is necessary because otherwise the\npermission to modify a namespace would be equivalent to the permission to exempt everything\nin that namespace from policy checks. This way a user must explicitly have permissions\nto configure the Gatekeeper pod before they can add exemptions."),(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"In order to add the ",(0,o.yg)("inlineCode",{parentName:"p"},"admission.gatekeeper.sh/ignore")," label to a namespace, that namespace must be listed under the gatekeeper ",(0,o.yg)("inlineCode",{parentName:"p"},"controllerManager.exemptNamespaces")," ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/blob/master/charts/gatekeeper/README.md#parameters"},"parameter")," when installing via Helm."))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Add the ",(0,o.yg)("inlineCode",{parentName:"p"},"admission.gatekeeper.sh/ignore")," label to the namespace. The value attached\nto the label is ignored, so it can be used to annotate the reason for the exemption."))),(0,o.yg)("p",null,"Similarly, you can also enable the exemption of entire groups of namespaces using the ",(0,o.yg)("inlineCode",{parentName:"p"},"--exempt-namespace-prefix")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"--exempt-namespace-suffix")," flags. Using these flags allows the ",(0,o.yg)("inlineCode",{parentName:"p"},"admission.gatekeeper.sh/ignore")," label to be added to any namespace that matches the supplied prefix or suffix."),(0,o.yg)("h2",{id:"difference-between-exclusion-using-config-resource-and---exempt-namespace-flag"},"Difference between exclusion using config resource and ",(0,o.yg)("inlineCode",{parentName:"h2"},"--exempt-namespace")," flag"),(0,o.yg)("p",null,"The difference is at what point in the admission process an exemption occurs."),(0,o.yg)("p",null,"If you use ",(0,o.yg)("inlineCode",{parentName:"p"},"--exempt-namespace")," flag and ",(0,o.yg)("inlineCode",{parentName:"p"},"admission.gatekeeper.sh/ignore")," label, Gatekeeper's webhook will not be called by the API server for any resource in that namespace. That means that Gatekeeper being down should have no effect on requests for that namespace."),(0,o.yg)("p",null,"If you use the config method, Gatekeeper itself evaluates the exemption. The benefit there is that we have more control over the syntax and can be more fine-grained, but it also means that the API server is still calling the webhook, which means downtime can have an impact."))}g.isMDXComponent=!0}}]);