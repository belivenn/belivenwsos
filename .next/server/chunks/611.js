"use strict";
exports.id = 611;
exports.ids = [611];
exports.modules = {

/***/ 1719:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ Pet)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1247);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1024);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solanapdas_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6628);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _image_lindo_retrato_de_cachorro_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3861);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__]);
_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// TODO: BANK










const idl_string = JSON.stringify(_solanapdas_json__WEBPACK_IMPORTED_MODULE_3__);
const idl_object = JSON.parse(idl_string);
const programID = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.PublicKey(_solanapdas_json__WEBPACK_IMPORTED_MODULE_3__.metadata.address);
const Pet = () => {
  const ourWallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useWallet)();
  const {
    connection
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useConnection)();
  const {
    0: pets,
    1: setPets
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  const getProvider = () => {
    const provider = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__.AnchorProvider(connection, ourWallet, _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__.AnchorProvider.defaultOptions());
    return provider;
  };

  const petCreate = async () => {
    try {
      const anchProvider = getProvider();
      const program = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__.Program(idl_object, programID, anchProvider); //bump is added automatically 

      const [pet] = await _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.PublicKey.findProgramAddressSync([_project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__.utils.bytes.utf8.encode("petaccount"), anchProvider.wallet.publicKey.toBuffer()], program.programId);
      const petname = prompt("Enter pet name:");

      if (petname.length > 20) {
        throw new Error('The pet name must be no longer than 20 characters');
      }

      let cid = prompt("Enter a URL (optional).: \n Leave it blank to use the default image. \n Alternatively, you can use the following link to get a cute WSoS Pet: https://bafybeibo4xo2sgadfrslrvfod2h4gh5bjkacriz7gampu4ycy2rxdf4k5q.ipfs.nftstorage.link/dog.jpg");

      if (cid === "") {
        cid = "0";
      }

      await program.rpc.createPet(petname, cid, {
        accounts: {
          pet,
          user: anchProvider.wallet.publicKey,
          systemProgram: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__.web3.SystemProgram.programId
        }
      });
      console.log("New pet was created:" + pet.toString());
    } catch (error) {
      console.error("Error: ( " + error);
    }
  };

  const getPets = async () => {
    const anchProvider = getProvider();
    const program = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__.Program(idl_object, programID, anchProvider);

    try {
      Promise.all((await connection.getProgramAccounts(programID)).map(async pet => _objectSpread(_objectSpread({}, await program.account.pet.fetch(pet.pubkey)), {}, {
        pubkey: pet.pubkey
      }))).then(pets => {
        console.log(pets);
        setPets(pets);
      });
    } catch (error) {
      console.error("Error while fetching the Pets");
    }
  };

  const petFeed = async publicKey => {
    try {
      const anchProvider = getProvider();
      const program = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__.Program(idl_object, programID, anchProvider);
      await program.rpc.feedPet(new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__.BN(0.1 * _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__.web3.LAMPORTS_PER_SOL), {
        accounts: {
          pet: publicKey,
          user: anchProvider.wallet.publicKey,
          systemProgram: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__.web3.SystemProgram.programId
        }
      });
      console.log("Feed Done:" + publicKey);
    } catch (error) {
      console.error("Error while depositing");
    }
  };

  const unfedCheck = async publicKey => {
    try {
      const anchProvider = getProvider();
      const program = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__.Program(idl_object, programID, anchProvider);
      await program.rpc.checkForUnfed({
        accounts: {
          pet: publicKey,
          clock: _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.SYSVAR_CLOCK_PUBKEY
        }
      });
      console.log("Updated:" + publicKey);
    } catch (error) {
      console.error("Error while updating");
    }
  };
  /*     const withdraw = async (publicKey) => {
  
          try {
              const anchProvider = getProvider()
              const program = new Program(idl_object, programID, anchProvider)
  
              await program.rpc.withdraw(new BN(0.1 * web3.LAMPORTS_PER_SOL),
                  {
                      accounts: {
                          bank: publicKey,
                          user: anchProvider.wallet.publicKey,
                          systemProgram: web3.SystemProgram.programId
                      }
                  })
              console.log("Withdraw 0.1 Done :" + publicKey)
  
          } catch (error) {
  
              console.error("Error while withdrawing")
  
          }
      }
   */


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: ["      ", pets.map(pet => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "md:hero-content flex flex-col",
        children: [pet.cid !== "0" && pet.cid !== "" && (pet.cid.endsWith(".jpeg") || pet.cid.endsWith(".png") || pet.cid.endsWith(".gif")) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
          src: `${pet.cid}`,
          alt: "pet image",
          width: 200,
          height: 200
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
          src: _image_lindo_retrato_de_cachorro_jpg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
          alt: "cute dog",
          width: 200,
          height: 200
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h1", {
          children: [" ", pet.name.toString(), " "]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          children: ["Balance: ", pet.balance / 1000000000, "\u25CE"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          children: ["Happiness: ", pet.happiness.toString()]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          children: ["Born Date: ", new Date(pet.bornDate * 1000).toLocaleString()]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          children: ["Last Time Fed: ", pet.hasBeenFed ? new Date(pet.lastFedTimestamp * 1000).toLocaleString() : 'Never been fed']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          children: ["Last Time Happiness Decreased: ", pet.lastHappinessDecreaseTimestamp == 0 ? 'Never Been Decreased' : new Date(pet.lastHappinessDecreaseTimestamp * 1000).toLocaleString()]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
          className: "group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black",
          onClick: () => petFeed(pet.pubkey),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            children: "Feed 0.1 \u25CE"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
          className: "group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black",
          onClick: () => unfedCheck(pet.pubkey),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            children: "Check for Unfed"
          })
        })]
      }, pet.pubkey);
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: "flex flex-row justify-center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "relative group items-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: "m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500  rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
            className: "group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black",
            onClick: petCreate,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
              className: "block group-disabled:hidden",
              children: "Create Pet"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
            className: "group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black",
            onClick: getPets,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
              className: "block group-disabled:hidden",
              children: "Fetch Pets"
            })
          })]
        })
      })
    })]
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8751:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ RequestAirdrop)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1118);
/* harmony import */ var _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9756);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__, _utils_notifications__WEBPACK_IMPORTED_MODULE_3__, _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_4__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__, _utils_notifications__WEBPACK_IMPORTED_MODULE_3__, _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const RequestAirdrop = () => {
  const {
    connection
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useConnection)();
  const {
    publicKey
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useWallet)();
  const {
    getUserSOLBalance
  } = (0,_stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async () => {
    if (!publicKey) {
      console.log('error', 'Wallet not connected!');
      (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_3__/* .notify */ .h)({
        type: 'error',
        message: 'error',
        description: 'Wallet not connected!'
      });
      return;
    }

    let signature = '';

    try {
      signature = await connection.requestAirdrop(publicKey, _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.LAMPORTS_PER_SOL); // Get the lates block hash to use on our transaction and confirmation

      let latestBlockhash = await connection.getLatestBlockhash();
      await connection.confirmTransaction(_objectSpread({
        signature
      }, latestBlockhash), 'confirmed');
      (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_3__/* .notify */ .h)({
        type: 'success',
        message: 'Airdrop successful!',
        txid: signature
      });
      getUserSOLBalance(publicKey, connection);
    } catch (error) {
      (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_3__/* .notify */ .h)({
        type: 'error',
        message: `Airdrop failed!`,
        description: error?.message,
        txid: signature
      });
      console.log('error', `Airdrop failed! ${error?.message}`, signature);
    }
  }, [publicKey, connection, getUserSOLBalance]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    className: "flex flex-row justify-center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "relative group items-center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500  rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
        className: "px-8 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black",
        onClick: onClick,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
          children: "Airdrop 1 "
        })
      })]
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9756:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useUserSOLBalanceStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set, _get) => ({
  balance: 0,
  getUserSOLBalance: async (publicKey, connection) => {
    let balance = 0;

    try {
      balance = await connection.getBalance(publicKey, 'confirmed');
      balance = balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.LAMPORTS_PER_SOL;
    } catch (e) {
      console.log(`error getting balance: `, e);
    }

    set(s => {
      s.balance = balance;
      console.log(`balance updated, `, balance);
    });
  }
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUserSOLBalanceStore);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3584:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ BasicsView)
/* harmony export */ });
/* harmony import */ var _components_Pet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1719);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Pet__WEBPACK_IMPORTED_MODULE_0__]);
_components_Pet__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const BasicsView = ({}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: "md:hero mx-auto p-4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "md:hero-content flex flex-col",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h1", {
        className: "text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8",
        children: "beliveN.SOL Pet DAPP"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "text-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_components_Pet__WEBPACK_IMPORTED_MODULE_0__/* .Pet */ .b, {})
      })]
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 741:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ HomeView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1247);
/* harmony import */ var _components_RequestAirdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8751);
/* harmony import */ var _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9756);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _components_RequestAirdrop__WEBPACK_IMPORTED_MODULE_2__, _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_3__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _components_RequestAirdrop__WEBPACK_IMPORTED_MODULE_2__, _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Next, React

// Wallet
 // Components


// Store



const HomeView = ({}) => {
  const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)();
  const {
    connection
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useConnection)();
  const balance = (0,_stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(s => s.balance);
  const {
    getUserSOLBalance
  } = (0,_stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58());
      getUserSOLBalance(wallet.publicKey, connection);
    }
  }, [wallet.publicKey, connection, getUserSOLBalance]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: "md:hero mx-auto p-4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "md:hero-content flex flex-col",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "mt-6",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h1", {
          className: "text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4",
          children: "BELIVEN WsOS 2023 PET DAPP"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h4", {
        className: "md:w-full text-2x1 md:text-4xl text-center text-slate-300 my-2",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          children: "This DAPP allows users to create and take care of virtual pets as program-derived accounts (PDAs) on the Solana blockchain."
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          className: "text-slate-500 text-2x1 leading-relaxed"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h4", {
        className: "md:w-full text-2x1 md:text-2xl text-center text-slate-300 my-2",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          children: "The user can create a pet by providing a name argument that is no longer than 20 characters in length, and the pet will be initialized with the following parameters.  "
        }), " "]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
        className: "text-slate-500 text-2x1 leading-relaxed"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h4", {
        className: "md:w-full text-2x1 md:text-2xl text-center text-slate-300 my-2",
        children: ["Name", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          children: "Owner"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          children: "Balance"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          children: "Happiness"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          children: "Last Fed Timestamp"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          children: "Last Time Happiness got Decreased"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          children: "BornDate"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h4", {
        className: "md:w-full text-2x1 md:text-2xl text-center text-slate-300 my-2",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          children: "The user can feed the Pet, by providing an amount argument. "
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          children: "After feeding the pet by a fixed value, its happiness will increase by a fixed amount, and the Last Fed Timestamp attribute will be updated with the current timestamp."
        }), " "]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
        className: "text-slate-500 text-2x1 leading-relaxed"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h4", {
        className: "md:w-full text-2x1 md:text-2xl text-center text-slate-300 my-2",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          children: "The app also provides a feature to check for unfed pets, allowing to monitor the feeding status of the pets. "
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          children: "For instance, if a pet has not been fed for the last 24 hours, and its happiness has not decreased during this period, and its current happiness level is greater than 0, then the application will decrease its happiness by a fixed amount.   "
        }), " "]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
        className: "text-slate-500 text-2x1 leading-relaxed",
        children: "*Notes : For testing purposes, I have declared this variable to be 60 seconds."
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
        className: "text-slate-500 text-2x1 leading-relaxed",
        children: " FEEDBACK :Most of the time, I spent searching for how to implement an iter_mut() method to iterate through all the pet accounts created and update them in a single atomic transaction. I attempted to create a vector of pets and use for pet in &mut ctx.accounts.pets.iter_mut(), but I was unsuccessful. I also tried to create an allpets list and call it in the function and in the CheckForUnfed Struct, but that also did not work. However, I am not going to give up, and I will continue to work on scaling this application the most possible."
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "relative group",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-lg blur opacity-40 animate-tilt"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex flex-col mt-2",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_RequestAirdrop__WEBPACK_IMPORTED_MODULE_2__/* .RequestAirdrop */ .E, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h4", {
          className: "md:w-full text-2xl text-slate-300 my-2",
          children: wallet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex flex-row justify-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              children: (balance || 0).toLocaleString()
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "text-slate-600 ml-2",
              children: "SOL"
            })]
          })
        })]
      })]
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 611:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* reexport safe */ _basics__WEBPACK_IMPORTED_MODULE_1__.W),
/* harmony export */   "u": () => (/* reexport safe */ _home__WEBPACK_IMPORTED_MODULE_0__.u)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(741);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3584);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_home__WEBPACK_IMPORTED_MODULE_0__, _basics__WEBPACK_IMPORTED_MODULE_1__]);
([_home__WEBPACK_IMPORTED_MODULE_0__, _basics__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/lindo-retrato-de-cachorro.76cf2b23.jpg","height":4298,"width":7800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAALB83//EABwQAAICAgMAAAAAAAAAAAAAAAECAwQABREiYf/aAAgBAQABPwDRzyXW28kx5IuOo8C9c//EABkRAAEFAAAAAAAAAAAAAAAAAAABAzKBsf/aAAgBAgEBPwBuNrp//8QAGREAAQUAAAAAAAAAAAAAAAAAAQADMnGx/9oACAEDAQE/AHJmhi//2Q==","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 6628:
/***/ ((module) => {

module.exports = JSON.parse('{"version":"0.1.0","name":"solanapdas","instructions":[{"name":"createPet","accounts":[{"name":"pet","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"name","type":"string"},{"name":"cid","type":"string"}]},{"name":"feedPet","accounts":[{"name":"pet","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"amount","type":"u64"}]},{"name":"checkForUnfed","accounts":[{"name":"pet","isMut":true,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[]}],"accounts":[{"name":"Pet","type":{"kind":"struct","fields":[{"name":"name","type":"string"},{"name":"happiness","type":"u32"},{"name":"balance","type":"u64"},{"name":"owner","type":"publicKey"},{"name":"lastFedTimestamp","type":"i64"},{"name":"lastHappinessDecreaseTimestamp","type":"i64"},{"name":"bornDate","type":"i64"},{"name":"hasBeenFed","type":"bool"},{"name":"cid","type":"string"}]}}],"metadata":{"address":"58q3u8kreouaKsVSwKxPqTP8eSu5pz6xXfHkAkPbdMP5"}}');

/***/ })

};
;