"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[267],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,m=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(m,o(o({ref:t},g),{},{components:n})):a.createElement(m,o({ref:t},g))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(58168),i=n(98587),r=(n(96540),n(15680)),o=["components"],l={id:"customize-startup",title:"Customizing Startup Behavior"},s=void 0,p={unversionedId:"customize-startup",id:"version-v3.11.x/customize-startup",title:"Customizing Startup Behavior",description:"Allow retries when adding objects to OPA",source:"@site/versioned_docs/version-v3.11.x/customize-startup.md",sourceDirName:".",slug:"/customize-startup",permalink:"/gatekeeper/website/docs/v3.11.x/customize-startup",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.11.x/customize-startup.md",tags:[],version:"v3.11.x",frontMatter:{id:"customize-startup",title:"Customizing Startup Behavior"},sidebar:"docs",previous:{title:"Policy Library",permalink:"/gatekeeper/website/docs/v3.11.x/library"},next:{title:"Customizing Admission Behavior",permalink:"/gatekeeper/website/docs/v3.11.x/customize-admission"}},g={},d=[{value:"Allow retries when adding objects to OPA",id:"allow-retries-when-adding-objects-to-opa",level:2},{value:"Enable profiling using <code>pprof</code>",id:"enable-profiling-using-pprof",level:2},{value:"Disable certificate generation and rotation for Gatekeeper&#39;s webhook",id:"disable-certificate-generation-and-rotation-for-gatekeepers-webhook",level:2},{value:"Disable OPA built-in functions",id:"disable-opa-built-in-functions",level:2},{value:"Alpha Emit admission and audit events",id:"alpha-emit-admission-and-audit-events",level:2},{value:"Beta Enable mutation logging and annotations",id:"beta-enable-mutation-logging-and-annotations",level:2},{value:"Other Configuration Options",id:"other-configuration-options",level:2}],u={toc:d};function c(e){var t=e.components,n=(0,i.A)(e,o);return(0,r.yg)("wrapper",(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"allow-retries-when-adding-objects-to-opa"},"Allow retries when adding objects to OPA"),(0,r.yg)("p",null,"Gatekeeper's webhook servers undergo a bootstrapping period during which they are unavailable until the initial set of resources (constraints, templates, synced objects, etc...) have been ingested. This prevents Gatekeeper's webhook from validating based on an incomplete set of policies. This wait-for-bootstrapping behavior can be configured."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"--readiness-retries")," flag defines the number of retry attempts allowed for an object (a Constraint, for example) to be successfully added to OPA.  The default is ",(0,r.yg)("inlineCode",{parentName:"p"},"0"),".  A value of ",(0,r.yg)("inlineCode",{parentName:"p"},"-1")," allows for infinite retries, blocking the webhook until all objects have been added to OPA.  This guarantees complete enforcement, but has the potential to indefinitely block the webhook from serving requests."),(0,r.yg)("h2",{id:"enable-profiling-using-pprof"},"Enable profiling using ",(0,r.yg)("inlineCode",{parentName:"h2"},"pprof")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"--enable-pprof")," flag enables an HTTP server for profiling using the ",(0,r.yg)("a",{parentName:"p",href:"https://pkg.go.dev/net/http/pprof"},"pprof")," library. By default, it serves to ",(0,r.yg)("inlineCode",{parentName:"p"},"localhost:6060")," but the port can be customized with the ",(0,r.yg)("inlineCode",{parentName:"p"},"--pprof-port")," flag."),(0,r.yg)("h2",{id:"disable-certificate-generation-and-rotation-for-gatekeepers-webhook"},"Disable certificate generation and rotation for Gatekeeper's webhook"),(0,r.yg)("p",null,"By default, Gatekeeper uses ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/cert-controller"},(0,r.yg)("inlineCode",{parentName:"a"},"open-policy-agent/cert-controller"))," to handle the webhook's certificate rotation and generation. If you want to use a third-party solution, you may disable the cert-controller feature using ",(0,r.yg)("inlineCode",{parentName:"p"},"--disable-cert-rotation"),"."),(0,r.yg)("h2",{id:"disable-opa-built-in-functions"},"Disable OPA built-in functions"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"--disable-opa-builtin")," flag disables specific ",(0,r.yg)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/v0.37.2/policy-reference/#built-in-functions"},"OPA built-ins functions"),". Starting with v3.8.0, Gatekeeper disables the ",(0,r.yg)("inlineCode",{parentName:"p"},"http.send")," built-in function by default. For more information, please see ",(0,r.yg)("a",{parentName:"p",href:"/gatekeeper/website/docs/v3.11.x/externaldata#motivation"},"external data"),"."),(0,r.yg)("h2",{id:"alpha-emit-admission-and-audit-events"},"[Alpha]"," Emit admission and audit events"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"--emit-admission-events")," flag enables the emission of all admission violations as Kubernetes events in the Gatekeeper namespace. This flag is in alpha stage and it is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"false")," by default."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"--emit-audit-events")," flag enables the emission of all audit violation as Kubernetes events in the Gatekeeper namespace. This flag is in alpha stage and it is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"false")," by default."),(0,r.yg)("p",null,"There are three types of events that are emitted by Gatekeeper when the above flags are enabled:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Event"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"FailedAdmission")),(0,r.yg)("td",{parentName:"tr",align:null},"The Gatekeeper webhook denied the admission request (default behavior).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"WarningAdmission")),(0,r.yg)("td",{parentName:"tr",align:null},"When ",(0,r.yg)("inlineCode",{parentName:"td"},"enforcementAction: warn")," is specified in the constraint.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"DryrunViolation")),(0,r.yg)("td",{parentName:"tr",align:null},"When ",(0,r.yg)("inlineCode",{parentName:"td"},"enforcementAction: dryrun")," is specified in the constraint.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"AuditViolation")),(0,r.yg)("td",{parentName:"tr",align:null},"A violation is detected during an audit.")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u2757 Warning: if the same constraint and violating resource tuple was emitted for ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/v1.23.3/staging/src/k8s.io/client-go/tools/record/events_cache.go#L429-L438"},"more than 10 times in a 10-minute rolling interval"),", the Kubernetes event recorder will aggregate the events, e.g."),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre"},'39s         Warning   FailedAdmission   namespace/test      (combined from similar events):  Admission webhook "validation.gatekeeper.sh" denied request, Resource Namespace: , Constraint: ns-must-have-gk, Message: you must provide labels: {"gatekeeper"}\n')),(0,r.yg)("p",{parentName:"blockquote"},"Gatekeeper might burst 25 events about an object, but limit the refill rate to 1 new event every 5 minutes. This will help control the long-tail of events for resources that are always violating the constraint.")),(0,r.yg)("h2",{id:"beta-enable-mutation-logging-and-annotations"},"[Beta]"," Enable mutation logging and annotations"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"--log-mutations")," flag enables logging of mutation events and errors."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"--mutation-annotations")," flag adds the following two annotations to mutated objects:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Annotation"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gatekeeper.sh/mutation-id")),(0,r.yg)("td",{parentName:"tr",align:null},"The UUID of the mutation.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gatekeeper.sh/mutations")),(0,r.yg)("td",{parentName:"tr",align:null},"A list of comma-separated mutations in the format of ",(0,r.yg)("inlineCode",{parentName:"td"},"<MutationType>/<MutationNamespace>/<MutationName>:<MutationGeneration>")," that are applied to the object.")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u2757 Note that this will break the idempotence requirement that Kubernetes sets for mutation webhooks. See the ",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#idempotence"},"Kubernetes docs here")," for more details")),(0,r.yg)("h2",{id:"other-configuration-options"},"Other Configuration Options"),(0,r.yg)("p",null,"For the complete list of configuration flags for your specific version of Gatekeeper, run the Gatekeeper binary with the ",(0,r.yg)("inlineCode",{parentName:"p"},"--help")," flag. For example:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"docker run openpolicyagent/gatekeeper:v3.10.0-beta.0 --help")),(0,r.yg)("p",null,"To ensure you are seeing all relevant flags, be sure the image tag (",(0,r.yg)("inlineCode",{parentName:"p"},":3.10.0-beta.0")," above) corresponds with the version of Gatekeeper you are running."))}c.isMDXComponent=!0}}]);