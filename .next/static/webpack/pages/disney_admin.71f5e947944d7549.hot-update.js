"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/disney_admin",{

/***/ "./pages/config/web3.js":
/*!******************************!*\
  !*** ./pages/config/web3.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar web3;\nif ( true && typeof window.ethereum !== \"undefined\") {\n    // We are in the browser and metamask is running.\n    window.ethereum.request({\n        method: \"eth_requestAccounts\"\n    });\n    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(window.ethereum);\n} else {\n    // We are on the server *OR* the user is not running metamask\n    /* const provider = new Web3.providers.HttpProvider(\r\n    \"https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c\"\r\n  );\r\n  web3 = new Web3(provider);\r\n*/ //const web3 = new Web3(window.ethereum); // To use testnet (rinkeby, ropnat..)\n    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)('http://localhost:7545')); // To use ganache\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (web3);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb25maWcvd2ViMy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQXVCO0FBR3ZCLEdBQUcsQ0FBQ0MsSUFBSTtBQUVSLEVBQUUsRUFBRSxLQUE2QixJQUFJLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLEtBQUssQ0FBVyxZQUFFLENBQUM7SUFDNUUsRUFBaUQ7SUFDakRELE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUMsQ0FBQztRQUFDQyxNQUFNLEVBQUUsQ0FBcUI7SUFBQyxDQUFDO0lBQ3pESixJQUFJLEdBQUcsR0FBRyxDQUFDRCw2Q0FBSSxDQUFDRSxNQUFNLENBQUNDLFFBQVE7QUFDakMsQ0FBQyxNQUFNLENBQUM7SUFDTixFQUE2RDtJQUM5RCxFQUlDO0lBRURGLElBQUksR0FBRyxHQUFHLENBQUNELElBQUksQ0FBQyxHQUFHLENBQUNBLElBQUksQ0FBQ00sU0FBUyxDQUFDQyxZQUFZLENBQUMsQ0FBdUI7QUFFeEUsQ0FBQztBQUlELE1BQU0sU0FBU04sSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb25maWcvd2ViMy5qcz8xYTRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcbiBcclxuIFxyXG5sZXQgd2ViMztcclxuIFxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgLy8gV2UgYXJlIGluIHRoZSBicm93c2VyIGFuZCBtZXRhbWFzayBpcyBydW5uaW5nLlxyXG4gIHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcclxuICB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcclxufSBlbHNlIHtcclxuICAvLyBXZSBhcmUgb24gdGhlIHNlcnZlciAqT1IqIHRoZSB1c2VyIGlzIG5vdCBydW5uaW5nIG1ldGFtYXNrXHJcbiAvKiBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXHJcbiAgICBcImh0dHBzOi8vcmlua2VieS5pbmZ1cmEuaW8vdjMvMTVjMWQzMjU4MTg5NGI4OGE5MmQ4ZDllNTE5ZTQ3NmNcIlxyXG4gICk7XHJcbiAgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcclxuKi9cclxuICAvL2NvbnN0IHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pOyAvLyBUbyB1c2UgdGVzdG5ldCAocmlua2VieSwgcm9wbmF0Li4pXHJcbiB3ZWIzID0gbmV3IFdlYjMobmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcignaHR0cDovL2xvY2FsaG9zdDo3NTQ1JykpOyAvLyBUbyB1c2UgZ2FuYWNoZVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3ZWIzOyJdLCJuYW1lcyI6WyJXZWIzIiwid2ViMyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/config/web3.js\n");

/***/ })

});