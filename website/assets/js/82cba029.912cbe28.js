"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5426],{15680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>g});var t=n(96540);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=t.createContext({}),l=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=l(e.components);return t.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=l(n),g=i,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||r;return n?t.createElement(m,s(s({ref:a},u),{},{components:n})):t.createElement(m,s({ref:a},u))}));function g(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=c;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1644:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=n(58168),i=n(98587),r=(n(96540),n(15680)),s=["components"],o={id:"pubsub",title:"Consuming violations using Pubsub"},p=void 0,l={unversionedId:"pubsub",id:"version-v3.13.x/pubsub",title:"Consuming violations using Pubsub",description:"Feature State: Gatekeeper version v3.13+ (alpha)",source:"@site/versioned_docs/version-v3.13.x/pubsub.md",sourceDirName:".",slug:"/pubsub",permalink:"/gatekeeper/website/docs/v3.13.x/pubsub",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.13.x/pubsub.md",tags:[],version:"v3.13.x",frontMatter:{id:"pubsub",title:"Consuming violations using Pubsub"},sidebar:"docs",previous:{title:"Working with Workload Resources",permalink:"/gatekeeper/website/docs/v3.13.x/workload-resources"},next:{title:"Integration with Kubernetes Validating Admission Policy",permalink:"/gatekeeper/website/docs/v3.13.x/validating-admission-policy"}},u={},d=[{value:"Description",id:"description",level:2},{value:"Enabling Gatekeeper to export audit violations",id:"enabling-gatekeeper-to-export-audit-violations",level:2},{value:"Setting up audit with pubsub enabled",id:"setting-up-audit-with-pubsub-enabled",level:3},{value:"Available Pubsub drivers",id:"available-pubsub-drivers",level:4},{value:"Quick start with publishing violations using Dapr and Redis",id:"quick-start-with-publishing-violations-using-dapr-and-redis",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Configure a sample subscriber to receive violations",id:"configure-a-sample-subscriber-to-receive-violations",level:4},{value:"Configure Gatekeeper with Pubsub enabled",id:"configure-gatekeeper-with-pubsub-enabled",level:4},{value:"Violations",id:"violations",level:3}],c={toc:d};function g(e){var a=e.components,n=(0,i.A)(e,s);return(0,r.yg)("wrapper",(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Feature State"),": Gatekeeper version v3.13+ (alpha)"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u2757 This feature is alpha, subject to change (feedback is welcome!).")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"This feature pushes audit violations to a pubsub service. Users can subscribe to pubsub service to consume violations."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"To gain insights into different methods of obtaining audit violations and the respective trade-offs for each approach, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/gatekeeper/website/docs/v3.13.x/audit#reading-audit-results"},"Reading Audit Results"),".")),(0,r.yg)("h2",{id:"enabling-gatekeeper-to-export-audit-violations"},"Enabling Gatekeeper to export audit violations"),(0,r.yg)("p",null,"Install prerequisites such as a pubsub tool, a message broker etc."),(0,r.yg)("h3",{id:"setting-up-audit-with-pubsub-enabled"},"Setting up audit with pubsub enabled"),(0,r.yg)("p",null,"In the audit deployment, set the ",(0,r.yg)("inlineCode",{parentName:"p"},"--enable-pub-sub")," flag to ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," to publish audit violations. Additionally, use ",(0,r.yg)("inlineCode",{parentName:"p"},"--audit-connection")," (defaults to ",(0,r.yg)("inlineCode",{parentName:"p"},"audit-connection"),") and ",(0,r.yg)("inlineCode",{parentName:"p"},"--audit-channel"),"(defaults to ",(0,r.yg)("inlineCode",{parentName:"p"},"audit-channel"),") flags to allow audit to publish violations using desired connection onto desired channel. ",(0,r.yg)("inlineCode",{parentName:"p"},"--audit-connection")," must be set to the name of the connection config, and ",(0,r.yg)("inlineCode",{parentName:"p"},"--audit-channel")," must be set to name of the channel where violations should get published."),(0,r.yg)("p",null,"A ConfigMap that contains ",(0,r.yg)("inlineCode",{parentName:"p"},"provider")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"config")," fields in ",(0,r.yg)("inlineCode",{parentName:"p"},"data")," is required to establish connection for sending violations over the channel. Following is an example ConfigMap to establish a connection that uses Dapr to publish messages:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: audit-connection\n  namespace: gatekeeper-system\ndata:\n  provider: "dapr"\n  config: |\n    {\n      "component": "pubsub"\n    }\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"provider")," field determines which tool/driver should be used to establish a connection. Valid values are: ",(0,r.yg)("inlineCode",{parentName:"li"},"dapr")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"config")," field is a json object that configures how the connection is made. E.g. which queue messages should be sent to.")),(0,r.yg)("h4",{id:"available-pubsub-drivers"},"Available Pubsub drivers"),(0,r.yg)("p",null,"Dapr: ",(0,r.yg)("a",{parentName:"p",href:"https://dapr.io/"},"https://dapr.io/")),(0,r.yg)("h3",{id:"quick-start-with-publishing-violations-using-dapr-and-redis"},"Quick start with publishing violations using Dapr and Redis"),(0,r.yg)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Install Dapr"),(0,r.yg)("p",{parentName:"li"},"To install Dapr with specific requirements and configuration, please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://docs.dapr.io/operations/hosting/kubernetes/kubernetes-deploy/"},"Dapr docs"),"."),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"[!IMPORTANT]"),(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},"Make sure to set ",(0,r.yg)("inlineCode",{parentName:"li"},"SIDECAR_DROP_ALL_CAPABILITIES")," environment variable on ",(0,r.yg)("inlineCode",{parentName:"li"},"dapr-sidecar")," injector pod to ",(0,r.yg)("inlineCode",{parentName:"li"},"true")," to avoid getting ",(0,r.yg)("inlineCode",{parentName:"li"},"PodSecurity violation")," errors for the injected sidecar container as Gatekeeper by default requires workloads to run with ",(0,r.yg)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted"},"restricted")," policy. If using helm charts to install Dapr, you can use ",(0,r.yg)("inlineCode",{parentName:"li"},"--set dapr_sidecar_injector.sidecarDropALLCapabilities=true"),"."),(0,r.yg)("li",{parentName:"ul"},"Additionally, ",(0,r.yg)("a",{parentName:"li",href:"https://docs.dapr.io/operations/hosting/kubernetes/kubernetes-production/#configure-seccompprofile-for-sidecar-containers"},"configure appropriate seccompProfile for sidecar containers")," injected by Dapr to avoid getting ",(0,r.yg)("inlineCode",{parentName:"li"},"PodSecurity violation")," errors. We are setting required annotation for audit pod while deploying Gatekeeper later in this quick start to avoid getting ",(0,r.yg)("inlineCode",{parentName:"li"},"PodSecurity violation")," error."))),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Dapr is installed with mtls enabled by default, for more details on the same please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://docs.dapr.io/operations/security/mtls/#setting-up-mtls-with-the-configuration-resource"},"Dapr security"),"."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Install Redis"),(0,r.yg)("p",{parentName:"li"},"Please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://docs.dapr.io/getting-started/tutorials/configure-state-pubsub/#step-1-create-a-redis-store"},"this")," guide to install Redis."),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Redis is used for example purposes only. Dapr supports ",(0,r.yg)("a",{parentName:"p",href:"https://docs.dapr.io/reference/components-reference/supported-state-stores/"},"many different state store options"),". To install Redis with TLS, please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://docs.bitnami.com/kubernetes/infrastructure/redis-cluster/administration/enable-tls/"},"this")," doc.")))),(0,r.yg)("h4",{id:"configure-a-sample-subscriber-to-receive-violations"},"Configure a sample subscriber to receive violations"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create ",(0,r.yg)("inlineCode",{parentName:"p"},"fake-subscriber")," namespace and redis secret"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns fake-subscriber\n# creating redis secret in subscriber namespace to allow Dapr sidecar to connect to redis instance\nkubectl get secret redis --namespace=default -o yaml | sed 's/namespace: .*/namespace: fake-subscriber/' | kubectl apply -f -\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create Dapr pubsub component"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f - <<EOF\napiVersion: dapr.io/v1alpha1\nkind: Component\nmetadata:\n  name: pubsub\n  namespace: fake-subscriber\nspec:\n  type: pubsub.redis\n  version: v1\n  metadata:\n  - name: redisHost\n    value: redis-master.default.svc.cluster.local:6379\n  - name: redisPassword\n    secretKeyRef: \n      name: redis\n      key: redis-password\nEOF\n")),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Please use ",(0,r.yg)("a",{parentName:"p",href:"https://docs.dapr.io/reference/components-reference/supported-state-stores/setup-redis/"},"this guide")," to properly configure Redis pubsub component for Dapr."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Deploy subscriber application"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: sub\n  namespace: fake-subscriber\n  labels:\n    app: sub\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: sub\n  template:\n    metadata:\n      labels:\n        app: sub\n      annotations:\n        dapr.io/enabled: "true"\n        dapr.io/app-id: "subscriber"\n        dapr.io/enable-api-logging: "true"\n        dapr.io/app-port: "6002"\n    spec:\n      containers:\n      - name: go-sub\n        image: fake-subscriber:latest\n        imagePullPolicy: Never\n')),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"[!IMPORTANT]","\nPlease make sure ",(0,r.yg)("inlineCode",{parentName:"p"},"fake-subscriber")," image is built and available in your cluster. Dockerfile to build image for ",(0,r.yg)("inlineCode",{parentName:"p"},"fake-subscriber")," is under ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/tree/master/test/pubsub/fake-subscriber"},"gatekeeper/test/fake-subscriber"),".")))),(0,r.yg)("h4",{id:"configure-gatekeeper-with-pubsub-enabled"},"Configure Gatekeeper with Pubsub enabled"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create Gatekeeper namespace, and Dapr pubsub component and Redis secret in Gatekeeper's namespace (",(0,r.yg)("inlineCode",{parentName:"p"},"gatekeeper-system")," by default). Please make sure to update ",(0,r.yg)("inlineCode",{parentName:"p"},"gatekeeper-system")," namespace for the next steps if your cluster's Gatekeeper namespace is different."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace gatekeeper-system\nkubectl get secret redis --namespace=default -o yaml | sed 's/namespace: .*/namespace: gatekeeper-system/' | kubectl apply -f -\nkubectl apply -f - <<EOF\napiVersion: dapr.io/v1alpha1\nkind: Component\nmetadata:\n  name: pubsub\n  namespace: gatekeeper-system\nspec:\n  type: pubsub.redis\n  version: v1\n  metadata:\n  - name: redisHost\n    value: redis-master.default.svc.cluster.local:6379\n  - name: redisPassword\n    secretKeyRef:\n      name: redis\n      key: redis-password\nEOF\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"To upgrade or install Gatekeeper with ",(0,r.yg)("inlineCode",{parentName:"p"},"--enable-pub-sub")," set to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"--audit-connection")," set to ",(0,r.yg)("inlineCode",{parentName:"p"},"audit-connection"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"--audit-channel")," set to ",(0,r.yg)("inlineCode",{parentName:"p"},"audit-channel")," on audit pod."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'# auditPodAnnotations is used to add annotations required by Dapr to inject sidecar to audit pod\necho \'auditPodAnnotations: {dapr.io/enabled: "true", dapr.io/app-id: "audit", dapr.io/metrics-port: "9999", dapr.io/sidecar-seccomp-profile-type: "RuntimeDefault"}\' > /tmp/annotations.yaml\nhelm upgrade --install gatekeeper gatekeeper/gatekeeper --namespace gatekeeper-system \\\n--set audit.enablePubsub=true \\\n--set audit.connection=audit-connection \\\n--set audit.channel=audit-channel \\\n--values /tmp/annotations.yaml\n')),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Note:")," Verify that after the audit pod is running there is a Dapr sidecar injected and running along side ",(0,r.yg)("inlineCode",{parentName:"p"},"manager")," container.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create connection config to establish a connection."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'kubectl apply -f - <<EOF\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: audit-connection\n  namespace: gatekeeper-system\ndata:\n  provider: "dapr"\n  config: |\n    {\n      "component": "pubsub"\n    }\nEOF\n')),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Note:")," Name of the connection configMap must match the value of ",(0,r.yg)("inlineCode",{parentName:"p"},"--audit-connection")," for it to be used by audit to publish violation. At the moment, only one connection config can exists for audit.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create the constraint templates and constraints, and make sure audit ran by checking constraints. If constraint status is updated with information such as ",(0,r.yg)("inlineCode",{parentName:"p"},"auditTimeStamp")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"totalViolations"),", then audit has ran at least once. Additionally, populated ",(0,r.yg)("inlineCode",{parentName:"p"},"TOTAL-VIOLATIONS")," field for all constraints while listing constraints also indicates that audit has ran at least once."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-log"},"kubectl get constraint\nNAME                 ENFORCEMENT-ACTION   TOTAL-VIOLATIONS\npod-must-have-test                        0\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Finally, check the subscriber logs to see the violations received."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-log"},'kubectl logs -l app=sub -c go-sub -n fake-subscriber \n2023/07/18 20:16:41 Listening...\n2023/07/18 20:37:20 main.PubsubMsg{ID:"2023-07-18T20:37:19Z", Details:map[string]interface {}{"missing_labels":[]interface {}{"test"}}, EventType:"violation_audited", Group:"constraints.gatekeeper.sh", Version:"v1beta1", Kind:"K8sRequiredLabels", Name:"pod-must-have-test", Namespace:"", Message:"you must provide labels: {\\"test\\"}", EnforcementAction:"deny", ConstraintAnnotations:map[string]string(nil), ResourceGroup:"", ResourceAPIVersion:"v1", ResourceKind:"Pod", ResourceNamespace:"nginx", ResourceName:"nginx-deployment-58899467f5-j85bs", ResourceLabels:map[string]string{"app":"nginx", "owner":"admin", "pod-template-hash":"58899467f5"}}\n')))),(0,r.yg)("h3",{id:"violations"},"Violations"),(0,r.yg)("p",null,"The audit pod publishes violations in following format:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "2023-07-18T21:21:52Z",\n  "details": {\n    "missing_labels": [\n      "test"\n    ]\n  },\n  "eventType": "violation_audited",\n  "group": "constraints.gatekeeper.sh",\n  "version": "v1beta1",\n  "kind": "K8sRequiredLabels",\n  "name": "pod-must-have-test",\n  "message": "you must provide labels: {\\"test\\"}",\n  "enforcementAction": "deny",\n  "resourceAPIVersion": "v1",\n  "resourceKind": "Pod",\n  "resourceNamespace": "nginx",\n  "resourceName": "nginx-deployment-cd55c47f5-2b84x",\n  "resourceLabels": {\n    "app": "nginx",\n    "pod-template-hash": "cd55c47f5"\n  }\n}\n')))}g.isMDXComponent=!0}}]);