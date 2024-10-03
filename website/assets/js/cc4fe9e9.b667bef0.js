"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8871],{15680:(e,t,i)=>{i.d(t,{xA:()=>u,yg:()=>c});var n=i(96540);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=p(i),c=a,m=g["".concat(l,".").concat(c)]||g[c]||d[c]||r;return i?n.createElement(m,o(o({ref:t},u),{},{components:i})):n.createElement(m,o({ref:t},u))}));function c(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},63736:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=i(58168),a=i(98587),r=(i(96540),i(15680)),o=["components"],s={id:"operations",title:"Operations"},l=void 0,p={unversionedId:"operations",id:"version-v3.7.x/operations",title:"Operations",description:"Gatekeeper is flexible in how it can be deployed. If desired, core pieces of functionality can be broken",source:"@site/versioned_docs/version-v3.7.x/operations.md",sourceDirName:".",slug:"/operations",permalink:"/gatekeeper/website/docs/v3.7.x/operations",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.7.x/operations.md",tags:[],version:"v3.7.x",frontMatter:{id:"operations",title:"Operations"},sidebar:"version-v3.7.x/docs",previous:{title:"Working with Workload Resources",permalink:"/gatekeeper/website/docs/v3.7.x/workload-resources"},next:{title:"OPA Versions",permalink:"/gatekeeper/website/docs/v3.7.x/opa-versions"}},u={},d=[{value:"Validating Webhook",id:"validating-webhook",level:2},{value:"Required Behaviors",id:"required-behaviors",level:3},{value:"Permissions Required",id:"permissions-required",level:3},{value:"Mutating Webhook",id:"mutating-webhook",level:2},{value:"Required Behaviors",id:"required-behaviors-1",level:3},{value:"Permissions Required",id:"permissions-required-1",level:3},{value:"Audit",id:"audit",level:2},{value:"Required Behaviors",id:"required-behaviors-2",level:3},{value:"Permissions Required",id:"permissions-required-2",level:3},{value:"Status",id:"status",level:2},{value:"Required Behaviors",id:"required-behaviors-3",level:3},{value:"Permissions Required",id:"permissions-required-3",level:3},{value:"Mutation Status",id:"mutation-status",level:2},{value:"Required Behaviors",id:"required-behaviors-4",level:3},{value:"Permissions Required",id:"permissions-required-4",level:3}],g={toc:d};function c(e){var t=e.components,i=(0,a.A)(e,o);return(0,r.yg)("wrapper",(0,n.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Gatekeeper is flexible in how it can be deployed. If desired, core pieces of functionality can be broken\nout to be run in different pods. This allows Gatekeeper to accommodate needs like running in a monolithic pod\nin order to avoid overhead, or running each operation in a separate pod to make scaling individual operations\neasier and to limit the impact of operational issues with any one operation (e.g. if audit is running in its\nown pod, audit running out of memory will not affect the validation webhook)."),(0,r.yg)("p",null,"Gatekeeper achieves this through the concept of ",(0,r.yg)("inlineCode",{parentName:"p"},"Operations"),", which can be enabled via the ",(0,r.yg)("inlineCode",{parentName:"p"},"--operation"),"\ncommand line flag. To enable multiple operations this flag can be defined multiple times. If no ",(0,r.yg)("inlineCode",{parentName:"p"},"--operation"),"\nflag is provided, all functionality will be enabled by default."),(0,r.yg)("h1",{id:"operations"},"Operations"),(0,r.yg)("p",null,"Below are the operations Gatekeeper supports"),(0,r.yg)("h2",{id:"validating-webhook"},"Validating Webhook"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"--operation key:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"webhook")),(0,r.yg)("p",null,"This operation serves the validating webhook that Kubernetes' API server calls as part of the admission process."),(0,r.yg)("h3",{id:"required-behaviors"},"Required Behaviors"),(0,r.yg)("p",null,"At a high level, this requires:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Ingesting constraint templates"),(0,r.yg)("li",{parentName:"ul"},"Creating CRDs for a corresponding constraint template"),(0,r.yg)("li",{parentName:"ul"},"Ingesting constraints"),(0,r.yg)("li",{parentName:"ul"},"Reporting the status of ingested constraints/templates"),(0,r.yg)("li",{parentName:"ul"},"Watching and syncing resources specified by the ",(0,r.yg)("inlineCode",{parentName:"li"},"Config")," resource to support referential constraints"),(0,r.yg)("li",{parentName:"ul"},"Running the HTTP validating webhook service",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"In addition to validating incoming requests against policy, this webhook also validates incoming Gatekeeper resources"))),(0,r.yg)("li",{parentName:"ul"},"Running the namespace label validating webhook service (required to lock down namespaceSelector-type webhook exemptions)")),(0,r.yg)("h3",{id:"permissions-required"},"Permissions Required"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The ability to read all ",(0,r.yg)("inlineCode",{parentName:"li"},"ConstraintTemplate")," objects"),(0,r.yg)("li",{parentName:"ul"},"The ability to create CRDs (unfortunately RBAC doesn't have the syntax to scope this down to just CRDs in the ",(0,r.yg)("inlineCode",{parentName:"li"},"constraints.gatekeeper.sh")," group)"),(0,r.yg)("li",{parentName:"ul"},"The ability to read all ",(0,r.yg)("inlineCode",{parentName:"li"},"Constraint")," resources (members of the group ",(0,r.yg)("inlineCode",{parentName:"li"},"constraints.gatekeeper.sh"),")"),(0,r.yg)("li",{parentName:"ul"},"The ability to create ",(0,r.yg)("inlineCode",{parentName:"li"},"ConstraintTemplatePodStatus")," objects in Gatekeeper's namespace"),(0,r.yg)("li",{parentName:"ul"},"The ability to create ",(0,r.yg)("inlineCode",{parentName:"li"},"ConstraintPodStatus")," objects in Gatekeeper's namespace"),(0,r.yg)("li",{parentName:"ul"},"The ability to write to the ",(0,r.yg)("inlineCode",{parentName:"li"},"Config")," object in Gatekeeper's namespace"),(0,r.yg)("li",{parentName:"ul"},"The ability to read all objects (optionally this can be scoped down to resources listed for syncing in the ",(0,r.yg)("inlineCode",{parentName:"li"},"Config"),")"),(0,r.yg)("li",{parentName:"ul"},"If certificates are managed by Gatekeeper's embedded cert controller (which can be disabled), then Gatekeeper will need\nwrite permissions to its ",(0,r.yg)("inlineCode",{parentName:"li"},"ValidatingWebhookConfiguration"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"It will also need the ability to write to the webhook secret in Gatekeeper's namespace"))),(0,r.yg)("li",{parentName:"ul"},"If you have events enabled, you will need permissions to create events in Gatekeeper's namespace")),(0,r.yg)("h2",{id:"mutating-webhook"},"Mutating Webhook"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"--operation key:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"mutation-webhook")),(0,r.yg)("p",null,"This operation serves the mutating webhook that Kubernetes' API server calls as part of the admission process."),(0,r.yg)("h3",{id:"required-behaviors-1"},"Required Behaviors"),(0,r.yg)("p",null,"At a high level, this requires:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Ingesting Mutator objects"),(0,r.yg)("li",{parentName:"ul"},"Reporting the status of ingested mutator objects"),(0,r.yg)("li",{parentName:"ul"},"Running the HTTP mutating webhook service")),(0,r.yg)("h3",{id:"permissions-required-1"},"Permissions Required"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The ability to read all objects in the group ",(0,r.yg)("inlineCode",{parentName:"li"},"mutations.gatekeeper.sh")," (mutators)"),(0,r.yg)("li",{parentName:"ul"},"The ability to create ",(0,r.yg)("inlineCode",{parentName:"li"},"MutatorPodStatus")," objects in Gatekeeper's namespace"),(0,r.yg)("li",{parentName:"ul"},"If certificates are managed by Gatekeeper's embedded cert controller (which can be disabled), then Gatekeeper will need\nwrite permissions to its ",(0,r.yg)("inlineCode",{parentName:"li"},"MutatingWebhookConfiguration"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"It will also need the ability to write to the webhook secret in Gatekeeper's namespace")))),(0,r.yg)("h2",{id:"audit"},"Audit"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"--operation key:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"audit")),(0,r.yg)("p",null,"This operation runs the audit process, which periodically evaluates existing resources against policy, reporting\nany violations it discovers. To limit traffic to the API server and to avoid contention writing audit results\nto constraints, audit should run as a singleton pod."),(0,r.yg)("h3",{id:"required-behaviors-2"},"Required Behaviors"),(0,r.yg)("p",null,"At a high level, this requires:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Listing all objects on the cluster to scan them for violations"),(0,r.yg)("li",{parentName:"ul"},"Ingesting constraint templates"),(0,r.yg)("li",{parentName:"ul"},"Creating CRDs for a corresponding constraint template"),(0,r.yg)("li",{parentName:"ul"},"Ingesting constraints"),(0,r.yg)("li",{parentName:"ul"},"Reporting the status of ingested constraints/templates"),(0,r.yg)("li",{parentName:"ul"},"Watching and syncing resources specified by the ",(0,r.yg)("inlineCode",{parentName:"li"},"Config")," resource to support referential constraints"),(0,r.yg)("li",{parentName:"ul"},"Writing audit results back to constraints (subject to a cap on # of results per constraint)")),(0,r.yg)("h3",{id:"permissions-required-2"},"Permissions Required"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The ability to read all objects in the cluster (this can be scoped down if you are not interested in auditing/syncing all objects)"),(0,r.yg)("li",{parentName:"ul"},"The ability to read all ",(0,r.yg)("inlineCode",{parentName:"li"},"ConstraintTemplate")," objects"),(0,r.yg)("li",{parentName:"ul"},"The ability to create CRDs (unfortunately RBAC doesn't have the syntax to scope this down to just CRDs in the ",(0,r.yg)("inlineCode",{parentName:"li"},"constraints.gatekeeper.sh")," group)"),(0,r.yg)("li",{parentName:"ul"},"The ability to write to all ",(0,r.yg)("inlineCode",{parentName:"li"},"Constraint")," resources (members of the group ",(0,r.yg)("inlineCode",{parentName:"li"},"constraints.gatekeeper.sh"),")"),(0,r.yg)("li",{parentName:"ul"},"The ability to create ",(0,r.yg)("inlineCode",{parentName:"li"},"ConstraintTemplatePodStatus")," objects in Gatekeeper's namespace"),(0,r.yg)("li",{parentName:"ul"},"The ability to create ",(0,r.yg)("inlineCode",{parentName:"li"},"ConstraintPodStatus")," objects in Gatekeeper's namespace"),(0,r.yg)("li",{parentName:"ul"},"The ability to write to the ",(0,r.yg)("inlineCode",{parentName:"li"},"Config")," object in Gatekeeper's namespace"),(0,r.yg)("li",{parentName:"ul"},"If you have events enabled, you will need permissions to create events in Gatekeeper's namespace")),(0,r.yg)("h2",{id:"status"},"Status"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"--operation key:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"status")),(0,r.yg)("p",null,"Gatekeeper uses an emergent consensus model, where individual pods do not need to talk with each other\nin order to provide its functionality. This allows for scalability, but means we should not write status\nto resources directly due to the risk of write contention, which could increase network traffic exponentially\nrelative to the number of pods. Instead, each pod gets its own, private status resource that it alone writes\nto. The Status operation aggregates these status resources and writes them to the status field of the appropriate\nobject for the user to consume. Without this operation, the ",(0,r.yg)("inlineCode",{parentName:"p"},"status")," field of constraints and constraint templates\nwould be blank."),(0,r.yg)("p",null,"In order to do its job (eliminating write contention) effectively, the Status operation should be run as a\nsingleton."),(0,r.yg)("h3",{id:"required-behaviors-3"},"Required Behaviors"),(0,r.yg)("p",null,"At a high level, this requires:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Reading the Constraint","[Template]","PodStatus resources"),(0,r.yg)("li",{parentName:"ul"},"Writing aggregated results to the ",(0,r.yg)("inlineCode",{parentName:"li"},"status")," fields of constraints/templates")),(0,r.yg)("h3",{id:"permissions-required-3"},"Permissions Required"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The ability to write to all ",(0,r.yg)("inlineCode",{parentName:"li"},"ConstraintTemplate")," objects"),(0,r.yg)("li",{parentName:"ul"},"The ability to write to all ",(0,r.yg)("inlineCode",{parentName:"li"},"Constraint")," resources (members of the group ",(0,r.yg)("inlineCode",{parentName:"li"},"constraints.gatekeeper.sh"),")"),(0,r.yg)("li",{parentName:"ul"},"The ability to read ",(0,r.yg)("inlineCode",{parentName:"li"},"ConstraintTemplatePodStatus")," objects in Gatekeeper's namespace"),(0,r.yg)("li",{parentName:"ul"},"The ability to read ",(0,r.yg)("inlineCode",{parentName:"li"},"ConstraintPodStatus")," objects in Gatekeeper's namespace")),(0,r.yg)("h2",{id:"mutation-status"},"Mutation Status"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"--operation key:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"mutation-status")),(0,r.yg)("p",null,"Because users may not want to install mutation CRDs if they do not want to use the feature, and because\ntrying to watch a Kind that doesn't exist would cause errors, Gatekeeper splits mutation status into a\nseparate operation. It behaves like the Status operation, except it only applies for mutation resources."),(0,r.yg)("h3",{id:"required-behaviors-4"},"Required Behaviors"),(0,r.yg)("p",null,"At a high level, this requires:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Reading mutator pod status resources"),(0,r.yg)("li",{parentName:"ul"},"Writing aggregated results to the ",(0,r.yg)("inlineCode",{parentName:"li"},"status")," fields of mutators")),(0,r.yg)("h3",{id:"permissions-required-4"},"Permissions Required"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The ability to write to all objects in the group ",(0,r.yg)("inlineCode",{parentName:"li"},"mutations.gatekeeper.sh")," (mutators)"),(0,r.yg)("li",{parentName:"ul"},"The ability to read ",(0,r.yg)("inlineCode",{parentName:"li"},"MutatorPodStatus")," objects in Gatekeeper's namespace")),(0,r.yg)("h1",{id:"a-note-on-permissions"},"A Note on Permissions"),(0,r.yg)("p",null,'"Create" implies the ',(0,r.yg)("inlineCode",{parentName:"p"},"create")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"delete"),' permissions in addition to the permissions implied by "Read" and "Write".'),(0,r.yg)("p",null,'"Write" implies the ',(0,r.yg)("inlineCode",{parentName:"p"},"update"),' permission in addition to the permissions implied by "Read".'),(0,r.yg)("p",null,'"Read" implies the ',(0,r.yg)("inlineCode",{parentName:"p"},"get"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"list"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"watch")," permissions. In some cases, like scraping audit results,\n",(0,r.yg)("inlineCode",{parentName:"p"},"watch")," is unnecessary, but does not substantially increase the power delegated to the service account\nunder the theory that a ",(0,r.yg)("inlineCode",{parentName:"p"},"watch")," is simply a more efficient version of polling ",(0,r.yg)("inlineCode",{parentName:"p"},"list"),"."))}c.isMDXComponent=!0}}]);