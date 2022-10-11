"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[3645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Networking",sidebar_position:120},i="Networking",p={unversionedId:"running-node/networking",id:"running-node/networking",title:"Networking",description:"Bacalhau uses libp2p under the hood to communicate with other nodes on the network.",source:"@site/docs/running-node/networking.md",sourceDirName:"running-node",slug:"/running-node/networking",permalink:"/running-node/networking",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/running-node/networking.md",tags:[],version:"current",sidebarPosition:120,frontMatter:{sidebar_label:"Networking",sidebar_position:120},sidebar:"documentationSidebar",previous:{title:"Test Network",permalink:"/running-node/test-network"},next:{title:"Storage Providers",permalink:"/running-node/storage-providers"}},l={},s=[{value:"Peer identity",id:"peer-identity",level:2},{value:"Configure peers",id:"configure-peers",level:2},{value:"libp2p swarm port",id:"libp2p-swarm-port",level:2},{value:"REST api port",id:"rest-api-port",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"networking"},"Networking"),(0,a.kt)("p",null,"Bacalhau uses ",(0,a.kt)("a",{parentName:"p",href:"https://libp2p.io/"},"libp2p")," under the hood to communicate with other nodes on the network."),(0,a.kt)("h2",{id:"peer-identity"},"Peer identity"),(0,a.kt)("p",null,"Because bacalhau is built using libp2p, the concept of peer identity is used to identify nodes on the network."),(0,a.kt)("p",null,"When you start a bacalhau node using ",(0,a.kt)("inlineCode",{parentName:"p"},"bacalhau serve"),", it will look for a RSA private key in the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bacalhau")," directory. If it doesn't find one, it will generate a new one and save it there."),(0,a.kt)("p",null,"You can override the directory where the private key is stored using the ",(0,a.kt)("inlineCode",{parentName:"p"},"BACALHAU_PATH")," environment variable."),(0,a.kt)("p",null,"Private keys are named after the port used for the libp2p connection which defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"1235"),". By default when first starting a node, the private key will be stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bacalhau/private_key.1235"),"."),(0,a.kt)("p",null,"The peer identity is derived from the private key and is used to identify the node on the network. You can get the peer identity of a node by running ",(0,a.kt)("inlineCode",{parentName:"p"},"bacalhau id"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau id\n")),(0,a.kt)("h2",{id:"configure-peers"},"Configure peers"),(0,a.kt)("p",null,"By default , running ",(0,a.kt)("inlineCode",{parentName:"p"},"bacalhau serve")," will connect to the following nodes (which are thge default bootstrap nodes run by Protocol labs):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/ip4/35.245.115.191/tcp/1235/p2p/QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL\n/ip4/35.245.61.251/tcp/1235/p2p/QmXaXu9N5GNetatsvwnTfQqNtSeKAD6uCmarbh3LMRYAcF\n/ip4/35.245.251.239/tcp/1235/p2p/QmYgxZiySj3MRkwLSL4X2MF5F9f2PMhAE3LV49XkfNL1o3\n")),(0,a.kt)("p",null,"Bacalhau uses libp2p ",(0,a.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/addressing/"},"multiaddresses")," to identify nodes on the network."),(0,a.kt)("p",null,"If you want to connect to other nodes, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--peer")," flag to specify additional peers to connect to (comma separated list)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau serve \\\n  --peer /ip4/35.245.115.191/tcp/1235/p2p/QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL,/ip4/35.245.61.251/tcp/1235/p2p/QmXaXu9N5GNetatsvwnTfQqNtSeKAD6uCmarbh3LMRYAcF\n")),(0,a.kt)("h2",{id:"libp2p-swarm-port"},"libp2p swarm port"),(0,a.kt)("p",null,"The default port the libp2p swarm listens on is ",(0,a.kt)("strong",{parentName:"p"},"1235"),"."),(0,a.kt)("p",null,"You can configure the swarm port using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--port")," flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau serve \\\n  --port 1235\n")),(0,a.kt)("p",null,"To ensure that the node can communicate with other nodes on the network, make sure the swarm port is open and accesible by other nodes."),(0,a.kt)("h2",{id:"rest-api-port"},"REST api port"),(0,a.kt)("p",null,"The Bacalhau node exposes a REST api that can be used to query the node for information."),(0,a.kt)("p",null,"The default port the REST api listens on is ",(0,a.kt)("strong",{parentName:"p"},"1234"),"."),(0,a.kt)("p",null,"The default network interface the REST api listens on is ",(0,a.kt)("strong",{parentName:"p"},"0.0.0.0"),"."),(0,a.kt)("p",null,"You can configure the REST api port using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--api-port")," flag:"),(0,a.kt)("p",null,"You can also configure which network interface the REST api will bind to using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--host")," flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau serve \\\n  --api-port 1234 \\\n  --host 127.0.0.1\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--host")," flag to restrict network access to the REST api.")))}c.isMDXComponent=!0}}]);