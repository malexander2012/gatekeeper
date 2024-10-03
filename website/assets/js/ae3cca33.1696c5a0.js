"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5177],{15680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>h});var n=o(96540);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return o?n.createElement(m,r(r({ref:t},p),{},{components:o})):n.createElement(m,r({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},97111:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=o(58168),a=o(98587),i=(o(96540),o(15680)),r=["components"],s={id:"customize-admission",title:"Customizing Admission Behavior"},l=void 0,c={unversionedId:"customize-admission",id:"version-v3.7.x/customize-admission",title:"Customizing Admission Behavior",description:"Gatekeeper is a Kubernetes admission webhook",source:"@site/versioned_docs/version-v3.7.x/customize-admission.md",sourceDirName:".",slug:"/customize-admission",permalink:"/gatekeeper/website/docs/v3.7.x/customize-admission",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.7.x/customize-admission.md",tags:[],version:"v3.7.x",frontMatter:{id:"customize-admission",title:"Customizing Admission Behavior"},sidebar:"version-v3.7.x/docs",previous:{title:"Customizing Startup Behavior",permalink:"/gatekeeper/website/docs/v3.7.x/customize-startup"},next:{title:"Metrics",permalink:"/gatekeeper/website/docs/v3.7.x/metrics"}},p={},u=[{value:"Enable Validation of Delete Operations",id:"enable-validation-of-delete-operations",level:2},{value:"Caveats",id:"caveats",level:3},{value:"Deletes are not Auditable",id:"deletes-are-not-auditable",level:4},{value:"Policies Against DELETE May Not be Perfectly Enforced",id:"policies-against-delete-may-not-be-perfectly-enforced",level:4},{value:"How to Enable Validation of Delete Operations",id:"how-to-enable-validation-of-delete-operations",level:3}],d={toc:u};function h(e){var t=e.components,o=(0,a.A)(e,r);return(0,i.yg)("wrapper",(0,n.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Gatekeeper is a ",(0,i.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#webhook-configuration"},"Kubernetes admission webhook"),"\nwhose default configuration can be found in the ",(0,i.yg)("inlineCode",{parentName:"p"},"gatekeeper.yaml")," manifest file. By default, it is\na ",(0,i.yg)("inlineCode",{parentName:"p"},"ValidatingWebhookConfiguration")," resource named ",(0,i.yg)("inlineCode",{parentName:"p"},"gatekeeper-validating-webhook-configuration"),"."),(0,i.yg)("p",null,"Currently the configuration specifies two webhooks: one for checking a request against\nthe installed constraints and a second webhook for checking labels on namespace requests\nthat would result in bypassing constraints for the namespace. The namespace-label webhook\nis necessary to prevent a privilege escalation where the permission to add a label to a\nnamespace is equivalent to the ability to bypass all constraints for that namespace.\nYou can read more about the ability to exempt namespaces by label ",(0,i.yg)("a",{parentName:"p",href:"/gatekeeper/website/docs/v3.7.x/exempt-namespaces#exempting-namespaces-from-the-gatekeeper-admission-webhook-using---exempt-namespace-flag"},"here"),"."),(0,i.yg)("p",null,"Because Kubernetes adds features with each version, if you want to know how the webhook can be configured it\nis best to look at the official documentation linked at the top of this section. However, two particularly important\nconfiguration options deserve special mention: ",(0,i.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#timeouts"},"timeouts")," and\n",(0,i.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#failure-policy"},"failure policy"),"."),(0,i.yg)("p",null,"Timeouts allow you to configure how long the API server will wait for a response from the admission webhook before it\nconsiders the request to have failed. Note that setting the timeout longer than the overall request timeout\nmeans that the main request will time out before the webhook's failure policy is invoked, causing the\nrequest to fail."),(0,i.yg)("p",null,"Failure policy controls what happens when a webhook fails for whatever reason. Common\nfailure scenarios include timeouts, a 5xx error from the server or the webhook being unavailable.\nYou have the option to ignore errors, allowing the request through, or failing, rejecting the request.\nThis results in a direct tradeoff between availability and enforcement."),(0,i.yg)("p",null,"Currently Gatekeeper is defaulting to using ",(0,i.yg)("inlineCode",{parentName:"p"},"Ignore")," for the constraint requests, which means\nconstraints will not be enforced at admission time if the webhook is down or otherwise inaccessible.\nThis is because we cannot know the operational details of the cluster Gatekeeper is running on and\nhow that might affect webhook uptime. For a more detailed treatment of this topic, see our docs\non ",(0,i.yg)("a",{parentName:"p",href:"/gatekeeper/website/docs/v3.7.x/failing-closed"},"failing closed"),"."),(0,i.yg)("p",null,"The namespace label webhook defaults to ",(0,i.yg)("inlineCode",{parentName:"p"},"Fail"),", this is to help ensure that policies preventing\nlabels that bypass the webhook from being applied are enforced. Because this webhook only gets\ncalled for namespace modification requests, the impact of downtime is mitigated, making the\ntheoretical maximum availability less of an issue."),(0,i.yg)("p",null,"Because the manifest is available for customization, the webhook configuration can\nbe tuned to meet your specific needs if they differ from the defaults."),(0,i.yg)("h2",{id:"enable-validation-of-delete-operations"},"Enable Validation of Delete Operations"),(0,i.yg)("h3",{id:"caveats"},"Caveats"),(0,i.yg)("h4",{id:"deletes-are-not-auditable"},"Deletes are not Auditable"),(0,i.yg)("p",null,"Once a resource is deleted, it is gone. This means that non-compliant deletes cannot be\naudited via Gatekeeper's audit mechanism, and increases the importance of webhook-based\nenforcement."),(0,i.yg)("h4",{id:"policies-against-delete-may-not-be-perfectly-enforced"},"Policies Against DELETE May Not be Perfectly Enforced"),(0,i.yg)("p",null,"Since the webhook fails open by default (as described earlier on this page), it is possible\nfor admission requests to have imperfect enforcement, which means some non-compliant deletes\nmay still go through despite the policy. Normally such failures of webhook enforcement could\nbe caught by audit, but deletes are not auditable."),(0,i.yg)("p",null,"It is possible to improve the likelihood of enforcement by configuring the webhook to\n",(0,i.yg)("a",{parentName:"p",href:"/gatekeeper/website/docs/v3.7.x/failing-closed"},"fail closed"),"."),(0,i.yg)("h3",{id:"how-to-enable-validation-of-delete-operations"},"How to Enable Validation of Delete Operations"),(0,i.yg)("p",null,"To enable Delete operations for the ",(0,i.yg)("inlineCode",{parentName:"p"},"validation.gatekeeper.sh"),' admission webhook, add "DELETE" to the list of operations in the ',(0,i.yg)("inlineCode",{parentName:"p"},"gatekeeper-validating-webhook-configuration")," ValidatingWebhookConfiguration as seen in this deployment manifest of gatekeeper: ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/blob/v3.1.0-beta.10/deploy/gatekeeper.yaml#L792-L794"},"here")),(0,i.yg)("p",null," So you have"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-YAML"},"   operations:\n   - CREATE\n   - UPDATE\n   - DELETE\n")),(0,i.yg)("p",null,"You can now check for deletes."))}h.isMDXComponent=!0}}]);