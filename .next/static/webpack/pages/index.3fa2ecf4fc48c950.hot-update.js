"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Botao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Botao */ \"./src/components/Botao.tsx\");\n/* harmony import */ var _components_Formulario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Formulario */ \"./src/components/Formulario.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _components_Tabela__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tabela */ \"./src/components/Tabela.tsx\");\n/* harmony import */ var _hooks_useClientes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useClientes */ \"./src/hooks/useClientes.ts\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,_hooks_useClientes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), cliente = ref.cliente, clientes = ref.clientes, novoCliente = ref.novoCliente, salvarCliente = ref.salvarCliente, selecionarCliente = ref.selecionarCliente, excluirCliente = ref.excluirCliente, tabelaVisivel = ref.tabelaVisivel, exibirTabela = ref.exibirTabela;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\\n      flex flex-1 justify-center items-center md:w-full h-screen\\n      bg-gradient-to-r from-blue-700 to-blue-400  \\n      text-white py-6\\n    \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            titulo: \"Dados da Api \",\n            children: tabelaVisivel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            cor: \"blue\",\n                            className: \"mb-4\",\n                            onClick: novoCliente,\n                            children: \"Novo Cliente\"\n                        }, void 0, false, {\n                            fileName: \"/Users/marcelorodrigues/Desktop/Teste/src/pages/index.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/marcelorodrigues/Desktop/Teste/src/pages/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabela__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        clientes: clientes,\n                        clienteSelecionado: selecionarCliente,\n                        clienteExcluido: excluirCliente\n                    }, void 0, false, {\n                        fileName: \"/Users/marcelorodrigues/Desktop/Teste/src/pages/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Formulario__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                cliente: cliente,\n                clienteMudou: salvarCliente,\n                cancelado: exibirTabela\n            }, void 0, false, {\n                fileName: \"/Users/marcelorodrigues/Desktop/Teste/src/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/marcelorodrigues/Desktop/Teste/src/pages/index.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/marcelorodrigues/Desktop/Teste/src/pages/index.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"YXqY4E2YEuQG9efLf8xLdaODOEk=\", false, function() {\n    return [\n        _hooks_useClientes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDVTtBQUNSO0FBQ0E7QUFFSzs7QUFFaEMsU0FBU0ssSUFBSSxHQUFHOztJQUU3QixJQVNJRCxHQUFhLEdBQWJBLDhEQUFXLEVBQUUsRUFSZkUsT0FBTyxHQVFMRixHQUFhLENBUmZFLE9BQU8sRUFDUEMsUUFBUSxHQU9OSCxHQUFhLENBUGZHLFFBQVEsRUFDUkMsV0FBVyxHQU1USixHQUFhLENBTmZJLFdBQVcsRUFDWEMsYUFBYSxHQUtYTCxHQUFhLENBTGZLLGFBQWEsRUFDYkMsaUJBQWlCLEdBSWZOLEdBQWEsQ0FKZk0saUJBQWlCLEVBQ2pCQyxjQUFjLEdBR1pQLEdBQWEsQ0FIZk8sY0FBYyxFQUNkQyxhQUFhLEdBRVhSLEdBQWEsQ0FGZlEsYUFBYSxFQUNiQyxZQUFZLEdBQ1ZULEdBQWEsQ0FEZlMsWUFBWTtJQUdkLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRyxxSkFJakI7a0JBQ0UsNEVBQUNiLDBEQUFNO1lBQUNjLE1BQU0sRUFBQyxlQUFlO3NCQUMzQkosYUFBYSxpQkFDWjs7a0NBQ0UsOERBQUNFLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxrQkFBa0I7a0NBQy9CLDRFQUFDZix5REFBSzs0QkFBQ2lCLEdBQUcsRUFBQyxNQUFNOzRCQUFDRixTQUFTLEVBQUMsTUFBTTs0QkFDaENHLE9BQU8sRUFBRVYsV0FBVztzQ0FBRSxjQUV4Qjs7Ozs7Z0NBQVE7Ozs7OzRCQUNKO2tDQUNOLDhEQUFDTCwwREFBTTt3QkFBQ0ksUUFBUSxFQUFFQSxRQUFRO3dCQUN4Qlksa0JBQWtCLEVBQUVULGlCQUFpQjt3QkFDckNVLGVBQWUsRUFBRVQsY0FBYzs7Ozs7NEJBQy9COzs0QkFDRCxpQkFFSCw4REFBQ1YsOERBQVU7Z0JBQ1RLLE9BQU8sRUFBRUEsT0FBTztnQkFDaEJlLFlBQVksRUFBRVosYUFBYTtnQkFDM0JhLFNBQVMsRUFBRVQsWUFBWTs7Ozs7b0JBQ3ZCOzs7OztnQkFFRzs7Ozs7WUFDTCxDQUNQO0NBQ0Y7R0EzQ3VCUixJQUFJOztRQVd0QkQsMERBQVc7OztBQVhPQyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm90YW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvQm90YW9cIjtcbmltcG9ydCBGb3JtdWxhcmlvIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm11bGFyaW9cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgVGFiZWxhIGZyb20gXCIuLi9jb21wb25lbnRzL1RhYmVsYVwiO1xuXG5pbXBvcnQgdXNlQ2xpZW50ZXMgZnJvbSBcIi4uL2hvb2tzL3VzZUNsaWVudGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3Qge1xuICAgIGNsaWVudGUsXG4gICAgY2xpZW50ZXMsXG4gICAgbm92b0NsaWVudGUsXG4gICAgc2FsdmFyQ2xpZW50ZSxcbiAgICBzZWxlY2lvbmFyQ2xpZW50ZSxcbiAgICBleGNsdWlyQ2xpZW50ZSxcbiAgICB0YWJlbGFWaXNpdmVsLFxuICAgIGV4aWJpclRhYmVsYVxuICB9ID0gdXNlQ2xpZW50ZXMoKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BcbiAgICAgIGZsZXggZmxleC0xIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtZDp3LWZ1bGwgaC1zY3JlZW5cbiAgICAgIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTcwMCB0by1ibHVlLTQwMCAgXG4gICAgICB0ZXh0LXdoaXRlIHB5LTZcbiAgICBgfT5cbiAgICAgIDxMYXlvdXQgdGl0dWxvPVwiRGFkb3MgZGEgQXBpIFwiPlxuICAgICAgICB7dGFiZWxhVmlzaXZlbCA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgIDxCb3RhbyBjb3I9XCJibHVlXCIgY2xhc3NOYW1lPVwibWItNFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17bm92b0NsaWVudGV9PlxuICAgICAgICAgICAgICAgIE5vdm8gQ2xpZW50ZVxuICAgICAgICAgICAgICA8L0JvdGFvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8VGFiZWxhIGNsaWVudGVzPXtjbGllbnRlc31cbiAgICAgICAgICAgICAgY2xpZW50ZVNlbGVjaW9uYWRvPXtzZWxlY2lvbmFyQ2xpZW50ZX1cbiAgICAgICAgICAgICAgY2xpZW50ZUV4Y2x1aWRvPXtleGNsdWlyQ2xpZW50ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEZvcm11bGFyaW9cbiAgICAgICAgICAgIGNsaWVudGU9e2NsaWVudGV9XG4gICAgICAgICAgICBjbGllbnRlTXVkb3U9e3NhbHZhckNsaWVudGV9XG4gICAgICAgICAgICBjYW5jZWxhZG89e2V4aWJpclRhYmVsYX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJCb3RhbyIsIkZvcm11bGFyaW8iLCJMYXlvdXQiLCJUYWJlbGEiLCJ1c2VDbGllbnRlcyIsIkhvbWUiLCJjbGllbnRlIiwiY2xpZW50ZXMiLCJub3ZvQ2xpZW50ZSIsInNhbHZhckNsaWVudGUiLCJzZWxlY2lvbmFyQ2xpZW50ZSIsImV4Y2x1aXJDbGllbnRlIiwidGFiZWxhVmlzaXZlbCIsImV4aWJpclRhYmVsYSIsImRpdiIsImNsYXNzTmFtZSIsInRpdHVsbyIsImNvciIsIm9uQ2xpY2siLCJjbGllbnRlU2VsZWNpb25hZG8iLCJjbGllbnRlRXhjbHVpZG8iLCJjbGllbnRlTXVkb3UiLCJjYW5jZWxhZG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});