"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3292],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=o,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64512:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=t(58168),o=t(98587),i=(t(96540),t(15680)),a=["components"],l={id:"vendor-specific",title:"Cloud and Vendor Specific Fixes"},s=void 0,p={unversionedId:"vendor-specific",id:"version-v3.14.x/vendor-specific",title:"Cloud and Vendor Specific Fixes",description:"Running on private GKE Cluster nodes",source:"@site/versioned_docs/version-v3.14.x/cloud-specific.md",sourceDirName:".",slug:"/vendor-specific",permalink:"/gatekeeper/website/docs/v3.14.x/vendor-specific",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.14.x/cloud-specific.md",tags:[],version:"v3.14.x",frontMatter:{id:"vendor-specific",title:"Cloud and Vendor Specific Fixes"},sidebar:"docs",previous:{title:"Emergency Recovery",permalink:"/gatekeeper/website/docs/v3.14.x/emergency"},next:{title:"Failing Closed",permalink:"/gatekeeper/website/docs/v3.14.x/failing-closed"}},c={},u=[{value:"Running on private GKE Cluster nodes",id:"running-on-private-gke-cluster-nodes",level:2},{value:"Running on OpenShift 4.x",id:"running-on-openshift-4x",level:2}],d={toc:u};function g(e){var n=e.components,t=(0,o.A)(e,a);return(0,i.yg)("wrapper",(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"running-on-private-gke-cluster-nodes"},"Running on private GKE Cluster nodes"),(0,i.yg)("p",null,"By default, firewall rules restrict the cluster master communication to nodes only on ports 443 (HTTPS) and 10250 (kubelet). Although Gatekeeper exposes its service on port 443, GKE by default enables ",(0,i.yg)("inlineCode",{parentName:"p"},"--enable-aggregator-routing")," option, which makes the master to bypass the service and communicate straight to the POD on port 8443."),(0,i.yg)("p",null,"Two ways of working around this:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"create a new firewall rule from master to private nodes to open port ",(0,i.yg)("inlineCode",{parentName:"li"},"8443")," (or any other custom port)",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#add_firewall_rules"},"https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#add_firewall_rules")))),(0,i.yg)("li",{parentName:"ul"},"make the pod to run on privileged port 443 (need to run pod as root, or have ",(0,i.yg)("inlineCode",{parentName:"li"},"NET_BIND_SERVICE")," capability)",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"update Gatekeeper deployment manifest spec:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"add ",(0,i.yg)("inlineCode",{parentName:"li"},"NET_BIND_SERVICE")," to ",(0,i.yg)("inlineCode",{parentName:"li"},"securityContext.capabilities.add")," to allow binding on privileged ports as non-root"),(0,i.yg)("li",{parentName:"ul"},"update port from ",(0,i.yg)("inlineCode",{parentName:"li"},"8443")," to ",(0,i.yg)("inlineCode",{parentName:"li"},"443"))),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},'containers:\n- args:\n  - --port=443\n  ports:\n  - containerPort: 443\n    name: webhook-server\n    protocol: TCP\n  securityContext:\n    capabilities:\n      drop: ["all"]\n      add: ["NET_BIND_SERVICE"]\n')))))),(0,i.yg)("h2",{id:"running-on-openshift-4x"},"Running on OpenShift 4.x"),(0,i.yg)("p",null,"When running on OpenShift, the ",(0,i.yg)("inlineCode",{parentName:"p"},"anyuid")," scc must be used to keep a restricted profile but being able to set the UserID."),(0,i.yg)("p",null,"In order to use it, the following section must be added to the gatekeeper-manager-role Role:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"- apiGroups:\n  - security.openshift.io\n  resourceNames:\n    - anyuid\n  resources:\n    - securitycontextconstraints\n  verbs:\n    - use\n")),(0,i.yg)("p",null,"With this restricted profile, it won't be possible to set the ",(0,i.yg)("inlineCode",{parentName:"p"},"container.seccomp.security.alpha.kubernetes.io/manager: runtime/default")," annotation. On the other hand, given the limited amount of privileges provided by the anyuid scc, the annotation can be removed."))}g.isMDXComponent=!0}}]);