"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7369],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=n(58168),a=n(98587),r=(n(96540),n(15680)),i=["components"],s={id:"workload-resources",title:"Working with Workload Resources"},l=void 0,c={unversionedId:"workload-resources",id:"version-v3.17.x/workload-resources",title:"Working with Workload Resources",description:"Workload Validation",source:"@site/versioned_docs/version-v3.17.x/workload-resources.md",sourceDirName:".",slug:"/workload-resources",permalink:"/gatekeeper/website/docs/workload-resources",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.17.x/workload-resources.md",tags:[],version:"v3.17.x",frontMatter:{id:"workload-resources",title:"Working with Workload Resources"},sidebar:"docs",previous:{title:"The gator CLI",permalink:"/gatekeeper/website/docs/gator"},next:{title:"Consuming violations using Pubsub",permalink:"/gatekeeper/website/docs/pubsub"}},p={},d=[{value:"Workload Validation",id:"workload-validation",level:2},{value:"Example",id:"example",level:3},{value:"Workload Mutation",id:"workload-mutation",level:2}],u={toc:d};function g(e){var t=e.components,n=(0,a.A)(e,i);return(0,r.yg)("wrapper",(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"workload-validation"},"Workload Validation"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/"},"Workload resources")," are Kubernetes resources like Deployments or DaemonSets that create Pods by-way-of a controller. Because many Gatekeeper validation policies are written to enforce against Pods, like those found in the ",(0,r.yg)("a",{parentName:"p",href:"https://www.github.com/open-policy-agent/gatekeeper-library"},"Gatekeeper policy library"),", it is important to recognize that Gatekeeper Pod violation messages will not be directly reported to the user when using the library as those Pods are created from workload resources."),(0,r.yg)("p",null,"To reject workload resources that can create a resource that violates a constraint, checkout the ",(0,r.yg)("a",{parentName:"p",href:"/gatekeeper/website/docs/expansion"},"Validation of Workload Resources")," feature available in Gatekeeper v3.10+."),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sPSPPrivilegedContainer\nmetadata:\n  name: psp-privileged-container\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n')),(0,r.yg)("p",null,"The above constraint matches on Pods that pass through the Gatekeeper admission controller. If you create a Deployment with the following PodTemplateSpec, then the Deployment itself will not be blocked, even though the containers in the Deployment violate the constraint."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: i-wont-be-blocked\n  name: i-wont-be-blocked\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: i-wont-be-blocked\n  template:\n    metadata:\n      labels:\n        app: i-wont-be-blocked\n    spec:\n      containers:\n      - image: nginx\n        name: nginx\n        securityContext:\n          privileged: true\n")),(0,r.yg)("p",null,"Instead, the Pods that are created from the Deployment will be blocked, and the Gatekeeper denial messages will be found in the workload object responsible for creating the Pods (in this case, the ReplicaSet created by the Deployment). The denial message will eventually make its way into the Deployment's status as well."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'status:\n  conditions:\n  - message: \'admission webhook "validation.gatekeeper.sh" denied the request: [psp-privileged-container]\n      Privileged container is not allowed: nginx, securityContext: {"privileged":true}\'\n')),(0,r.yg)("p",null,"Gatekeeper violation messages within statuses can be retrieved using a ",(0,r.yg)("inlineCode",{parentName:"p"},"kubectl")," command like the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get replicaset i-wont-be-blocked-755547df65 -o jsonpath=\'{ .status.conditions[].message }\'\nadmission webhook "validation.gatekeeper.sh" denied the request: [psp-privileged-container] Privileged container is not allowed: nginx, securityContext: {"privileged": true}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get deploy i-wont-be-blocked -o jsonpath=\'{ .status.conditions[*].message }\'\nDeployment does not have minimum availability. admission webhook "validation.gatekeeper.sh" denied the request: [psp-privileged-container] Privileged container is not allowed: nginx, securityContext: {"privileged": true} ReplicaSet "i-wont-be-blocked-755547df65" has timed out progressing.\n')),(0,r.yg)("p",null,'Note that adding workload objects to the "kinds" list in the ',(0,r.yg)("a",{parentName:"p",href:"https://www.github.com/open-policy-agent/gatekeeper-library"},"Gatekeeper policy library constraints")," will not block and alert on workload resources. This is because most of the source Rego code for the library constraints match on the ",(0,r.yg)("inlineCode",{parentName:"p"},"spec.containers[_]")," field instead of the ",(0,r.yg)("inlineCode",{parentName:"p"},"spec.template.spec.containers[_]")," field that is often the format used by the PodTemplateSpec in workload resources."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"input_containers[c] { \n  c := input.review.object.spec.containers[_] \n} \ninput_containers[c] { \n  c := input.review.object.spec.initContainers[_] \n} \n")),(0,r.yg)("h2",{id:"workload-mutation"},"Workload Mutation"),(0,r.yg)("p",null,"Similar to Gatekeeper validation policies, Gatekeeper mutation policies can act on individual Pods or the workload resources that generate those Pods. Mutations on workload resource PodTemplateSpecs will implicitly mutate the Pods that are generated by that workload resource. In contrast, mutations on individual Pods will not bubble up to the parent workload resource's PodTemplateSpec."),(0,r.yg)("p",null,"Use the ",(0,r.yg)("a",{parentName:"p",href:"/gatekeeper/website/docs/mutation#extent-of-changes"},"extent of changes")," section in mutation policies to granularly specify the scope of a mutation."))}g.isMDXComponent=!0}}]);