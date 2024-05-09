"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5253],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=s(t),f=o,b=l["".concat(u,".").concat(f)]||l[f]||d[f]||i;return t?r.createElement(b,a(a({ref:n},c),{},{components:t})):r.createElement(b,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=l;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},82583:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],p={id:"pubsub-driver",title:"Pubsub Interface/Driver walkthrough"},u=void 0,s={unversionedId:"pubsub-driver",id:"version-v3.15.x/pubsub-driver",title:"Pubsub Interface/Driver walkthrough",description:"This guide provides an overview of the pubsub interface, including details on its structure and functionality. Additionally, it offers instructions on adding a new driver and utilizing providers other than the default provider Dapr.",source:"@site/versioned_docs/version-v3.15.x/pubsub-driver-walkthrough.md",sourceDirName:".",slug:"/pubsub-driver",permalink:"/gatekeeper/website/docs/v3.15.x/pubsub-driver",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.15.x/pubsub-driver-walkthrough.md",tags:[],version:"v3.15.x",frontMatter:{id:"pubsub-driver",title:"Pubsub Interface/Driver walkthrough"},sidebar:"docs",previous:{title:"Security",permalink:"/gatekeeper/website/docs/v3.15.x/security"}},c={},d=[{value:"Pubsub interface and Driver walkthrough",id:"pubsub-interface-and-driver-walkthrough",level:2},{value:"How to add new drivers",id:"how-to-add-new-drivers",level:3},{value:"How to use different  providers",id:"how-to-use-different--providers",level:3}],l={toc:d};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide provides an overview of the pubsub interface, including details on its structure and functionality. Additionally, it offers instructions on adding a new driver and utilizing providers other than the default provider Dapr."),(0,i.kt)("h2",{id:"pubsub-interface-and-driver-walkthrough"},"Pubsub interface and Driver walkthrough"),(0,i.kt)("p",null,"Pubsub's connection interface looks like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// Connection is the interface that wraps pubsub methods.\ntype Connection interface {\n    // Publish single message over a specific topic/channel\n    Publish(ctx context.Context, message interface{}, topic string) error\n\n    // Close connections\n    CloseConnection() error\n\n    // Update an existing connection with new configuration\n    UpdateConnection(ctx context.Context, config interface{}) error\n}\n")),(0,i.kt)("p",null,"As an example, the Dapr driver implements these three methods to publish message, close connection, and update connection respectively. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/blob/master/pkg/pubsub/dapr/dapr.go"},"dapr.go")," to understand the logic that goes in each of these methods. Additionally, the Dapr driver also implements ",(0,i.kt)("inlineCode",{parentName:"p"},"func NewConnection(_ context.Context, config interface{}) (connection.Connection, error)")," method that returns a new client for dapr."),(0,i.kt)("h3",{id:"how-to-add-new-drivers"},"How to add new drivers"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," For example, if we want to add a new driver to use ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," instead of Dapr as a tool to publish violations."),(0,i.kt)("p",null,"A driver must implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connection")," interface and a new ",(0,i.kt)("inlineCode",{parentName:"p"},"func NewConnection(_ context.Context, config interface{}) (connection.Connection, error)")," method that returns a client for the respective tool."),(0,i.kt)("p",null,"This newly added driver's ",(0,i.kt)("inlineCode",{parentName:"p"},"NewConnection")," method must be used to create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"pubSubs")," object in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/blob/master/pkg/pubsub/provider/provider.go"},"provider.go"),". For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'var pubSubs = newPubSubSet(map[string]InitiateConnection{\n  dapr.Name: dapr.NewConnection,\n  "foo": foo.NewConnection,\n},\n)\n')),(0,i.kt)("h3",{id:"how-to-use-different--providers"},"How to use different  providers"),(0,i.kt)("p",null,"To enable audit to use this driver to publish messages, a connection configMap with appropriate ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"provider")," is needed. For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: audit\n  namespace: gatekeeper-system\ndata:\n  provider: "foo"\n  config: |\n    {\n      <config needed for foo connection>\n    }\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"data.provider")," field must exist and must match one of the keys of the ",(0,i.kt)("inlineCode",{parentName:"p"},"pubSubs")," map that was defined earlier to use the corresponding driver. The ",(0,i.kt)("inlineCode",{parentName:"p"},"data.config")," field in the configuration can vary depending on the driver being used. For dapr driver, ",(0,i.kt)("inlineCode",{parentName:"p"},"data.config")," must be ",(0,i.kt)("inlineCode",{parentName:"p"},'{"component": "pubsub"}'),".")))}f.isMDXComponent=!0}}]);