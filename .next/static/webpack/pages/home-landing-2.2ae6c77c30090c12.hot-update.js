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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WelcomeAnimation\": function() { return /* binding */ WelcomeAnimation; }\n/* harmony export */ });\n/* harmony import */ var C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar WelcomeAnimation = function(param1) {\n    var isLoading = param1.isLoading, changeState = param1.changeState;\n    var delay = function delay(time) {\n        return new Promise(function(resolve) {\n            return setTimeout(resolve, time);\n        });\n    };\n    var dissapear = function() {\n        var _ref = _asyncToGenerator(C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var target;\n            return C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        target = param.target;\n                        console.log(target);\n                        _ctx.next = 4;\n                        return delay(1000);\n                    case 4:\n                        changeState();\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function dissapear(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fadeOut = function() {\n        return \"animate__fadeOut\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"animate__animated\",\n                style: {\n                    width: \"100%\",\n                    height: \"100vh\",\n                    backgroundColor: \"white\",\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    margin: 0,\n                    padding: 0\n                },\n                onClick: function(e) {\n                    return dissapear(e);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"animate__animated animate__fadeIn animate__slow animate__delay-1s\",\n                    style: {\n                        width: \"100%\",\n                        display: \"flex\",\n                        justifyContent: \"center\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            priority: \"true\",\n                            src: \"/img/logo.png\",\n                            width: \"120px\",\n                            height: \"105px\",\n                            alt: \"Logo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\components\\\\Common\\\\WelcomeAnimation\\\\index.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            priority: \"true\",\n                            src: \"/img/3mpathy.png\",\n                            height: \"90px\",\n                            width: \"393px\",\n                            alt: \"Logo name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\components\\\\Common\\\\WelcomeAnimation\\\\index.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 6\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\components\\\\Common\\\\WelcomeAnimation\\\\index.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\components\\\\Common\\\\WelcomeAnimation\\\\index.jsx\",\n                lineNumber: 17,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\components\\\\Common\\\\WelcomeAnimation\\\\index.jsx\",\n                lineNumber: 39,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = WelcomeAnimation;\nvar _c;\n$RefreshReg$(_c, \"WelcomeAnimation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db21tb24vV2VsY29tZUFuaW1hdGlvbi9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1Y7QUFDZCxJQUFNQyxnQkFBZ0IsR0FBRyxpQkFBZ0M7UUFBN0JDLFNBQVMsVUFBVEEsU0FBUyxFQUFFQyxXQUFXLFVBQVhBLFdBQVc7UUFDL0NDLEtBQUssR0FBZCxTQUFTQSxLQUFLLENBQUNDLElBQUksRUFBRTtRQUNwQixPQUFPLElBQUlDLE9BQU8sQ0FBQyxTQUFDQyxPQUFPO21CQUFLQyxVQUFVLENBQUNELE9BQU8sRUFBRUYsSUFBSSxDQUFDO1NBQUEsQ0FBQyxDQUFDO0tBQzNEO0lBQ0QsSUFBTUksU0FBUzttQkFBRyw2TEFBc0I7Z0JBQWJDLE1BQU07Ozs7d0JBQU5BLE1BQU0sU0FBTkEsTUFBTTt3QkFDaENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUMsQ0FBQzs7K0JBQ2ROLEtBQUssQ0FBQyxJQUFJLENBQUM7O3dCQUNqQkQsV0FBVyxFQUFFLENBQUM7Ozs7OztTQUNkO3dCQUpLTSxTQUFTOzs7T0FJZDtJQUNELElBQU1JLE9BQU8sR0FBRyxXQUFNO1FBQ3JCLE9BQU8sa0JBQWtCLENBQUM7S0FDMUI7SUFDRCxxQkFDQzs7MEJBQ0MsOERBQUNDLEtBQUc7Z0JBQ0hDLFNBQVMsRUFBRyxtQkFBaUI7Z0JBQzdCQyxLQUFLLEVBQUU7b0JBQ05DLEtBQUssRUFBRSxNQUFNO29CQUNiQyxNQUFNLEVBQUUsT0FBTztvQkFDZkMsZUFBZSxFQUFFLE9BQU87b0JBQ3hCQyxPQUFPLEVBQUUsTUFBTTtvQkFDZkMsY0FBYyxFQUFFLFFBQVE7b0JBQ3hCQyxVQUFVLEVBQUUsUUFBUTtvQkFDcEJDLE1BQU0sRUFBRSxDQUFDO29CQUNUQyxPQUFPLEVBQUUsQ0FBQztpQkFDVjtnQkFDREMsT0FBTyxFQUFFLFNBQUNDLENBQUM7MkJBQUtqQixTQUFTLENBQUNpQixDQUFDLENBQUM7aUJBQUE7MEJBRTVCLDRFQUFDWixLQUFHO29CQUNIQyxTQUFTLEVBQUMsbUVBQW1FO29CQUM3RUMsS0FBSyxFQUFFO3dCQUFFQyxLQUFLLEVBQUUsTUFBTTt3QkFBRUcsT0FBTyxFQUFFLE1BQU07d0JBQUVDLGNBQWMsRUFBRSxRQUFRO3FCQUFFOztzQ0FFbkUsOERBQUNyQixtREFBSzs0QkFBQzJCLFFBQVEsRUFBQyxNQUFNOzRCQUFDQyxHQUFHLEVBQUMsZUFBZTs0QkFBQ1gsS0FBSyxFQUFDLE9BQU87NEJBQUNDLE1BQU0sRUFBQyxPQUFPOzRCQUFDVyxHQUFHLEVBQUMsTUFBTTs7Ozs7aUNBQVM7c0NBQzNGLDhEQUFDN0IsbURBQUs7NEJBQUMyQixRQUFRLEVBQUMsTUFBTTs0QkFBQ0MsR0FBRyxFQUFDLGtCQUFrQjs0QkFBQ1YsTUFBTSxFQUFDLE1BQU07NEJBQUNELEtBQUssRUFBQyxPQUFPOzRCQUFDWSxHQUFHLEVBQUMsV0FBVzs7Ozs7aUNBQVM7Ozs7Ozt5QkFDN0Y7Ozs7O3FCQUNEOzBCQUNOLDhEQUFDQyxJQUFFOzs7O3FCQUFHOztvQkFDSixDQUNGO0NBQ0YsQ0FBQztBQXZDVzdCLEtBQUFBLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db21tb24vV2VsY29tZUFuaW1hdGlvbi9pbmRleC5qc3g/MjYyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFwiYW5pbWF0ZS5jc3NcIjtcclxuZXhwb3J0IGNvbnN0IFdlbGNvbWVBbmltYXRpb24gPSAoeyBpc0xvYWRpbmcsIGNoYW5nZVN0YXRlIH0pID0+IHtcclxuXHRmdW5jdGlvbiBkZWxheSh0aW1lKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSkpO1xyXG5cdH1cclxuXHRjb25zdCBkaXNzYXBlYXIgPSBhc3luYyAoeyB0YXJnZXQgfSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2codGFyZ2V0KTtcclxuXHRcdGF3YWl0IGRlbGF5KDEwMDApO1xyXG5cdFx0Y2hhbmdlU3RhdGUoKTtcclxuXHR9O1xyXG5cdGNvbnN0IGZhZGVPdXQgPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4gXCJhbmltYXRlX19mYWRlT3V0XCI7XHJcblx0fTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17YGFuaW1hdGVfX2FuaW1hdGVkYH1cclxuXHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjEwMHZoXCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdFx0bWFyZ2luOiAwLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMCxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiBkaXNzYXBlYXIoZSl9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2FuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbiBhbmltYXRlX19zbG93IGFuaW1hdGVfX2RlbGF5LTFzJ1xyXG5cdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8SW1hZ2UgcHJpb3JpdHk9J3RydWUnIHNyYz0nL2ltZy9sb2dvLnBuZycgd2lkdGg9JzEyMHB4JyBoZWlnaHQ9JzEwNXB4JyBhbHQ9J0xvZ28nPjwvSW1hZ2U+XHJcblx0XHRcdFx0XHQ8SW1hZ2UgcHJpb3JpdHk9J3RydWUnIHNyYz0nL2ltZy8zbXBhdGh5LnBuZycgaGVpZ2h0PSc5MHB4JyB3aWR0aD0nMzkzcHgnIGFsdD0nTG9nbyBuYW1lJz48L0ltYWdlPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGJyIC8+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJXZWxjb21lQW5pbWF0aW9uIiwiaXNMb2FkaW5nIiwiY2hhbmdlU3RhdGUiLCJkZWxheSIsInRpbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJkaXNzYXBlYXIiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiZmFkZU91dCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwicGFkZGluZyIsIm9uQ2xpY2siLCJlIiwicHJpb3JpdHkiLCJzcmMiLCJhbHQiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Common/WelcomeAnimation/index.jsx\n");

/***/ })

});