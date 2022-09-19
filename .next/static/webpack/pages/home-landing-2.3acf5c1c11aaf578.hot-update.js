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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layouts_main_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layouts/main-light */ \"./src/layouts/main-light.jsx\");\n/* harmony import */ var _components_Common_StickyBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Common/StickyBar */ \"./src/components/Common/StickyBar/index.jsx\");\n/* harmony import */ var _components_Common_FixedSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Common/FixedSearch */ \"./src/components/Common/FixedSearch/index.jsx\");\n/* harmony import */ var _components_Main_Header3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Main/Header3 */ \"./src/components/Main/Header3/index.jsx\");\n/* harmony import */ var _components_Main_Process2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Main/Process2 */ \"./src/components/Main/Process2/index.jsx\");\n/* harmony import */ var _components_Creative_Testimonials__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Creative/Testimonials */ \"./src/components/Creative/Testimonials/index.jsx\");\n/* harmony import */ var _components_Main_About2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Main/About2 */ \"./src/components/Main/About2/index.jsx\");\n/* harmony import */ var _components_Footers_DigitalFooter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Footers/DigitalFooter */ \"./src/components/Footers/DigitalFooter/index.jsx\");\n/* harmony import */ var _components_Common_WelcomeAnimation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Common/WelcomeAnimation */ \"./src/components/Common/WelcomeAnimation/index.jsx\");\n/* harmony import */ var _components_Progress_Scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Progress-Scroll */ \"./src/components/Progress-Scroll/index.jsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n/* eslint-disable @next/next/no-css-tags */ \n\n//= Layout\n\n//= Components\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar HomeLanding = function() {\n    var delay = function delay(time) {\n        return new Promise(function(resolve) {\n            return setTimeout(resolve, time);\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var display = \"none\";\n    var changeState = function() {\n        setIsLoading(false);\n        delay(1000);\n        console.log(\"a\");\n        display = isLoading ? \"none\" : \"\";\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _classList;\n        document.body.classList.add(\"land-demo2\");\n        var removeClasses = [\n            \"index-bus1\",\n            \"index-corporate\",\n            \"index-restaurant\",\n            \"index-arch\",\n            \"index-freelancer\",\n            \"cr-agency\",\n            \"index-main\",\n            \"mobile-app\",\n            \"gr-orange-bg\",\n            \"nft-market\", \n        ];\n        (_classList = document.body.classList).remove.apply(_classList, _toConsumableArray(removeClasses));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_WelcomeAnimation__WEBPACK_IMPORTED_MODULE_11__.WelcomeAnimation, {\n                isLoading: isLoading,\n                changeState: changeState\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                lineNumber: 50,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: display\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_main_light__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    defaultTheme: \"dark\",\n                    defaultLogoTheme: \"dark\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_StickyBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_FixedSearch__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Main_Header3__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Creative_Testimonials__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Main_Process2__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Main_About2__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footers_DigitalFooter__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            footerClass: \"position-re pb-40\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Progress_Scroll__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 6\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\pages\\\\home-landing-2\\\\index.jsx\",\n                lineNumber: 51,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(HomeLanding, \"3+L5C4BXCkvfI+CLvYAvKVZ7bm8=\");\n_c = HomeLanding;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeLanding);\nvar _c;\n$RefreshReg$(_c, \"HomeLanding\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS1sYW5kaW5nLTIvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBLDJDQUEyQyxDQUNDO0FBQ2Y7QUFDN0IsVUFBVTtBQUM2QztBQUN2RCxjQUFjO0FBQzRDO0FBQ0k7QUFDWDtBQUNFO0FBQ2E7QUFDakI7QUFDVztBQUNnQjtBQUNkOztBQUU5RCxJQUFNYSxXQUFXLEdBQUcsV0FBTTtRQUdoQkMsS0FBSyxHQUFkLFNBQVNBLEtBQUssQ0FBQ0MsSUFBSSxFQUFFO1FBQ3BCLE9BQU8sSUFBSUMsT0FBTyxDQUFDLFNBQUNDLE9BQU87bUJBQUtDLFVBQVUsQ0FBQ0QsT0FBTyxFQUFFRixJQUFJLENBQUM7U0FBQSxDQUFDLENBQUM7S0FDM0Q7O0lBSkQsSUFBa0NkLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFqQmpELFNBaUJpQixHQUFrQkEsR0FBYyxHQUFoQyxFQWpCakIsWUFpQitCLEdBQUlBLEdBQWMsR0FBbEI7SUFDOUIsSUFBSW9CLE9BQU8sR0FBRyxNQUFNO0lBSXBCLElBQU1DLFdBQVcsR0FBRyxXQUFNO1FBQ3pCRixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEJOLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaUyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQkgsT0FBTyxHQUFHRixTQUFTLEdBQUcsTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNsQztJQUNEbkIsZ0RBQVMsQ0FBQyxXQUFNO1lBZ0JmeUIsVUFBdUI7UUFmdkJBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUxQyxJQUFNQyxhQUFhLEdBQUc7WUFDckIsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gsWUFBWTtZQUNaLFlBQVk7WUFDWixjQUFjO1lBQ2QsWUFBWTtTQUNaO1FBRURKLENBQUFBLFVBQXVCLEdBQXZCQSxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxFQUFDRyxNQUFNLENBQTlCTCxLQUFnRCxDQUFoREEsVUFBdUIsRUFBUSxtQkFBR0ksYUFBYSxDQUFiQSxDQUFjLENBQUM7S0FDakQsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNDOzswQkFDQyw4REFBQ2xCLGtGQUFnQjtnQkFBQ1EsU0FBUyxFQUFFQSxTQUFTO2dCQUFFRyxXQUFXLEVBQUVBLFdBQVc7Ozs7O3FCQUFJOzBCQUNwRSw4REFBQ1MsS0FBRztnQkFBQ0MsS0FBSyxFQUFFO29CQUFFWCxPQUFPLEVBQUVBLE9BQU87aUJBQUU7MEJBQy9CLDRFQUFDbEIsMkRBQWU7b0JBQUM4QixZQUFZLEVBQUUsTUFBTTtvQkFBRUMsZ0JBQWdCLEVBQUMsTUFBTTs7c0NBQzdELDhEQUFDOUIsb0VBQVM7Ozs7aUNBQUc7c0NBQ2IsOERBQUNDLHNFQUFXOzs7O2lDQUFHO3NDQUNmLDhEQUFDQyxnRUFBTTs7OztpQ0FBRztzQ0FDViw4REFBQ0UseUVBQVk7Ozs7aUNBQUc7c0NBQ2hCLDhEQUFDRCxpRUFBTzs7OztpQ0FBRztzQ0FDWCw4REFBQ0UsK0RBQUs7Ozs7aUNBQUc7c0NBQ1QsOERBQUNDLDBFQUFNOzRCQUFDeUIsV0FBVyxFQUFDLG1CQUFtQjs7Ozs7aUNBQUc7c0NBQzFDLDhEQUFDdkIsb0VBQWM7Ozs7aUNBQUc7Ozs7Ozt5QkFDRDs7Ozs7cUJBQ2I7O29CQUNKLENBQ0Y7Q0FDRjtHQWhES0MsV0FBVztBQUFYQSxLQUFBQSxXQUFXO0FBa0RqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ob21lLWxhbmRpbmctMi9pbmRleC5qc3g/MDhlMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWNzcy10YWdzICovXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG4vLz0gTGF5b3V0XHJcbmltcG9ydCBNYWluTGlnaHRMYXlvdXQgZnJvbSBcIi4uLy4uL2xheW91dHMvbWFpbi1saWdodFwiO1xyXG4vLz0gQ29tcG9uZW50c1xyXG5pbXBvcnQgU3RpY2t5QmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbW1vbi9TdGlja3lCYXJcIjtcclxuaW1wb3J0IEZpeGVkU2VhcmNoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbW1vbi9GaXhlZFNlYXJjaFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01haW4vSGVhZGVyM1wiO1xyXG5pbXBvcnQgUHJvY2VzcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluL1Byb2Nlc3MyXCI7XHJcbmltcG9ydCBUZXN0aW1vbmlhbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ3JlYXRpdmUvVGVzdGltb25pYWxzXCI7XHJcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluL0Fib3V0MlwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvb3RlcnMvRGlnaXRhbEZvb3RlclwiO1xyXG5pbXBvcnQgeyBXZWxjb21lQW5pbWF0aW9uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29tbW9uL1dlbGNvbWVBbmltYXRpb25cIjtcclxuaW1wb3J0IFByb2dyZXNzU2Nyb2xsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2dyZXNzLVNjcm9sbFwiO1xyXG5cclxuY29uc3QgSG9tZUxhbmRpbmcgPSAoKSA9PiB7XHJcblx0Y29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cdGxldCBkaXNwbGF5ID0gXCJub25lXCI7XHJcblx0ZnVuY3Rpb24gZGVsYXkodGltZSkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcclxuXHR9XHJcblx0Y29uc3QgY2hhbmdlU3RhdGUgPSAoKSA9PiB7XHJcblx0XHRzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG5cdFx0ZGVsYXkoMTAwMCk7XHJcblx0XHRjb25zb2xlLmxvZyhcImFcIik7XHJcblx0XHRkaXNwbGF5ID0gaXNMb2FkaW5nID8gXCJub25lXCIgOiBcIlwiO1xyXG5cdH07XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxhbmQtZGVtbzJcIik7XHJcblxyXG5cdFx0Y29uc3QgcmVtb3ZlQ2xhc3NlcyA9IFtcclxuXHRcdFx0XCJpbmRleC1idXMxXCIsXHJcblx0XHRcdFwiaW5kZXgtY29ycG9yYXRlXCIsXHJcblx0XHRcdFwiaW5kZXgtcmVzdGF1cmFudFwiLFxyXG5cdFx0XHRcImluZGV4LWFyY2hcIixcclxuXHRcdFx0XCJpbmRleC1mcmVlbGFuY2VyXCIsXHJcblx0XHRcdFwiY3ItYWdlbmN5XCIsXHJcblx0XHRcdFwiaW5kZXgtbWFpblwiLFxyXG5cdFx0XHRcIm1vYmlsZS1hcHBcIixcclxuXHRcdFx0XCJnci1vcmFuZ2UtYmdcIixcclxuXHRcdFx0XCJuZnQtbWFya2V0XCIsXHJcblx0XHRdO1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSguLi5yZW1vdmVDbGFzc2VzKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8V2VsY29tZUFuaW1hdGlvbiBpc0xvYWRpbmc9e2lzTG9hZGluZ30gY2hhbmdlU3RhdGU9e2NoYW5nZVN0YXRlfSAvPlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IGRpc3BsYXkgfX0+XHJcblx0XHRcdFx0PE1haW5MaWdodExheW91dCBkZWZhdWx0VGhlbWU9e1wiZGFya1wifSBkZWZhdWx0TG9nb1RoZW1lPSdkYXJrJz5cclxuXHRcdFx0XHRcdDxTdGlja3lCYXIgLz5cclxuXHRcdFx0XHRcdDxGaXhlZFNlYXJjaCAvPlxyXG5cdFx0XHRcdFx0PEhlYWRlciAvPlxyXG5cdFx0XHRcdFx0PFRlc3RpbW9uaWFscyAvPlxyXG5cdFx0XHRcdFx0PFByb2Nlc3MgLz5cclxuXHRcdFx0XHRcdDxBYm91dCAvPlxyXG5cdFx0XHRcdFx0PEZvb3RlciBmb290ZXJDbGFzcz0ncG9zaXRpb24tcmUgcGItNDAnIC8+XHJcblx0XHRcdFx0XHQ8UHJvZ3Jlc3NTY3JvbGwgLz5cclxuXHRcdFx0XHQ8L01haW5MaWdodExheW91dD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZUxhbmRpbmc7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJNYWluTGlnaHRMYXlvdXQiLCJTdGlja3lCYXIiLCJGaXhlZFNlYXJjaCIsIkhlYWRlciIsIlByb2Nlc3MiLCJUZXN0aW1vbmlhbHMiLCJBYm91dCIsIkZvb3RlciIsIldlbGNvbWVBbmltYXRpb24iLCJQcm9ncmVzc1Njcm9sbCIsIkhvbWVMYW5kaW5nIiwiZGVsYXkiLCJ0aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZGlzcGxheSIsImNoYW5nZVN0YXRlIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZUNsYXNzZXMiLCJyZW1vdmUiLCJkaXYiLCJzdHlsZSIsImRlZmF1bHRUaGVtZSIsImRlZmF1bHRMb2dvVGhlbWUiLCJmb290ZXJDbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home-landing-2/index.jsx\n");

/***/ })

});