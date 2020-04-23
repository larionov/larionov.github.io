/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bundle.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./zig/build/lib.wasm": function() {
/******/ 			return {
/******/
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["./zig/build/lib.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./zig/build/lib.wasm":"2605fc6290bf24a4e40a"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/fps.js":
/*!********************!*\
  !*** ./lib/fps.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Fps; });\nclass Fps {\n    constructor(interval, element) {\n        this.lastTick = performance.now();\n        this.lastNotify = this.lastTick;\n        this.interval = interval;\n        this.element = element;\n        this.runningSum = 0;\n        this.runningSamples = 0;\n        this.dt = 1;\n    }\n\n    tick() {\n        const now = performance.now();\n        this.runningSum += (now - this.lastTick);\n        this.runningSamples++;\n        this.lastTick = now;\n\n        this.dt = 3.0 / (now - this.lastNotify);\n\n        if ((now - this.lastNotify) > this.interval) {\n            this.notify(now);\n        }\n    }\n\n    notify(now) {\n        const avgFrame = this.runningSum / this.runningSamples;\n        const fps = 1000 / avgFrame;\n        this.element.innerText = `${fps.toFixed(2)}fps`;\n        this.lastNotify = now;\n        this.runningSamples = 0;\n        this.runningSum = 0;\n    }\n}\n\n\n//# sourceURL=webpack:///./lib/fps.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_zig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm-zig */ \"./lib/wasm-zig.js\");\n/* harmony import */ var _fps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fps */ \"./lib/fps.js\");\n\n\n\nconst canvas = {\n    width: 1024,\n    height: 768\n};\n\nvar up = false,\n    right = false,\n    down = false,\n    left = false,\n    x = 0,\n    y = 0;\n\n\nconst getScene = () => {\n\n    const input = (selector) => {\n        return parseFloat(document.getElementById(selector).value);\n    };\n\n    return {\n        camera: {\n            point: {\n                x: x, //input('camera-x'),\n                y: y, //input('camera-y'),\n                z: input('camera-z'),\n            },\n            vector: {\n                x: 0,\n                y: 0,\n                z: 0\n            },\n            fov: input('camera-fov')\n        },\n        objects: [\n            {\n                type: 'Sphere',\n                point: { x: -3, y: 0, z: 0 },\n                color: { x: input('obj-1-red'), y: input('obj-1-green'), z: input('obj-1-blue') },\n                specular: input('obj-1-specular') / 100,\n                lambert: input('obj-1-lambert') / 100,\n                ambient: input('obj-1-ambient') / 100,\n                radius: input('obj-1-radius') / 100\n            },\n            {\n                type: 'Sphere',\n                point: { x: 3, y: 0, z: 0 },\n                color: { x: input('obj-2-red'), y: input('obj-2-green'), z: input('obj-2-blue') },\n                specular: input('obj-2-specular') / 100,\n                lambert: input('obj-2-lambert') / 100,\n                ambient: input('obj-2-ambient') / 100,\n                radius: input('obj-2-radius') / 100\n            },\n            {\n                type: 'Sphere',\n                point: { x: 0, y: 0, z: 0 },\n                color: { x: input('obj-3-red'), y: input('obj-3-green'), z: input('obj-3-blue') },\n                specular: input('obj-3-specular') / 100,\n                lambert: input('obj-3-lambert') / 100,\n                ambient: input('obj-3-ambient') / 100,\n                radius: input('obj-3-radius') / 100\n            },\n            {\n                type: 'Plane',\n                point: { x: 0, y: 5, z: 0 },\n                normal: { x: 0, y: -1, z: 0 },\n                color: { x: 200, y: 200, z: 200 },\n                specular: 0.0,\n                lambert: 0.9,\n                ambient: 0.2,\n            },\n            {\n                type: 'Plane',\n                point: { x: 0, y: -5, z: 0 },\n                normal: { x: 0, y: 1, z: 0 },\n                color: { x: 100, y: 100, z: 100 },\n                specular: 0.0,\n                lambert: 0.9,\n                ambient: 0.2,\n            },\n            {\n                type: 'Plane',\n                point: { x: -5, y: 0, z: 0 },\n                normal: { x: 1, y: 0, z: 0 },\n                color: { x: 100, y: 100, z: 100 },\n                specular: 0.0,\n                lambert: 0.9,\n                ambient: 0.2,\n            },\n            {\n                type: 'Plane',\n                point: { x: 5, y: 0, z: 0 },\n                normal: { x: -1, y: 0, z: 0 },\n                color: { x: 100, y: 100, z: 100 },\n                specular: 0.0,\n                lambert: 0.9,\n                ambient: 0.2,\n            },\n            {\n                type: 'Plane',\n                point: { x: 0, y: 0, z: -12 },\n                normal: { x: 0, y: 0, z: 1 },\n                color: { x: 100, y: 100, z: 100 },\n                specular: 0.0,\n                lambert: 0.9,\n                ambient: 0.2,\n            },\n            {\n                type: 'Plane',\n                point: { x: 0, y: 0, z: 12 },\n                normal: { x: 0, y: 0, z: -1 },\n                color: { x: 100, y: 100, z: 100 },\n                specular: 0.0,\n                lambert: 0.9,\n                ambient: 0.2,\n            },\n        ],\n        checker: [\n            {\n                x: input('checker-color-1-red'),\n                y: input('checker-color-1-green'),\n                z: input('checker-color-1-blue')\n            },\n            {\n                x: input('checker-color-2-red'),\n                y: input('checker-color-2-green'),\n                z: input('checker-color-2-blue')\n            }\n        ],\n        lights: [{\n            x: input('light-1-x'),\n            y: input('light-1-y'),\n            z: input('light-1-z')\n        }]\n    };\n};\n\nconst putData = (data) => {\n    const ctx = document.getElementById('canvas').getContext('2d');\n    ctx.putImageData(new ImageData(new Uint8ClampedArray(data), canvas.width, canvas.height), 0, 0);\n};\n\nconst renderWasmZig = (scene) => {\n    const data = _wasm_zig__WEBPACK_IMPORTED_MODULE_0__[\"render\"](canvas, scene);\n    if (data) {         // may return undefined if wasm module not loaded\n        putData(data);\n    }\n};\n\nlet inc = 0;\n\nconst fps = new _fps__WEBPACK_IMPORTED_MODULE_1__[\"default\"](250,  document.querySelector('.fps'));\nlet type = 'wasm-zig';\n\nconst render = () => {\n\n    fps.tick();\n\n    const scene = getScene();\n\n    const dt = fps.dt;\n\n    if (up){\n        y = y - 10 * dt;\n    }\n    if (right){\n        x = x + 10 * dt;\n    }\n    if (down){\n        y = y + 10 * dt;\n    }\n    if (left){\n        x = x - 10 * dt;\n    }\n\n\n    scene.objects[0].point.x = Math.sin(inc) * 3.0;\n    scene.objects[0].point.z = Math.cos(inc) * 3.0;\n    scene.objects[0].point.y = Math.sin(inc) * 2.0;\n\n    scene.objects[1].point.x = Math.sin(inc) * -3.0;\n    scene.objects[1].point.z = Math.cos(inc) * -3.0;\n    scene.objects[1].point.y = Math.cos(inc) * -2.0;\n\n    inc += parseFloat(document.getElementById('orbit-speed').value / 250) * dt;\n\n    renderWasmZig(scene);\n\n    //setTimeout( () => {\n\n        requestAnimationFrame(render);\n    //}, 5000);\n};\nrequestAnimationFrame(render);\n\n\ndocument.addEventListener('keydown',press)\nfunction press(e){\n    if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){\n        up = true\n    }\n    if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){\n        right = true\n    }\n    if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){\n        down = true\n    }\n    if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){\n        left = true\n    }\n}\ndocument.addEventListener('keyup',release)\nfunction release(e){\n    if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){\n        up = false\n    }\n    if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){\n        right = false\n    }\n    if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){\n        down = false\n    }\n  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){\n    left = false\n  }\n}\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ }),

/***/ "./lib/wasm-zig.js":
/*!*************************!*\
  !*** ./lib/wasm-zig.js ***!
  \*************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\nlet rayLoaded = false;\nlet _render;\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../zig/ray.js */ \"./zig/ray.js\")).then((Ray) => {\n\n    rayLoaded = true;\n\n    _render = function (canvas, scene) {\n        const { width, height } = canvas;\n        //console.log(JSON.stringify(scene));\n\n        return Ray.binding(JSON.stringify(scene), width, height);\n    };\n});\n\nfunction render(canvas, scene) {\n    if (rayLoaded) {\n        return _render(canvas, scene);\n    }\n}\n\n\n//# sourceURL=webpack:///./lib/wasm-zig.js?");

/***/ })

/******/ });