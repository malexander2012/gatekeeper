"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4784],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99028:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],s={id:"customize-admission",title:"Customizing Admission Behavior"},l=void 0,c={unversionedId:"customize-admission",id:"customize-admission",title:"Customizing Admission Behavior",description:"Gatekeeper is a Kubernetes admission webhook",source:"@site/docs/customize-admission.md",sourceDirName:".",slug:"/customize-admission",permalink:"/gatekeeper/website/docs/next/customize-admission",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/docs/customize-admission.md",tags:[],version:"current",frontMatter:{id:"customize-admission",title:"Customizing Admission Behavior"},sidebar:"docs",previous:{title:"Customizing Startup Behavior",permalink:"/gatekeeper/website/docs/next/customize-startup"},next:{title:"Metrics & Observability",permalink:"/gatekeeper/website/docs/next/metrics"}},u={},p=[{value:"Enable Validation of Delete Operations",id:"enable-validation-of-delete-operations",level:2},{value:"Caveats",id:"caveats",level:3},{value:"Deletes are not Auditable",id:"deletes-are-not-auditable",level:4},{value:"Policies Against DELETE May Not be Perfectly Enforced",id:"policies-against-delete-may-not-be-perfectly-enforced",level:4},{value:"How to Enable Validation of Delete Operations",id:"how-to-enable-validation-of-delete-operations",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Gatekeeper is a ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#webhook-configuration"},"Kubernetes admission webhook"),"\nwhose default configuration can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"gatekeeper.yaml")," manifest file. By default, it is\na ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidatingWebhookConfiguration")," resource named ",(0,i.kt)("inlineCode",{parentName:"p"},"gatekeeper-validating-webhook-configuration"),"."),(0,i.kt)("p",null,"Currently the configuration specifies two webhooks: one for checking a request against\nthe installed constraints and a second webhook for checking labels on namespace requests\nthat would result in bypassing constraints for the namespace. The namespace-label webhook\nis necessary to prevent a privilege escalation where the permission to add a label to a\nnamespace is equivalent to the ability to bypass all constraints for that namespace.\nYou can read more about the ability to exempt namespaces by label ",(0,i.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/next/exempt-namespaces#exempting-namespaces-from-the-gatekeeper-admission-webhook-using---exempt-namespace-flag"},"here"),"."),(0,i.kt)("p",null,"Because Kubernetes adds features with each version, if you want to know how the webhook can be configured it\nis best to look at the official documentation linked at the top of this section. However, two particularly important\nconfiguration options deserve special mention: ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#timeouts"},"timeouts")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#failure-policy"},"failure policy"),"."),(0,i.kt)("p",null,"Timeouts allow you to configure how long the API server will wait for a response from the admission webhook before it\nconsiders the request to have failed. Note that setting the timeout longer than the overall request timeout\nmeans that the main request will time out before the webhook's failure policy is invoked, causing the\nrequest to fail."),(0,i.kt)("p",null,"Failure policy controls what happens when a webhook fails for whatever reason. Common\nfailure scenarios include timeouts, a 5xx error from the server or the webhook being unavailable.\nYou have the option to ignore errors, allowing the request through, or failing, rejecting the request.\nThis results in a direct tradeoff between availability and enforcement."),(0,i.kt)("p",null,"Currently Gatekeeper is defaulting to using ",(0,i.kt)("inlineCode",{parentName:"p"},"Ignore")," for the constraint requests, which means\nconstraints will not be enforced at admission time if the webhook is down or otherwise inaccessible.\nThis is because we cannot know the operational details of the cluster Gatekeeper is running on and\nhow that might affect webhook uptime. For a more detailed treatment of this topic, see our docs\non ",(0,i.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/next/failing-closed"},"failing closed"),"."),(0,i.kt)("p",null,"The namespace label webhook defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"Fail"),", this is to help ensure that policies preventing\nlabels that bypass the webhook from being applied are enforced. Because this webhook only gets\ncalled for namespace modification requests, the impact of downtime is mitigated, making the\ntheoretical maximum availability less of an issue."),(0,i.kt)("p",null,"Because the manifest is available for customization, the webhook configuration can\nbe tuned to meet your specific needs if they differ from the defaults."),(0,i.kt)("h2",{id:"enable-validation-of-delete-operations"},"Enable Validation of Delete Operations"),(0,i.kt)("h3",{id:"caveats"},"Caveats"),(0,i.kt)("h4",{id:"deletes-are-not-auditable"},"Deletes are not Auditable"),(0,i.kt)("p",null,"Once a resource is deleted, it is gone. This means that non-compliant deletes cannot be\naudited via Gatekeeper's audit mechanism, and increases the importance of webhook-based\nenforcement."),(0,i.kt)("h4",{id:"policies-against-delete-may-not-be-perfectly-enforced"},"Policies Against DELETE May Not be Perfectly Enforced"),(0,i.kt)("p",null,"Since the webhook fails open by default (as described earlier on this page), it is possible\nfor admission requests to have imperfect enforcement, which means some non-compliant deletes\nmay still go through despite the policy. Normally such failures of webhook enforcement could\nbe caught by audit, but deletes are not auditable."),(0,i.kt)("p",null,"It is possible to improve the likelihood of enforcement by configuring the webhook to\n",(0,i.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/next/failing-closed"},"fail closed"),"."),(0,i.kt)("h3",{id:"how-to-enable-validation-of-delete-operations"},"How to Enable Validation of Delete Operations"),(0,i.kt)("p",null,"To enable Delete operations for the ",(0,i.kt)("inlineCode",{parentName:"p"},"validation.gatekeeper.sh"),' admission webhook, add "DELETE" to the list of operations in the ',(0,i.kt)("inlineCode",{parentName:"p"},"gatekeeper-validating-webhook-configuration")," ValidatingWebhookConfiguration as seen in this deployment manifest of gatekeeper: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/blob/v3.1.0-beta.10/deploy/gatekeeper.yaml#L792-L794"},"here")),(0,i.kt)("p",null," So you have"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"   operations:\n   - CREATE\n   - UPDATE\n   - DELETE\n")),(0,i.kt)("p",null,"You can now check for deletes."))}f.isMDXComponent=!0}}]);