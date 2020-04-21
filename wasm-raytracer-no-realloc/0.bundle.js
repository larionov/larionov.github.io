(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../ray/pkg/ray.js":
/*!*************************!*\
  !*** ../ray/pkg/ray.js ***!
  \*************************/
/*! exports provided: binding, __wbindgen_throw, __wbindgen_fmodf, __wbindgen_Math_tan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"binding\", function() { return binding; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_fmodf\", function() { return __wbindgen_fmodf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_Math_tan\", function() { return __wbindgen_Math_tan; });\n/* harmony import */ var _ray_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ray_bg */ \"../ray/pkg/ray_bg.wasm\");\n/* tslint:disable */\n\n\nlet cachedEncoder = new TextEncoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _ray_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_ray_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction passStringToWasm(arg) {\n    \n    const buf = cachedEncoder.encode(arg);\n    const ptr = _ray_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    return [ptr, buf.length];\n}\n\nlet cachegetFloat32Memory = null;\nfunction getFloat32Memory() {\n    if (cachegetFloat32Memory === null || cachegetFloat32Memory.buffer !== _ray_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetFloat32Memory = new Float32Array(_ray_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetFloat32Memory;\n}\n\nfunction getArrayF32FromWasm(ptr, len) {\n    return getFloat32Memory().subarray(ptr / 4, ptr / 4 + len);\n}\n\nlet cachedGlobalArgumentPtr = null;\nfunction globalArgumentPtr() {\n    if (cachedGlobalArgumentPtr === null) {\n        cachedGlobalArgumentPtr = _ray_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_global_argument_ptr\"]();\n    }\n    return cachedGlobalArgumentPtr;\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _ray_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_ray_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n/**\n* @param {string} arg0\n* @param {number} arg1\n* @param {number} arg2\n* @returns {Float32Array}\n*/\nfunction binding(arg0, arg1, arg2) {\n    const [ptr0, len0] = passStringToWasm(arg0);\n    const retptr = globalArgumentPtr();\n    _ray_bg__WEBPACK_IMPORTED_MODULE_0__[\"binding\"](retptr, ptr0, len0, arg1, arg2);\n    const mem = getUint32Memory();\n    const ptr = mem[retptr / 4];\n    const len = mem[retptr / 4 + 1];\n    \n    const realRet = getArrayF32FromWasm(ptr, len).slice();\n    _ray_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr, len * 4);\n    return realRet;\n    \n}\n\nlet cachedDecoder = new TextDecoder('utf-8');\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\nfunction __wbindgen_fmodf(a, b) { return a % b; }\n\nfunction __wbindgen_Math_tan(x) { return Math.tan(x); }\n\n\n\n//# sourceURL=webpack:///../ray/pkg/ray.js?");

/***/ }),

/***/ "../ray/pkg/ray_bg.wasm":
/*!******************************!*\
  !*** ../ray/pkg/ray_bg.wasm ***!
  \******************************/
/*! exports provided: memory, __heap_base, __data_end, binding, __wbindgen_global_argument_ptr, __wbindgen_malloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./ray */ \"../ray/pkg/ray.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../ray/pkg/ray_bg.wasm?");

/***/ })

}]);