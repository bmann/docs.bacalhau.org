"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[3391],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>d});var o=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),u=function(e){var a=o.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=u(e.components);return o.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},h=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=u(t),d=n,m=h["".concat(i,".").concat(d)]||h[d]||p[d]||r;return t?o.createElement(m,l(l({ref:a},s),{},{components:t})):o.createElement(m,l({ref:a},s))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,l=new Array(r);l[0]=h;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var u=2;u<r;u++)l[u]=t[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9560:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var o=t(7462),n=(t(7294),t(3905));const r={sidebar_label:"Bacalhau Docker Image",sidebar_position:99,description:"How to use the Bacalhau Docker image"},l="Bacalhau Docker Image",c={unversionedId:"examples/workload-onboarding/bacalhau-docker-image/index",id:"examples/workload-onboarding/bacalhau-docker-image/index",title:"Bacalhau Docker Image",description:"How to use the Bacalhau Docker image",source:"@site/docs/examples/workload-onboarding/bacalhau-docker-image/index.md",sourceDirName:"examples/workload-onboarding/bacalhau-docker-image",slug:"/examples/workload-onboarding/bacalhau-docker-image/",permalink:"/examples/workload-onboarding/bacalhau-docker-image/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/bacalhau-docker-image/index.md",tags:[],version:"current",lastUpdatedAt:1674656892,formattedLastUpdatedAt:"Jan 25, 2023",sidebarPosition:99,frontMatter:{sidebar_label:"Bacalhau Docker Image",sidebar_position:99,description:"How to use the Bacalhau Docker image"},sidebar:"documentationSidebar",previous:{title:"R - Facebook Prophet - Custom Container",permalink:"/examples/workload-onboarding/r-custom-docker-prophet/"},next:{title:"Scripting Bacalhau with Python",permalink:"/examples/workload-onboarding/python-script/"}},i={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Pull the Container",id:"pull-the-container",level:2},{value:"Running Common Bacalhau Commands",id:"running-common-bacalhau-commands",level:2},{value:"Check the Version",id:"check-the-version",level:3},{value:"Submit a Docker Job",id:"submit-a-docker-job",level:3},{value:"Sumbit a Job With Output Files",id:"sumbit-a-job-with-output-files",level:3},{value:"Need Support?",id:"need-support",level:2}],s={toc:u};function p(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bacalhau-docker-image"},"Bacalhau Docker Image"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/bacalhau-docker-image/index.ipynb"},(0,n.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/bacalhau-docker-image/index.ipynb"},(0,n.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,n.kt)("p",null,"This example shows you how to run some common client-side Bacalhau tasks using the Bacalhau Docker image."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Install Docker"))),(0,n.kt)("h2",{id:"pull-the-container"},"Pull the Container"),(0,n.kt)("p",null,"The first step is to pull the Bacalhau Docker image from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/orgs/bacalhau-project/packages/container/package/bacalhau"},"Github container registry"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/bacalhau-project/bacalhau:latest\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"latest: Pulling from bacalhau-project/bacalhau\nDigest: sha256:bdf27fb3af4accee119941eefa719d4d2892b6774f1be603a02e6da6bb56c492\nStatus: Image is up to date for ghcr.io/bacalhau-project/bacalhau:latest\nghcr.io/bacalhau-project/bacalhau:latest\n")),(0,n.kt)("p",null,"You can also pull a specific version of the image, e.g.:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/bacalhau-project/bacalhau:v0.3.16\n")),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},'Remember that the "latest" tag is just a string. It doesn\'t refer to the latest version of the Bacalhau client, it refers to an image that has the "latest" tag. Therefore, if your machine has already downloaded the "latest" image, it won\'t download it again. To force a download, you can use the ',(0,n.kt)("inlineCode",{parentName:"p"},"--no-cache")," flag.")),(0,n.kt)("h2",{id:"running-common-bacalhau-commands"},"Running Common Bacalhau Commands"),(0,n.kt)("p",null,"Now we're ready to run some common Bacalhau tasks."),(0,n.kt)("h3",{id:"check-the-version"},"Check the Version"),(0,n.kt)("p",null,"It's always a good idea to check the version of the client you're using. Mismatched versions can cause unexpected behaviour; a bit like trying to shove a US quarter into a UK pound coin slot. It works, but you're probably not getting your coin back."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -t ghcr.io/bacalhau-project/bacalhau:latest version\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Client Version: v0.3.16\nServer Version: v0.3.16\n")),(0,n.kt)("h3",{id:"submit-a-docker-job"},"Submit a Docker Job"),(0,n.kt)("p",null,"Yes, that's right, we can submit a Docker job using the Bacalhau Docker image..."),(0,n.kt)("p",null,"In this example, I run an ubuntu-based job that echo's some stuff."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -t ghcr.io/bacalhau-project/bacalhau:latest \\\n    docker run \\\n        --id-only \\\n        --wait \\\n        ubuntu:latest -- \\\n            sh -c 'uname -a && echo \"Hello from Docker Bacalhau!\"'\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"env: JOB_ID=a53f290c-1b45-4454-be6e-050c0f4e8741\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -t ghcr.io/bacalhau-project/bacalhau:latest \\\n    describe $JOB_ID \\\n        | grep -A 2 "stdout: |"\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"              stdout: |\n                Linux 8eac0284b095 5.15.0-1027-gcp #34-Ubuntu SMP Fri Jan 6 01:03:08 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux\n                Hello from Docker Bacalhau!\n")),(0,n.kt)("h3",{id:"sumbit-a-job-with-output-files"},"Sumbit a Job With Output Files"),(0,n.kt)("p",null,"One inconvenience that you'll see is that you'll need to mount directories into the container to access files. This is because the container is running in a separate environment to your host machine. The example below steals one of the examples from the stable-diffusion demo."),(0,n.kt)("p",null,"The first part of the example should look familiar, except for the Docker commands."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -t ghcr.io/bacalhau-project/bacalhau:latest \\\n    docker run \\\n        --id-only \\\n        --wait \\\n        --gpu 1 \\\n        ghcr.io/bacalhau-project/examples/stable-diffusion-gpu:0.0.1 -- \\\n            python main.py --o ./outputs --p "A Docker whale and a cod having a conversation about the state of the ocean"\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"env: JOB_ID=ca7cd1b8-9a84-4f1c-b180-a30785fb0990\n")),(0,n.kt)("p",null,"This is where things get a bit more spicy. We need to mount a directory into the container so when you retrieve the results they are copied to the host machine."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -t -v $(pwd)/results:/results ghcr.io/bacalhau-project/bacalhau:latest \\\n    get $JOB_ID --output-dir /results\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Fetching results of job 'ca7cd1b8-9a84-4f1c-b180-a30785fb0990'...\n2023/01/25 14:12:58 failed to sufficiently increase receive buffer size (was: 208 kiB, wanted: 2048 kiB, got: 416 kiB). See https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size for details.\nResults for job 'ca7cd1b8-9a84-4f1c-b180-a30785fb0990' have been written to...\n/results\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"png",src:t(254).Z,width:"512",height:"512"})),(0,n.kt)("p",null,"I'm not entirely sure what's going on with that image. It looks like half an Orca on a beach holiday. But it's a good example of how to mount the results directory into the container. This pattern should work with any job that produces output files."),(0,n.kt)("h2",{id:"need-support"},"Need Support?"),(0,n.kt)("p",null,"If have questions or need support or guidance, please reach out to the ",(0,n.kt)("a",{parentName:"p",href:"https://filecoin.io/slack"},"Bacalhau team via Slack (#bacalhau channel)")))}p.isMDXComponent=!0},254:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/index_16_0-dcbd0221aa72979d8df5504b1b77ca8c.png"}}]);