"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home-landing-2v3",{

/***/ "./src/components/Common/WelcomeAnimation4/index.jsx":
/*!***********************************************************!*\
  !*** ./src/components/Common/WelcomeAnimation4/index.jsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WelcomeAnimation\": function() { return /* binding */ WelcomeAnimation; }\n/* harmony export */ });\n/* harmony import */ var C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar WelcomeAnimation = function(param1) {\n    var changeState = param1.changeState;\n    var delay = function delay(time) {\n        return new Promise(function(resolve) {\n            return setTimeout(resolve, time);\n        });\n    };\n    var dissapear = function() {\n        var _ref = _asyncToGenerator(C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var target, containerDiv;\n            return C_Users_54113_Desktop_Laburo_3MPATHY_CC_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        target = param.target;\n                        _ctx.next = 3;\n                        return delay(300);\n                    case 3:\n                        containerDiv = target.parentElement.parentElement.parentElement;\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // if (containerDiv.classList.contains(\"animationContainer\")) {\n        // \tcontainerDiv.classList.add(\"animate__fadeOut\");\n        // \tawait delay(1100);\n        // \tcontainerDiv.remove();\n        // }\n        // changeState();\n        }));\n        return function dissapear(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"animationContainer animate__animated\",\n            style: {\n                width: \"100%\",\n                height: \"100vh\",\n                backgroundColor: \"white\",\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                margin: 0,\n                padding: 0\n            },\n            onAnimationEnd: function(e) {\n                return dissapear(e);\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                id: \"wrapperDiv\",\n                style: {\n                    width: \"100%\",\n                    display: \"flex\",\n                    justifyContent: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"animate__animated animate__fadeInLeftBig\",\n                        priority: \"true\",\n                        src: \"/img/logo.png\",\n                        width: \"120px\",\n                        height: \"105px\",\n                        alt: \"Logo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\components\\\\Common\\\\WelcomeAnimation4\\\\index.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"animate__animated animate__fadeInRightBig\",\n                        priority: \"true\",\n                        src: \"/img/3mpathy.png\",\n                        height: \"90px\",\n                        width: \"393px\",\n                        alt: \"Logo name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\components\\\\Common\\\\WelcomeAnimation4\\\\index.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 6\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\components\\\\Common\\\\WelcomeAnimation4\\\\index.jsx\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\54113\\\\Desktop\\\\Laburo\\\\3MPATHY CC\\\\src\\\\components\\\\Common\\\\WelcomeAnimation4\\\\index.jsx\",\n            lineNumber: 22,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false);\n};\n_c = WelcomeAnimation;\nvar _c;\n$RefreshReg$(_c, \"WelcomeAnimation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db21tb24vV2VsY29tZUFuaW1hdGlvbjQvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNWO0FBQ2QsSUFBTUMsZ0JBQWdCLEdBQUcsaUJBQXFCO1FBQWxCQyxXQUFXLFVBQVhBLFdBQVc7UUFDcENDLEtBQUssR0FBZCxTQUFTQSxLQUFLLENBQUNDLElBQUksRUFBRTtRQUNwQixPQUFPLElBQUlDLE9BQU8sQ0FBQyxTQUFDQyxPQUFPO21CQUFLQyxVQUFVLENBQUNELE9BQU8sRUFBRUYsSUFBSSxDQUFDO1NBQUEsQ0FBQyxDQUFDO0tBQzNEO0lBQ0QsSUFBTUksU0FBUzttQkFBRyw2TEFBc0I7Z0JBQWJDLE1BQU0sRUFFMUJDLFlBQVk7Ozs7d0JBRlFELE1BQU0sU0FBTkEsTUFBTTs7K0JBQzFCTixLQUFLLENBQUMsR0FBRyxDQUFDOzt3QkFDVk8sWUFBWSxHQUFHRCxNQUFNLENBQUNFLGFBQWEsQ0FBQ0EsYUFBYSxDQUFDQSxhQUFhLENBQUM7Ozs7OztRQUV0RSwrREFBK0Q7UUFDL0QsbURBQW1EO1FBQ25ELHNCQUFzQjtRQUN0QiwwQkFBMEI7UUFDMUIsSUFBSTtRQUVKLGlCQUFpQjtTQUNqQjt3QkFYS0gsU0FBUzs7O09BV2Q7SUFFRCxxQkFDQztrQkFDQyw0RUFBQ0ksS0FBRztZQUNIQyxTQUFTLEVBQUcsc0NBQW9DO1lBQ2hEQyxLQUFLLEVBQUU7Z0JBQ05DLEtBQUssRUFBRSxNQUFNO2dCQUNiQyxNQUFNLEVBQUUsT0FBTztnQkFDZkMsZUFBZSxFQUFFLE9BQU87Z0JBQ3hCQyxPQUFPLEVBQUUsTUFBTTtnQkFDZkMsY0FBYyxFQUFFLFFBQVE7Z0JBQ3hCQyxVQUFVLEVBQUUsUUFBUTtnQkFDcEJDLE1BQU0sRUFBRSxDQUFDO2dCQUNUQyxPQUFPLEVBQUUsQ0FBQzthQUNWO1lBQ0RDLGNBQWMsRUFBRSxTQUFDQyxDQUFDO3VCQUFLaEIsU0FBUyxDQUFDZ0IsQ0FBQyxDQUFDO2FBQUE7c0JBRW5DLDRFQUFDWixLQUFHO2dCQUFDYSxFQUFFLEVBQUMsWUFBWTtnQkFBQ1gsS0FBSyxFQUFFO29CQUFFQyxLQUFLLEVBQUUsTUFBTTtvQkFBRUcsT0FBTyxFQUFFLE1BQU07b0JBQUVDLGNBQWMsRUFBRSxRQUFRO2lCQUFFOztrQ0FDdkYsOERBQUNuQixtREFBSzt3QkFDTGEsU0FBUyxFQUFDLDBDQUEwQzt3QkFDcERhLFFBQVEsRUFBQyxNQUFNO3dCQUNmQyxHQUFHLEVBQUMsZUFBZTt3QkFDbkJaLEtBQUssRUFBQyxPQUFPO3dCQUNiQyxNQUFNLEVBQUMsT0FBTzt3QkFDZFksR0FBRyxFQUFDLE1BQU07Ozs7OzZCQUNGO2tDQUNULDhEQUFDNUIsbURBQUs7d0JBQ0xhLFNBQVMsRUFBQywyQ0FBMkM7d0JBQ3JEYSxRQUFRLEVBQUMsTUFBTTt3QkFDZkMsR0FBRyxFQUFDLGtCQUFrQjt3QkFDdEJYLE1BQU0sRUFBQyxNQUFNO3dCQUNiRCxLQUFLLEVBQUMsT0FBTzt3QkFDYmEsR0FBRyxFQUFDLFdBQVc7Ozs7OzZCQUNQOzs7Ozs7cUJBQ0o7Ozs7O2lCQUNEO3FCQUNKLENBQ0Y7Q0FDRixDQUFDO0FBdERXM0IsS0FBQUEsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lQW5pbWF0aW9uNC9pbmRleC5qc3g/YTI4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFwiYW5pbWF0ZS5jc3NcIjtcclxuZXhwb3J0IGNvbnN0IFdlbGNvbWVBbmltYXRpb24gPSAoeyBjaGFuZ2VTdGF0ZSB9KSA9PiB7XHJcblx0ZnVuY3Rpb24gZGVsYXkodGltZSkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcclxuXHR9XHJcblx0Y29uc3QgZGlzc2FwZWFyID0gYXN5bmMgKHsgdGFyZ2V0IH0pID0+IHtcclxuXHRcdGF3YWl0IGRlbGF5KDMwMCk7XHJcblx0XHRjb25zdCBjb250YWluZXJEaXYgPSB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG5cdFx0Ly8gaWYgKGNvbnRhaW5lckRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJhbmltYXRpb25Db250YWluZXJcIikpIHtcclxuXHRcdC8vIFx0Y29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlX19mYWRlT3V0XCIpO1xyXG5cdFx0Ly8gXHRhd2FpdCBkZWxheSgxMTAwKTtcclxuXHRcdC8vIFx0Y29udGFpbmVyRGl2LnJlbW92ZSgpO1xyXG5cdFx0Ly8gfVxyXG5cclxuXHRcdC8vIGNoYW5nZVN0YXRlKCk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzc05hbWU9e2BhbmltYXRpb25Db250YWluZXIgYW5pbWF0ZV9fYW5pbWF0ZWRgfVxyXG5cdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTAwdmhcIixcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuXHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0XHRtYXJnaW46IDAsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdFx0b25BbmltYXRpb25FbmQ9eyhlKSA9PiBkaXNzYXBlYXIoZSl9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGlkPSd3cmFwcGVyRGl2JyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fT5cclxuXHRcdFx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2FuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbkxlZnRCaWcnXHJcblx0XHRcdFx0XHRcdHByaW9yaXR5PSd0cnVlJ1xyXG5cdFx0XHRcdFx0XHRzcmM9Jy9pbWcvbG9nby5wbmcnXHJcblx0XHRcdFx0XHRcdHdpZHRoPScxMjBweCdcclxuXHRcdFx0XHRcdFx0aGVpZ2h0PScxMDVweCdcclxuXHRcdFx0XHRcdFx0YWx0PSdMb2dvJ1xyXG5cdFx0XHRcdFx0PjwvSW1hZ2U+XHJcblx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5SaWdodEJpZydcclxuXHRcdFx0XHRcdFx0cHJpb3JpdHk9J3RydWUnXHJcblx0XHRcdFx0XHRcdHNyYz0nL2ltZy8zbXBhdGh5LnBuZydcclxuXHRcdFx0XHRcdFx0aGVpZ2h0PSc5MHB4J1xyXG5cdFx0XHRcdFx0XHR3aWR0aD0nMzkzcHgnXHJcblx0XHRcdFx0XHRcdGFsdD0nTG9nbyBuYW1lJ1xyXG5cdFx0XHRcdFx0PjwvSW1hZ2U+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiV2VsY29tZUFuaW1hdGlvbiIsImNoYW5nZVN0YXRlIiwiZGVsYXkiLCJ0aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZGlzc2FwZWFyIiwidGFyZ2V0IiwiY29udGFpbmVyRGl2IiwicGFyZW50RWxlbWVudCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwicGFkZGluZyIsIm9uQW5pbWF0aW9uRW5kIiwiZSIsImlkIiwicHJpb3JpdHkiLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Common/WelcomeAnimation4/index.jsx\n");

/***/ })

});