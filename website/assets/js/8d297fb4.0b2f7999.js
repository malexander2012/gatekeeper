"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2474],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=i,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,r(r({ref:t},d),{},{components:a})):n.createElement(k,r({ref:t},d))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7102:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=a(7462),i=a(3366),l=(a(7294),a(3905)),r=["components"],o={id:"validating-admission-policy",title:"Integration with Kubernetes Validating Admission Policy"},s=void 0,p={unversionedId:"validating-admission-policy",id:"validating-admission-policy",title:"Integration with Kubernetes Validating Admission Policy",description:"Feature State: Gatekeeper version v3.16 (alpha)",source:"@site/docs/validating-admission-policy.md",sourceDirName:".",slug:"/validating-admission-policy",permalink:"/gatekeeper/website/docs/next/validating-admission-policy",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/docs/validating-admission-policy.md",tags:[],version:"current",frontMatter:{id:"validating-admission-policy",title:"Integration with Kubernetes Validating Admission Policy"},sidebar:"docs",previous:{title:"Consuming violations using Pubsub",permalink:"/gatekeeper/website/docs/next/pubsub"},next:{title:"Operations",permalink:"/gatekeeper/website/docs/next/operations"}},d={},u=[{value:"Description",id:"description",level:2},{value:"Motivations",id:"motivations",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Get started",id:"get-started",level:2},{value:"Option 1: Install with Helm",id:"option-1-install-with-helm",level:3},{value:"Option 2: Install with Gatekeeper deployment",id:"option-2-install-with-gatekeeper-deployment",level:3},{value:"Policy updates to add CEL",id:"policy-updates-to-add-cel",level:2},{value:"Policy updates to generate Validating Admission Policy resources",id:"policy-updates-to-generate-validating-admission-policy-resources",level:2}],m={toc:u};function c(e){var t=e.components,a=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Feature State"),": Gatekeeper version v3.16 (alpha)"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u2757 This feature is alpha, subject to change (feedback is welcome!). It is disabled by default.")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"This feature allows Gatekeeper to integrate with Kubernetes Validating Admission Policy based on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/cel-spec"},"Common Expression Language (CEL)"),", a declarative, in-process admission control alternative to validating admission webhooks."),(0,l.kt)("h2",{id:"motivations"},"Motivations"),(0,l.kt)("p",null,"The Validating Admission Policy feature was introduced as an alpha feature to Kubernetes v1.26, beta in v1.28 (disabled by default), GA in v1.30 (enabled by default). Some of the benefits include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"in-tree/native in-process"),(0,l.kt)("li",{parentName:"ul"},"reduce admission request latency"),(0,l.kt)("li",{parentName:"ul"},"improve reliability and availability"),(0,l.kt)("li",{parentName:"ul"},"able to fail closed without impacting availability"),(0,l.kt)("li",{parentName:"ul"},"avoid the operational burden of webhooks")),(0,l.kt)("p",null,"To reduce policy fragmentation and simplify the user experience by standardizing the policy experience. We have created an abstraction layer that provides multi-language (e.g. Rego and CEL), multi-target policy enforcement to allow for portable policies and coexistence of numerous policy implementations."),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/frameworks/tree/master/constraint"},"Constraint Framework")," is the library that underlies Gatekeeper. It provides the execution flow Gatekeeper uses to render a decision to the API server. It also provides abstractions that allow us to define constraint templates and constraints: Engine, Enforcement Points, and Targets."),(0,l.kt)("p",null,"Together with Gatekeeper and ",(0,l.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/next/gator"},"gator CLI"),", you can get admission, audit, and shift left validations for policies written in both CEL and Rego policy languages, even for clusters that do not support Validating Admission Policy feature yet. For simple policies, you may want admission requests to be handled by the K8s built-in Validating Admission Controller (only supports CEL) instead of the Gatekeeper admission webhook. "),(0,l.kt)("p",null,"To summary, these are potential options when running Gatekeeper:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Policy Language(s)"),(0,l.kt)("th",{parentName:"tr",align:null},"Enforcement Point"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CEL, Rego"),(0,l.kt)("td",{parentName:"tr",align:null},"Gatekeeper validating webhook")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CEL, Rego"),(0,l.kt)("td",{parentName:"tr",align:null},"Gatekeeper Audit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CEL, Rego"),(0,l.kt)("td",{parentName:"tr",align:null},"Gator CLI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CEL"),(0,l.kt)("td",{parentName:"tr",align:null},"K8s built-in Validating Admission Controller (aka ValidatingAdmissionPolicy)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rego"),(0,l.kt)("td",{parentName:"tr",align:null},"Gatekeeper validating webhook (referential policies, external data)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rego"),(0,l.kt)("td",{parentName:"tr",align:null},"Gatekeeper Audit (referential policies, external data)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rego"),(0,l.kt)("td",{parentName:"tr",align:null},"Gator CLI (referential policies)")))),(0,l.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Requires minimum Gatekeeper v3.16.0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Requires minimum Kubernetes v1.30, when the ",(0,l.kt)("inlineCode",{parentName:"p"},"Validating Admission Policy")," feature GAed")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"[optional]"," Kubernetes version v1.29, need to enable feature gate and runtime config as shown below: "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nfeatureGates:\n  ValidatingAdmissionPolicy: true\nruntimeConfig:\n  admissionregistration.k8s.io/v1beta1: true\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Set ",(0,l.kt)("inlineCode",{parentName:"p"},"--experimental-enable-k8s-native-validation")," in Gatekeeper deployments, or ",(0,l.kt)("inlineCode",{parentName:"p"},"enableK8sNativeValidation=true")," if using Helm."))),(0,l.kt)("h2",{id:"get-started"},"Get started"),(0,l.kt)("h3",{id:"option-1-install-with-helm"},"Option 1: Install with Helm"),(0,l.kt)("p",null,"Update the ",(0,l.kt)("inlineCode",{parentName:"p"},"enableK8sNativeValidation")," parameter in values.yaml or set during deployment"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Enable the K8s Native Validating driver to allow users to create CEL-based rules in addition to the OPA driver and rego rules (alpha feature). Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm install gatekeeper/gatekeeper --name-template=gatekeeper --namespace gatekeeper-system --create-namespace \\\n    --set enableK8sNativeValidation=true\n")),(0,l.kt)("h3",{id:"option-2-install-with-gatekeeper-deployment"},"Option 2: Install with Gatekeeper deployment"),(0,l.kt)("p",null,"Edit the applicable deployments (",(0,l.kt)("inlineCode",{parentName:"p"},"controller-manager")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"audit"),"), and update the following commandline flags:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Set ",(0,l.kt)("inlineCode",{parentName:"li"},"--experimental-enable-k8s-native-validation=true"))),(0,l.kt)("h2",{id:"policy-updates-to-add-cel"},"Policy updates to add CEL"),(0,l.kt)("p",null,"To see how it works, check out this ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/tree/master/demo/k8s-validating-admission-policy"},"demo")),(0,l.kt)("p",null,"Example ",(0,l.kt)("inlineCode",{parentName:"p"},"K8sRequiredLabels")," constraint template using the ",(0,l.kt)("inlineCode",{parentName:"p"},"K8sNativeValidation")," engine and CEL expressions that requires resources to contain specified labels with values matching provided regular expressions. A similar policy written in Rego can be seen ",(0,l.kt)("a",{parentName:"p",href:"https://open-policy-agent.github.io/gatekeeper-library/website/validation/requiredlabels"},"here")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8srequiredlabels\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sRequiredLabels\n      validation:\n        # Schema for the `parameters` field\n        openAPIV3Schema:\n          type: object\n          properties:\n            message:\n              type: string\n            labels:\n              type: array\n              items:\n                type: object\n                properties:\n                  key:\n                    type: string\n                  allowedRegex:\n                    type: string\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      code:\n        - engine: K8sNativeValidation\n          source:\n            validations:\n            - expression: '[object, oldObject].exists(obj, obj != null && has(obj.metadata) && variables.params.labels.all(entry, has(obj.metadata.labels) && entry.key in obj.metadata.labels))'\n              messageExpression: '\"missing required label, requires all of: \" + variables.params.labels.map(entry, entry.key).join(\", \")'\n            - expression: '[object, oldObject].exists(obj, obj != null && !variables.params.labels.exists(entry, has(obj.metadata.labels) && entry.key in obj.metadata.labels && !string(obj.metadata.labels[entry.key]).matches(string(entry.allowedRegex))))'\n              message: \"regex mismatch\"\n        rego: |\n          ...\n")),(0,l.kt)("p",null,"With this new engine and source added to the constraint template, now Gatekeeper webhook, audit, and shift-left can validate resources with these new CEL-based rules. "),(0,l.kt)("h2",{id:"policy-updates-to-generate-validating-admission-policy-resources"},"Policy updates to generate Validating Admission Policy resources"),(0,l.kt)("p",null,"For some policies, you may want admission requests to be handled by the K8s Validating Admission Controller instead of the Gatekeeper admission webhook. By default, Gatekeeper is configured to generate K8s Validating Admission Policy resources if the ",(0,l.kt)("inlineCode",{parentName:"p"},"gatekeeper.sh/use-vap")," label is used. In the event K8s Validating Admission Controller fails open, then Gatekeeper admission webhook can act as a backup. Default value for this feature flag is ",(0,l.kt)("inlineCode",{parentName:"p"},"--vap-enforcement=GATEKEEPER_DEFAULT"),". "),(0,l.kt)("p",null,"Other allowed values are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NONE"),": do not generate"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GATEKEEPER_DEFAULT"),": do not generate unless label ",(0,l.kt)("inlineCode",{parentName:"li"},"gatekeeper.sh/use-vap: yes")," is added to policy explicitly"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"VAP_DEFAULT"),": generate unless label ",(0,l.kt)("inlineCode",{parentName:"li"},"gatekeeper.sh/use-vap: no")," is added to policy explicitly")),(0,l.kt)("p",null,"To explicitly enable Gatekeeper to generate K8s Validating Admission Policy resources at the constraint template level, add the following label to the constraint template resource:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'labels:\n  "gatekeeper.sh/use-vap": "yes"\n')),(0,l.kt)("p",null,"By default, constraints will inherit the same behavior as the constraint template. However this behavior can be overriden by adding the following label to the constraint resource:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'labels:\n  "gatekeeper.sh/use-vap": "no"\n')))}c.isMDXComponent=!0}}]);