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

/***/ "./src/components/Common/WelcomeAnimation/index.jsx":
/*!**********************************************************!*\
  !*** ./src/components/Common/WelcomeAnimation/index.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WelcomeAnimation\": function() { return /* binding */ WelcomeAnimation; }\n/* harmony export */ });\n/* harmony import */ var C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar WelcomeAnimation = function(param1) {\n    var changeState = param1.changeState;\n    var delay = function delay(time) {\n        return new Promise(function(resolve) {\n            return setTimeout(resolve, time);\n        });\n    };\n    var dissapear = function() {\n        var _ref = _asyncToGenerator(C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var target;\n            return C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        target = param.target;\n                        target.parentElement.classList.add(\"animate__fadeOut\");\n                        _ctx.next = 4;\n                        return delay(1000);\n                    case 4:\n                        target.parentElement.remove();\n                        changeState();\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function dissapear(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"animate__animated\",\n                style: {\n                    width: \"100%\",\n                    height: \"100vh\",\n                    backgroundColor: \"white\",\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    margin: 0,\n                    padding: 0\n                },\n                onAnimationEnd: function(e) {\n                    return dissapear(e);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"animate__animated animate__fadeIn animate__slow animate__delay-1s\",\n                    style: {\n                        width: \"100%\",\n                        display: \"flex\",\n                        justifyContent: \"center\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            priority: \"true\",\n                            src: \"/img/logo.png\",\n                            width: \"120px\",\n                            height: \"105px\",\n                            alt: \"Logo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\components\\\\Common\\\\WelcomeAnimation\\\\index.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            priority: \"true\",\n                            src: \"/img/3mpathy.png\",\n                            height: \"90px\",\n                            width: \"393px\",\n                            alt: \"Logo name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\components\\\\Common\\\\WelcomeAnimation\\\\index.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 6\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\components\\\\Common\\\\WelcomeAnimation\\\\index.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\components\\\\Common\\\\WelcomeAnimation\\\\index.jsx\",\n                lineNumber: 17,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\components\\\\Common\\\\WelcomeAnimation\\\\index.jsx\",\n                lineNumber: 39,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = WelcomeAnimation;\nvar _c;\n$RefreshReg$(_c, \"WelcomeAnimation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db21tb24vV2VsY29tZUFuaW1hdGlvbi9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1Y7QUFDZCxJQUFNQyxnQkFBZ0IsR0FBRyxpQkFBcUI7UUFBbEJDLFdBQVcsVUFBWEEsV0FBVztRQUNwQ0MsS0FBSyxHQUFkLFNBQVNBLEtBQUssQ0FBQ0MsSUFBSSxFQUFFO1FBQ3BCLE9BQU8sSUFBSUMsT0FBTyxDQUFDLFNBQUNDLE9BQU87bUJBQUtDLFVBQVUsQ0FBQ0QsT0FBTyxFQUFFRixJQUFJLENBQUM7U0FBQSxDQUFDLENBQUM7S0FDM0Q7SUFDRCxJQUFNSSxTQUFTO21CQUFHLDZMQUFzQjtnQkFBYkMsTUFBTTs7Ozt3QkFBTkEsTUFBTSxTQUFOQSxNQUFNO3dCQUNoQ0EsTUFBTSxDQUFDQyxhQUFhLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7OytCQUNqRFQsS0FBSyxDQUFDLElBQUksQ0FBQzs7d0JBQ2pCTSxNQUFNLENBQUNDLGFBQWEsQ0FBQ0csTUFBTSxFQUFFLENBQUM7d0JBRTlCWCxXQUFXLEVBQUUsQ0FBQzs7Ozs7O1NBQ2Q7d0JBTktNLFNBQVM7OztPQU1kO0lBRUQscUJBQ0M7OzBCQUNDLDhEQUFDTSxLQUFHO2dCQUNIQyxTQUFTLEVBQUcsbUJBQWlCO2dCQUM3QkMsS0FBSyxFQUFFO29CQUNOQyxLQUFLLEVBQUUsTUFBTTtvQkFDYkMsTUFBTSxFQUFFLE9BQU87b0JBQ2ZDLGVBQWUsRUFBRSxPQUFPO29CQUN4QkMsT0FBTyxFQUFFLE1BQU07b0JBQ2ZDLGNBQWMsRUFBRSxRQUFRO29CQUN4QkMsVUFBVSxFQUFFLFFBQVE7b0JBQ3BCQyxNQUFNLEVBQUUsQ0FBQztvQkFDVEMsT0FBTyxFQUFFLENBQUM7aUJBQ1Y7Z0JBQ0RDLGNBQWMsRUFBRSxTQUFDQyxDQUFDOzJCQUFLbEIsU0FBUyxDQUFDa0IsQ0FBQyxDQUFDO2lCQUFBOzBCQUVuQyw0RUFBQ1osS0FBRztvQkFDSEMsU0FBUyxFQUFDLG1FQUFtRTtvQkFDN0VDLEtBQUssRUFBRTt3QkFBRUMsS0FBSyxFQUFFLE1BQU07d0JBQUVHLE9BQU8sRUFBRSxNQUFNO3dCQUFFQyxjQUFjLEVBQUUsUUFBUTtxQkFBRTs7c0NBRW5FLDhEQUFDckIsbURBQUs7NEJBQUMyQixRQUFRLEVBQUMsTUFBTTs0QkFBQ0MsR0FBRyxFQUFDLGVBQWU7NEJBQUNYLEtBQUssRUFBQyxPQUFPOzRCQUFDQyxNQUFNLEVBQUMsT0FBTzs0QkFBQ1csR0FBRyxFQUFDLE1BQU07Ozs7O2lDQUFTO3NDQUMzRiw4REFBQzdCLG1EQUFLOzRCQUFDMkIsUUFBUSxFQUFDLE1BQU07NEJBQUNDLEdBQUcsRUFBQyxrQkFBa0I7NEJBQUNWLE1BQU0sRUFBQyxNQUFNOzRCQUFDRCxLQUFLLEVBQUMsT0FBTzs0QkFBQ1ksR0FBRyxFQUFDLFdBQVc7Ozs7O2lDQUFTOzs7Ozs7eUJBQzdGOzs7OztxQkFDRDswQkFDTiw4REFBQ0MsSUFBRTs7OztxQkFBRzs7b0JBQ0osQ0FDRjtDQUNGLENBQUM7QUF2Q1c3QixLQUFBQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29tbW9uL1dlbGNvbWVBbmltYXRpb24vaW5kZXguanN4PzI2MmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBcImFuaW1hdGUuY3NzXCI7XHJcbmV4cG9ydCBjb25zdCBXZWxjb21lQW5pbWF0aW9uID0gKHsgY2hhbmdlU3RhdGUgfSkgPT4ge1xyXG5cdGZ1bmN0aW9uIGRlbGF5KHRpbWUpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSk7XHJcblx0fVxyXG5cdGNvbnN0IGRpc3NhcGVhciA9IGFzeW5jICh7IHRhcmdldCB9KSA9PiB7XHJcblx0XHR0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZV9fZmFkZU91dFwiKTtcclxuXHRcdGF3YWl0IGRlbGF5KDEwMDApO1xyXG5cdFx0dGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcblxyXG5cdFx0Y2hhbmdlU3RhdGUoKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17YGFuaW1hdGVfX2FuaW1hdGVkYH1cclxuXHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjEwMHZoXCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdFx0bWFyZ2luOiAwLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMCxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHRcdG9uQW5pbWF0aW9uRW5kPXsoZSkgPT4gZGlzc2FwZWFyKGUpfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW4gYW5pbWF0ZV9fc2xvdyBhbmltYXRlX19kZWxheS0xcydcclxuXHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PEltYWdlIHByaW9yaXR5PSd0cnVlJyBzcmM9Jy9pbWcvbG9nby5wbmcnIHdpZHRoPScxMjBweCcgaGVpZ2h0PScxMDVweCcgYWx0PSdMb2dvJz48L0ltYWdlPlxyXG5cdFx0XHRcdFx0PEltYWdlIHByaW9yaXR5PSd0cnVlJyBzcmM9Jy9pbWcvM21wYXRoeS5wbmcnIGhlaWdodD0nOTBweCcgd2lkdGg9JzM5M3B4JyBhbHQ9J0xvZ28gbmFtZSc+PC9JbWFnZT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiV2VsY29tZUFuaW1hdGlvbiIsImNoYW5nZVN0YXRlIiwiZGVsYXkiLCJ0aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZGlzc2FwZWFyIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwicGFkZGluZyIsIm9uQW5pbWF0aW9uRW5kIiwiZSIsInByaW9yaXR5Iiwic3JjIiwiYWx0IiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Common/WelcomeAnimation/index.jsx\n");

/***/ })

});