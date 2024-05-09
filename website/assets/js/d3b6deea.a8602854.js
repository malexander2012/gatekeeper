"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[917],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return t?a.createElement(h,r(r({ref:n},d),{},{components:t})):a.createElement(h,r({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},90261:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=t(87462),o=t(63366),i=(t(67294),t(3905)),r=["components"],s={id:"expansion",title:"Validating Workload Resources using ExpansionTemplate"},l=void 0,p={unversionedId:"expansion",id:"expansion",title:"Validating Workload Resources using ExpansionTemplate",description:"Feature State: Gatekeeper version v3.10+ (alpha), version 3.13+ (beta)",source:"@site/docs/expansion.md",sourceDirName:".",slug:"/expansion",permalink:"/gatekeeper/website/docs/next/expansion",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/docs/expansion.md",tags:[],version:"current",frontMatter:{id:"expansion",title:"Validating Workload Resources using ExpansionTemplate"},sidebar:"docs",previous:{title:"External Data",permalink:"/gatekeeper/website/docs/next/externaldata"},next:{title:"The gator CLI",permalink:"/gatekeeper/website/docs/next/gator"}},d={},c=[{value:"Motivation",id:"motivation",level:2},{value:"<code>ExpansionTemplate</code> explained",id:"expansiontemplate-explained",level:2},{value:"Limitations",id:"limitations",level:3},{value:"Sidecars and Mutators",id:"sidecars-and-mutators",level:4},{value:"Unknown Data",id:"unknown-data",level:4},{value:"Configuring Expansion",id:"configuring-expansion",level:2},{value:"Match Source",id:"match-source",level:4},{value:"Mutating Example",id:"mutating-example",level:2}],u={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Feature State:")," Gatekeeper version v3.10+ (alpha), version 3.13+ (beta)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u2757This feature is in ",(0,i.kt)("em",{parentName:"p"},"beta")," stage. It is enabled by default. To disable the feature,\nset the ",(0,i.kt)("inlineCode",{parentName:"p"},"enable-generator-resource-expansion")," flag to false.")),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"A workload resource is a resource that creates other resources, such as a\n",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment")," or ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/job/"},"Job"),". Gatekeeper can be configured to reject workload resources\nthat create a resource that violates a constraint."),(0,i.kt)("h2",{id:"expansiontemplate-explained"},(0,i.kt)("inlineCode",{parentName:"h2"},"ExpansionTemplate")," explained"),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpansionTemplate")," is a custom resource that Gatekeeper will use to create temporary, fake resources and validate the constraints against them. We refer to these resources that Gatekeeper creates for validation purposes as ",(0,i.kt)("inlineCode",{parentName:"p"},"expanded resources"),". We refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment")," or other workload resource as the ",(0,i.kt)("inlineCode",{parentName:"p"},"parent resource")," and the act of creating those ",(0,i.kt)("inlineCode",{parentName:"p"},"expanded")," resources as ",(0,i.kt)("inlineCode",{parentName:"p"},"expansion"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpansionTemplate")," custom resource specifies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Which workload resource(s) should be expanded, specified by their GVK"),(0,i.kt)("li",{parentName:"ul"},"The GVK of the expanded resources"),(0,i.kt)("li",{parentName:"ul"},'The "source" as defined in the field ',(0,i.kt)("inlineCode",{parentName:"li"},"templateSource")," on the ",(0,i.kt)("inlineCode",{parentName:"li"},"parent resource"),", which is used as the blueprint for the expanded resource. For example, in a case where a\n",(0,i.kt)("inlineCode",{parentName:"li"},"Deployment")," expands into a ",(0,i.kt)("inlineCode",{parentName:"li"},"Pod"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"spec.template")," would typically be the\nsource."),(0,i.kt)("li",{parentName:"ul"},"Optionally, an ",(0,i.kt)("inlineCode",{parentName:"li"},"enforcementAction")," override can be used when validating expanded\nresources. If this field is set, any violations against the expanded resource\nwill use this enforcement action. If an enforcement action is not specified by\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"ExpansionTemplate"),", the enforcement action set by the Constraint in\nviolation will be used.")),(0,i.kt)("p",null,"Here is an example of a ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpansionTemplate")," that specifies that ",(0,i.kt)("inlineCode",{parentName:"p"},"DaemonSet"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Job"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ReplicaSet"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ReplicationController"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"StatefulSet"),"\nresources should be expanded into a ",(0,i.kt)("inlineCode",{parentName:"p"},"Pod"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: expansion.gatekeeper.sh/v1alpha1\nkind: ExpansionTemplate\nmetadata:\n  name: expand-deployments\nspec:\n  applyTo:\n    - groups: ["apps"]\n      kinds: ["DaemonSet", "Deployment", "ReplicaSet", "StatefulSet"]\n      versions: ["v1"]\n    - groups: [""]\n      kinds: ["ReplicationController"]\n      versions: ["v1"]\n    - groups: ["batch"]\n      kinds: ["Job"]\n      versions: ["v1"]\n  templateSource: "spec.template"\n  enforcementAction: "warn" # This will overwrite all constraint enforcement actions for the GVKs below that result from the GVKs above.\n  generatedGVK:\n    kind: "Pod"\n    group: ""\n    version: "v1"\n')),(0,i.kt)("p",null,"With this ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpansionTemplate"),", any constraints that are configured to target\n",(0,i.kt)("inlineCode",{parentName:"p"},"Pods")," will also be evaluated on the ",(0,i.kt)("inlineCode",{parentName:"p"},"expanded")," pods that Gatekeeper creates when a ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ReplicaSet")," is\nbeing reviewed. Any violations created against these expanded ",(0,i.kt)("inlineCode",{parentName:"p"},"Pod"),"s, and only these expanded ",(0,i.kt)("inlineCode",{parentName:"p"},"Pod"),"s, will have their\nenforcement action set to ",(0,i.kt)("inlineCode",{parentName:"p"},"warn"),", regardless of the enforcement actions\nspecified by the Constraint in violation."),(0,i.kt)("p",null,"To see how to use Mutators and Constraints to exclusively review expanded resources, see the ",(0,i.kt)("a",{parentName:"p",href:"#match-source"},"Match Source")," section below."),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("h4",{id:"sidecars-and-mutators"},"Sidecars and Mutators"),(0,i.kt)("p",null,"It may not always be possible to build an accurate representation of an\nexpanded resource by looking at the workload resource alone. For example, suppose a\ncluster is using ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/"},"Istio"),", which will inject a sidecar container on specific\nresources. This sidecar configuration is not specified in the config of the\nworkload resource (i.e. Deployment), but rather injected by Istio's webhook. In\norder to accurately represent expanded resources modified by controllers or\nwebhooks, Gatekeeper leverages its\n",(0,i.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/next/mutation"},"Mutations"),"\nfeature to allow expanded resources to be manipulated into their desired form. In\nthe Istio example, ",(0,i.kt)("inlineCode",{parentName:"p"},"Assign")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ModifySet")," mutators could be configured to\nmimic Istio sidecar injection. For further details on mutating expanded resources\nsee the ",(0,i.kt)("a",{parentName:"p",href:"#match-source"},"Match Source")," section below, or to see a working example,\nsee the ",(0,i.kt)("a",{parentName:"p",href:"#mutating-example"},"Mutating Example")," section."),(0,i.kt)("h4",{id:"unknown-data"},"Unknown Data"),(0,i.kt)("p",null,"Any resources configured for expansion will be expanded by both the validating\nwebhook and\n",(0,i.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/next/audit"},"Audit"),". This\nfeature will only be enabled if a user creates an ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpansionTemplate")," that\ntargets any resources that exist on the cluster."),(0,i.kt)("p",null,"Note that the accuracy of enforcement depends on how well the expanded resource\nresembles the real thing. Mutations can help with this, but 100% accuracy is\nimpossible because not all fields can be predicted. For instance, Deployments\ncreate pods with random names. Inaccurately expanded resources may lead to over- or under-\nenforcement. In the case of under-enforcement, the expanded pod should still be\nrejected. Finally, non-state-based policies (those that rely on transient\nmetadata such as requesting user or time of creation) cannot be enforced\naccurately. This is because such metadata would necessarily be different when\ncreating the expanded resource. For example, a Deployment is created using the\nrequesting user's account, but the pod creation request comes from the service\naccount of the Deployment controller."),(0,i.kt)("h2",{id:"configuring-expansion"},"Configuring Expansion"),(0,i.kt)("p",null,"Expansion behavior is configured through the ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpansionTemplate")," custom\nresource. Optionally, users can create ",(0,i.kt)("inlineCode",{parentName:"p"},"Mutation")," custom resources to customize\nhow resources are expanded. Mutators with the ",(0,i.kt)("inlineCode",{parentName:"p"},"source: Generated")," field will\nonly be applied when expanding workload resources, and will not mutate real\nresources on the cluster. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," field is not set, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Mutation")," will\napply to both expanded resources and real resources on the cluster."),(0,i.kt)("p",null,"Users can test their expansion configuration using the\n",(0,i.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/next/gator#the-gator-expand-subcommand"},(0,i.kt)("inlineCode",{parentName:"a"},"gator expand")," CLI"),"\n."),(0,i.kt)("h4",{id:"match-source"},"Match Source"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," field on the ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," API, present in the Mutation\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"Constraint")," kinds, specifies if the config should match Generated (\ni.e. fake) resources, Original resources, or both. The ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," field is\nan ",(0,i.kt)("inlineCode",{parentName:"p"},"enum")," which accepts the following values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Generated")," \u2013 the config will only apply to expanded resources, ",(0,i.kt)("strong",{parentName:"li"},"and will not\napply to any real resources on the cluster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Original")," \u2013 the config will only apply to Original resources, and will not\naffect expanded resources"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"All")," \u2013 the config will apply to both ",(0,i.kt)("inlineCode",{parentName:"li"},"Generated")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Original")," resources.\nThis is the default value.")),(0,i.kt)("p",null,"For example, suppose a cluster's ",(0,i.kt)("inlineCode",{parentName:"p"},"ReplicaSet")," controller adds a default value\nfor ",(0,i.kt)("inlineCode",{parentName:"p"},"fooField")," when creating Pods that cannot reasonably be added to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"ReplicaSet"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.template"),". If a constraint relies on these default values,\na user could create a Mutation custom resource that modifies expanded resources,\nlike so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: mutations.gatekeeper.sh/v1alpha1\nkind: Assign\nmetadata:\n  name: assign-foo-field\nspec:\n  applyTo:\n  - groups: [""]\n    kinds: ["Pod"]\n    versions: ["v1"]\n  location: "spec.containers[name: *].fooField"\n  parameters:\n    assign:\n      value: "Bar"\n  match:\n    source: "Generated"\n    scope: Cluster\n    kinds:\n      - apiGroups: []\n        kinds: []\n')),(0,i.kt)("p",null,"Similarly, ",(0,i.kt)("inlineCode",{parentName:"p"},"Constraints")," can be configured to only target fake resources by\nsetting the ",(0,i.kt)("inlineCode",{parentName:"p"},"Constraint"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.match.source")," field to ",(0,i.kt)("inlineCode",{parentName:"p"},"Generated"),". This can\nalso be used to define different enforcement actions for expanded resources and\noriginal resources."),(0,i.kt)("p",null,"For example, suppose a cluster has a policy that blocks all ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/overview/#naked-pods-vs-replicasets-deployments-and-jobs"},"standalone pods"),", but allows them to be created as part of a workload resource, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment"),". A user could create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Constraint")," that only targets original resources, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: block-standalone-pods\nmetadata:\n  name: block-standalone-pods\nspec:\n  match:\n    source: Original\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n')),(0,i.kt)("h2",{id:"mutating-example"},"Mutating Example"),(0,i.kt)("p",null,"Suppose a cluster is using Istio, and has a policy configured to ensure\nspecified Pods have an Istio sidecar. To validate Deployments that would create\nPods which Istio will inject a sidecar into, we need to use mutators to mimic\nthe sidecar injection."),(0,i.kt)("p",null,"What follows is an example of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an  ",(0,i.kt)("inlineCode",{parentName:"li"},"ExpansionTemplate")," configured to expand ",(0,i.kt)("inlineCode",{parentName:"li"},"Deployments")," into ",(0,i.kt)("inlineCode",{parentName:"li"},"Pods")),(0,i.kt)("li",{parentName:"ul"},"an ",(0,i.kt)("inlineCode",{parentName:"li"},"Assign")," mutator to add the Istio sidecar container to ",(0,i.kt)("inlineCode",{parentName:"li"},"Pods")),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("inlineCode",{parentName:"li"},"ModifySet")," mutator to add the ",(0,i.kt)("inlineCode",{parentName:"li"},"proxy")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"sidecar")," args"),(0,i.kt)("li",{parentName:"ul"},"an inbound ",(0,i.kt)("inlineCode",{parentName:"li"},"Deployment"),", and the expanded ",(0,i.kt)("inlineCode",{parentName:"li"},"Pod"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note that the Mutators set the ",(0,i.kt)("inlineCode",{parentName:"strong"},"source: Generated")," field, which will cause\nthem to only be applied when expanding resources specified\nby ",(0,i.kt)("inlineCode",{parentName:"strong"},"ExpansionTemplates"),". These Mutators will not affect any real resources on\nthe cluster.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: expansion.gatekeeper.sh/v1alpha1\nkind: ExpansionTemplate\nmetadata:\n  name: expand-deployments\nspec:\n  applyTo:\n    - groups: ["apps"]\n      kinds: ["Deployment"]\n      versions: ["v1"]\n  templateSource: "spec.template"\n  generatedGVK:\n    kind: "Pod"\n    group: ""\n    version: "v1"\n---\napiVersion: mutations.gatekeeper.sh/v1beta1\nkind: Assign\nmetadata:\n  name: add-sidecar\nspec:\n  applyTo:\n    - groups: [""]\n      kinds: ["Pod"]\n      versions: ["v1"]\n  match:\n    scope: Namespaced\n    source: All\n    kinds:\n      - apiGroups: ["*"]\n        kinds: ["Pod"]\n  location: "spec.containers[name:istio-proxy]"\n  parameters:\n    assign:\n      value:\n        name: "istio-proxy"\n        imagePullPolicy: IfNotPresent\n        image: docker.io/istio/proxyv2:1.15.0\n        ports:\n          - containerPort: 15090\n            name: http-envoy-prom\n            protocol: TCP\n        securityContext:\n          allowPrivilegeEscalation: false\n          capabilities:\n            drop:\n              - ALL\n---\napiVersion: mutations.gatekeeper.sh/v1beta1\nkind: ModifySet\nmetadata:\n  name: add-istio-args\nspec:\n  applyTo:\n    - groups: [""]\n      kinds: ["Pod"]\n      versions: ["v1"]\n  match:\n    source: All\n  location: "spec.containers[name:istio-proxy].args"\n  parameters:\n    operation: merge\n    values:\n      fromList:\n        - proxy\n        - sidecar\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80\n          args:\n            - "/bin/sh"\n')),(0,i.kt)("p",null,"When expanded, the above configs will produce the following ",(0,i.kt)("inlineCode",{parentName:"p"},"Pod"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    app: nginx\nspec:\n  containers:\n  - args:\n    - /bin/sh\n    image: nginx:1.14.2\n    name: nginx\n    ports:\n    - containerPort: 80\n  - args:\n    - proxy\n    - sidecar\n    image: docker.io/istio/proxyv2:1.15.0\n    imagePullPolicy: IfNotPresent\n    name: istio-proxy\n    ports:\n    - containerPort: 15090\n      name: http-envoy-prom\n      protocol: TCP\n    securityContext:\n      allowPrivilegeEscalation: false\n      capabilities:\n        drop:\n        - ALL\n")))}m.isMDXComponent=!0}}]);