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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layouts_main_light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/main-light */ \"./src/layouts/main-light.jsx\");\n/* harmony import */ var _components_Common_StickyBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Common/StickyBar */ \"./src/components/Common/StickyBar/index.jsx\");\n/* harmony import */ var _components_Common_FixedSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Common/FixedSearch */ \"./src/components/Common/FixedSearch/index.jsx\");\n/* harmony import */ var _components_Main_Header3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Main/Header3 */ \"./src/components/Main/Header3/index.jsx\");\n/* harmony import */ var _components_Main_Process2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Main/Process2 */ \"./src/components/Main/Process2/index.jsx\");\n/* harmony import */ var _components_Creative_Testimonials__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Creative/Testimonials */ \"./src/components/Creative/Testimonials/index.jsx\");\n/* harmony import */ var _components_Main_About2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Main/About2 */ \"./src/components/Main/About2/index.jsx\");\n/* harmony import */ var _components_Footers_DigitalFooter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Footers/DigitalFooter */ \"./src/components/Footers/DigitalFooter/index.jsx\");\n/* harmony import */ var _components_Common_WelcomeAnimation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Common/WelcomeAnimation */ \"./src/components/Common/WelcomeAnimation/index.jsx\");\n/* harmony import */ var _components_Progress_Scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Progress-Scroll */ \"./src/components/Progress-Scroll/index.jsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n/* eslint-disable @next/next/no-css-tags */ \n\n//= Layout\n\n//= Components\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar HomeLanding = function() {\n    var delay = function delay(time) {\n        return new Promise(function(resolve) {\n            return setTimeout(resolve, time);\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var changeState = function() {\n        var _ref = _asyncToGenerator(C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setIsLoading(false);\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function changeState() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var _classList;\n        document.body.classList.add(\"land-demo2\");\n        var removeClasses = [\n            \"index-bus1\",\n            \"index-corporate\",\n            \"index-restaurant\",\n            \"index-arch\",\n            \"index-freelancer\",\n            \"cr-agency\",\n            \"index-main\",\n            \"mobile-app\",\n            \"gr-orange-bg\",\n            \"nft-market\", \n        ];\n        (_classList = document.body.classList).remove.apply(_classList, _toConsumableArray(removeClasses));\n    }, []);\n    var siteDisplay1 = function() {\n        var siteDisplay = {};\n        if (isLoading) {\n            siteDisplay = {\n                display: \"none\"\n            };\n        } else {\n            delay(1000);\n            siteDisplay = {\n                display: \"\"\n            };\n        }\n        return siteDisplay;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Common_WelcomeAnimation__WEBPACK_IMPORTED_MODULE_12__.WelcomeAnimation, {\n                isLoading: isLoading,\n                changeState: changeState\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                lineNumber: 57,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                style: siteDisplay1(),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_layouts_main_light__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    defaultTheme: \"dark\",\n                    defaultLogoTheme: \"dark\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Common_StickyBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Common_FixedSearch__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Main_Header3__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Creative_Testimonials__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Main_Process2__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Main_About2__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Footers_DigitalFooter__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                            footerClass: \"position-re pb-40\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Progress_Scroll__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 6\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                lineNumber: 58,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(HomeLanding, \"3+L5C4BXCkvfI+CLvYAvKVZ7bm8=\");\n_c = HomeLanding;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeLanding);\nvar _c;\n$RefreshReg$(_c, \"HomeLanding\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS1sYW5kaW5nLTIvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREEsMkNBQTJDLENBQ0M7QUFDZjtBQUM3QixVQUFVO0FBQzZDO0FBQ3ZELGNBQWM7QUFDNEM7QUFDSTtBQUNYO0FBQ0U7QUFDYTtBQUNqQjtBQUNXO0FBQ2dCO0FBQ2Q7O0FBRTlELElBQU1hLFdBQVcsR0FBRyxXQUFNO1FBR2hCQyxLQUFLLEdBQWQsU0FBU0EsS0FBSyxDQUFDQyxJQUFJLEVBQUU7UUFDcEIsT0FBTyxJQUFJQyxPQUFPLENBQUMsU0FBQ0MsT0FBTzttQkFBS0MsVUFBVSxDQUFDRCxPQUFPLEVBQUVGLElBQUksQ0FBQztTQUFBLENBQUMsQ0FBQztLQUMzRDs7SUFKRCxJQUFrQ2QsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQWpCakQsU0FpQmlCLEdBQWtCQSxHQUFjLEdBQWhDLEVBakJqQixZQWlCK0IsR0FBSUEsR0FBYyxHQUFsQjtJQUs5QixJQUFNb0IsV0FBVzttQkFBRyx3TEFBWTs7Ozt3QkFDL0JELFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7O1NBQ3BCO3dCQUZLQyxXQUFXOzs7T0FFaEI7SUFDRHJCLGdEQUFTLENBQUMsV0FBTTtZQWdCZnNCLFVBQXVCO1FBZnZCQSxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFMUMsSUFBTUMsYUFBYSxHQUFHO1lBQ3JCLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsV0FBVztZQUNYLFlBQVk7WUFDWixZQUFZO1lBQ1osY0FBYztZQUNkLFlBQVk7U0FDWjtRQUVESixDQUFBQSxVQUF1QixHQUF2QkEsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsRUFBQ0csTUFBTSxDQUE5QkwsS0FBZ0QsQ0FBaERBLFVBQXVCLEVBQVEsbUJBQUdJLGFBQWEsQ0FBYkEsQ0FBYyxDQUFDO0tBQ2pELEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxJQUFNRSxZQUFXLEdBQUcsV0FBTTtRQUN6QixJQUFJQSxXQUFXLEdBQUcsRUFBRTtRQUNwQixJQUFJVCxTQUFTLEVBQUU7WUFDZFMsV0FBVyxHQUFHO2dCQUFFQyxPQUFPLEVBQUUsTUFBTTthQUFFLENBQUM7U0FDbEMsTUFBTTtZQUNOZixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWmMsV0FBVyxHQUFHO2dCQUFFQyxPQUFPLEVBQUUsRUFBRTthQUFFLENBQUM7U0FDOUI7UUFDRCxPQUFPRCxXQUFXLENBQUM7S0FDbkI7SUFDRCxxQkFDQzs7MEJBQ0MsOERBQUNqQixrRkFBZ0I7Z0JBQUNRLFNBQVMsRUFBRUEsU0FBUztnQkFBRUUsV0FBVyxFQUFFQSxXQUFXOzs7OztxQkFBSTswQkFDcEUsOERBQUNTLEtBQUc7Z0JBQUNDLEtBQUssRUFBRUgsWUFBVyxFQUFFOzBCQUN4Qiw0RUFBQ3pCLDJEQUFlO29CQUFDNkIsWUFBWSxFQUFFLE1BQU07b0JBQUVDLGdCQUFnQixFQUFDLE1BQU07O3NDQUM3RCw4REFBQzdCLG9FQUFTOzs7O2lDQUFHO3NDQUNiLDhEQUFDQyxzRUFBVzs7OztpQ0FBRztzQ0FDZiw4REFBQ0MsZ0VBQU07Ozs7aUNBQUc7c0NBQ1YsOERBQUNFLHlFQUFZOzs7O2lDQUFHO3NDQUNoQiw4REFBQ0QsaUVBQU87Ozs7aUNBQUc7c0NBQ1gsOERBQUNFLGdFQUFLOzs7O2lDQUFHO3NDQUNULDhEQUFDQywwRUFBTTs0QkFBQ3dCLFdBQVcsRUFBQyxtQkFBbUI7Ozs7O2lDQUFHO3NDQUMxQyw4REFBQ3RCLG9FQUFjOzs7O2lDQUFHOzs7Ozs7eUJBQ0Q7Ozs7O3FCQUNiOztvQkFDSixDQUNGO0NBQ0Y7R0F2REtDLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQXlEakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaG9tZS1sYW5kaW5nLTIvaW5kZXguanN4PzA4ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1jc3MtdGFncyAqL1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuLy89IExheW91dFxyXG5pbXBvcnQgTWFpbkxpZ2h0TGF5b3V0IGZyb20gXCIuLi8uLi9sYXlvdXRzL21haW4tbGlnaHRcIjtcclxuLy89IENvbXBvbmVudHNcclxuaW1wb3J0IFN0aWNreUJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db21tb24vU3RpY2t5QmFyXCI7XHJcbmltcG9ydCBGaXhlZFNlYXJjaCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db21tb24vRml4ZWRTZWFyY2hcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluL0hlYWRlcjNcIjtcclxuaW1wb3J0IFByb2Nlc3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpbi9Qcm9jZXNzMlwiO1xyXG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NyZWF0aXZlL1Rlc3RpbW9uaWFsc1wiO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpbi9BYm91dDJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb290ZXJzL0RpZ2l0YWxGb290ZXJcIjtcclxuaW1wb3J0IHsgV2VsY29tZUFuaW1hdGlvbiB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBQcm9ncmVzc1Njcm9sbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9ncmVzcy1TY3JvbGxcIjtcclxuXHJcbmNvbnN0IEhvbWVMYW5kaW5nID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblx0ZnVuY3Rpb24gZGVsYXkodGltZSkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcclxuXHR9XHJcblx0Y29uc3QgY2hhbmdlU3RhdGUgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG5cdH07XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxhbmQtZGVtbzJcIik7XHJcblxyXG5cdFx0Y29uc3QgcmVtb3ZlQ2xhc3NlcyA9IFtcclxuXHRcdFx0XCJpbmRleC1idXMxXCIsXHJcblx0XHRcdFwiaW5kZXgtY29ycG9yYXRlXCIsXHJcblx0XHRcdFwiaW5kZXgtcmVzdGF1cmFudFwiLFxyXG5cdFx0XHRcImluZGV4LWFyY2hcIixcclxuXHRcdFx0XCJpbmRleC1mcmVlbGFuY2VyXCIsXHJcblx0XHRcdFwiY3ItYWdlbmN5XCIsXHJcblx0XHRcdFwiaW5kZXgtbWFpblwiLFxyXG5cdFx0XHRcIm1vYmlsZS1hcHBcIixcclxuXHRcdFx0XCJnci1vcmFuZ2UtYmdcIixcclxuXHRcdFx0XCJuZnQtbWFya2V0XCIsXHJcblx0XHRdO1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSguLi5yZW1vdmVDbGFzc2VzKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IHNpdGVEaXNwbGF5ID0gKCkgPT4ge1xyXG5cdFx0bGV0IHNpdGVEaXNwbGF5ID0ge307XHJcblx0XHRpZiAoaXNMb2FkaW5nKSB7XHJcblx0XHRcdHNpdGVEaXNwbGF5ID0geyBkaXNwbGF5OiBcIm5vbmVcIiB9O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGVsYXkoMTAwMCk7XHJcblx0XHRcdHNpdGVEaXNwbGF5ID0geyBkaXNwbGF5OiBcIlwiIH07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gc2l0ZURpc3BsYXk7XHJcblx0fTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PFdlbGNvbWVBbmltYXRpb24gaXNMb2FkaW5nPXtpc0xvYWRpbmd9IGNoYW5nZVN0YXRlPXtjaGFuZ2VTdGF0ZX0gLz5cclxuXHRcdFx0PGRpdiBzdHlsZT17c2l0ZURpc3BsYXkoKX0+XHJcblx0XHRcdFx0PE1haW5MaWdodExheW91dCBkZWZhdWx0VGhlbWU9e1wiZGFya1wifSBkZWZhdWx0TG9nb1RoZW1lPSdkYXJrJz5cclxuXHRcdFx0XHRcdDxTdGlja3lCYXIgLz5cclxuXHRcdFx0XHRcdDxGaXhlZFNlYXJjaCAvPlxyXG5cdFx0XHRcdFx0PEhlYWRlciAvPlxyXG5cdFx0XHRcdFx0PFRlc3RpbW9uaWFscyAvPlxyXG5cdFx0XHRcdFx0PFByb2Nlc3MgLz5cclxuXHRcdFx0XHRcdDxBYm91dCAvPlxyXG5cdFx0XHRcdFx0PEZvb3RlciBmb290ZXJDbGFzcz0ncG9zaXRpb24tcmUgcGItNDAnIC8+XHJcblx0XHRcdFx0XHQ8UHJvZ3Jlc3NTY3JvbGwgLz5cclxuXHRcdFx0XHQ8L01haW5MaWdodExheW91dD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZUxhbmRpbmc7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJNYWluTGlnaHRMYXlvdXQiLCJTdGlja3lCYXIiLCJGaXhlZFNlYXJjaCIsIkhlYWRlciIsIlByb2Nlc3MiLCJUZXN0aW1vbmlhbHMiLCJBYm91dCIsIkZvb3RlciIsIldlbGNvbWVBbmltYXRpb24iLCJQcm9ncmVzc1Njcm9sbCIsIkhvbWVMYW5kaW5nIiwiZGVsYXkiLCJ0aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY2hhbmdlU3RhdGUiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVDbGFzc2VzIiwicmVtb3ZlIiwic2l0ZURpc3BsYXkiLCJkaXNwbGF5IiwiZGl2Iiwic3R5bGUiLCJkZWZhdWx0VGhlbWUiLCJkZWZhdWx0TG9nb1RoZW1lIiwiZm9vdGVyQ2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home-landing-2/index.jsx\n");

/***/ })

});