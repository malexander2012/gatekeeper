"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5569],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>c});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=t.createContext({}),p=function(e){var n=t.useContext(r),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},g=function(e){var n=p(e.components);return t.createElement(r.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=i,u=d["".concat(r,".").concat(c)]||d[c]||m[c]||o;return a?t.createElement(u,s(s({ref:n},g),{},{components:a})):t.createElement(u,s({ref:n},g))}));function c(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},69665:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>g,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var t=a(58168),i=a(98587),o=(a(96540),a(15680)),s=["components"],l={id:"gator",title:"The gator CLI"},r=void 0,p={unversionedId:"gator",id:"version-v3.16.x/gator",title:"The gator CLI",description:"Feature State: Gatekeeper version v3.11+ (beta)",source:"@site/versioned_docs/version-v3.16.x/gator.md",sourceDirName:".",slug:"/gator",permalink:"/gatekeeper/website/docs/v3.16.x/gator",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.16.x/gator.md",tags:[],version:"v3.16.x",frontMatter:{id:"gator",title:"The gator CLI"},sidebar:"docs",previous:{title:"Validating Workload Resources using ExpansionTemplate",permalink:"/gatekeeper/website/docs/v3.16.x/expansion"},next:{title:"Working with Workload Resources",permalink:"/gatekeeper/website/docs/v3.16.x/workload-resources"}},g={},m=[{value:"Installation",id:"installation",level:2},{value:"The <code>gator test</code> subcommand",id:"the-gator-test-subcommand",level:2},{value:"Usage",id:"usage",level:3},{value:"Specifying inputs",id:"specifying-inputs",level:4},{value:"Exit Codes",id:"exit-codes",level:4},{value:"Enforcement Actions",id:"enforcement-actions",level:5},{value:"Output Formatting",id:"output-formatting",level:4},{value:"The <code>gator verify</code> subcommand",id:"the-gator-verify-subcommand",level:2},{value:"Writing Test Suites",id:"writing-test-suites",level:3},{value:"Suites",id:"suites",level:3},{value:"Tests",id:"tests",level:3},{value:"Cases",id:"cases",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Validating Metadata-Based Constraint Templates",id:"validating-metadata-based-constraint-templates",level:3},{value:"The <code>gator expand</code> subcommand",id:"the-gator-expand-subcommand",level:2},{value:"Usage",id:"usage-2",level:3},{value:"Non default namespace example",id:"non-default-namespace-example",level:4},{value:"Bundling Policy into OCI Artifacts",id:"bundling-policy-into-oci-artifacts",level:2},{value:"Gotchas",id:"gotchas",level:2},{value:"Duplicate violation messages",id:"duplicate-violation-messages",level:3},{value:"Matching is case-sensitive",id:"matching-is-case-sensitive",level:3},{value:"Referential constraints and Namespace-scoped resources",id:"referential-constraints-and-namespace-scoped-resources",level:3},{value:"Platform Compatibility",id:"platform-compatibility",level:2}],d={toc:m};function c(e){var n=e.components,a=(0,i.A)(e,s);return(0,o.yg)("wrapper",(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Feature State"),": Gatekeeper version v3.11+ (beta)"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"gator")," CLI is a tool for evaluating Gatekeeper ConstraintTemplates and\nConstraints in a local environment."),(0,o.yg)("h2",{id:"installation"},"Installation"),(0,o.yg)("p",null,"To install ",(0,o.yg)("inlineCode",{parentName:"p"},"gator"),", you may either\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/releases"},"download the binary"),"\nrelevant to your system or build it directly from source. On macOS and Linux,\nyou can also install ",(0,o.yg)("inlineCode",{parentName:"p"},"gator")," using ",(0,o.yg)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew"),"."),(0,o.yg)("p",null,"To build from source:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"go install github.com/open-policy-agent/gatekeeper/v3/cmd/gator@master\n")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("inlineCode",{parentName:"p"},"go install")," of ",(0,o.yg)("inlineCode",{parentName:"p"},"gator")," requires Gatekeeper ",(0,o.yg)("inlineCode",{parentName:"p"},"master")," branch or ",(0,o.yg)("inlineCode",{parentName:"p"},"v3.16.0")," and later.")),(0,o.yg)("p",null,"Install with Homebrew:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"brew install gator\n")),(0,o.yg)("h2",{id:"the-gator-test-subcommand"},"The ",(0,o.yg)("inlineCode",{parentName:"h2"},"gator test")," subcommand"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"gator test")," allows users to test a set of Kubernetes objects against a set of\nTemplates and Constraints. The command returns violations when found and\ncommunicates success or failure via its exit status. This command will also\nattempt to expand any resources passed in if a supplied ",(0,o.yg)("inlineCode",{parentName:"p"},"ExpansionTemplate"),"\nmatches these resources."),(0,o.yg)("p",null,"Note: The ",(0,o.yg)("inlineCode",{parentName:"p"},"gator verify")," command was first called ",(0,o.yg)("inlineCode",{parentName:"p"},"gator test"),". These names were\nchanged to better align ",(0,o.yg)("inlineCode",{parentName:"p"},"gator")," with other projects in the open-policy-agent\nspace."),(0,o.yg)("h3",{id:"usage"},"Usage"),(0,o.yg)("h4",{id:"specifying-inputs"},"Specifying inputs"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"gator test")," supports inputs through the ",(0,o.yg)("inlineCode",{parentName:"p"},"--filename")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"--image")," flags, and\nvia stdin. The three methods of input can be used in combination or individually. The ",(0,o.yg)("inlineCode",{parentName:"p"},"--filename")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"--image")," flags are repeatable."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"--filename")," flag can specify a single file or a directory. If a file is\nspecified, that file must end in one of the following extensions: ",(0,o.yg)("inlineCode",{parentName:"p"},".json"),",\n",(0,o.yg)("inlineCode",{parentName:"p"},".yaml"),", ",(0,o.yg)("inlineCode",{parentName:"p"},".yml"),". Directories will be walked, and any files of extensions other\nthan the aforementioned three will be skipped."),(0,o.yg)("p",null,"For example, to test a manifest (piped via stdin) against a folder of policies:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"cat my-manifest.yaml | gator test --filename=template-and-constraints/\n")),(0,o.yg)("p",null,"Or you can specify both as flags:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"gator test -f=my-manifest.yaml -f=templates-and-constraints/\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"\u2757The ",(0,o.yg)("inlineCode",{parentName:"p"},"--image")," flag is in ",(0,o.yg)("em",{parentName:"p"},"alpha")," stage.")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"--image")," flag specifies a content addressable OCI artifact containing\npolicy files. The image(s) will be copied into the local filesystem in a\ntemporary directory, the location of which can be overridden with\nthe ",(0,o.yg)("inlineCode",{parentName:"p"},"--tempdir"),"\nflag. Only files with the aforementioned extensions will be processed. For\ninformation on how to create OCI policy bundles, see\nthe ",(0,o.yg)("a",{parentName:"p",href:"#bundling-policy-into-oci-artifacts"},"Bundling Policy into OCI Artifacts"),"\nsection."),(0,o.yg)("p",null,"For example, to test a manifest (piped via stdin) against an OCI Artifact\ncontaining policies:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"cat my-manifest.yaml | gator test --image=localhost:5000/gator/template-library:v1 \\\n  --image=localhost:5000/gator/constraints:v1\n")),(0,o.yg)("h4",{id:"exit-codes"},"Exit Codes"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"gator test")," will return a ",(0,o.yg)("inlineCode",{parentName:"p"},"0")," exit status when the objects, Templates, and\nConstraints are successfully ingested, no errors occur during evaluation, and no\nviolations are found."),(0,o.yg)("p",null,"An error during evaluation, for example a failure to read a file, will result in\na ",(0,o.yg)("inlineCode",{parentName:"p"},"1")," exit status with an error message printed to stderr."),(0,o.yg)("p",null,"Policy violations will generate a ",(0,o.yg)("inlineCode",{parentName:"p"},"1")," exit status as well, but violation\ninformation will be printed to stdout."),(0,o.yg)("h5",{id:"enforcement-actions"},"Enforcement Actions"),(0,o.yg)("p",null,"While violation data will always be returned when an object is found to be\nviolating a Constraint, the exit status can vary. A constraint with\n",(0,o.yg)("inlineCode",{parentName:"p"},'spec.enforcementAction: ""')," or ",(0,o.yg)("inlineCode",{parentName:"p"},"spec.enforcementAction: deny")," will produce a\n",(0,o.yg)("inlineCode",{parentName:"p"},"1")," exit code, but other enforcement actions like ",(0,o.yg)("inlineCode",{parentName:"p"},"dryrun")," will not. This is\nmeant to make the exit code of ",(0,o.yg)("inlineCode",{parentName:"p"},"1")," consistent with rejection of the object by\nGatekeeper's webhook. A Constraint set to ",(0,o.yg)("inlineCode",{parentName:"p"},"warn")," would not trigger a rejection\nin the webhook, but ",(0,o.yg)("em",{parentName:"p"},"would")," produce a violation message. The same is true for\nthat constraint when used in ",(0,o.yg)("inlineCode",{parentName:"p"},"gator test"),"."),(0,o.yg)("h4",{id:"output-formatting"},"Output Formatting"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"gator test")," supports a ",(0,o.yg)("inlineCode",{parentName:"p"},"--output")," flag that allows the user to specify a\nstructured data format for the violation data. This information is printed to\nstdout."),(0,o.yg)("p",null,"The allowed values are ",(0,o.yg)("inlineCode",{parentName:"p"},"yaml")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"json"),", specified like:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"gator test --filename=manifests-and-policies/ --output=json\n")),(0,o.yg)("h2",{id:"the-gator-verify-subcommand"},"The ",(0,o.yg)("inlineCode",{parentName:"h2"},"gator verify")," subcommand"),(0,o.yg)("h3",{id:"writing-test-suites"},"Writing Test Suites"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"gator verify")," organizes tests into three levels: Suites, Tests, and Cases:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"A Suite is a file which defines Tests."),(0,o.yg)("li",{parentName:"ul"},"A Test declares a ConstraintTemplate, a Constraint, and Cases to test the\nConstraint."),(0,o.yg)("li",{parentName:"ul"},"A Case defines an object to validate and whether the object is expected to\npass validation.")),(0,o.yg)("p",null,"Any file paths declared in a Suite are assumed to be relative to the Suite\nitself. Absolute paths are not allowed. Thus, it is possible to move around a\ndirectory containing a Suite, and the files it uses for tests."),(0,o.yg)("h3",{id:"suites"},"Suites"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper-library/blob/8765ec11c12a523688ed77485c7a458df84266d6/library/general/allowedrepos/suite.yaml"},"An example Suite file"),"\n."),(0,o.yg)("p",null,"To be valid, a Suite file must declare:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"kind: Suite\napiVersion: test.gatekeeper.sh/v1alpha1\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"gator verify")," silently ignores files which do not declare these. A Suite may\ndeclare multiple Tests, each containing different Templates and Constraints.\nEach Test in a Suite is independent."),(0,o.yg)("h3",{id:"tests"},"Tests"),(0,o.yg)("p",null,"Each Suite contains a list of Tests under the ",(0,o.yg)("inlineCode",{parentName:"p"},"tests")," field."),(0,o.yg)("p",null,"A Test compiles a ConstraintTemplate, and instantiates a Constraint for the\nConstraintTemplate. It is an error for the Constraint to have a different type\nthan that defined in the ConstraintTemplate spec.crd.spec.names.kind, or for the\nConstraintTemplate to not compile."),(0,o.yg)("h3",{id:"cases"},"Cases"),(0,o.yg)("p",null,"Each Test contains a list of Cases under the ",(0,o.yg)("inlineCode",{parentName:"p"},"cases")," field."),(0,o.yg)("p",null,"A Case validates an object against a Constraint. The case may specify that the\nobject is expected to pass or fail validation, and may make assertions about the\nreturned violations (if any)."),(0,o.yg)("p",null,"A Case must specify ",(0,o.yg)("inlineCode",{parentName:"p"},"assertions")," and whether it expects violations. The simplest\nway to declare this is:"),(0,o.yg)("p",null,"The Case expects at least one violation:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"assertions:\n- violations: yes\n")),(0,o.yg)("p",null,"The Case expects no violations:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"assertions:\n- violations: no\n")),(0,o.yg)("p",null,"Assertions contain the following fields, acting as conditions for each assertion\nto check."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"violations"),' is either "yes", "no", or a non-negative integer.',(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},'If "yes", at least one violation must otherwise match the assertion.'),(0,o.yg)("li",{parentName:"ul"},'If "no", then no violation messages must otherwise match the assertion.'),(0,o.yg)("li",{parentName:"ul"},'If a nonnegative integer, then exactly that many violations must match.\nDefaults to "yes".'))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"message")," matches violations containing the exact string specified. ",(0,o.yg)("inlineCode",{parentName:"li"},"message"),"\nis case-sensitive. If not specified or explicitly set to empty string, all\nmessages returned by the Constraint are considered matching.")),(0,o.yg)("p",null,"A Case may specify multiple assertions. For example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"  - name: both-disallowed\n    object: samples/repo-must-be-openpolicyagent/disallowed_both.yaml\n    assertions:\n    - violations: 2\n    - message: initContainer\n      violations: 1\n    - message: container\n      violations: 1\n")),(0,o.yg)("p",null,"This Case specifies:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"There are exactly two violations."),(0,o.yg)("li",{parentName:"ul"},'There is exactly one violation containing "initContainer".'),(0,o.yg)("li",{parentName:"ul"},'There is exactly one violation containing "container".')),(0,o.yg)("p",null,"It is valid to assert that no violations match a specified message. For example,\nthe below is valid:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"- violations: yes\n- violations: no\n  message: foobar\n")),(0,o.yg)("p",null,'This Case specifies that there is at least one violation, and no violations\ncontain the string "foobar".'),(0,o.yg)("p",null,"A Case may specify ",(0,o.yg)("inlineCode",{parentName:"p"},"inventory"),", which is a list of paths to files containing\nKubernetes objects to put in ",(0,o.yg)("inlineCode",{parentName:"p"},"data.inventory")," for testing referential\nconstraints."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"inventory:\n- samples/data_objects.yaml\n")),(0,o.yg)("p",null,"More examples of working ",(0,o.yg)("inlineCode",{parentName:"p"},"gator verify")," suites are available in the\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper-library/tree/master/library"},"gatekeeper-library"),"\nrepository."),(0,o.yg)("h3",{id:"usage-1"},"Usage"),(0,o.yg)("p",null,"To run a specific suite:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"gator verify suite.yaml\n")),(0,o.yg)("p",null,"To run all suites in the current directory and all child directories recursively"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"gator verify ./...\n")),(0,o.yg)("p",null,"To only run tests whose full names contain a match for a regular expression, use\nthe ",(0,o.yg)("inlineCode",{parentName:"p"},"run")," flag:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'gator verify path/to/suites/... --run "disallowed"\n')),(0,o.yg)("h3",{id:"validating-metadata-based-constraint-templates"},"Validating Metadata-Based Constraint Templates"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"gator verify")," may be used with an ",(0,o.yg)("a",{parentName:"p",href:"https://pkg.go.dev/k8s.io/kubernetes/pkg/apis/admission#AdmissionReview"},(0,o.yg)("inlineCode",{parentName:"a"},"AdmissionReview")),"\nobject to test your constraints. This can be helpful to simulate a certain operation (",(0,o.yg)("inlineCode",{parentName:"p"},"CREATE"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"DELETE"),", etc.)\nor ",(0,o.yg)("a",{parentName:"p",href:"https://pkg.go.dev/k8s.io/kubernetes@v1.25.3/pkg/apis/authentication#UserInfo"},(0,o.yg)("inlineCode",{parentName:"a"},"UserInfo"))," metadata.\nRecall that the ",(0,o.yg)("inlineCode",{parentName:"p"},"input.review.user")," can be accessed in the Rego code (see ",(0,o.yg)("a",{parentName:"p",href:"/gatekeeper/website/docs/v3.16.x/howto#input-review"},"Input Review")," for more guidance). The ",(0,o.yg)("inlineCode",{parentName:"p"},"AdmissionReview")," object can be specified where you would specify the object under test above:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"  - name: both-disallowed\n    object: path/to/test_admission_review.yaml\n    assertions:\n    - violations: 1\n")),(0,o.yg)("p",null,"Example for testing the ",(0,o.yg)("inlineCode",{parentName:"p"},"UserInfo")," metadata:"),(0,o.yg)("p",null,"AdmissionReview, ConstraintTemplate, Constraint:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'kind: AdmissionReview\napiVersion: admission.k8s.io/v1beta1\nrequest:\n  operation: "UPDATE"\n  userInfo:\n    username: "system:foo"\n  object:\n    kind: Pod\n    labels:\n      - app: "bar"\n---\nkind: ConstraintTemplate\napiVersion: templates.gatekeeper.sh/v1\nmetadata:\n  name: validateuserinfo\nspec:\n  crd:\n    spec:\n      names:\n        kind: ValidateUserInfo\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8svalidateuserinfo\n        violation[{"msg": msg}] {\n          username := input.review.userInfo.username\n          not startswith(username, "system:")\n          msg := sprintf("username is not allowed to perform this operation: %v", [username])\n        }\n---\nkind: ValidateUserInfo\napiVersion: constraints.gatekeeper.sh/v1\nmetadata:\n  name: always-validate\n')),(0,o.yg)("p",null,"Gator Suite:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: test.gatekeeper.sh/v1alpha1\nkind: Suite\ntests:\n- name: userinfo\n  template: template.yaml\n  constraint: constraint.yaml\n  cases:\n  - name: system-user\n    object: admission-review.yaml\n    assertions:\n    - violations: no\n")),(0,o.yg)("p",null,"Note for ",(0,o.yg)("inlineCode",{parentName:"p"},"DELETE")," operation, the ",(0,o.yg)("inlineCode",{parentName:"p"},"oldObject")," should be the object being deleted:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'kind: AdmissionReview\napiVersion: admission.k8s.io/v1beta1\nrequest:\n  operation: "DELETE"\n  userInfo:\n    username: "system:foo"\n  oldObject:\n    kind: Pod\n    labels:\n      - app: "bar"\n')),(0,o.yg)("p",null,"Note that ",(0,o.yg)("a",{parentName:"p",href:"/gatekeeper/website/docs/v3.16.x/audit"},(0,o.yg)("inlineCode",{parentName:"a"},"audit"))," or ",(0,o.yg)("inlineCode",{parentName:"p"},"gator test")," are different enforcement points and they don't have the ",(0,o.yg)("inlineCode",{parentName:"p"},"AdmissionReview")," request metadata."),(0,o.yg)("p",null,"Run ",(0,o.yg)("inlineCode",{parentName:"p"},"gator verify --help")," for more information."),(0,o.yg)("h2",{id:"the-gator-expand-subcommand"},"The ",(0,o.yg)("inlineCode",{parentName:"h2"},"gator expand")," subcommand"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"gator expand")," allows users to test the behavior of their Expansion configs. The\ncommand accepts a file or directory containing the expansion configs, which\nshould include the resource(s) under test, the ",(0,o.yg)("inlineCode",{parentName:"p"},"ExpansionTemplate"),"(s), and\noptionally any Mutation CRs. The command will output a manifest containing the\nexpanded resources."),(0,o.yg)("p",null,"If the mutators or constraints use ",(0,o.yg)("inlineCode",{parentName:"p"},"spec.match.namespaceSelector"),", the namespace the resource\nbelongs to must be supplied in order to correctly evaluate the match criteria.\nIf a resource is specified for expansion but its non-default namespace is not\nsupplied, the command will exit 1. See the ",(0,o.yg)("a",{parentName:"p",href:"#non-default-namespace-example"},"non default namespace example")," below."),(0,o.yg)("h3",{id:"usage-2"},"Usage"),(0,o.yg)("p",null,"Similar to ",(0,o.yg)("inlineCode",{parentName:"p"},"gator test"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"gator expand")," expects a ",(0,o.yg)("inlineCode",{parentName:"p"},"--filename")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"--image"),"\nflag. The flags can be used individually, in combination, and/or repeated."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'gator expand --filename="manifest.yaml" \u2013filename="expansion-policy/"\n')),(0,o.yg)("p",null,"Or, using an OCI Artifact for the expansion configuration:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'gator expand --filename="my-deployment.yaml" --image=localhost:5000/gator/expansion-policy:v1\n')),(0,o.yg)("p",null,"By default, ",(0,o.yg)("inlineCode",{parentName:"p"},"gator expand")," will output to stdout, but a ",(0,o.yg)("inlineCode",{parentName:"p"},"\u2013outputfile")," flag can be\nspecified to write the results to a file."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'gator expand --filename="manifest.yaml" \u2013outputfile="results.yaml"\n')),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"gator expand")," can output in ",(0,o.yg)("inlineCode",{parentName:"p"},"yaml")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"json")," (default is ",(0,o.yg)("inlineCode",{parentName:"p"},"yaml"),")."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'gator expand --filename="manifest.yaml" \u2013format="json"\n')),(0,o.yg)("p",null,"See ",(0,o.yg)("inlineCode",{parentName:"p"},"gator expand \u2013help")," for more details. ",(0,o.yg)("inlineCode",{parentName:"p"},"gator expand")," will exit 1 if there\nis a problem parsing the configs or expanding the resources."),(0,o.yg)("h4",{id:"non-default-namespace-example"},"Non default namespace example"),(0,o.yg)("p",null,"This is an example setup where we include a ",(0,o.yg)("inlineCode",{parentName:"p"},"namespace")," in a ",(0,o.yg)("inlineCode",{parentName:"p"},"manifest.yaml")," that we plan on passing to ",(0,o.yg)("inlineCode",{parentName:"p"},"gator expand"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: expansion.gatekeeper.sh/v1alpha1\nkind: ExpansionTemplate\nmetadata:\n  name: expand-deployments\nspec:\n  applyTo:\n  - groups: [ "apps" ]\n    kinds: [ "Deployment" ]\n    versions: [ "v1" ]\n  templateSource: "spec.template"\n  generatedGVK:\n    kind: "Pod"\n    group: ""\n    version: "v1"\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  namespace: my-ns\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n        args:\n        - "/bin/sh"\n---\napiVersion: mutations.gatekeeper.sh/v1alpha1\nkind: Assign\nmetadata:\n  name: always-pull-image\nspec:\n  applyTo:\n  - groups: [ "" ]\n    kinds: [ "Pod" ]\n    versions: [ "v1" ]\n  location: "spec.containers[name: *].imagePullPolicy"\n  parameters:\n    assign:\n      value: "Always"\n  match:\n    source: "Generated"\n    scope: Namespaced\n    kinds:\n    - apiGroups: [ ]\n      kinds: [ ]\n    namespaceSelector:\n      matchExpressions:\n        - key: admission.gatekeeper.sh/ignore\n          operator: DoesNotExist\n---\n# notice this file is providing the non default namespace `my-ns`\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: my-ns\n')),(0,o.yg)("p",null,"Calling ",(0,o.yg)("inlineCode",{parentName:"p"},"gator expand --filename=manifest.yaml")," will produce the following output:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    app: nginx\n  name: nginx-deployment-pod\n  namespace: my-ns\nspec:\n  containers:\n  - args:\n    - /bin/sh\n    image: nginx:1.14.2\n    imagePullPolicy: Always\n    name: nginx\n    ports:\n    - containerPort: 80\n")),(0,o.yg)("p",null,"However, not including the ",(0,o.yg)("inlineCode",{parentName:"p"},"namespace")," definition in the call to ",(0,o.yg)("inlineCode",{parentName:"p"},"gator expand")," will exit with a status code of 1 and error out with:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"error expanding resources: error expanding resource nginx-deployment: failed to mutate resultant resource nginx-deployment-pod: matching for mutator Assign.mutations.gatekeeper.sh /always-pull-image failed for  Pod my-ns nginx-deployment-pod: failed to run Match criteria: namespace selector for namespace-scoped object but missing Namespace\n")),(0,o.yg)("h2",{id:"bundling-policy-into-oci-artifacts"},"Bundling Policy into OCI Artifacts"),(0,o.yg)("p",null,"It may be useful to bundle policy files into OCI Artifacts for ingestion during\nCI/CD workflows. The workflow could perform validation on inbound objects using\n",(0,o.yg)("inlineCode",{parentName:"p"},"gator test|expand"),"."),(0,o.yg)("p",null,"A policy bundle can be composed of any arbitrary file structure, which ",(0,o.yg)("inlineCode",{parentName:"p"},"gator"),"\nwill walk recursively. Any files that do not end in ",(0,o.yg)("inlineCode",{parentName:"p"},"json|yaml|yml")," will be\nignored. ",(0,o.yg)("inlineCode",{parentName:"p"},"gator")," does not enforce any file schema in the artifacts; it only\nrequires that all files of the support extensions describe valid Kubernetes\nresources."),(0,o.yg)("p",null,"We recommend using the ",(0,o.yg)("a",{parentName:"p",href:"https://oras.land/cli/"},"Oras CLI")," to create OCI\nartifacts. For example, to push a bundle containing the 2 local directories\n",(0,o.yg)("inlineCode",{parentName:"p"},"constraints")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"template_library"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"oras push localhost:5000/gator/policy-bundle:v1 ./constraints/:application/vnd.oci.image.layer.v1.tar+gzip \\\n  ./template_library/:application/vnd.oci.image.layer.v1.tar+gzip\n")),(0,o.yg)("p",null,"This expects that the ",(0,o.yg)("inlineCode",{parentName:"p"},"constraints")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"template_library")," directories are at\nthe path that this command is being run from."),(0,o.yg)("h2",{id:"gotchas"},"Gotchas"),(0,o.yg)("h3",{id:"duplicate-violation-messages"},"Duplicate violation messages"),(0,o.yg)("p",null,"Rego de-duplicates identical violation messages. If you want to be sure that a\ntest returns multiple violations, use a unique message for each violation.\nOtherwise, if you specify an exact number of violations, the test may fail."),(0,o.yg)("h3",{id:"matching-is-case-sensitive"},"Matching is case-sensitive"),(0,o.yg)("p",null,"Message declarations are case-sensitive. If a test fails, check that the\nexpected message's capitalization exactly matches the one in the template."),(0,o.yg)("h3",{id:"referential-constraints-and-namespace-scoped-resources"},"Referential constraints and Namespace-scoped resources"),(0,o.yg)("p",null,"Gator cannot determine if a type is Namespace-scoped or not, so it does not\nassign objects to the default Namespace automatically. Always specify\n",(0,o.yg)("inlineCode",{parentName:"p"},"metadata.namespace")," for Namespace-scoped objects to prevent test failures, or\nto keep from specifying templates which will fail in a real cluster."),(0,o.yg)("h2",{id:"platform-compatibility"},"Platform Compatibility"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"gator")," is only automatically tested on Linux for each commit. If you want to\nuse ",(0,o.yg)("inlineCode",{parentName:"p"},"gator")," on other systems, let us know by replying to\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/issues/1655"},"this issue"),"."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"gator verify")," has been manually tested on Windows and works as of\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/commit/b3ed94406583c85f3102c54a32f362d27f76da96"},"this commit"),"\n. Continued functionality is not guaranteed."),(0,o.yg)("p",null,"File paths which include backslashes are not portable, so suites using such\npaths will not work as intended on Windows."))}c.isMDXComponent=!0}}]);