"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[149],{1149:function(e,t,r){r.d(t,{W:function(){return E},u:function(){return g}});var n=r(4389),a=r(7294),s=r(4306),c=r(4718),i=r(9499),o=r(29),l=r(7794),u=r.n(l),p=r(5065),d=r(1118),m=(0,r(4671).Z)(function(e,t){var r;return{balance:0,getUserSOLBalance:(r=(0,o.Z)(u().mark(function t(r,n){var a;return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=0,t.prev=1,t.next=4,n.getBalance(r,"confirmed");case 4:a=t.sent/p.LAMPORTS_PER_SOL,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log("error getting balance: ",t.t0);case 11:e(function(e){e.balance=a,console.log("balance updated, ",a)});case 12:case"end":return t.stop()}},t,null,[[1,8]])})),function(e,t){return r.apply(this,arguments)})}}),h=r(5893);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var f=function(){var e=(0,c.R)().connection,t=(0,s.O)().publicKey,r=m().getUserSOLBalance,n=(0,a.useCallback)((0,o.Z)(u().mark(function n(){var a,s;return u().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=4;break}return console.log("error","Wallet not connected!"),(0,d.h)({type:"error",message:"error",description:"Wallet not connected!"}),n.abrupt("return");case 4:return a="",n.prev=5,n.next=8,e.requestAirdrop(t,p.LAMPORTS_PER_SOL);case 8:return a=n.sent,n.next=11,e.getLatestBlockhash();case 11:return s=n.sent,n.next=14,e.confirmTransaction(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({signature:a},s),"confirmed");case 14:(0,d.h)({type:"success",message:"Airdrop successful!",txid:a}),r(t,e),n.next=22;break;case 18:n.prev=18,n.t0=n.catch(5),(0,d.h)({type:"error",message:"Airdrop failed!",description:null===n.t0||void 0===n.t0?void 0:n.t0.message,txid:a}),console.log("error","Airdrop failed! ".concat(null===n.t0||void 0===n.t0?void 0:n.t0.message),a);case 22:case"end":return n.stop()}},n,null,[[5,18]])})),[t,e,r]);return(0,h.jsx)("div",{className:"flex flex-row justify-center",children:(0,h.jsxs)("div",{className:"relative group items-center",children:[(0,h.jsx)("div",{className:"m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500  rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"}),(0,h.jsx)("button",{className:"px-8 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black",onClick:n,children:(0,h.jsx)("span",{children:"Airdrop 1 "})})]})})},g=function(e){(0,n.Z)(e);var t=(0,s.O)(),r=(0,c.R)().connection,i=m(function(e){return e.balance}),o=m().getUserSOLBalance;return(0,a.useEffect)(function(){t.publicKey&&(console.log(t.publicKey.toBase58()),o(t.publicKey,r))},[t.publicKey,r,o]),(0,h.jsx)("div",{className:"md:hero mx-auto p-4",children:(0,h.jsxs)("div",{className:"md:hero-content flex flex-col",children:[(0,h.jsx)("div",{className:"mt-6",children:(0,h.jsx)("h1",{className:"text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4",children:"BELIVEN WsOS 2023 PET DAPP"})}),(0,h.jsxs)("h4",{className:"md:w-full text-2x1 md:text-4xl text-center text-slate-300 my-2",children:[(0,h.jsx)("p",{children:"This DAPP allows users to create and take care of virtual pets as program-derived accounts (PDAs) on the Solana blockchain."}),(0,h.jsx)("p",{className:"text-slate-500 text-2x1 leading-relaxed"})]}),(0,h.jsxs)("h4",{className:"md:w-full text-2x1 md:text-2xl text-center text-slate-300 my-2",children:[(0,h.jsx)("p",{children:"The user can create a pet by providing a name argument that is no longer than 20 characters in length, and the pet will be initialized with the following parameters.  "})," "]}),(0,h.jsx)("p",{className:"text-slate-500 text-2x1 leading-relaxed"}),(0,h.jsxs)("h4",{className:"md:w-full text-2x1 md:text-2xl text-center text-slate-300 my-2",children:["Name",(0,h.jsx)("p",{children:"Owner"}),(0,h.jsx)("p",{children:"Balance"}),(0,h.jsx)("p",{children:"Happiness"}),(0,h.jsx)("p",{children:"Last Fed Timestamp"}),(0,h.jsx)("p",{children:"Last Time Happiness got Decreased"}),(0,h.jsx)("p",{children:"BornDate"})]}),(0,h.jsxs)("h4",{className:"md:w-full text-2x1 md:text-2xl text-center text-slate-300 my-2",children:[(0,h.jsx)("p",{children:"The user can feed the Pet, by providing an amount argument. "}),(0,h.jsx)("p",{children:"After feeding the pet by a fixed value, its happiness will increase by a fixed amount, and the Last Fed Timestamp attribute will be updated with the current timestamp."})," "]}),(0,h.jsx)("p",{className:"text-slate-500 text-2x1 leading-relaxed"}),(0,h.jsxs)("h4",{className:"md:w-full text-2x1 md:text-2xl text-center text-slate-300 my-2",children:[(0,h.jsx)("p",{children:"The app also provides a feature to check for unfed pets, allowing to monitor the feeding status of the pets. "}),(0,h.jsx)("p",{children:"For instance, if a pet has not been fed for the last 24 hours, and its happiness has not decreased during this period, and its current happiness level is greater than 0, then the application will decrease its happiness by a fixed amount.   "})," "]}),(0,h.jsx)("p",{className:"text-slate-500 text-2x1 leading-relaxed",children:"*Notes : For testing purposes, I have declared this variable to be 60 seconds."}),(0,h.jsx)("p",{className:"text-slate-500 text-2x1 leading-relaxed",children:" FEEDBACK :Most of the time, I spent searching for how to implement an iter_mut() method to iterate through all the pet accounts created and update them in a single atomic transaction. I attempted to create a vector of pets and use for pet in &mut ctx.accounts.pets.iter_mut(), but I was unsuccessful. I also tried to create an allpets list and call it in the function and in the CheckForUnfed Struct, but that also did not work. However, I am not going to give up, and I will continue to work on scaling this application the most possible."}),(0,h.jsx)("div",{className:"relative group",children:(0,h.jsx)("div",{className:"absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-lg blur opacity-40 animate-tilt"})}),(0,h.jsxs)("div",{className:"flex flex-col mt-2",children:[(0,h.jsx)(f,{}),(0,h.jsx)("h4",{className:"md:w-full text-2xl text-slate-300 my-2",children:t&&(0,h.jsxs)("div",{className:"flex flex-row justify-center",children:[(0,h.jsx)("div",{children:(i||0).toLocaleString()}),(0,h.jsx)("div",{className:"text-slate-600 ml-2",children:"SOL"})]})})]})]})})},A=r(6835),b=r(4758),v=JSON.parse('{"version":"0.1.0","name":"solanapdas","instructions":[{"name":"createPet","accounts":[{"name":"pet","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"name","type":"string"}]},{"name":"feedPet","accounts":[{"name":"pet","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"amount","type":"u64"}]},{"name":"checkForUnfed","accounts":[{"name":"pet","isMut":true,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[]}],"accounts":[{"name":"Pet","type":{"kind":"struct","fields":[{"name":"name","type":"string"},{"name":"happiness","type":"u32"},{"name":"balance","type":"u64"},{"name":"owner","type":"publicKey"},{"name":"lastFedTimestamp","type":"i64"},{"name":"lastHappinessDecreaseTimestamp","type":"i64"},{"name":"bornDate","type":"i64"},{"name":"hasBeenFed","type":"bool"}]}}],"metadata":{"address":"58q3u8kreouaKsVSwKxPqTP8eSu5pz6xXfHkAkPbdMP5"}}'),w=r(5675),j=r.n(w),y={src:"/_next/static/media/lindo-retrato-de-cachorro.7a758f55.jpg",height:4298,width:7800,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAALB83//EABwQAAICAgMAAAAAAAAAAAAAAAECAwQABREiYf/aAAgBAQABPwDRzyXW28kx5IuOo8C9c//EABkRAAEFAAAAAAAAAAAAAAAAAAABAzKBsf/aAAgBAgEBPwBuNrp//8QAGREAAQUAAAAAAAAAAAAAAAAAAQACMnGx/9oACAEDAQE/AHzNDF//2Q==",blurWidth:8,blurHeight:4};function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var O=JSON.parse(JSON.stringify(v)),N=new p.PublicKey(v.metadata.address),S=function(){var e,t,r,n,i=(0,s.O)(),l=(0,c.R)().connection,d=(0,a.useState)([]),m=d[0],x=d[1],f=function(){return new b.Y7(l,i,b.Y7.defaultOptions())},g=(e=(0,o.Z)(u().mark(function e(){var t,r,n,a,s;return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=f(),r=new b.$r(O,N,t),e.next=5,p.PublicKey.findProgramAddressSync([b.P6.bytes.utf8.encode("petaccount"),t.wallet.publicKey.toBuffer()],r.programId);case 5:if(n=e.sent,a=(0,A.Z)(n,1)[0],!((s=prompt("Enter pet name:")).length>20)){e.next=11;break}throw Error("The pet name must be no longer than 20 characters");case 11:return e.next=13,r.rpc.createPet(s,{accounts:{pet:a,user:t.wallet.publicKey,systemProgram:b.rV.SystemProgram.programId}});case 13:console.log("New pet was created:"+a.toString()),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("Error: ( "+e.t0);case 19:case"end":return e.stop()}},e,null,[[0,16]])})),function(){return e.apply(this,arguments)}),v=(t=(0,o.Z)(u().mark(function e(){var t,r;return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=f(),r=new b.$r(O,N,t),e.prev=2,e.t0=Promise,e.next=6,l.getProgramAccounts(N);case 6:e.t1=e.sent.map(function(){var e=(0,o.Z)(u().mark(function e(t){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=k,e.t1=k,e.t2={},e.next=5,r.account.pet.fetch(t.pubkey);case 5:return e.t3=e.sent,e.t4=(0,e.t1)(e.t2,e.t3),e.t5={},e.t6={pubkey:t.pubkey},e.abrupt("return",(0,e.t0)(e.t4,e.t5,e.t6));case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.t0.all.call(e.t0,e.t1).then(function(e){console.log(e),x(e)}),e.next=13;break;case 10:e.prev=10,e.t2=e.catch(2),console.error("Error while fetching the Pets");case 13:case"end":return e.stop()}},e,null,[[2,10]])})),function(){return t.apply(this,arguments)}),w=(r=(0,o.Z)(u().mark(function e(t){var r,n;return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=f(),n=new b.$r(O,N,r),e.next=5,n.rpc.feedPet(new b.BN(.1*b.rV.LAMPORTS_PER_SOL),{accounts:{pet:t,user:r.wallet.publicKey,systemProgram:b.rV.SystemProgram.programId}});case 5:console.log("Feed Done:"+t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error while depositing");case 11:case"end":return e.stop()}},e,null,[[0,8]])})),function(e){return r.apply(this,arguments)}),P=(n=(0,o.Z)(u().mark(function e(t){var r,n;return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=f(),n=new b.$r(O,N,r),e.next=5,n.rpc.checkForUnfed({accounts:{pet:t,clock:p.SYSVAR_CLOCK_PUBKEY}});case 5:console.log("Updated:"+t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error while updating");case 11:case"end":return e.stop()}},e,null,[[0,8]])})),function(e){return n.apply(this,arguments)});return(0,h.jsxs)(h.Fragment,{children:["      ",m.map(function(e){return(0,h.jsxs)("div",{className:"md:hero-content flex flex-col",children:[(0,h.jsx)(j(),{src:y,alt:"cute dog",width:200,height:200}),(0,h.jsxs)("h1",{children:[" ",e.name.toString()," "]}),(0,h.jsxs)("span",{children:["Balance: ",e.balance/1e9,"◎"]}),(0,h.jsxs)("span",{children:["Happiness: ",e.happiness.toString()]}),(0,h.jsxs)("span",{children:["Born Date: ",new Date(1e3*e.bornDate).toLocaleString()]}),(0,h.jsxs)("span",{children:["Last Time Fed: ",e.hasBeenFed?new Date(1e3*e.lastFedTimestamp).toLocaleString():"Never been fed"]}),(0,h.jsxs)("span",{children:["Last Time Happiness Decreased: ",0==e.lastHappinessDecreaseTimestamp?"Never Been Decreased":new Date(1e3*e.lastHappinessDecreaseTimestamp).toLocaleString()]}),(0,h.jsx)("button",{className:"group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black",onClick:function(){return w(e.pubkey)},children:(0,h.jsx)("span",{children:"Feed 0.1 ◎"})}),(0,h.jsx)("button",{className:"group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black",onClick:function(){return P(e.pubkey)},children:(0,h.jsx)("span",{children:"Check for Unfed"})})]},e.pubkey)}),(0,h.jsx)("div",{className:"flex flex-row justify-center",children:(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"relative group items-center",children:[(0,h.jsx)("div",{className:"m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500  rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"}),(0,h.jsx)("button",{className:"group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black",onClick:g,children:(0,h.jsx)("span",{className:"block group-disabled:hidden",children:"Create Pet"})}),(0,h.jsx)("button",{className:"group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black",onClick:v,children:(0,h.jsx)("span",{className:"block group-disabled:hidden",children:"Fetch Pets"})})]})})})]})},E=function(e){return(0,n.Z)(e),(0,h.jsx)("div",{className:"md:hero mx-auto p-4",children:(0,h.jsxs)("div",{className:"md:hero-content flex flex-col",children:[(0,h.jsx)("h1",{className:"text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8",children:"beliveN.SOL Pet DAPP"}),(0,h.jsx)("div",{className:"text-center",children:(0,h.jsx)(S,{})})]})})}}}]);