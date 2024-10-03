"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5408],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(t),m=a,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||i;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},76312:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=t(58168),a=t(98587),i=(t(96540),t(15680)),o=["components"],l={id:"debug",title:"Debugging"},s=void 0,p={unversionedId:"debug",id:"version-v3.13.x/debug",title:"Debugging",description:"NOTE: Verbose logging with DEBUG level can be turned on with --log-level=DEBUG.  By default, the --log-level flag is set to minimum log level INFO. Acceptable values for minimum log level are [DEBUG, INFO, WARNING, ERROR]. In production, this flag should not be set to DEBUG.",source:"@site/versioned_docs/version-v3.13.x/debug.md",sourceDirName:".",slug:"/debug",permalink:"/gatekeeper/website/docs/v3.13.x/debug",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.13.x/debug.md",tags:[],version:"v3.13.x",frontMatter:{id:"debug",title:"Debugging"},sidebar:"docs",previous:{title:"Metrics & Observability",permalink:"/gatekeeper/website/docs/v3.13.x/metrics"},next:{title:"Emergency Recovery",permalink:"/gatekeeper/website/docs/v3.13.x/emergency"}},c={},u=[{value:"Viewing the Request Object",id:"viewing-the-request-object",level:2},{value:"Tracing",id:"tracing",level:2}],g={toc:u};function m(e){var n=e.components,t=(0,a.A)(e,o);return(0,i.yg)("wrapper",(0,r.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"NOTE: Verbose logging with DEBUG level can be turned on with ",(0,i.yg)("inlineCode",{parentName:"p"},"--log-level=DEBUG"),".  By default, the ",(0,i.yg)("inlineCode",{parentName:"p"},"--log-level")," flag is set to minimum log level ",(0,i.yg)("inlineCode",{parentName:"p"},"INFO"),". Acceptable values for minimum log level are ","[",(0,i.yg)("inlineCode",{parentName:"p"},"DEBUG"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"INFO"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"WARNING"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"ERROR"),"]",". In production, this flag should not be set to ",(0,i.yg)("inlineCode",{parentName:"p"},"DEBUG"),".")),(0,i.yg)("h2",{id:"viewing-the-request-object"},"Viewing the Request Object"),(0,i.yg)("p",null,"A simple way to view the request object is to use a constraint/template that\ndenies all requests and outputs the request object as its rejection message."),(0,i.yg)("p",null,"Example template:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8sdenyall\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sDenyAll\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8sdenyall\n\n        violation[{"msg": msg}] {\n          msg := sprintf("REVIEW OBJECT: %v", [input.review])\n        }\n')),(0,i.yg)("p",null,"Example constraint:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sDenyAll\nmetadata:\n  name: deny-all-namespaces\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Namespace"]\n')),(0,i.yg)("h2",{id:"tracing"},"Tracing"),(0,i.yg)("p",null,"In debugging decisions and constraints, a few pieces of information can be helpful:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Cached data and existing rules at the time of the request"),(0,i.yg)("li",{parentName:"ul"},"A trace of the evaluation"),(0,i.yg)("li",{parentName:"ul"},"The input document being evaluated")),(0,i.yg)("p",null,"Writing out all the information above for every request would be expensive in terms of memory and load on the Gatekeeper server, which may lead to requests timing out. It would also be hard\nto find the relevant logs for a given request."),(0,i.yg)("p",null,"For tracing, Gatekeeper ",(0,i.yg)("strong",{parentName:"p"},"requires")," operators to specify\nresources and requesting users for which traces will be logged. They can do so by\nconfiguring the ",(0,i.yg)("inlineCode",{parentName:"p"},"Config")," resource, which lives in the ",(0,i.yg)("inlineCode",{parentName:"p"},"gatekeeper-system")," namespace."),(0,i.yg)("p",null,"Below is an example of a config resource:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: config.gatekeeper.sh/v1alpha1\nkind: Config\nmetadata:\n  name: config\n  namespace: "gatekeeper-system"\nspec:\n  # Data to be replicated into OPA\n  sync:\n    syncOnly:\n      - group: ""\n        version: "v1"\n        kind: "Namespace"\n  validation:\n    # Requests for which we want to run traces\n    traces:\n        # The requesting user for which traces will be run\n        # This field is required.\n        # To trace multiple users, feel free to pass in a list.\n        # To trace controllers, use the service accounts of those controllers.\n      - user: "user_to_trace@company.com"\n        kind:\n          # The group, version, kind for which we want to run a trace\n          group: ""\n          version: "v1"\n          kind: "Namespace"\n        # If dump is defined and set to `All`, also dump the state of OPA\n        dump: "All"\n')),(0,i.yg)("p",null,"Traces will be written to the stdout logs of the Gatekeeper controller."),(0,i.yg)("p",null,"If there is an error in the Rego in the ConstraintTemplate, there are cases where it is still created via ",(0,i.yg)("inlineCode",{parentName:"p"},"kubectl apply -f [CONSTRAINT_TEMPLATE_FILENAME].yaml"),"."),(0,i.yg)("p",null,"When applying the constraint using ",(0,i.yg)("inlineCode",{parentName:"p"},"kubectl apply -f constraint.yaml")," with a ConstraintTemplate that contains incorrect Rego, and error will occur: ",(0,i.yg)("inlineCode",{parentName:"p"},'error: unable to recognize "[CONSTRAINT_FILENAME].yaml": no matches for kind "[NAME_OF_CONSTRAINT]" in version "constraints.gatekeeper.sh/v1beta1"'),"."),(0,i.yg)("p",null,"To find the error, run ",(0,i.yg)("inlineCode",{parentName:"p"},"kubectl get -f [CONSTRAINT_TEMPLATE_FILENAME].yaml -o yaml"),". Build errors are shown in the ",(0,i.yg)("inlineCode",{parentName:"p"},"status")," field."))}m.isMDXComponent=!0}}]);