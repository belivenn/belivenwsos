(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 973:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ AppBar)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_AutoConnectProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3299);
/* harmony import */ var _NetworkSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2731);
/* harmony import */ var _nav_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6320);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AutoConnectProvider__WEBPACK_IMPORTED_MODULE_3__, _NetworkSwitcher__WEBPACK_IMPORTED_MODULE_4__]);
([_contexts_AutoConnectProvider__WEBPACK_IMPORTED_MODULE_3__, _NetworkSwitcher__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const WalletMultiButtonDynamic = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(async () => (await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 8847))).WalletMultiButton, {
  ssr: false,
  loadableGenerated: {
    modules: ["../components/AppBar.tsx -> " + '@solana/wallet-adapter-react-ui']
  }
});
const AppBar = () => {
  const {
    autoConnect,
    setAutoConnect
  } = (0,_contexts_AutoConnectProvider__WEBPACK_IMPORTED_MODULE_3__/* .useAutoConnect */ .vl)();
  const {
    0: isNavOpen,
    1: setIsNavOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "navbar flex h-20 flex-row md:mb-2 shadow-lg bg-black text-neutral-content border-b border-zinc-600 bg-opacity-66",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "navbar-start align-items-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: "hidden sm:inline w-22 h-22 md:p-2 ml-10",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "https://solana.com",
            target: "_blank",
            rel: "noopener noreferrer",
            passHref: true,
            className: "text-secondary hover:text-white",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("svg", {
              width: "105%",
              height: "24",
              viewBox: "0 0 646 96",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("g", {
                clipPath: "url(#clip0_1064_606)",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
                  d: "M108.53 75.6899L90.81 94.6899C90.4267 95.1026 89.9626 95.432 89.4464 95.6573C88.9303 95.8827 88.3732 95.9994 87.81 95.9999H3.81C3.40937 95.9997 3.01749 95.8827 2.68235 95.6631C2.34722 95.4436 2.08338 95.1311 1.92313 94.7639C1.76288 94.3967 1.71318 93.9908 1.78012 93.5958C1.84706 93.2008 2.02772 92.8338 2.3 92.5399L20 73.5399C20.3833 73.1273 20.8474 72.7979 21.3636 72.5725C21.8797 72.3472 22.4368 72.2305 23 72.2299H107C107.404 72.2216 107.802 72.333 108.143 72.5502C108.484 72.7674 108.754 73.0806 108.917 73.4504C109.081 73.8203 109.131 74.2303 109.062 74.6288C108.993 75.0273 108.808 75.3965 108.53 75.6899ZM90.81 37.4199C90.4253 37.0091 89.9608 36.6811 89.445 36.4558C88.9292 36.2306 88.3728 36.1129 87.81 36.11H3.81C3.40937 36.1102 3.01749 36.2272 2.68235 36.4468C2.34722 36.6663 2.08338 36.9788 1.92313 37.346C1.76288 37.7132 1.71318 38.1191 1.78012 38.5141C1.84706 38.9091 2.02772 39.2761 2.3 39.57L20 58.58C20.3847 58.9908 20.8492 59.3188 21.365 59.5441C21.8808 59.7693 22.4372 59.887 23 59.8899H107C107.4 59.8878 107.79 59.7693 108.124 59.5491C108.458 59.3288 108.72 59.0162 108.879 58.6494C109.038 58.2826 109.087 57.8774 109.019 57.4833C108.952 57.0892 108.772 56.7232 108.5 56.43L90.81 37.4199ZM3.81 23.7699H87.81C88.3732 23.7694 88.9303 23.6527 89.4464 23.4273C89.9626 23.202 90.4267 22.8726 90.81 22.4599L108.53 3.45995C108.808 3.16647 108.993 2.79726 109.062 2.39877C109.131 2.00028 109.081 1.59031 108.917 1.22045C108.754 0.850591 108.484 0.537368 108.143 0.320195C107.802 0.103021 107.404 -0.0084012 107 -5.10783e-05H23C22.4368 0.000541762 21.8797 0.117167 21.3636 0.342553C20.8474 0.567938 20.3833 0.897249 20 1.30995L2.3 20.3099C2.02772 20.6038 1.84706 20.9708 1.78012 21.3658C1.71318 21.7608 1.76288 22.1667 1.92313 22.5339C2.08338 22.9011 2.34722 23.2136 2.68235 23.4331C3.01749 23.6527 3.40937 23.7697 3.81 23.7699Z",
                  fill: "url(#paint0_linear_1064_606)"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
                  d: "M210.94 40.6002H166V25.8002H222.62V11.0002H165.85C163.91 10.9897 161.988 11.3613 160.192 12.0938C158.396 12.8264 156.761 13.9055 155.383 15.2696C154.004 16.6337 152.907 18.2561 152.155 20.044C151.403 21.832 151.01 23.7506 151 25.6902V40.6902C151.008 42.6315 151.398 44.5523 152.149 46.3425C152.9 48.1328 153.996 49.7575 155.375 51.1237C156.755 52.49 158.39 53.5709 160.187 54.3047C161.984 55.0385 163.909 55.4108 165.85 55.4002H210.85V70.2002H152.07V85.0002H210.94C212.88 85.0108 214.802 84.6391 216.598 83.9066C218.394 83.174 220.029 82.0949 221.407 80.7308C222.786 79.3667 223.883 77.7444 224.635 75.9564C225.387 74.1684 225.78 72.2498 225.79 70.3102V55.3102C225.782 53.3689 225.392 51.4482 224.641 49.6579C223.89 47.8676 222.794 46.2429 221.415 44.8767C220.035 43.5105 218.4 42.4296 216.603 41.6958C214.806 40.962 212.881 40.5897 210.94 40.6002Z",
                  fill: "white"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
                  d: "M298 11H252.89C250.947 10.9842 249.02 11.3519 247.219 12.0821C245.419 12.8123 243.78 13.8905 242.397 15.2552C241.013 16.6198 239.913 18.2439 239.159 20.0345C238.404 21.8251 238.01 23.747 238 25.69V70.31C238.01 72.253 238.404 74.1749 239.159 75.9655C239.913 77.7561 241.013 79.3802 242.397 80.7448C243.78 82.1095 245.419 83.1877 247.219 83.9179C249.02 84.6481 250.947 85.0158 252.89 85H298C299.94 85.0105 301.862 84.6389 303.658 83.9064C305.454 83.1738 307.089 82.0947 308.467 80.7306C309.846 79.3665 310.943 77.7441 311.695 75.9562C312.447 74.1682 312.84 72.2496 312.85 70.31V25.69C312.84 23.7504 312.447 21.8318 311.695 20.0438C310.943 18.2559 309.846 16.6335 308.467 15.2694C307.089 13.9053 305.454 12.8262 303.658 12.0936C301.862 11.3611 299.94 10.9895 298 11ZM297.89 70.2H253V25.8H297.87L297.89 70.2Z",
                  fill: "white"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
                  d: "M456 11.0001H412C410.06 10.9896 408.138 11.3612 406.342 12.0937C404.546 12.8263 402.911 13.9054 401.533 15.2695C400.154 16.6336 399.057 18.256 398.305 20.0439C397.553 21.8319 397.16 23.7505 397.15 25.6901V85.0001H412.15V60.6901H455.95V85.0001H470.95V25.6901C470.94 23.742 470.544 21.8152 469.786 20.0206C469.027 18.2261 467.922 16.5993 466.532 15.2338C465.143 13.8684 463.497 12.7914 461.689 12.0648C459.881 11.3382 457.948 10.9764 456 11.0001ZM455.89 45.8901H412.09V25.8001H455.89V45.8901Z",
                  fill: "white"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
                  d: "M631.15 11.0002H587.15C585.21 10.9897 583.288 11.3613 581.492 12.0938C579.696 12.8264 578.062 13.9055 576.683 15.2696C575.304 16.6337 574.207 18.2561 573.455 20.044C572.703 21.832 572.31 23.7506 572.3 25.6902V85.0002H587.3V60.6902H631V85.0002H646V25.6902C645.99 23.7506 645.597 21.832 644.845 20.044C644.093 18.2561 642.996 16.6337 641.617 15.2696C640.238 13.9055 638.604 12.8264 636.808 12.0938C635.012 11.3613 633.09 10.9897 631.15 11.0002ZM631 45.8902H587.2V25.8002H631V45.8902Z",
                  fill: "white"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
                  d: "M544 70.2001H538L516.55 17.2001C515.815 15.3716 514.55 13.8045 512.918 12.6999C511.286 11.5952 509.361 11.0033 507.39 11.0001H494.08C492.786 10.9935 491.504 11.2418 490.307 11.7307C489.109 12.2197 488.02 12.9397 487.1 13.8497C486.181 14.7598 485.45 15.8419 484.949 17.0345C484.448 18.227 484.187 19.5066 484.18 20.8001V85.0001H499.18V25.8001H505.18L526.62 78.8001C527.367 80.6251 528.642 82.1858 530.281 83.283C531.919 84.3803 533.848 84.9641 535.82 84.9601H549.13C550.424 84.9667 551.706 84.7185 552.903 84.2295C554.101 83.7406 555.19 83.0205 556.11 82.1105C557.029 81.2005 557.76 80.1183 558.261 78.9258C558.762 77.7332 559.023 76.4537 559.03 75.1601V11.0001H544V70.2001Z",
                  fill: "white"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
                  d: "M341.1 11H326.1V70.31C326.11 72.2539 326.505 74.1766 327.26 75.9678C328.015 77.7591 329.116 79.3836 330.5 80.7484C331.884 82.1132 333.525 83.1912 335.326 83.9208C337.128 84.6504 339.056 85.0171 341 85H386V70.2H341.1V11Z",
                  fill: "white"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("defs", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("linearGradient", {
                  id: "paint0_linear_1064_606",
                  x1: "10.81",
                  y1: "98.29",
                  x2: "98.89",
                  y2: "-1.01005",
                  gradientUnits: "userSpaceOnUse",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("stop", {
                    offset: "0.08",
                    stopColor: "#9945FF"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("stop", {
                    offset: "0.3",
                    stopColor: "#8752F3"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("stop", {
                    offset: "0.5",
                    stopColor: "#5497D5"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("stop", {
                    offset: "0.6",
                    stopColor: "#43B4CA"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("stop", {
                    offset: "0.72",
                    stopColor: "#28E0B9"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("stop", {
                    offset: "0.97",
                    stopColor: "#19FB9B"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("clipPath", {
                  id: "clip0_1064_606",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("rect", {
                    width: "646",
                    height: "96",
                    fill: "white"
                  })
                })]
              })]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(WalletMultiButtonDynamic, {
          className: "btn-ghost btn-sm relative flex md:hidden text-lg "
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "navbar-end",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "hidden md:inline-flex align-items-center justify-items gap-6",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nav_element__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            label: "Home",
            href: "/",
            navigationStarts: () => setIsNavOpen(false)
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nav_element__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            label: "App",
            href: "/basics",
            navigationStarts: () => setIsNavOpen(false)
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(WalletMultiButtonDynamic, {
            className: "btn-ghost btn-sm rounded-btn text-lg mr-6 "
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
          htmlFor: "my-drawer",
          className: "btn-gh items-center justify-between md:hidden mr-6",
          onClick: () => setIsNavOpen(!isNavOpen),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "HAMBURGER-ICON space-y-2.5 ml-5",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              className: `h-0.5 w-8 bg-purple-600 ${isNavOpen ? 'hidden' : ''}`
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              className: `h-0.5 w-8 bg-purple-600 ${isNavOpen ? 'hidden' : ''}`
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              className: `h-0.5 w-8 bg-purple-600 ${isNavOpen ? 'hidden' : ''}`
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: `absolute block h-0.5 w-8 animate-pulse bg-purple-600 ${isNavOpen ? "" : "hidden"}`,
            style: {
              transform: "rotate(45deg)"
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: `absolute block h-0.5 w-8 animate-pulse bg-purple-600 ${isNavOpen ? "" : "hidden"}`,
            style: {
              transform: "rotate(135deg)"
            }
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
            className: "absolute block h-0.5 w-12 bg-zinc-600 rotate-90 right-14"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "dropdown dropdown-end",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            tabIndex: 0,
            className: "btn btn-square btn-ghost text-right mr-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("svg", {
              className: "w-7 h-7",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("ul", {
            tabIndex: 0,
            className: "p-2 shadow menu dropdown-content bg-base-100 rounded-box sm:w-52",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "form-control bg-opacity-100",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                  className: "cursor-pointer label",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                    children: "Autoconnect"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", {
                    type: "checkbox",
                    checked: autoConnect,
                    onChange: e => setAutoConnect(e.target.checked),
                    className: "toggle"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_NetworkSwitcher__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})]
              })
            })
          })]
        })]
      })]
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ ContentContainer)
/* harmony export */ });
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9311);
/* harmony import */ var _nav_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6320);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const ContentContainer = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "flex-1 drawer h-52",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
      id: "my-drawer",
      type: "checkbox",
      className: "grow drawer-toggle"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "items-center  drawer-content",
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "drawer-side",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("label", {
        htmlFor: "my-drawer",
        className: "drawer-overlay gap-6"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
        className: "p-4 overflow-y-auto menu w-80 bg-base-100 gap-10 sm:flex items-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Text__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
            variant: "heading",
            className: "font-extrabold tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10",
            children: "Menu"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_nav_element__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            label: "Home",
            href: "/"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_nav_element__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            label: "Basics",
            href: "/basics"
          })
        })]
      })]
    })]
  });
};

/***/ }),

/***/ 9458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Footer = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: "relative mb-40 mt-40",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("footer", {
      className: "border-t-2 border-[#141414] bg-black hover:text-white absolute w-full",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "ml-12 py-12 mr-12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-8 md:space-x-12 relative",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex flex-col col-span-2 mx-4 items-center md:items-start",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "flex flex-row ml-1",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "https://solana.com",
                target: "_blank",
                rel: "noopener noreferrer",
                passHref: true,
                className: "text-secondary hover:text-white",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "flex flex-row ml-1",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: "/solanaLogo.png",
                    alt: "solana icon",
                    width: 156,
                    height: 96
                  })
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex md:ml-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                href: "https://twitter.com/solana_devs",
                type: "button",
                className: "border-white text-secondary hover:text-white leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("svg", {
                  "aria-hidden": "true",
                  focusable: "false",
                  "data-prefix": "fab",
                  "data-icon": "twitter",
                  className: "w-4 h-full mx-auto",
                  role: "img",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
                    fill: "currentColor",
                    d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                href: "https://github.com/solana-labs",
                type: "button",
                className: "border-white text-secondary hover:text-white leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("svg", {
                  "aria-hidden": "true",
                  focusable: "false",
                  "data-prefix": "fab",
                  "data-icon": "github",
                  className: "w-4 h-full mx-auto",
                  role: "img",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 496 512",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
                    fill: "currentColor",
                    d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  })
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "mb-6 m-1 sm:text-left place-items-start items-start font-normal tracking-tight text-secondary",
              children: "\xA9 2023 Solana Foundation"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "mb-6 items-center mx-auto max-w-screen-lg",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "font-normal capitalize mb-2.5",
              children: "SOLANA"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex flex-col mb-0 gap-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "https://solana.com",
                target: "_blank",
                rel: "noopener noreferrer",
                passHref: true,
                className: "text-secondary hover:text-white",
                children: "Labs"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "https://solana.org",
                target: "_blank",
                rel: "noopener noreferrer",
                passHref: true,
                className: "text-secondary hover:text-white",
                children: "Foundation"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "https://solanamobile.com/",
                target: "_blank",
                rel: "noopener noreferrer",
                passHref: true,
                className: "text-secondary hover:text-white",
                children: "Solana Mobile"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "https://solanapay.com/",
                target: "_blank",
                rel: "noopener noreferrer",
                passHref: true,
                className: "text-secondary hover:text-white",
                children: "Solana Pay"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "https://solana.org/grants",
                target: "_blank",
                rel: "noopener noreferrer",
                passHref: true,
                className: "text-secondary hover:text-white",
                children: "Grants"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "mb-6 items-center mx-auto max-w-screen-lg",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
              className: "font-normal capitalize tracking-tight  mb-2.5",
              children: "DEVELOPERS"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex flex-col mb-0 gap-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "https://docs.solana.com/developers",
                target: "_blank",
                rel: "noopener noreferrer",
                passHref: true,
                className: "text-secondary hover:text-white",
                children: "Documentation"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "https://github.com/solana-mobile/solana-mobile-stack-sdk",
                target: "_blank",
                rel: "noopener noreferrer",
                passHref: true,
                className: "text-secondary hover:text-white",
                children: "Mobile SDK"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "https://github.com/solana-labs/solana-pay",
                target: "_blank",
                rel: "noopener noreferrer",
                passHref: true,
                className: "text-secondary hover:text-white",
                children: "Pay SDK"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "https://solanacookbook.com/",
                target: "_blank",
                rel: "noopener noreferrer",
                passHref: true,
                className: "text-secondary hover:text-white",
                children: "Cookbook"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "https://solana.com/developers/dao",
                target: "_blank",
                rel: "noopener noreferrer",
                passHref: true,
                className: "text-secondary hover:text-white",
                children: "DAOs"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "mb-6 items-center mx-auto max-w-screen-lg",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
              className: "font-normal tracking-tight  mb-2.5",
              children: "ECOSYSTEM"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex flex-col mb-0 gap-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "https://solana.com/news",
                target: "_blank",
                rel: "noopener noreferrer",
                passHref: true,
                className: "text-secondary hover:text-white",
                children: "News"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "https://solana.org/validators",
                target: "_blank",
                rel: "noopener noreferrer",
                passHref: true,
                className: "text-secondary hover:text-white",
                children: "Validators"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "https://www.youtube.com/@SolanaFndn",
                target: "_blank",
                rel: "noopener noreferrer",
                passHref: true,
                className: "text-secondary hover:text-white",
                children: "Youtube"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "https://app.realms.today/discover",
                target: "_blank",
                rel: "noopener noreferrer",
                passHref: true,
                className: "text-secondary hover:text-white",
                children: "Realms"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "https://www.solanau.org",
                target: "_blank",
                rel: "noopener noreferrer",
                passHref: true,
                className: "text-secondary hover:text-white",
                children: "Solana U"
              })]
            })]
          })]
        })
      })
    })
  });
};

/***/ }),

/***/ 2731:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5535);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_1__]);
_contexts_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const NetworkSwitcher = () => {
  const {
    networkConfiguration,
    setNetworkConfiguration
  } = (0,_contexts_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_1__/* .useNetworkConfiguration */ .lt)();
  console.log(networkConfiguration);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
    className: "cursor-pointer label",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
      children: "Network"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
      value: networkConfiguration,
      onChange: e => setNetworkConfiguration(e.target.value),
      className: "select max-w-xs",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("option", {
        value: "mainnet-beta",
        children: "main"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("option", {
        value: "devnet",
        children: "dev"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("option", {
        value: "testnet",
        children: "test"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.resolve(NetworkSwitcher), {
  ssr: false
}));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3578:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9473);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1247);
/* harmony import */ var contexts_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5535);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, contexts_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_5__]);
([_stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, contexts_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const NotificationList = () => {
  const {
    notifications,
    set: setNotificationStore
  } = (0,_stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(s => s);
  const reversedNotifications = [...notifications].reverse();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    className: `z-20 fixed inset-20 flex items-end px-4 py-6 pointer-events-none sm:p-6`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: `flex flex-col w-full`,
      children: reversedNotifications.map((n, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Notification, {
        type: n.type,
        message: n.message,
        description: n.description,
        txid: n.txid,
        onHide: () => {
          setNotificationStore(state => {
            const reversedIndex = reversedNotifications.length - 1 - idx;
            state.notifications = [...notifications.slice(0, reversedIndex), ...notifications.slice(reversedIndex + 1)];
          });
        }
      }, `${n.message}${idx}`))
    })
  });
};

const Notification = ({
  type,
  message,
  description,
  txid,
  onHide
}) => {
  const {
    connection
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useConnection)();
  const {
    networkConfiguration
  } = (0,contexts_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_5__/* .useNetworkConfiguration */ .lt)(); // TODO: we dont have access to the network or endpoint here.. 
  // getExplorerUrl(connection., txid, 'tx')
  // Either a provider, context, and or wallet adapter related pro/contx need updated

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const id = setTimeout(() => {
      onHide();
    }, 8000);
    return () => {
      clearInterval(id);
    };
  }, [onHide]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    className: `max-w-sm w-full bg-bkg-1 shadow-lg rounded-md mt-2 pointer-events-auto ring-1 ring-black ring-opacity-5 p-2 mx-4 mb-12 overflow-hidden`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: `p-4`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: `flex items-center`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: `flex-shrink-0`,
          children: [type === 'success' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.CheckCircleIcon, {
            className: `h-8 w-8 mr-1 text-green`
          }) : null, type === 'info' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.InformationCircleIcon, {
            className: `h-8 w-8 mr-1 text-red`
          }), type === 'error' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.XCircleIcon, {
            className: `h-8 w-8 mr-1`
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: `ml-2 w-0 flex-1`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: `font-bold text-fgd-1`,
            children: message
          }), description ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
            className: `mt-0.5 text-sm text-fgd-2`,
            children: description
          }) : null, txid ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: "flex flex-row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
              href: 'https://explorer.solana.com/tx/' + txid + `?cluster=${networkConfiguration}`,
              target: "_blank",
              rel: "noreferrer",
              className: "flex flex-row link link-accent",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("svg", {
                className: "flex-shrink-0 h-4 ml-2 mt-0.5 text-primary-light w-4",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "flex mx-4",
                children: [txid.slice(0, 8), "...", txid.slice(txid.length - 8)]
              })]
            })
          }) : null]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: `ml-4 flex-shrink-0 self-start flex`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            onClick: () => onHide(),
            className: `bg-bkg-2 default-transition rounded-md inline-flex text-fgd-3 hover:text-fgd-4 focus:outline-none`,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
              className: `sr-only`,
              children: "Close"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.XIcon, {
              className: "h-5 w-5"
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationList);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9251);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);



/**
 * Properties for a card component.
 */



/**
 * Pre-defined styling, according to agreed-upon design-system.
 */
const variants = {
  heading: 'text-3xl font-medium',
  'sub-heading': 'text-2xl font-medium',
  'nav-heading': 'text-lg font-medium sm:text-xl',
  nav: 'font-medium',
  paragraph: 'text-lg',
  'sub-paragraph': 'text-base font-medium text-inherit',
  input: 'text-sm uppercase tracking-wide',
  label: 'text-xs uppercase tracking-wide'
};
/**
 * Definition of a card component,the main purpose of
 * which is to neatly display information. Can be both
 * interactive and static.
 *
 * @param variant Variations relating to pre-defined styling of the element.
 * @param className Custom classes to be applied to the element.
 * @param children Child elements to be rendered within the component.
 */

const Text = ({
  variant,
  className,
  href,
  children
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
  className: (0,utils__WEBPACK_IMPORTED_MODULE_2__.cn)(className, variants[variant]),
  children: href ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
    href: href,
    className: "min-w-0 overflow-hidden text-ellipsis whitespace-nowrap",
    children: children
  }) : children
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

/***/ }),

/***/ 6320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ nav_element)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Text/index.tsx
var Text = __webpack_require__(9311);
// EXTERNAL MODULE: ./src/utils/index.tsx + 1 modules
var utils = __webpack_require__(9251);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/nav-element/index.tsx
/* tslint:disable:no-empty */








const NavElement = ({
  label,
  href,
  as,
  scroll,
  disabled,
  navigationStarts = () => {}
}) => {
  const router = (0,router_namespaceObject.useRouter)();
  const isActive = href === router.asPath || as && as === router.asPath;
  const divRef = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => {
    if (divRef.current) {
      divRef.current.className = (0,utils.cn)('h-0.5 w-1/4 transition-all duration-300 ease-out', isActive ? '!w-full bg-gradient-to-l from-fuchsia-500 to-pink-500 ' : 'group-hover:w-1/2 group-hover:bg-fuchsia-500');
    }
  }, [isActive]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((link_default()), {
    href: href,
    as: as,
    scroll: scroll,
    passHref: true,
    className: (0,utils.cn)('group flex h-full flex-col items-center justify-between', disabled && 'pointer-events-none cursor-not-allowed opacity-50'),
    onClick: () => navigationStarts(),
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-row items-center gap-3",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Text/* default */.Z, {
        variant: "nav-heading",
        children: [" ", label, " "]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      ref: divRef
    })]
  });
};

/* harmony default export */ const nav_element = (NavElement);

/***/ }),

/***/ 3299:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tu": () => (/* binding */ AutoConnectProvider),
/* harmony export */   "vl": () => (/* binding */ useAutoConnect)
/* harmony export */ });
/* unused harmony export AutoConnectContext */
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1247);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__]);
_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const AutoConnectContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function useAutoConnect() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AutoConnectContext);
}
const AutoConnectProvider = ({
  children
}) => {
  // TODO: fix auto connect to actual reconnect on refresh/other.
  // TODO: make switch/slider settings
  // const [autoConnect, setAutoConnect] = useLocalStorage('autoConnect', false);
  const [autoConnect, setAutoConnect] = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useLocalStorage)('autoConnect', true);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(AutoConnectContext.Provider, {
    value: {
      autoConnect,
      setAutoConnect
    },
    children: children
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6434:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ ContextProvider)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1247);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7280);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AutoConnectProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3299);
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1118);
/* harmony import */ var _NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5535);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__, _AutoConnectProvider__WEBPACK_IMPORTED_MODULE_4__, _utils_notifications__WEBPACK_IMPORTED_MODULE_5__, _NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_6__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__, _AutoConnectProvider__WEBPACK_IMPORTED_MODULE_4__, _utils_notifications__WEBPACK_IMPORTED_MODULE_5__, _NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const ReactUIWalletModalProviderDynamic = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(async () => (await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 8847))).WalletModalProvider, {
  ssr: false,
  loadableGenerated: {
    modules: ["../contexts/ContextProvider.tsx -> " + "@solana/wallet-adapter-react-ui"]
  }
});

const WalletContextProvider = ({
  children
}) => {
  const {
    autoConnect
  } = (0,_AutoConnectProvider__WEBPACK_IMPORTED_MODULE_4__/* .useAutoConnect */ .vl)();
  const {
    networkConfiguration
  } = (0,_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_6__/* .useNetworkConfiguration */ .lt)();
  const network = networkConfiguration;
  const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.clusterApiUrl)(network), [network]);
  console.log(network);
  const wallets = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => [new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__.PhantomWalletAdapter(), new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__.SolflareWalletAdapter(), new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__.SolletWalletAdapter({
    network
  }), new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__.SolletExtensionWalletAdapter({
    network
  }), new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__.TorusWalletAdapter() // new LedgerWalletAdapter(),
  // new SlopeWalletAdapter(),
  ], [network]);
  const onError = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(error => {
    (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_5__/* .notify */ .h)({
      type: 'error',
      message: error.message ? `${error.name}: ${error.message}` : error.name
    });
    console.error(error);
  }, []);
  return (
    /*#__PURE__*/
    // TODO: updates needed for updating and referencing endpoint: wallet adapter rework
    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.ConnectionProvider, {
      endpoint: endpoint,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.WalletProvider, {
        wallets: wallets,
        onError: onError,
        autoConnect: autoConnect,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ReactUIWalletModalProviderDynamic, {
          children: children
        })
      })
    })
  );
};

const ContextProvider = ({
  children
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_6__/* .NetworkConfigurationProvider */ .bm, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_AutoConnectProvider__WEBPACK_IMPORTED_MODULE_4__/* .AutoConnectProvider */ .Tu, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(WalletContextProvider, {
          children: children
        })
      })
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5535:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bm": () => (/* binding */ NetworkConfigurationProvider),
/* harmony export */   "lt": () => (/* binding */ useNetworkConfiguration)
/* harmony export */ });
/* unused harmony export NetworkConfigurationContext */
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1247);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__]);
_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const NetworkConfigurationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function useNetworkConfiguration() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NetworkConfigurationContext);
}
const NetworkConfigurationProvider = ({
  children
}) => {
  const [networkConfiguration, setNetworkConfiguration] = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useLocalStorage)("network", "devnet");
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(NetworkConfigurationContext.Provider, {
    value: {
      networkConfiguration,
      setNetworkConfiguration
    },
    children: children
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1336:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_ContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6434);
/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(973);
/* harmony import */ var _components_ContentContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5446);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9458);
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3578);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_ContextProvider__WEBPACK_IMPORTED_MODULE_1__, _components_AppBar__WEBPACK_IMPORTED_MODULE_2__, _components_Notification__WEBPACK_IMPORTED_MODULE_5__]);
([_contexts_ContextProvider__WEBPACK_IMPORTED_MODULE_1__, _components_AppBar__WEBPACK_IMPORTED_MODULE_2__, _components_Notification__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











__webpack_require__(2121);

__webpack_require__(108);

const App = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("title", {
        children: "WSoS 2023 - beliven.SOL"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_contexts_ContextProvider__WEBPACK_IMPORTED_MODULE_1__/* .ContextProvider */ .H, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex flex-col h-screen",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Notification__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_AppBar__WEBPACK_IMPORTED_MODULE_2__/* .AppBar */ .x, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_ContentContainer__WEBPACK_IMPORTED_MODULE_3__/* .ContentContainer */ .O, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__/* .Footer */ .$, {})]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "cn": () => (/* binding */ cn)
});

// UNUSED EXPORTS: clamp, formatDate, numberToCurrencyString

;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
;// CONCATENATED MODULE: ./src/utils/index.tsx
 // Concatenates classes into a single className string

const cn = (...args) => args.join(' ');

const formatDate = date => format(new Date(date), 'MM/dd/yyyy h:mm:ss');
/**
 * Formats number as currency string.
 *
 * @param number Number to format.
 */


const numberToCurrencyString = number => number.toLocaleString('en-US');
/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */


const clamp = (current, min, max) => Math.min(Math.max(current, min), max);



/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 8768:
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 1143:
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 7831:
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1247:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ 8847:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ 7280:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-wallets");;

/***/ }),

/***/ 9810:
/***/ ((module) => {

"use strict";
module.exports = import("immer");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,675,676,324,118], () => (__webpack_exec__(1336)));
module.exports = __webpack_exports__;

})();