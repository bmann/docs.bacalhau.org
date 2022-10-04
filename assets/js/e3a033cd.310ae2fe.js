"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[798],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(3117),o=(n(7294),n(3905));const r={sidebar_label:"Molecular Simulation with OpenMM",sidebar_position:1},i="Molecular Simulation with OpenMM",l={unversionedId:"examples/molecular-dynamics/openmm/index",id:"examples/molecular-dynamics/openmm/index",title:"Molecular Simulation with OpenMM",description:"Open In Colab",source:"@site/docs/examples/molecular-dynamics/openmm/index.md",sourceDirName:"examples/molecular-dynamics/openmm",slug:"/examples/molecular-dynamics/openmm/",permalink:"/examples/molecular-dynamics/openmm/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/molecular-dynamics/openmm/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Molecular Simulation with OpenMM",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Molecular Dynamics",permalink:"/examples/molecular-dynamics/"},next:{title:"CLI Reference",permalink:"/all-flags"}},s={},p=[{value:"Goal",id:"goal",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Protein data",id:"protein-data",level:2},{value:"Prepare &amp; Run the task",id:"prepare--run-the-task",level:2},{value:"Upload the Data to IPFS",id:"upload-the-data-to-ipfs",level:3},{value:"Create a Docker Image to Process the Data",id:"create-a-docker-image-to-process-the-data",level:3},{value:"Test the Container Locally",id:"test-the-container-locally",level:3},{value:"Run a Bacalhau Job",id:"run-a-bacalhau-job",level:3},{value:"Get Results",id:"get-results",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"molecular-simulation-with-openmm"},"Molecular Simulation with OpenMM"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/molecular-dynamics/openmm/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=molecular-dynamics/openmm/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openmm/openmm"},"OpenMM")," is a toolkit for molecular simulation. Physic based libraries like OpenMM are then useful for refining the structure and exploring functional interactions with other molecules. It provides a combination of extreme flexibility (through custom forces and integrators), openness, and high performance (especially on recent GPUs) that make it truly unique among simulation codes."),(0,o.kt)("p",null,"References:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openmm/openmm"},"https://github.com/openmm/openmm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Openzyme/openzyme"},"https://github.com/Openzyme/openzyme")," (Docker scaffolding to run OpenMM)")),(0,o.kt)("h3",{id:"goal"},"Goal"),(0,o.kt)("p",null,"The goal of this notebook is to showcase how to containerize an OpenMM workload so that it can be executed on the Bacalhau network and to take advantage of the distributed storage & compute resources."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"This example requires Docker. If you don't have Docker installed, you can install it from ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"here"),". Docker commands will not work on hosted notebooks like Google Colab, but the Bacalhau commands will."),(0,o.kt)("p",null,"Make sure you have the latest ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau")," client installed by following the ",(0,o.kt)("a",{parentName:"p",href:"../../../getting-started/installation"},"getting started instructions")),(0,o.kt)("h2",{id:"protein-data"},"Protein data"),(0,o.kt)("p",null,"We use a processed 2DRI dataset that represents the ribose binding protein in bacterial transport and chemotaxis. The source organism is the known ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Escherichia_coli"},"Escherichia coli")," bacteria.\nYou can find details on this data at the related ",(0,o.kt)("a",{parentName:"p",href:"https://www.rcsb.org/structure/2dri"},"RCSB Protein Data Bank page"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"attachment:4d31b531-06f6-4286-8fc3-4e654dc1628d.png",alt:"image.png"})),(0,o.kt)("p",null,"Protein data can be stored in a ",(0,o.kt)("inlineCode",{parentName:"p"},".pdb")," file, this is a human readable format.\nIt provides for description and annotation of protein and nucleic acid structures including atomic coordinates, secondary structure assignments, as well as atomic connectivity.\nPlease find more info about PDB format in ",(0,o.kt)("a",{parentName:"p",href:"https://www.cgl.ucsf.edu/chimera/docs/UsersGuide/tutorials/pdbintro.html"},"this article"),"."),(0,o.kt)("p",null,"Let us sneak peak into the dataset by printing the head of the file.\nAmong other thigns, we can see it contains a number of ATOM records. These describe the coordinates of the atoms that are part of the protein."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"head ./dataset/2dri-processed.pdb\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"REMARK   1 CREATED WITH OPENMM 7.6, 2022-07-12\nCRYST1   81.309   81.309   81.309  90.00  90.00  90.00 P 1           1 \nATOM      1  N   LYS A   1      64.731   9.461  59.430  1.00  0.00           N  \nATOM      2  CA  LYS A   1      63.588  10.286  58.927  1.00  0.00           C  \nATOM      3  HA  LYS A   1      62.707   9.486  59.038  1.00  0.00           H  \nATOM      4  C   LYS A   1      63.790  10.671  57.468  1.00  0.00           C  \nATOM      5  O   LYS A   1      64.887  11.089  57.078  1.00  0.00           O  \nATOM      6  CB  LYS A   1      63.458  11.567  59.749  1.00  0.00           C  \nATOM      7  HB2 LYS A   1      63.333  12.366  58.879  1.00  0.00           H  \nATOM      8  HB3 LYS A   1      64.435  11.867  60.372  1.00  0.00           H  \n")),(0,o.kt)("h2",{id:"prepare--run-the-task"},"Prepare & Run the task"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Upload the data to IPFS"),(0,o.kt)("li",{parentName:"ol"},"Create a docker image with the code and dependencies"),(0,o.kt)("li",{parentName:"ol"},"Run the docker image on the Bacalhau network using the IPFS data")),(0,o.kt)("h3",{id:"upload-the-data-to-ipfs"},"Upload the Data to IPFS"),(0,o.kt)("p",null,'The first step is to upload the data to IPFS. The simplest way to do this is to use a third party service to "pin" data to the IPFS network, to ensure that the data exists and is available. To do this you need an account with a pinning service like ',(0,o.kt)("a",{parentName:"p",href:"https://web3.storage/"},"web3.storage")," or ",(0,o.kt)("a",{parentName:"p",href:"https://pinata.cloud/"},"Pinata"),". Once registered you can use their UI or API or SDKs to upload files."),(0,o.kt)("p",null,"For the purposes of this example I pinned the ",(0,o.kt)("inlineCode",{parentName:"p"},"2dri-processed.pdb")," file to IPFS via ",(0,o.kt)("a",{parentName:"p",href:"https://web3.storage/"},"web3.storage"),"."),(0,o.kt)("p",null,"This resulted in the IPFS CID of ",(0,o.kt)("inlineCode",{parentName:"p"},"bafybeig63whfqyuvwqqrp5456fl4anceju24ttyycexef3k5eurg5uvrq4"),"."),(0,o.kt)("h3",{id:"create-a-docker-image-to-process-the-data"},"Create a Docker Image to Process the Data"),(0,o.kt)("p",null,"Next we will create the docker image that will process the data. The docker image will contain the code and dependencies needed to perform the conversion. This code originated ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wesfloyd/openmm-test"},"wesfloyd"),". Thank you! \ud83e\udd17"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For more information about working with custom containers, see the ",(0,o.kt)("a",{parentName:"p",href:"../../workload-onboarding/custom-containers/"},"custom containers example"),".")),(0,o.kt)("p",null,"The key thing to watch out for here is the paths to the data. I'm using the default bacalhau output directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/outputs")," to write my data to. And the input data is mounted to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/inputs")," directory. But as you will see in a moment, web3.storage has added another ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," directory that we need to account for."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile run_openmm_simulation.py\nimport os\nfrom openmm import *\nfrom openmm.app import *\nfrom openmm.unit import *\n\n# Input Files\ninput_path = '/inputs/2dri-processed.pdb'\nos.path.exists(input_path) # check if input file exists\npdb = PDBFile(input_path)\nforcefield = ForceField('amber14-all.xml', 'amber14/tip3pfb.xml')\n\n# Output\noutput_path = '/outputs/final_state.pdbx'\nif not os.path.exists(os.path.dirname(output_path)): # check if ouput dir exists\n    os.makedirs(os.path.dirname(output_path))\n\n# System Configuration\n\nnonbondedMethod = PME\nnonbondedCutoff = 1.0*nanometers\newaldErrorTolerance = 0.0005\nconstraints = HBonds\nrigidWater = True\nconstraintTolerance = 0.000001\nhydrogenMass = 1.5*amu\n\n# Integration Options\n\ndt = 0.002*picoseconds\ntemperature = 310*kelvin\nfriction = 1.0/picosecond\npressure = 1.0*atmospheres\nbarostatInterval = 25\n\n# Simulation Options\n\nsteps = 10\nequilibrationSteps = 0\n#platform = Platform.getPlatformByName('CUDA')\nplatform = Platform.getPlatformByName('CPU')\n#platformProperties = {'Precision': 'single'}\nplatformProperties = {}\ndcdReporter = DCDReporter('trajectory.dcd', 1000)\ndataReporter = StateDataReporter('log.txt', 1000, totalSteps=steps,\n    step=True, time=True, speed=True, progress=True, elapsedTime=True, remainingTime=True, potentialEnergy=True, kineticEnergy=True, totalEnergy=True, temperature=True, volume=True, density=True, separator='\\t')\ncheckpointReporter = CheckpointReporter('checkpoint.chk', 1000)\n\n# Prepare the Simulation\n\nprint('Building system...')\ntopology = pdb.topology\npositions = pdb.positions\nsystem = forcefield.createSystem(topology, nonbondedMethod=nonbondedMethod, nonbondedCutoff=nonbondedCutoff,\n    constraints=constraints, rigidWater=rigidWater, ewaldErrorTolerance=ewaldErrorTolerance, hydrogenMass=hydrogenMass)\nsystem.addForce(MonteCarloBarostat(pressure, temperature, barostatInterval))\nintegrator = LangevinMiddleIntegrator(temperature, friction, dt)\nintegrator.setConstraintTolerance(constraintTolerance)\nsimulation = Simulation(topology, system, integrator, platform, platformProperties)\nsimulation.context.setPositions(positions)\n\n# Minimize and Equilibrate\n\nprint('Performing energy minimization...')\nsimulation.minimizeEnergy()\nprint('Equilibrating...')\nsimulation.context.setVelocitiesToTemperature(temperature)\nsimulation.step(equilibrationSteps)\n\n# Simulate\n\nprint('Simulating...')\nsimulation.reporters.append(dcdReporter)\nsimulation.reporters.append(dataReporter)\nsimulation.reporters.append(checkpointReporter)\nsimulation.currentStep = 0\nsimulation.step(steps)\n\n# Write file with final simulation state\n\nstate = simulation.context.getState(getPositions=True, enforcePeriodicBox=system.usesPeriodicBoundaryConditions())\nwith open(output_path, mode=\"w+\") as file:\n    PDBxFile.writeFile(simulation.topology, state.getPositions(), file)\nprint('Simulation complete, file written to disk at: {}'.format(output_path))\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Overwriting run_openmm_simulation.py\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile Dockerfile\nFROM conda/miniconda3\n\nRUN conda install -y -c conda-forge openmm\n\nWORKDIR /project\n\nCOPY ./run_openmm_simulation.py /project\n\nLABEL org.opencontainers.image.source https://github.com/bacalhau-project/examples\n\nCMD ["python","run_openmm_simulation.py"]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Overwriting Dockerfile\n")),(0,o.kt)("h3",{id:"test-the-container-locally"},"Test the Container Locally"),(0,o.kt)("p",null,"Before we upload the container to the Bacalhau network, we should test it locally to make sure it works."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n    -v $(pwd)/dataset:/inputs/ \\\n    -v $(pwd)/output:/output \\\n    ghcr.io/bacalhau-project/examples/openmm:0.3\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Building system...\nPerforming energy minimization...\nEquilibrating...\nSimulating...\nSimulation complete, file written to disk at: /outputs/final_state.pdbx\n")),(0,o.kt)("h3",{id:"run-a-bacalhau-job"},"Run a Bacalhau Job"),(0,o.kt)("p",null,"Now that we have the data in IPFS and the docker image pushed, we can run a job on the Bacalhau network."),(0,o.kt)("p",null,"I find it useful to first run a simple test with a known working container to ensure the data is located in the place I expect, because some storage providers add their own opinions. E.g. web3.storage wraps the directory uploads in a top level directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf stdout stderr volumes shards\nbacalhau docker run \\\n        --download \\\n        --inputs bafybeig63whfqyuvwqqrp5456fl4anceju24ttyycexef3k5eurg5uvrq4 \\\n        ubuntu -- ls /inputs\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"423d220d-fef4-41ea-ae08-f6a9361bff38\n\n\n\x1b[90m14:22:16.554 |\x1b[0m \x1b[32mINF\x1b[0m \x1b[1mipfs/downloader.go:115\x1b[0m\x1b[36m >\x1b[0m Found 1 result shards, downloading to temporary folder.\n\x1b[90m14:22:19.096 |\x1b[0m \x1b[32mINF\x1b[0m \x1b[1mipfs/downloader.go:195\x1b[0m\x1b[36m >\x1b[0m Combining shard from output volume 'outputs' to final location: '/Users/enricorotundo/winderresearch/ProtocolLabs/examples/todo/openmm'\n\n\n\n2dri-processed.pdb\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf stdout stderr volumes shards\nbacalhau docker run \\\n    --inputs bafybeig63whfqyuvwqqrp5456fl4anceju24ttyycexef3k5eurg5uvrq4 \\\n    --download \\\n    ghcr.io/bacalhau-project/examples/openmm:0.3 -- ls -la /inputs/\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"44e995c7-d6fd-4e69-a461-e88e5f6dc01c\n")),(0,o.kt)("p",null,"And finally let's run the full job. This time I will not download the data immediately, because the job takes a few minutes to complete. The commands are below, but you will need to wait until the job completes before they work."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run \\\n    --inputs bafybeig63whfqyuvwqqrp5456fl4anceju24ttyycexef3k5eurg5uvrq4 \\\n    --wait \\\n    ghcr.io/bacalhau-project/examples/openmm:0.3 -- python run_openmm_simulation.py\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"env: JOB_ID=971da05e-6de0-42d7-a5b5-b91df199c548\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau list --id-filter=${JOB_ID} --no-style\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," CREATED   ID        JOB                      STATE      VERIFIED  PUBLISHED               \n 12:26:13  971da05e  Docker ghcr.io/bacal...  Completed            /ipfs/QmT1QECs5NsQLj... \n")),(0,o.kt)("h3",{id:"get-results"},"Get Results"),(0,o.kt)("p",null,"Now let's download and display the result from the results directory. We can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau get")," command to download the results from the output data volume. The ",(0,o.kt)("inlineCode",{parentName:"p"},"--output-dir")," argument specifies the directory to download the results to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf stdout stderr volumes shards\nbacalhau get ${JOB_ID} # Download the results\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\x1b[90m14:30:50.098 |\x1b[0m \x1b[32mINF\x1b[0m \x1b[1mbacalhau/get.go:67\x1b[0m\x1b[36m >\x1b[0m Fetching results of job '971da05e-6de0-42d7-a5b5-b91df199c548'...\n\x1b[90m14:30:51.304 |\x1b[0m \x1b[32mINF\x1b[0m \x1b[1mipfs/downloader.go:115\x1b[0m\x1b[36m >\x1b[0m Found 1 result shards, downloading to temporary folder.\n\x1b[90m14:30:56.784 |\x1b[0m \x1b[32mINF\x1b[0m \x1b[1mipfs/downloader.go:195\x1b[0m\x1b[36m >\x1b[0m Combining shard from output volume 'outputs' to final location: '/Users/enricorotundo/winderresearch/ProtocolLabs/examples/todo/openmm'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"")))}m.isMDXComponent=!0}}]);