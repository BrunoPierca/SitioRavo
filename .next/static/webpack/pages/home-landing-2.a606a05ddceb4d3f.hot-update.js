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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layouts_main_light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/main-light */ \"./src/layouts/main-light.jsx\");\n/* harmony import */ var _components_Common_StickyBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Common/StickyBar */ \"./src/components/Common/StickyBar/index.jsx\");\n/* harmony import */ var _components_Common_FixedSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Common/FixedSearch */ \"./src/components/Common/FixedSearch/index.jsx\");\n/* harmony import */ var _components_Main_Header3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Main/Header3 */ \"./src/components/Main/Header3/index.jsx\");\n/* harmony import */ var _components_Main_Process2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Main/Process2 */ \"./src/components/Main/Process2/index.jsx\");\n/* harmony import */ var _components_Creative_Testimonials__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Creative/Testimonials */ \"./src/components/Creative/Testimonials/index.jsx\");\n/* harmony import */ var _components_Main_About2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Main/About2 */ \"./src/components/Main/About2/index.jsx\");\n/* harmony import */ var _components_Footers_DigitalFooter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Footers/DigitalFooter */ \"./src/components/Footers/DigitalFooter/index.jsx\");\n/* harmony import */ var _components_Common_WelcomeAnimation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Common/WelcomeAnimation */ \"./src/components/Common/WelcomeAnimation/index.jsx\");\n/* harmony import */ var _components_Progress_Scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Progress-Scroll */ \"./src/components/Progress-Scroll/index.jsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n/* eslint-disable @next/next/no-css-tags */ \n\n//= Layout\n\n//= Components\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar HomeLanding = function() {\n    var delay = function delay(time) {\n        return new Promise(function(resolve) {\n            return setTimeout(resolve, time);\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var changeState = function() {\n        var _ref = _asyncToGenerator(C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setIsLoading(false);\n                        _ctx.next = 3;\n                        return delay(1000);\n                    case 3:\n                        console.log(\"a\");\n                        siteDisplay = {\n                            display: \"\"\n                        };\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function changeState() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var _classList;\n        document.body.classList.add(\"land-demo2\");\n        var removeClasses = [\n            \"index-bus1\",\n            \"index-corporate\",\n            \"index-restaurant\",\n            \"index-arch\",\n            \"index-freelancer\",\n            \"cr-agency\",\n            \"index-main\",\n            \"mobile-app\",\n            \"gr-orange-bg\",\n            \"nft-market\", \n        ];\n        (_classList = document.body.classList).remove.apply(_classList, _toConsumableArray(removeClasses));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Common_WelcomeAnimation__WEBPACK_IMPORTED_MODULE_12__.WelcomeAnimation, {\n                isLoading: isLoading,\n                changeState: changeState\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                lineNumber: 50,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                style: siteDisplay,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_layouts_main_light__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    defaultTheme: \"dark\",\n                    defaultLogoTheme: \"dark\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Common_StickyBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Common_FixedSearch__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Main_Header3__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Creative_Testimonials__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Main_Process2__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Main_About2__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Footers_DigitalFooter__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                            footerClass: \"position-re pb-40\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Progress_Scroll__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 6\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                lineNumber: 51,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(HomeLanding, \"3+L5C4BXCkvfI+CLvYAvKVZ7bm8=\");\n_c = HomeLanding;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeLanding);\nvar _c;\n$RefreshReg$(_c, \"HomeLanding\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS1sYW5kaW5nLTIvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREEsMkNBQTJDLENBQ0M7QUFDZjtBQUM3QixVQUFVO0FBQzZDO0FBQ3ZELGNBQWM7QUFDNEM7QUFDSTtBQUNYO0FBQ0U7QUFDYTtBQUNqQjtBQUNXO0FBQ2dCO0FBQ2Q7O0FBRTlELElBQU1hLFdBQVcsR0FBRyxXQUFNO1FBR2hCQyxLQUFLLEdBQWQsU0FBU0EsS0FBSyxDQUFDQyxJQUFJLEVBQUU7UUFDcEIsT0FBTyxJQUFJQyxPQUFPLENBQUMsU0FBQ0MsT0FBTzttQkFBS0MsVUFBVSxDQUFDRCxPQUFPLEVBQUVGLElBQUksQ0FBQztTQUFBLENBQUMsQ0FBQztLQUMzRDs7SUFKRCxJQUFrQ2QsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQWpCakQsU0FpQmlCLEdBQWtCQSxHQUFjLEdBQWhDLEVBakJqQixZQWlCK0IsR0FBSUEsR0FBYyxHQUFsQjtJQUs5QixJQUFNb0IsV0FBVzttQkFBRyx3TEFBWTs7Ozt3QkFDL0JELFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7K0JBQ2ROLEtBQUssQ0FBQyxJQUFJLENBQUM7O3dCQUNqQlEsT0FBTyxDQUFDQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2pCQyxXQUFXLEdBQUc7NEJBQUVDLE9BQU8sRUFBRSxFQUFFO3lCQUFFLENBQUM7Ozs7OztTQUM5Qjt3QkFMS0osV0FBVzs7O09BS2hCO0lBQ0RyQixnREFBUyxDQUFDLFdBQU07WUFnQmYwQixVQUF1QjtRQWZ2QkEsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTFDLElBQU1DLGFBQWEsR0FBRztZQUNyQixZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLFdBQVc7WUFDWCxZQUFZO1lBQ1osWUFBWTtZQUNaLGNBQWM7WUFDZCxZQUFZO1NBQ1o7UUFFREosQ0FBQUEsVUFBdUIsR0FBdkJBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLEVBQUNHLE1BQU0sQ0FBOUJMLEtBQWdELENBQWhEQSxVQUF1QixFQUFRLG1CQUFHSSxhQUFhLENBQWJBLENBQWMsQ0FBQztLQUNqRCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0M7OzBCQUNDLDhEQUFDbkIsa0ZBQWdCO2dCQUFDUSxTQUFTLEVBQUVBLFNBQVM7Z0JBQUVFLFdBQVcsRUFBRUEsV0FBVzs7Ozs7cUJBQUk7MEJBQ3BFLDhEQUFDVyxLQUFHO2dCQUFDQyxLQUFLLEVBQUVULFdBQVc7MEJBQ3RCLDRFQUFDckIsMkRBQWU7b0JBQUMrQixZQUFZLEVBQUUsTUFBTTtvQkFBRUMsZ0JBQWdCLEVBQUMsTUFBTTs7c0NBQzdELDhEQUFDL0Isb0VBQVM7Ozs7aUNBQUc7c0NBQ2IsOERBQUNDLHNFQUFXOzs7O2lDQUFHO3NDQUNmLDhEQUFDQyxnRUFBTTs7OztpQ0FBRztzQ0FDViw4REFBQ0UseUVBQVk7Ozs7aUNBQUc7c0NBQ2hCLDhEQUFDRCxpRUFBTzs7OztpQ0FBRztzQ0FDWCw4REFBQ0UsZ0VBQUs7Ozs7aUNBQUc7c0NBQ1QsOERBQUNDLDBFQUFNOzRCQUFDMEIsV0FBVyxFQUFDLG1CQUFtQjs7Ozs7aUNBQUc7c0NBQzFDLDhEQUFDeEIsb0VBQWM7Ozs7aUNBQUc7Ozs7Ozt5QkFDRDs7Ozs7cUJBQ2I7O29CQUNKLENBQ0Y7Q0FDRjtHQWhES0MsV0FBVztBQUFYQSxLQUFBQSxXQUFXO0FBa0RqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ob21lLWxhbmRpbmctMi9pbmRleC5qc3g/MDhlMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWNzcy10YWdzICovXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG4vLz0gTGF5b3V0XHJcbmltcG9ydCBNYWluTGlnaHRMYXlvdXQgZnJvbSBcIi4uLy4uL2xheW91dHMvbWFpbi1saWdodFwiO1xyXG4vLz0gQ29tcG9uZW50c1xyXG5pbXBvcnQgU3RpY2t5QmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbW1vbi9TdGlja3lCYXJcIjtcclxuaW1wb3J0IEZpeGVkU2VhcmNoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbW1vbi9GaXhlZFNlYXJjaFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01haW4vSGVhZGVyM1wiO1xyXG5pbXBvcnQgUHJvY2VzcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluL1Byb2Nlc3MyXCI7XHJcbmltcG9ydCBUZXN0aW1vbmlhbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ3JlYXRpdmUvVGVzdGltb25pYWxzXCI7XHJcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluL0Fib3V0MlwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvb3RlcnMvRGlnaXRhbEZvb3RlclwiO1xyXG5pbXBvcnQgeyBXZWxjb21lQW5pbWF0aW9uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29tbW9uL1dlbGNvbWVBbmltYXRpb25cIjtcclxuaW1wb3J0IFByb2dyZXNzU2Nyb2xsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2dyZXNzLVNjcm9sbFwiO1xyXG5cclxuY29uc3QgSG9tZUxhbmRpbmcgPSAoKSA9PiB7XHJcblx0Y29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuXHRmdW5jdGlvbiBkZWxheSh0aW1lKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSkpO1xyXG5cdH1cclxuXHRjb25zdCBjaGFuZ2VTdGF0ZSA9IGFzeW5jICgpID0+IHtcclxuXHRcdHNldElzTG9hZGluZyhmYWxzZSk7XHJcblx0XHRhd2FpdCBkZWxheSgxMDAwKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiYVwiKTtcclxuXHRcdHNpdGVEaXNwbGF5ID0geyBkaXNwbGF5OiBcIlwiIH07XHJcblx0fTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibGFuZC1kZW1vMlwiKTtcclxuXHJcblx0XHRjb25zdCByZW1vdmVDbGFzc2VzID0gW1xyXG5cdFx0XHRcImluZGV4LWJ1czFcIixcclxuXHRcdFx0XCJpbmRleC1jb3Jwb3JhdGVcIixcclxuXHRcdFx0XCJpbmRleC1yZXN0YXVyYW50XCIsXHJcblx0XHRcdFwiaW5kZXgtYXJjaFwiLFxyXG5cdFx0XHRcImluZGV4LWZyZWVsYW5jZXJcIixcclxuXHRcdFx0XCJjci1hZ2VuY3lcIixcclxuXHRcdFx0XCJpbmRleC1tYWluXCIsXHJcblx0XHRcdFwibW9iaWxlLWFwcFwiLFxyXG5cdFx0XHRcImdyLW9yYW5nZS1iZ1wiLFxyXG5cdFx0XHRcIm5mdC1tYXJrZXRcIixcclxuXHRcdF07XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKC4uLnJlbW92ZUNsYXNzZXMpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxXZWxjb21lQW5pbWF0aW9uIGlzTG9hZGluZz17aXNMb2FkaW5nfSBjaGFuZ2VTdGF0ZT17Y2hhbmdlU3RhdGV9IC8+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3NpdGVEaXNwbGF5fT5cclxuXHRcdFx0XHQ8TWFpbkxpZ2h0TGF5b3V0IGRlZmF1bHRUaGVtZT17XCJkYXJrXCJ9IGRlZmF1bHRMb2dvVGhlbWU9J2RhcmsnPlxyXG5cdFx0XHRcdFx0PFN0aWNreUJhciAvPlxyXG5cdFx0XHRcdFx0PEZpeGVkU2VhcmNoIC8+XHJcblx0XHRcdFx0XHQ8SGVhZGVyIC8+XHJcblx0XHRcdFx0XHQ8VGVzdGltb25pYWxzIC8+XHJcblx0XHRcdFx0XHQ8UHJvY2VzcyAvPlxyXG5cdFx0XHRcdFx0PEFib3V0IC8+XHJcblx0XHRcdFx0XHQ8Rm9vdGVyIGZvb3RlckNsYXNzPSdwb3NpdGlvbi1yZSBwYi00MCcgLz5cclxuXHRcdFx0XHRcdDxQcm9ncmVzc1Njcm9sbCAvPlxyXG5cdFx0XHRcdDwvTWFpbkxpZ2h0TGF5b3V0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lTGFuZGluZztcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZCIsIk1haW5MaWdodExheW91dCIsIlN0aWNreUJhciIsIkZpeGVkU2VhcmNoIiwiSGVhZGVyIiwiUHJvY2VzcyIsIlRlc3RpbW9uaWFscyIsIkFib3V0IiwiRm9vdGVyIiwiV2VsY29tZUFuaW1hdGlvbiIsIlByb2dyZXNzU2Nyb2xsIiwiSG9tZUxhbmRpbmciLCJkZWxheSIsInRpbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjaGFuZ2VTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJzaXRlRGlzcGxheSIsImRpc3BsYXkiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVDbGFzc2VzIiwicmVtb3ZlIiwiZGl2Iiwic3R5bGUiLCJkZWZhdWx0VGhlbWUiLCJkZWZhdWx0TG9nb1RoZW1lIiwiZm9vdGVyQ2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home-landing-2/index.jsx\n");

/***/ })

});