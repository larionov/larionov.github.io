(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./zig/build/lib.wasm":
/*!****************************!*\
  !*** ./zig/build/lib.wasm ***!
  \****************************/
/*! exports provided: memory, __wbindgen_global_argument_ptr, __wbindgen_get_string_ptr, binding */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./zig/build/lib.wasm?");

/***/ }),

/***/ "./zig/ray.js":
/*!********************!*\
  !*** ./zig/ray.js ***!
  \********************/
/*! exports provided: binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"binding\", function() { return binding; });\n/* harmony import */ var _build_lib_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build/lib.wasm */ \"./zig/build/lib.wasm\");\n/* tslint:disable */\n\n\nlet cachedEncoder = new TextEncoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _build_lib_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_build_lib_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction passStringToWasm(arg) {\n    const buf = cachedEncoder.encode(arg);\n    const ptr = _build_lib_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_get_string_ptr\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    return [ptr, buf.length];\n}\n\nlet cachegetFloat32Memory = null;\nfunction getFloat32Memory() {\n    if (cachegetFloat32Memory === null || cachegetFloat32Memory.buffer !== _build_lib_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetFloat32Memory = new Float32Array(_build_lib_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetFloat32Memory;\n}\n\nfunction getArrayF32FromWasm(ptr, len) {\n    return getFloat32Memory().subarray(ptr / 4, ptr / 4 + len);\n}\n\nlet cachedGlobalArgumentPtr = null;\nfunction globalArgumentPtr() {\n    if (cachedGlobalArgumentPtr === null) {\n        cachedGlobalArgumentPtr = _build_lib_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_global_argument_ptr\"]();\n    }\n    return cachedGlobalArgumentPtr;\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _build_lib_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_build_lib_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\n/**\n* @param {string} arg0\n* @param {number} arg1\n* @param {number} arg2\n* @returns {Float32Array}\n*/\nfunction binding(json, width, height) {\n    const seed = Math.floor(Math.random() * Math.floor(10000000))\n\n    const [ptr0, len0] = passStringToWasm(json);\n    const retptr = globalArgumentPtr();\n    _build_lib_wasm__WEBPACK_IMPORTED_MODULE_0__[\"binding\"](seed, width, height);\n    const mem = getUint32Memory();\n    const ptr = mem[retptr / 4];\n    const len = mem[retptr / 4 + 1];\n    const realRet = getArrayF32FromWasm(ptr, len).slice();\n    return realRet;\n}\n\nlet cachedDecoder = new TextDecoder('utf-8');\n\n\n//# sourceURL=webpack:///./zig/ray.js?");

/***/ })

}]);