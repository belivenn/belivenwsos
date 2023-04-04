"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{100:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var r,o,i,a,s=n(6729),c=n.n(s),l=(r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t}(c()),d=n(5065),p=n(7191),f=n.n(p);class h extends c(){constructor(e,t){var n;if(super(),n=this,this._handleMessage=e=>{if(this._injectedProvider&&e.source===window||e.origin===this._providerUrl.origin&&e.source===this._popup){if("connected"===e.data.method){let t=new d.PublicKey(e.data.params.publicKey);this._publicKey&&this._publicKey.equals(t)||(this._publicKey&&!this._publicKey.equals(t)&&this._handleDisconnect(),this._publicKey=t,this._autoApprove=!!e.data.params.autoApprove,this.emit("connect",this._publicKey))}else if("disconnected"===e.data.method)this._handleDisconnect();else if((e.data.result||e.data.error)&&this._responsePromises.has(e.data.id)){let[t,n]=this._responsePromises.get(e.data.id);e.data.result?t(e.data.result):n(Error(e.data.error))}}},this._handleConnect=()=>(this._handlerAdded||(this._handlerAdded=!0,window.addEventListener("message",this._handleMessage),window.addEventListener("beforeunload",this.disconnect)),this._injectedProvider)?new Promise(e=>{this._sendRequest("connect",{}),e()}):(window.name="parent",this._popup=window.open(this._providerUrl.toString(),"_blank","location,resizable,width=460,height=675"),new Promise(e=>{this.once("connect",e)})),this._handleDisconnect=()=>{this._handlerAdded&&(this._handlerAdded=!1,window.removeEventListener("message",this._handleMessage),window.removeEventListener("beforeunload",this.disconnect)),this._publicKey&&(this._publicKey=null,this.emit("disconnect")),this._responsePromises.forEach(([e,t],n)=>{this._responsePromises.delete(n),t("Wallet disconnected")})},this._sendRequest=async function(e,t){if("connect"!==e&&!n.connected)throw Error("Wallet not connected");let r=n._nextRequestId;return++n._nextRequestId,new Promise((o,i)=>{n._responsePromises.set(r,[o,i]),n._injectedProvider?n._injectedProvider.postMessage({jsonrpc:"2.0",id:r,method:e,params:{network:n._network,...t}}):(n._popup.postMessage({jsonrpc:"2.0",id:r,method:e,params:t},n._providerUrl.origin),n.autoApprove||n._popup.focus())})},this.connect=()=>(this._popup&&this._popup.close(),this._handleConnect()),this.disconnect=async function(){n._injectedProvider&&await n._sendRequest("disconnect",{}),n._popup&&n._popup.close(),n._handleDisconnect()},this.sign=async function(e,t){if(!(e instanceof Uint8Array))throw Error("Data must be an instance of Uint8Array");let r=await n._sendRequest("sign",{data:e,display:t}),o=f().decode(r.signature),i=new d.PublicKey(r.publicKey);return{signature:o,publicKey:i}},this.signTransaction=async function(e){let t=await n._sendRequest("signTransaction",{message:f().encode(e.serializeMessage())}),r=f().decode(t.signature),o=new d.PublicKey(t.publicKey);return e.addSignature(o,r),e},this.signAllTransactions=async function(e){let t=await n._sendRequest("signAllTransactions",{messages:e.map(e=>f().encode(e.serializeMessage()))}),r=t.signatures.map(e=>f().decode(e)),o=new d.PublicKey(t.publicKey);return e=e.map((e,t)=>(e.addSignature(o,r[t]),e))},"object"==typeof e&&null!==e&&"function"==typeof e.postMessage)this._injectedProvider=e;else if("string"==typeof e)this._providerUrl=new URL(e),this._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:t}).toString();else throw Error("provider parameter must be an injected provider or a URL string.");this._network=t,this._publicKey=null,this._autoApprove=!1,this._popup=null,this._handlerAdded=!1,this._nextRequestId=1,this._responsePromises=new Map}get publicKey(){return this._publicKey}get connected(){return null!==this._publicKey}get autoApprove(){return this._autoApprove}}var _=(o=function(e,t){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),v=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((r=r.apply(e,t||[])).next())})},m=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},y=function(e){function t(t,n,r){var o=e.call(this)||this;return o._instance=null,o.handleMessage=function(e){},o._sendRequest=function(e,t){return v(o,void 0,void 0,function(){return m(this,function(n){switch(n.label){case 0:if(!this._instance.sendRequest)return[3,2];return[4,this._instance.sendRequest(e,t)];case 1:case 3:return[2,n.sent()];case 2:if(!this._instance._sendRequest)return[3,4];return[4,this._instance._sendRequest(e,t)];case 4:throw Error("Unsupported version of `@project-serum/sol-wallet-adapter`")}})})},o._handleConnect=function(){o.emit("connect")},o._handleDisconnect=function(){window.clearInterval(o._pollTimer),o.emit("disconnect")},o._network=n,o._provider=r,o}return _(t,e),Object.defineProperty(t.prototype,"publicKey",{get:function(){return this._instance.publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"connected",{get:function(){return this._instance.connected||!1},enumerable:!1,configurable:!0}),t.prototype.connect=function(){return v(this,void 0,void 0,function(){var e=this;return m(this,function(t){switch(t.label){case 0:return this._instance=new h(this._provider,this._network),this._instance.on("connect",this._handleConnect),this._instance.on("disconnect",this._handleDisconnect),this._pollTimer=window.setInterval(function(){var t,n;(null===(n=null===(t=e._instance)||void 0===t?void 0:t._popup)||void 0===n?void 0:n.closed)!==!1&&e._handleDisconnect()},200),[4,this._instance.connect()];case 1:return t.sent(),[2]}})})},t.prototype.disconnect=function(){return v(this,void 0,void 0,function(){return m(this,function(e){switch(e.label){case 0:if(!this.connected)throw Error("Wallet not connected");return this._instance.removeAllListeners("connect"),this._instance.removeAllListeners("disconnect"),[4,this._instance.disconnect()];case 1:return e.sent(),[2]}})})},t.prototype.signTransaction=function(e){return v(this,void 0,void 0,function(){var t;return m(this,function(n){switch(n.label){case 0:if(!this.connected)throw Error("Wallet not connected");return[4,this._sendRequest("signTransaction",{message:f().encode(e)})];case 1:return t=n.sent(),[2,f().decode(t.signature)]}})})},t.prototype.signAllTransactions=function(e){return v(this,void 0,void 0,function(){return m(this,function(t){switch(t.label){case 0:if(!this.connected)throw Error("Wallet not connected");return[4,this._sendRequest("signAllTransactions",{messages:e.map(function(e){return f().encode(e)})})];case 1:return[2,t.sent().signatures.map(function(e){return f().decode(e)})]}})})},t.prototype.signMessage=function(e,t){return void 0===t&&(t="hex"),v(this,void 0,void 0,function(){var n;return m(this,function(r){switch(r.label){case 0:if(!this.connected)throw Error("Wallet not connected");return[4,this._instance.sign(e,t)];case 1:return n=r.sent().signature,[2,Uint8Array.from(n)]}})})},t}(u),g=n(5934),b=(i=function(e,t){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),w=function(){return(w=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},I=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((r=r.apply(e,t||[])).next())})},P=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},E=function(e){function t(t,n){var r,o=this;return(o=e.call(this)||this)._publicKey=null,o._messageHandlers={},o.handleMessage=function(e){if(o._messageHandlers[e.id]){var t=o._messageHandlers[e.id],n=t.resolve,r=t.reject;delete o._messageHandlers[e.id],e.error?r(e.error):n(e.result)}},o._sendMessage=function(e){if(!o.connected)throw Error("Wallet not connected");return new Promise(function(t,n){var r,i,a=(0,g.Z)();o._messageHandlers[a]={resolve:t,reject:n},null===(i=null===(r=o._iframe)||void 0===r?void 0:r.contentWindow)||void 0===i||i.postMessage({channel:"solflareWalletAdapterToIframe",data:w({id:a},e)},"*")})},o._iframe=t,o._publicKey=new d.PublicKey(null===(r=null==n?void 0:n.toString)||void 0===r?void 0:r.call(n)),o}return b(t,e),Object.defineProperty(t.prototype,"publicKey",{get:function(){return this._publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"connected",{get:function(){return!0},enumerable:!1,configurable:!0}),t.prototype.connect=function(){return I(this,void 0,void 0,function(){return P(this,function(e){return[2]})})},t.prototype.disconnect=function(){return I(this,void 0,void 0,function(){return P(this,function(e){switch(e.label){case 0:return[4,this._sendMessage({method:"disconnect"})];case 1:return e.sent(),[2]}})})},t.prototype.signTransaction=function(e){return I(this,void 0,void 0,function(){var t;return P(this,function(n){switch(n.label){case 0:if(!this.connected)throw Error("Wallet not connected");n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this._sendMessage({method:"signTransaction",params:{message:f().encode(e)}})];case 2:return t=n.sent().signature,[2,f().decode(t)];case 3:throw console.log(n.sent()),Error("Failed to sign transaction");case 4:return[2]}})})},t.prototype.signAllTransactions=function(e){return I(this,void 0,void 0,function(){return P(this,function(t){switch(t.label){case 0:if(!this.connected)throw Error("Wallet not connected");t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAllTransactions",params:{messages:e.map(function(e){return f().encode(e)})}})];case 2:return[2,t.sent().signatures.map(function(e){return f().decode(e)})];case 3:throw console.log(t.sent()),Error("Failed to sign transactions");case 4:return[2]}})})},t.prototype.signMessage=function(e,t){return void 0===t&&(t="hex"),I(this,void 0,void 0,function(){var n;return P(this,function(r){switch(r.label){case 0:if(!this.connected)throw Error("Wallet not connected");r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this._sendMessage({method:"signMessage",params:{data:e,display:t}})];case 2:return n=r.sent(),[2,Uint8Array.from(f().decode(n))];case 3:throw console.log(r.sent()),Error("Failed to sign message");case 4:return[2]}})})},t}(u);function A(e){return void 0===e.version}var x=n(8764).Buffer,M=(a=function(e,t){return(a=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),j=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((r=r.apply(e,t||[])).next())})},K=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},S=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},O=function(e){function t(n){var r=e.call(this)||this;return r._network="mainnet-beta",r._provider=null,r._adapterInstance=null,r._element=null,r._iframe=null,r._connectHandler=null,r._flutterHandlerInterval=null,r._handleEvent=function(e){var t,n,o,i;switch(e.type){case"connect_native_web":r._collapseIframe(),r._adapterInstance=new y(r._iframe,r._network,(null===(t=e.data)||void 0===t?void 0:t.provider)||r._provider||"https://solflare.com/provider"),r._adapterInstance.on("connect",r._webConnected),r._adapterInstance.on("disconnect",r._webDisconnected),r._adapterInstance.connect(),r._setPreferredAdapter("native_web");return;case"connect":r._collapseIframe(),r._adapterInstance=new E(r._iframe,(null===(n=e.data)||void 0===n?void 0:n.publicKey)||""),r._adapterInstance.connect(),r._setPreferredAdapter(null===(o=e.data)||void 0===o?void 0:o.adapter),r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),r.emit("connect",r.publicKey);return;case"disconnect":r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),r.emit("disconnect");return;case"accountChanged":(null===(i=e.data)||void 0===i?void 0:i.publicKey)?(r._adapterInstance=new E(r._iframe,e.data.publicKey),r._adapterInstance.connect(),r.emit("accountChanged",r.publicKey)):r.emit("accountChanged",void 0);return;case"collapse":r._collapseIframe();return;default:return}},r._handleResize=function(e){"full"===e.resizeMode?"fullscreen"===e.params.mode?r._expandIframe():"hide"===e.params.mode&&r._collapseIframe():"coordinates"===e.resizeMode&&r._iframe&&(r._iframe.style.top=isFinite(e.params.top)?"".concat(e.params.top,"px"):"",r._iframe.style.bottom=isFinite(e.params.bottom)?"".concat(e.params.bottom,"px"):"",r._iframe.style.left=isFinite(e.params.left)?"".concat(e.params.left,"px"):"",r._iframe.style.right=isFinite(e.params.right)?"".concat(e.params.right,"px"):"",r._iframe.style.width=isFinite(e.params.width)?"".concat(e.params.width,"px"):e.params.width,r._iframe.style.height=isFinite(e.params.height)?"".concat(e.params.height,"px"):e.params.height)},r._handleMessage=function(e){if((null===(t=e.data)||void 0===t?void 0:t.channel)==="solflareIframeToWalletAdapter"){var t,n=e.data.data||{};"event"===n.type?r._handleEvent(n.event):"resize"===n.type?r._handleResize(n):"response"===n.type&&r._adapterInstance&&r._adapterInstance.handleMessage(n)}},r._removeElement=function(){null!==r._flutterHandlerInterval&&(clearInterval(r._flutterHandlerInterval),r._flutterHandlerInterval=null),r._element&&(r._element.remove(),r._element=null)},r._removeDanglingElements=function(){var e,t,n=document.getElementsByClassName("solflare-wallet-adapter-iframe");try{for(var r=S(n),o=r.next();!o.done;o=r.next()){var i=o.value;i.parentElement&&i.remove()}}catch(t){e={error:t}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}},r._injectElement=function(){r._removeElement(),r._removeDanglingElements();var e="".concat(t.IFRAME_URL,"?cluster=").concat(encodeURIComponent(r._network),"&origin=").concat(encodeURIComponent(window.location.origin),"&version=1"),n=r._getPreferredAdapter();n&&(e+="&adapter=".concat(encodeURIComponent(n))),r._element=document.createElement("div"),r._element.className="solflare-wallet-adapter-iframe",r._element.innerHTML="\n      <iframe src='".concat(e,"' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>\n    "),document.body.appendChild(r._element),r._iframe=r._element.querySelector("iframe"),window.fromFlutter=r._handleMobileMessage,r._flutterHandlerInterval=setInterval(function(){window.fromFlutter=r._handleMobileMessage},100),window.addEventListener("message",r._handleMessage,!1)},r._collapseIframe=function(){r._iframe&&(r._iframe.style.top="",r._iframe.style.right="",r._iframe.style.height="2px",r._iframe.style.width="2px")},r._expandIframe=function(){r._iframe&&(r._iframe.style.top="0px",r._iframe.style.bottom="0px",r._iframe.style.left="0px",r._iframe.style.right="0px",r._iframe.style.width="100%",r._iframe.style.height="100%")},r._getPreferredAdapter=function(){return localStorage&&localStorage.getItem("solflarePreferredWalletAdapter")||null},r._setPreferredAdapter=function(e){localStorage&&e&&localStorage.setItem("solflarePreferredWalletAdapter",e)},r._clearPreferredAdapter=function(){localStorage&&localStorage.removeItem("solflarePreferredWalletAdapter")},r._webConnected=function(){r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),r.emit("connect",r.publicKey)},r._webDisconnected=function(){r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),r.emit("disconnect")},r._disconnected=function(){window.removeEventListener("message",r._handleMessage,!1),r._removeElement(),r._clearPreferredAdapter(),r._adapterInstance=null},r._handleMobileMessage=function(e){var t,n;null===(n=null===(t=r._iframe)||void 0===t?void 0:t.contentWindow)||void 0===n||n.postMessage({channel:"solflareMobileToIframe",data:e},"*")},(null==n?void 0:n.network)&&(r._network=null==n?void 0:n.network),(null==n?void 0:n.provider)&&(r._provider=null==n?void 0:n.provider),r}return M(t,e),Object.defineProperty(t.prototype,"publicKey",{get:function(){var e;return(null===(e=this._adapterInstance)||void 0===e?void 0:e.publicKey)||null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isConnected",{get:function(){var e;return!!(null===(e=this._adapterInstance)||void 0===e?void 0:e.connected)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"connected",{get:function(){return this.isConnected},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"autoApprove",{get:function(){return!1},enumerable:!1,configurable:!0}),t.prototype.connect=function(){return j(this,void 0,void 0,function(){var e=this;return K(this,function(t){switch(t.label){case 0:if(this.connected)return[2];return this._injectElement(),[4,new Promise(function(t,n){e._connectHandler={resolve:t,reject:n}})];case 1:return t.sent(),[2]}})})},t.prototype.disconnect=function(){return j(this,void 0,void 0,function(){return K(this,function(e){switch(e.label){case 0:if(!this._adapterInstance)return[2];return[4,this._adapterInstance.disconnect()];case 1:return e.sent(),this._disconnected(),this.emit("disconnect"),[2]}})})},t.prototype.signTransaction=function(e){return j(this,void 0,void 0,function(){var t,n,r,o=this;return K(this,function(i){switch(i.label){case 0:if(!this.connected)throw Error("Wallet not connected");return t=A(e)?e.serializeMessage():e.message.serialize(),[4,this._adapterInstance.signTransaction(t)];case 1:return n=i.sent(),A(e)?e.addSignature(this.publicKey,x.from(n)):(r=e.message.staticAccountKeys.slice(0,e.message.header.numRequiredSignatures).findIndex(function(e){return e.equals(o.publicKey)}))>=0&&(e.signatures[r]=n),[2,e]}})})},t.prototype.signAllTransactions=function(e){return j(this,void 0,void 0,function(){var t,n,r,o,i,a=this;return K(this,function(s){switch(s.label){case 0:if(!this.connected)throw Error("Wallet not connected");return t=e.map(function(e){return A(e)?e.serializeMessage():e.message.serialize()}),[4,this._adapterInstance.signAllTransactions(t)];case 1:for(r=0,n=s.sent();r<e.length;r++)A(o=e[r])?o.addSignature(this.publicKey,x.from(n[r])):(i=o.message.staticAccountKeys.slice(0,o.message.header.numRequiredSignatures).findIndex(function(e){return e.equals(a.publicKey)}))>=0&&(o.signatures[i]=n[r]);return[2,e]}})})},t.prototype.signMessage=function(e,t){return void 0===t&&(t="utf8"),j(this,void 0,void 0,function(){return K(this,function(n){switch(n.label){case 0:if(!this.connected)throw Error("Wallet not connected");return[4,this._adapterInstance.signMessage(e,t)];case 1:return[2,n.sent()]}})})},t.prototype.sign=function(e,t){return void 0===t&&(t="utf8"),j(this,void 0,void 0,function(){return K(this,function(n){switch(n.label){case 0:return[4,this.signMessage(e,t)];case 1:return[2,n.sent()]}})})},t.prototype.detectWallet=function(e){var t;return void 0===e&&(e=10),j(this,void 0,void 0,function(){return K(this,function(n){return window.SolflareApp||(null===(t=window.solflare)||void 0===t?void 0:t.isSolflare)?[2,!0]:[2,new Promise(function(t){var n,r;n=setInterval(function(){var e;(window.SolflareApp||(null===(e=window.solflare)||void 0===e?void 0:e.isSolflare))&&(clearInterval(n),clearTimeout(r),t(!0))},500),r=setTimeout(function(){clearInterval(n),t(!1)},1e3*e)})]})})},t.IFRAME_URL="https://connect.solflare.com/",t}(c())}}]);