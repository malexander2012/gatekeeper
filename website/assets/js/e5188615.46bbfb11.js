"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2858],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(58168),i=n(98587),r=(n(96540),n(15680)),o=["components"],s={id:"performance-tuning",title:"Performance Tuning"},l=void 0,u={unversionedId:"performance-tuning",id:"version-v3.15.x/performance-tuning",title:"Performance Tuning",description:"Below we go into some of the considerations and options for performance tuning Gatekeeper.",source:"@site/versioned_docs/version-v3.15.x/performance-tuning.md",sourceDirName:".",slug:"/performance-tuning",permalink:"/gatekeeper/website/docs/v3.15.x/performance-tuning",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.15.x/performance-tuning.md",tags:[],version:"v3.15.x",frontMatter:{id:"performance-tuning",title:"Performance Tuning"},sidebar:"docs",previous:{title:"Operations",permalink:"/gatekeeper/website/docs/v3.15.x/operations"},next:{title:"OPA Versions",permalink:"/gatekeeper/website/docs/v3.15.x/opa-versions"}},c={},p=[{value:"GOMAXPROCS",id:"gomaxprocs",level:2},{value:"Max Serving Threads",id:"max-serving-threads",level:2},{value:"Audit Interval",id:"audit-interval",level:2},{value:"Constraint Violations Limit",id:"constraint-violations-limit",level:2},{value:"Audit Chunk Size",id:"audit-chunk-size",level:2},{value:"Match Kind Only",id:"match-kind-only",level:2}],d={toc:p};function g(e){var t=e.components,n=(0,i.A)(e,o);return(0,r.yg)("wrapper",(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Below we go into some of the considerations and options for performance tuning Gatekeeper."),(0,r.yg)("h1",{id:"general-performance"},"General Performance"),(0,r.yg)("h2",{id:"gomaxprocs"},"GOMAXPROCS"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://pkg.go.dev/runtime#GOMAXPROCS"},"GOMAXPROCS")," sets the number of threads golang uses.\nGatekeeper uses ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/uber-go/automaxprocs"},"automaxprocs")," to default this value\nto the CPU limit set by the linux cgroup (i.e. the limits passed to the Kubernetes container)."),(0,r.yg)("p",null,"This value can be overridden by setting a ",(0,r.yg)("inlineCode",{parentName:"p"},"GOMAXPROCS")," environment variable."),(0,r.yg)("p",null,"Generally speaking, too many threads can lead to CPU throttling, which can increase webhook jitter\nand can result in not enough available CPU per operation, which can lead to increased latency."),(0,r.yg)("h1",{id:"webhook-performance"},"Webhook Performance"),(0,r.yg)("h2",{id:"max-serving-threads"},"Max Serving Threads"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"--max-serving-threads")," command line flag caps the number of concurrent goroutines that are\ncalling out to policy evaluation at any one time. This can be important for two reasons:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Excessive numbers of serving goroutines can lead to CPU starvation, which means there is not enough\nCPU to go around per goroutine, causing requests to time out.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Each serving goroutine can require a non-trivial amount of RAM, which will not be freed until the\nrequest is finished. This can increase the maximum memory used by the process, which can lead to\nOOMing."))),(0,r.yg)("p",null,"By default, the number of webhook threads is capped at the value of ",(0,r.yg)("inlineCode",{parentName:"p"},"GOMAXPROCS"),". If your policies mostly\nrely on blocking calls (e.g. calling out to external services via ",(0,r.yg)("inlineCode",{parentName:"p"},"http.send()")," or via external data), CPU\nstarvation is less of a risk, though memory scaling could still be a concern."),(0,r.yg)("p",null,"Playing around with this value may help maximize the throughput of Gatekeeper's validating webhook."),(0,r.yg)("h1",{id:"audit"},"Audit"),(0,r.yg)("h2",{id:"audit-interval"},"Audit Interval"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"--audit-interval")," flag is used to configure how often audit runs on the cluster."),(0,r.yg)("p",null,"The time it takes for audit to run is dependent on the size of the cluster, any throttling the K8s\nAPI server may do, and the number and complexity of policies to be evaluated. As such, determining\nthe ideal audit interval is use-case-specific."),(0,r.yg)("p",null,"If you have overlapping audits, the following things can happen:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"There will be parallel calls to the policy evaluation backend, which can result in increased\nRAM usage and CPU starvation, leading to OOMs or audit sessions taking longer per-audit than\nthey otherwise would.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"More requests to the K8s API server. If throttled, this can increase the time it takes for an audit\nto finish.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"A newer audit run can pre-empt the reporting of audit results of a previous audit run on the ",(0,r.yg)("inlineCode",{parentName:"p"},"status")," field\nof individual constraints. This can lead to constraints not having violation results in their ",(0,r.yg)("inlineCode",{parentName:"p"},"status")," field.\nReports via stdout logging should be unaffected by this."))),(0,r.yg)("p",null,"Ideally, ",(0,r.yg)("inlineCode",{parentName:"p"},"--audit-interval")," should be set long enough that no more than one audit is running at any time, though\noccasional overlap should not be harmful."),(0,r.yg)("h2",{id:"constraint-violations-limit"},"Constraint Violations Limit"),(0,r.yg)("p",null,"Memory usage will increase/decrease as ",(0,r.yg)("inlineCode",{parentName:"p"},"--constraint-violations-limit")," is increased/decreased."),(0,r.yg)("h2",{id:"audit-chunk-size"},"Audit Chunk Size"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"--audit-chunk-size")," flags tells Gatekeeper to request lists of objects from the API server to be paginated\nrather than listing all instances at once. Setting this can reduce maximum memory usage, particularly if you\nhave a cluster with a lot of objects of a specific kind, or a particular kind that has very large objects (say config maps)."),(0,r.yg)("p",null,"One caveat about ",(0,r.yg)("inlineCode",{parentName:"p"},"--audit-chunk-size")," is that the K8s API server returns a resumption token for list requests. This\ntoken is only valid for a short window (~O(minutes)) and the listing of all objects for a given kind must be completed\nbefore that token expires. Decreasing ",(0,r.yg)("inlineCode",{parentName:"p"},"--audit-chunk-size")," should decrease maximum memory usage, but may also lead\nto an increase in requests to the API server. In cases where this leads to throttling, it's possible the resumption token\ncould expire before object listing has completed."),(0,r.yg)("h2",{id:"match-kind-only"},"Match Kind Only"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"--audit-match-kind-only")," flag can be helpful in reducing audit runtime, outgoing API requests and memory usage\nif your constraints are only matching against a specific subset of kinds, particularly if there are large volumes\nof config that can be ignored due to being out-of-scope. Some caveats:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"If the bulk of the K8s objects are resources that are already in-scope for constraints, the benefit will be mitigated")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"If a constraint is added that matches against all kinds (say a label constraint), the benefit will be eliminated. If\nyou are relying on this flag, it's important to make sure all constraints added to the cluster have ",(0,r.yg)("inlineCode",{parentName:"p"},"spec.match.kind"),"\nspecified."))))}g.isMDXComponent=!0}}]);