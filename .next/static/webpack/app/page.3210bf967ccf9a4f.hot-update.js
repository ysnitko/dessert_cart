"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"2883dd9c98d2\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NTAyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjI4ODNkZDljOThkMlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ProductCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ProductCart */ \"(app-pages-browser)/./src/components/ProductCart.tsx\");\n/* harmony import */ var _lib_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/data.json */ \"(app-pages-browser)/./src/app/lib/data.json\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Card */ \"(app-pages-browser)/./src/components/Card.tsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Modal */ \"(app-pages-browser)/./src/components/Modal.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const addQuantity = (ids)=>{\n        const findItem = result.find((item)=>item.id === ids);\n        if (findItem) {\n            setResult(result.map((item)=>item.id === ids ? {\n                    ...item,\n                    quantity: item.quantity + 1\n                } : item));\n        }\n    };\n    const decrQuantity = (ids)=>{\n        const findItem = result.find((item)=>item.id === ids);\n        console.log(findItem);\n        if (findItem) {\n            setResult(result.map((item)=>item.id === ids ? {\n                    ...item,\n                    quantity: item.quantity <= 1 ? item.quantity = 1 : item.quantity - 1\n                } : item));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid md:grid-cols-cols max-w-[1200px] w-full justify-center py-20  sm::grid-cols-1 \",\n                style: {\n                    overflow: showModal ? \"hidden\" : \"\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:gap-10 sm:gap-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-bold text-4xl text-rose-900\",\n                                children: \"Desserts\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yuri_sn/Projects/dessert_cart/src/app/page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \" md:flex-row md:flex-wrap md:gap-5 sm:flex sm:flex-col sm:gap-7 \",\n                                children: _lib_data_json__WEBPACK_IMPORTED_MODULE_2__.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        id: item.id,\n                                        src: item.image.desktop,\n                                        name: item.name,\n                                        category: item.category,\n                                        price: parseFloat(item.price.toFixed(2)),\n                                        result: result,\n                                        setResult: setResult,\n                                        addQuantity: addQuantity,\n                                        decrQuantity: decrQuantity\n                                    }, index, false, {\n                                        fileName: \"/Users/yuri_sn/Projects/dessert_cart/src/app/page.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/yuri_sn/Projects/dessert_cart/src/app/page.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yuri_sn/Projects/dessert_cart/src/app/page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCart__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        result: result,\n                        setResult: setResult,\n                        setShowModal: setShowModal\n                    }, void 0, false, {\n                        fileName: \"/Users/yuri_sn/Projects/dessert_cart/src/app/page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yuri_sn/Projects/dessert_cart/src/app/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                result: result,\n                setResult: setResult,\n                setShowModal: setShowModal\n            }, void 0, false, {\n                fileName: \"/Users/yuri_sn/Projects/dessert_cart/src/app/page.tsx\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"RdEStC3mtHNfsAf/Qcyvyz1ehrk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNoQjtBQUNFO0FBQ0U7QUFDTjtBQUVsQixTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFRLEVBQUU7SUFDOUMsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFVO0lBRXBELE1BQU1NLGNBQWMsQ0FBQ0M7UUFDbkIsTUFBTUMsV0FBV04sT0FBT08sSUFBSSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEVBQUUsS0FBS0o7UUFDbkQsSUFBSUMsVUFBVTtZQUNaTCxVQUNFRCxPQUFPVSxHQUFHLENBQUMsQ0FBQ0YsT0FDVkEsS0FBS0MsRUFBRSxLQUFLSixNQUFNO29CQUFFLEdBQUdHLElBQUk7b0JBQUVHLFVBQVVILEtBQUtHLFFBQVEsR0FBRztnQkFBRSxJQUFJSDtRQUduRTtJQUNGO0lBRUEsTUFBTUksZUFBZSxDQUFDUDtRQUNwQixNQUFNQyxXQUFXTixPQUFPTyxJQUFJLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsRUFBRSxLQUFLSjtRQUNuRFEsUUFBUUMsR0FBRyxDQUFDUjtRQUNaLElBQUlBLFVBQVU7WUFDWkwsVUFDRUQsT0FBT1UsR0FBRyxDQUFDLENBQUNGLE9BQ1ZBLEtBQUtDLEVBQUUsS0FBS0osTUFDUjtvQkFDRSxHQUFHRyxJQUFJO29CQUNQRyxVQUNFSCxLQUFLRyxRQUFRLElBQUksSUFBS0gsS0FBS0csUUFBUSxHQUFHLElBQUtILEtBQUtHLFFBQVEsR0FBRztnQkFDL0QsSUFDQUg7UUFHVjtJQUNGO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDTztnQkFDQ0MsV0FBVTtnQkFDVkMsT0FBTztvQkFBRUMsVUFBVWhCLFlBQVksV0FBVztnQkFBRzs7a0NBRTdDLDhEQUFDYTt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFHSCxXQUFVOzBDQUFtQzs7Ozs7OzBDQUNqRCw4REFBQ0k7Z0NBQUdKLFdBQVU7MENBQ1hyQiwyQ0FBSUEsQ0FBQ2UsR0FBRyxDQUFDLENBQUNGLE1BQU1hLHNCQUNmLDhEQUFDekIsd0RBQUlBO3dDQUVIYSxJQUFJRCxLQUFLQyxFQUFFO3dDQUNYYSxLQUFLZCxLQUFLZSxLQUFLLENBQUNDLE9BQU87d0NBQ3ZCQyxNQUFNakIsS0FBS2lCLElBQUk7d0NBQ2ZDLFVBQVVsQixLQUFLa0IsUUFBUTt3Q0FDdkJDLE9BQU9DLFdBQVdwQixLQUFLbUIsS0FBSyxDQUFDRSxPQUFPLENBQUM7d0NBQ3JDN0IsUUFBUUE7d0NBQ1JDLFdBQVdBO3dDQUNYRyxhQUFhQTt3Q0FDYlEsY0FBY0E7dUNBVFRTOzs7Ozs7Ozs7Ozs7Ozs7O2tDQWViLDhEQUFDM0IsK0RBQVdBO3dCQUNWTSxRQUFRQTt3QkFDUkMsV0FBV0E7d0JBQ1hFLGNBQWNBOzs7Ozs7Ozs7Ozs7WUFHakJELDJCQUNDLDhEQUFDTCx5REFBS0E7Z0JBQ0pHLFFBQVFBO2dCQUNSQyxXQUFXQTtnQkFDWEUsY0FBY0E7Ozs7Ozs7O0FBS3hCO0dBMUV3Qko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBQcm9kdWN0Q2FydCBmcm9tICdAL2NvbXBvbmVudHMvUHJvZHVjdENhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9saWIvZGF0YS5qc29uJztcbmltcG9ydCBDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9DYXJkJztcbmltcG9ydCBNb2RhbCBmcm9tICdAL2NvbXBvbmVudHMvTW9kYWwnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IGFkZFF1YW50aXR5ID0gKGlkczogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZmluZEl0ZW0gPSByZXN1bHQuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWRzKTtcbiAgICBpZiAoZmluZEl0ZW0pIHtcbiAgICAgIHNldFJlc3VsdChcbiAgICAgICAgcmVzdWx0Lm1hcCgoaXRlbSkgPT5cbiAgICAgICAgICBpdGVtLmlkID09PSBpZHMgPyB7IC4uLml0ZW0sIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5ICsgMSB9IDogaXRlbVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWNyUXVhbnRpdHkgPSAoaWRzOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmaW5kSXRlbSA9IHJlc3VsdC5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZHMpO1xuICAgIGNvbnNvbGUubG9nKGZpbmRJdGVtKTtcbiAgICBpZiAoZmluZEl0ZW0pIHtcbiAgICAgIHNldFJlc3VsdChcbiAgICAgICAgcmVzdWx0Lm1hcCgoaXRlbSkgPT5cbiAgICAgICAgICBpdGVtLmlkID09PSBpZHNcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6XG4gICAgICAgICAgICAgICAgICBpdGVtLnF1YW50aXR5IDw9IDEgPyAoaXRlbS5xdWFudGl0eSA9IDEpIDogaXRlbS5xdWFudGl0eSAtIDEsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogaXRlbVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLWNvbHMgbWF4LXctWzEyMDBweF0gdy1mdWxsIGp1c3RpZnktY2VudGVyIHB5LTIwICBzbTo6Z3JpZC1jb2xzLTEgXCJcbiAgICAgICAgc3R5bGU9e3sgb3ZlcmZsb3c6IHNob3dNb2RhbCA/ICdoaWRkZW4nIDogJycgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmdhcC0xMCBzbTpnYXAtNVwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC00eGwgdGV4dC1yb3NlLTkwMFwiPkRlc3NlcnRzPC9oMT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiIG1kOmZsZXgtcm93IG1kOmZsZXgtd3JhcCBtZDpnYXAtNSBzbTpmbGV4IHNtOmZsZXgtY29sIHNtOmdhcC03IFwiPlxuICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlLmRlc2t0b3B9XG4gICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgIHByaWNlPXtwYXJzZUZsb2F0KGl0ZW0ucHJpY2UudG9GaXhlZCgyKSl9XG4gICAgICAgICAgICAgICAgcmVzdWx0PXtyZXN1bHR9XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0PXtzZXRSZXN1bHR9XG4gICAgICAgICAgICAgICAgYWRkUXVhbnRpdHk9e2FkZFF1YW50aXR5fVxuICAgICAgICAgICAgICAgIGRlY3JRdWFudGl0eT17ZGVjclF1YW50aXR5fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFByb2R1Y3RDYXJ0XG4gICAgICAgICAgcmVzdWx0PXtyZXN1bHR9XG4gICAgICAgICAgc2V0UmVzdWx0PXtzZXRSZXN1bHR9XG4gICAgICAgICAgc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93TW9kYWwgJiYgKFxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICByZXN1bHQ9e3Jlc3VsdH1cbiAgICAgICAgICBzZXRSZXN1bHQ9e3NldFJlc3VsdH1cbiAgICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUHJvZHVjdENhcnQiLCJkYXRhIiwiQ2FyZCIsIk1vZGFsIiwidXNlU3RhdGUiLCJIb21lIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiYWRkUXVhbnRpdHkiLCJpZHMiLCJmaW5kSXRlbSIsImZpbmQiLCJpdGVtIiwiaWQiLCJtYXAiLCJxdWFudGl0eSIsImRlY3JRdWFudGl0eSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm92ZXJmbG93IiwiaDEiLCJ1bCIsImluZGV4Iiwic3JjIiwiaW1hZ2UiLCJkZXNrdG9wIiwibmFtZSIsImNhdGVnb3J5IiwicHJpY2UiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});