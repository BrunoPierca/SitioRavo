"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home-landing-2",{

/***/ "./src/pages/home-landing-2/index.jsx":
/*!********************************************!*\
  !*** ./src/pages/home-landing-2/index.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layouts_main_light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/main-light */ \"./src/layouts/main-light.jsx\");\n/* harmony import */ var _components_Common_StickyBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Common/StickyBar */ \"./src/components/Common/StickyBar/index.jsx\");\n/* harmony import */ var _components_Common_FixedSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Common/FixedSearch */ \"./src/components/Common/FixedSearch/index.jsx\");\n/* harmony import */ var _components_Main_Header3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Main/Header3 */ \"./src/components/Main/Header3/index.jsx\");\n/* harmony import */ var _components_Main_Process2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Main/Process2 */ \"./src/components/Main/Process2/index.jsx\");\n/* harmony import */ var _components_Creative_Testimonials__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Creative/Testimonials */ \"./src/components/Creative/Testimonials/index.jsx\");\n/* harmony import */ var _components_Main_About2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Main/About2 */ \"./src/components/Main/About2/index.jsx\");\n/* harmony import */ var _components_Footers_DigitalFooter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Footers/DigitalFooter */ \"./src/components/Footers/DigitalFooter/index.jsx\");\n/* harmony import */ var _components_Common_WelcomeAnimation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Common/WelcomeAnimation */ \"./src/components/Common/WelcomeAnimation/index.jsx\");\n/* harmony import */ var _components_Progress_Scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Progress-Scroll */ \"./src/components/Progress-Scroll/index.jsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n/* eslint-disable @next/next/no-css-tags */ \n\n//= Layout\n\n//= Components\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar HomeLanding = function() {\n    var delay = function delay(time) {\n        return new Promise(function(resolve) {\n            return setTimeout(resolve, time);\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var changeState = function() {\n        setIsLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var _classList;\n        document.body.classList.add(\"land-demo2\");\n        var removeClasses = [\n            \"index-bus1\",\n            \"index-corporate\",\n            \"index-restaurant\",\n            \"index-arch\",\n            \"index-freelancer\",\n            \"cr-agency\",\n            \"index-main\",\n            \"mobile-app\",\n            \"gr-orange-bg\",\n            \"nft-market\", \n        ];\n        (_classList = document.body.classList).remove.apply(_classList, _toConsumableArray(removeClasses));\n    }, []);\n    var siteDisplay1 = function() {\n        var _ref = _asyncToGenerator(C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var siteDisplay;\n            return C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        siteDisplay = {};\n                        if (!isLoading) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        {\n                            siteDisplay = {\n                                display: \"none\"\n                            };\n                        }\n                        _ctx.next = 8;\n                        break;\n                    case 5:\n                        _ctx.next = 7;\n                        return delay(1000);\n                    case 7:\n                        siteDisplay = {\n                            display: \"\"\n                        };\n                    case 8:\n                        return _ctx.abrupt(\"return\", siteDisplay);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function siteDisplay1() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Common_WelcomeAnimation__WEBPACK_IMPORTED_MODULE_12__.WelcomeAnimation, {\n                isLoading: isLoading,\n                changeState: changeState\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                lineNumber: 57,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                style: siteDisplay1(),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_layouts_main_light__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    defaultTheme: \"dark\",\n                    defaultLogoTheme: \"dark\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Common_StickyBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Common_FixedSearch__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Main_Header3__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Creative_Testimonials__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Main_Process2__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Main_About2__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Footers_DigitalFooter__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                            footerClass: \"position-re pb-40\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Progress_Scroll__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 6\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                lineNumber: 58,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(HomeLanding, \"3+L5C4BXCkvfI+CLvYAvKVZ7bm8=\");\n_c = HomeLanding;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeLanding);\nvar _c;\n$RefreshReg$(_c, \"HomeLanding\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS1sYW5kaW5nLTIvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREEsMkNBQTJDLENBQ0M7QUFDZjtBQUM3QixVQUFVO0FBQzZDO0FBQ3ZELGNBQWM7QUFDNEM7QUFDSTtBQUNYO0FBQ0U7QUFDYTtBQUNqQjtBQUNXO0FBQ2dCO0FBQ2Q7O0FBRTlELElBQU1hLFdBQVcsR0FBRyxXQUFNO1FBR2hCQyxLQUFLLEdBQWQsU0FBU0EsS0FBSyxDQUFDQyxJQUFJLEVBQUU7UUFDcEIsT0FBTyxJQUFJQyxPQUFPLENBQUMsU0FBQ0MsT0FBTzttQkFBS0MsVUFBVSxDQUFDRCxPQUFPLEVBQUVGLElBQUksQ0FBQztTQUFBLENBQUMsQ0FBQztLQUMzRDs7SUFKRCxJQUFrQ2QsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQWpCakQsU0FpQmlCLEdBQWtCQSxHQUFjLEdBQWhDLEVBakJqQixZQWlCK0IsR0FBSUEsR0FBYyxHQUFsQjtJQUs5QixJQUFNb0IsV0FBVyxHQUFHLFdBQU07UUFDekJELFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQjtJQUNEcEIsZ0RBQVMsQ0FBQyxXQUFNO1lBZ0Jmc0IsVUFBdUI7UUFmdkJBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUxQyxJQUFNQyxhQUFhLEdBQUc7WUFDckIsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gsWUFBWTtZQUNaLFlBQVk7WUFDWixjQUFjO1lBQ2QsWUFBWTtTQUNaO1FBRURKLENBQUFBLFVBQXVCLEdBQXZCQSxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxFQUFDRyxNQUFNLENBQTlCTCxLQUFnRCxDQUFoREEsVUFBdUIsRUFBUSxtQkFBR0ksYUFBYSxDQUFiQSxDQUFjLENBQUM7S0FDakQsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQU1FLFlBQVc7bUJBQUcsd0xBQVk7Z0JBQzNCQSxXQUFXOzs7O3dCQUFYQSxXQUFXLEdBQUcsRUFBRSxDQUFDOzRCQUNqQlQsQ0FBQUEsU0FBUzs7Ozt3QkFBRTs0QkFDZFMsV0FBVyxHQUFHO2dDQUFFQyxPQUFPLEVBQUUsTUFBTTs2QkFBRSxDQUFDO3lCQUNsQzs7Ozs7K0JBQ01mLEtBQUssQ0FBQyxJQUFJLENBQUM7O3dCQUNqQmMsV0FBVyxHQUFHOzRCQUFFQyxPQUFPLEVBQUUsRUFBRTt5QkFBRSxDQUFDOztxREFFeEJELFdBQVc7Ozs7OztTQUNsQjt3QkFUS0EsWUFBVzs7O09BU2hCO0lBQ0QscUJBQ0M7OzBCQUNDLDhEQUFDakIsa0ZBQWdCO2dCQUFDUSxTQUFTLEVBQUVBLFNBQVM7Z0JBQUVFLFdBQVcsRUFBRUEsV0FBVzs7Ozs7cUJBQUk7MEJBQ3BFLDhEQUFDUyxLQUFHO2dCQUFDQyxLQUFLLEVBQUVILFlBQVcsRUFBRTswQkFDeEIsNEVBQUN6QiwyREFBZTtvQkFBQzZCLFlBQVksRUFBRSxNQUFNO29CQUFFQyxnQkFBZ0IsRUFBQyxNQUFNOztzQ0FDN0QsOERBQUM3QixvRUFBUzs7OztpQ0FBRztzQ0FDYiw4REFBQ0Msc0VBQVc7Ozs7aUNBQUc7c0NBQ2YsOERBQUNDLGdFQUFNOzs7O2lDQUFHO3NDQUNWLDhEQUFDRSx5RUFBWTs7OztpQ0FBRztzQ0FDaEIsOERBQUNELGlFQUFPOzs7O2lDQUFHO3NDQUNYLDhEQUFDRSxnRUFBSzs7OztpQ0FBRztzQ0FDVCw4REFBQ0MsMEVBQU07NEJBQUN3QixXQUFXLEVBQUMsbUJBQW1COzs7OztpQ0FBRztzQ0FDMUMsOERBQUN0QixvRUFBYzs7OztpQ0FBRzs7Ozs7O3lCQUNEOzs7OztxQkFDYjs7b0JBQ0osQ0FDRjtDQUNGO0dBdkRLQyxXQUFXO0FBQVhBLEtBQUFBLFdBQVc7QUF5RGpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUtbGFuZGluZy0yL2luZGV4LmpzeD8wOGUyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8tY3NzLXRhZ3MgKi9cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbi8vPSBMYXlvdXRcclxuaW1wb3J0IE1haW5MaWdodExheW91dCBmcm9tIFwiLi4vLi4vbGF5b3V0cy9tYWluLWxpZ2h0XCI7XHJcbi8vPSBDb21wb25lbnRzXHJcbmltcG9ydCBTdGlja3lCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29tbW9uL1N0aWNreUJhclwiO1xyXG5pbXBvcnQgRml4ZWRTZWFyY2ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29tbW9uL0ZpeGVkU2VhcmNoXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpbi9IZWFkZXIzXCI7XHJcbmltcG9ydCBQcm9jZXNzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01haW4vUHJvY2VzczJcIjtcclxuaW1wb3J0IFRlc3RpbW9uaWFscyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DcmVhdGl2ZS9UZXN0aW1vbmlhbHNcIjtcclxuaW1wb3J0IEFib3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01haW4vQWJvdXQyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9vdGVycy9EaWdpdGFsRm9vdGVyXCI7XHJcbmltcG9ydCB7IFdlbGNvbWVBbmltYXRpb24gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db21tb24vV2VsY29tZUFuaW1hdGlvblwiO1xyXG5pbXBvcnQgUHJvZ3Jlc3NTY3JvbGwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZ3Jlc3MtU2Nyb2xsXCI7XHJcblxyXG5jb25zdCBIb21lTGFuZGluZyA9ICgpID0+IHtcclxuXHRjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG5cdGZ1bmN0aW9uIGRlbGF5KHRpbWUpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSk7XHJcblx0fVxyXG5cdGNvbnN0IGNoYW5nZVN0YXRlID0gKCkgPT4ge1xyXG5cdFx0c2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuXHR9O1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsYW5kLWRlbW8yXCIpO1xyXG5cclxuXHRcdGNvbnN0IHJlbW92ZUNsYXNzZXMgPSBbXHJcblx0XHRcdFwiaW5kZXgtYnVzMVwiLFxyXG5cdFx0XHRcImluZGV4LWNvcnBvcmF0ZVwiLFxyXG5cdFx0XHRcImluZGV4LXJlc3RhdXJhbnRcIixcclxuXHRcdFx0XCJpbmRleC1hcmNoXCIsXHJcblx0XHRcdFwiaW5kZXgtZnJlZWxhbmNlclwiLFxyXG5cdFx0XHRcImNyLWFnZW5jeVwiLFxyXG5cdFx0XHRcImluZGV4LW1haW5cIixcclxuXHRcdFx0XCJtb2JpbGUtYXBwXCIsXHJcblx0XHRcdFwiZ3Itb3JhbmdlLWJnXCIsXHJcblx0XHRcdFwibmZ0LW1hcmtldFwiLFxyXG5cdFx0XTtcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoLi4ucmVtb3ZlQ2xhc3Nlcyk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBzaXRlRGlzcGxheSA9IGFzeW5jICgpID0+IHtcclxuXHRcdGxldCBzaXRlRGlzcGxheSA9IHt9O1xyXG5cdFx0aWYgKGlzTG9hZGluZykge1xyXG5cdFx0XHRzaXRlRGlzcGxheSA9IHsgZGlzcGxheTogXCJub25lXCIgfTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGF3YWl0IGRlbGF5KDEwMDApO1xyXG5cdFx0XHRzaXRlRGlzcGxheSA9IHsgZGlzcGxheTogXCJcIiB9O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHNpdGVEaXNwbGF5O1xyXG5cdH07XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxXZWxjb21lQW5pbWF0aW9uIGlzTG9hZGluZz17aXNMb2FkaW5nfSBjaGFuZ2VTdGF0ZT17Y2hhbmdlU3RhdGV9IC8+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3NpdGVEaXNwbGF5KCl9PlxyXG5cdFx0XHRcdDxNYWluTGlnaHRMYXlvdXQgZGVmYXVsdFRoZW1lPXtcImRhcmtcIn0gZGVmYXVsdExvZ29UaGVtZT0nZGFyayc+XHJcblx0XHRcdFx0XHQ8U3RpY2t5QmFyIC8+XHJcblx0XHRcdFx0XHQ8Rml4ZWRTZWFyY2ggLz5cclxuXHRcdFx0XHRcdDxIZWFkZXIgLz5cclxuXHRcdFx0XHRcdDxUZXN0aW1vbmlhbHMgLz5cclxuXHRcdFx0XHRcdDxQcm9jZXNzIC8+XHJcblx0XHRcdFx0XHQ8QWJvdXQgLz5cclxuXHRcdFx0XHRcdDxGb290ZXIgZm9vdGVyQ2xhc3M9J3Bvc2l0aW9uLXJlIHBiLTQwJyAvPlxyXG5cdFx0XHRcdFx0PFByb2dyZXNzU2Nyb2xsIC8+XHJcblx0XHRcdFx0PC9NYWluTGlnaHRMYXlvdXQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVMYW5kaW5nO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiTWFpbkxpZ2h0TGF5b3V0IiwiU3RpY2t5QmFyIiwiRml4ZWRTZWFyY2giLCJIZWFkZXIiLCJQcm9jZXNzIiwiVGVzdGltb25pYWxzIiwiQWJvdXQiLCJGb290ZXIiLCJXZWxjb21lQW5pbWF0aW9uIiwiUHJvZ3Jlc3NTY3JvbGwiLCJIb21lTGFuZGluZyIsImRlbGF5IiwidGltZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNoYW5nZVN0YXRlIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlQ2xhc3NlcyIsInJlbW92ZSIsInNpdGVEaXNwbGF5IiwiZGlzcGxheSIsImRpdiIsInN0eWxlIiwiZGVmYXVsdFRoZW1lIiwiZGVmYXVsdExvZ29UaGVtZSIsImZvb3RlckNsYXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/home-landing-2/index.jsx\n");

/***/ })

});