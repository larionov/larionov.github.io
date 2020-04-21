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
/******/ 		"../ray/pkg/ray_bg.wasm": function() {
/******/ 			return {
/******/ 				"./ray": {
/******/ 					"__wbindgen_fmodf": function(p0f32,p1f32) {
/******/ 						return installedModules["../ray/pkg/ray.js"].exports["__wbindgen_fmodf"](p0f32,p1f32);
/******/ 					},
/******/ 					"__wbindgen_Math_tan": function(p0f64) {
/******/ 						return installedModules["../ray/pkg/ray.js"].exports["__wbindgen_Math_tan"](p0f64);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../ray/pkg/ray.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 		"../zigray/pkg/lib.wasm": function() {
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
/******/ 		var wasmModules = {"0":["../ray/pkg/ray_bg.wasm"],"1":["../zigray/pkg/lib.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../ray/pkg/ray_bg.wasm":"6c482dc975bed350266d","../zigray/pkg/lib.wasm":"039755e2bf1597aa78f2"}[wasmModuleId] + ".module.wasm");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Fps; });\nclass Fps {\n    constructor(interval, element) {\n        this.lastTick = performance.now();\n        this.lastNotify = this.lastTick;\n        this.interval = interval;\n        this.element = element;\n        this.runningSum = 0;\n        this.runningSamples = 0;\n    }\n\n    tick() {\n        const now = performance.now();\n        this.runningSum += (now - this.lastTick);\n        this.runningSamples++;\n        this.lastTick = now;\n\n        if ((now - this.lastNotify) > this.interval) {\n            this.notify(now);\n        }\n    }\n\n    notify(now) {\n        const avgFrame = this.runningSum / this.runningSamples;\n        const fps = 1000 / avgFrame;\n        this.element.innerText = `${fps.toFixed(2)}fps`;\n        this.lastNotify = now;\n        this.runningSamples = 0;\n        this.runningSum = 0;\n    }\n}\n\n//# sourceURL=webpack:///./lib/fps.js?");

/***/ }),

/***/ "./lib/javascript.js":
/*!***************************!*\
  !*** ./lib/javascript.js ***!
  \***************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ \"./lib/vector.js\");\n\n\nconst SELF_INTERSECTION_THRESHOLD = 0.001;\n\nfunction trace(ray, scene, depth) {\n    if (depth > 2) return;\n\n    var distObject = intersectScene(ray, scene);\n\n    if (distObject[0] === Infinity) {\n        return _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ZERO;\n    }\n\n    var dist = distObject[0],\n        object = distObject[1];\n\n    var pointAtTime = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(ray.point, _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scale(ray.vector, dist));\n\n    return surface(ray, scene, object, pointAtTime, surfaceNormal(object, pointAtTime), depth);\n}\n\nfunction intersectScene(ray, scene) {\n    var closest = [Infinity, null];\n    for (var i = 0; i < scene.objects.length; i++) {\n        var object = scene.objects[i];\n        let dist;\n        if (object.type === 'Sphere') {\n            dist = sphereIntersection(object, ray);\n        } else {\n            dist = planeIntersection(object, ray);\n        }\n\n        if (dist !== undefined &&\n            dist > SELF_INTERSECTION_THRESHOLD &&\n            dist < closest[0]) {\n            closest = [dist, object];\n        }\n    }\n\n    return closest;\n}\n\nfunction sphereIntersection(sphere, ray) {\n    var eye_to_center = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subtract(sphere.point, ray.point),\n        v = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dotProduct(eye_to_center, ray.vector),\n        eoDot = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dotProduct(eye_to_center, eye_to_center),\n        discriminant = (sphere.radius * sphere.radius) - eoDot + (v * v);\n    if (discriminant < 0) {\n        return;\n    } else {\n        const dist = v - Math.sqrt(discriminant);\n        return dist > SELF_INTERSECTION_THRESHOLD ? dist : undefined;\n    }\n}\n\nfunction planeIntersection(plane, ray) {\n    const negNorm = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].negate(plane.normal);\n    const denom = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dotProduct(negNorm, ray.vector);\n\n    if (denom <= 0) {\n        return Infinity;\n    }\n\n    const interm = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subtract(plane.point, ray.point);\n    return _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dotProduct(interm, negNorm) / denom;\n}\n\nfunction surfaceNormal(object, pos) {\n\n    if (object.type === 'Sphere') {\n        return _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].unitVector(_vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subtract(pos, object.point));\n    }\n\n    return object.normal;\n}\n\nfunction planeColorAt(plane, point, scene) {\n\n    // Point from plane origin\n    // This is a complete hack to make up for my sad lack of lin alg. knowledge\n\n    const fromOrigin = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subtract(point, plane.point);\n    const width = 2;\n\n    var px = { x: 0, y: 1, z: 0 };\n    var py = { x: 0, y: 0, z: 1 };\n\n    if (plane.normal.z !== 0) {\n        var px = { x: 0, y: 1, z: 0 };\n        var py = { x: 1, y: 0, z: 0 };\n    }\n\n    if (plane.normal.y !== 0) {\n        var px = { x: 0, y: 0, z: 1 };\n        var py = { x: 1, y: 0, z: 0 };\n    }\n\n    const cx = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dotProduct(px, fromOrigin);\n    const cy = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dotProduct(py, fromOrigin);\n\n    const x_cond = (cx < 0 && cx % width < -width/2) || (cx > 0 && cx % width < width/2);\n    const y_cond = (cy < 0 && cy % width < -width/2) || (cy > 0 && cy % width < width/2);\n\n    if ((x_cond && !y_cond) || (y_cond && !x_cond)) {\n        return scene.checker[0];\n    }\n\n    return scene.checker[1];\n}\n\nfunction surface(ray, scene, object, pointAtTime, normal, depth) {\n\n    var b = object.color,\n        c = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ZERO,\n        lambertAmount = 0;\n\n    if (object.type === 'Plane') {\n        b = planeColorAt(object, pointAtTime, scene);\n    }\n\n    if (object.lambert) {\n        for (var i = 0; i < scene.lights.length; i++) {\n            const light = scene.lights[i];\n            if (!isLightVisible(pointAtTime, scene, light)) {\n                continue;\n            }\n            var contribution = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dotProduct(_vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].unitVector(\n                _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subtract(light, pointAtTime)), normal);\n            if (contribution > 0) lambertAmount += contribution;\n        }\n    }\n\n    if (object.specular) {\n        var reflectedRay = {\n            point: pointAtTime,\n            vector: _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].reflectThrough(ray.vector, normal)\n        };\n        var reflectedColor = trace(reflectedRay, scene, ++depth);\n        if (reflectedColor) {\n            c = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(c, _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scale(reflectedColor, object.specular));\n        }\n    }\n\n    lambertAmount = Math.min(1, lambertAmount);\n\n    return _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add3(c,\n        _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scale(b, lambertAmount * object.lambert),\n        _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scale(b, object.ambient));\n}\n\nfunction isLightVisible(pt, scene, light) {\n\n    const pointToLightVector = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subtract(light, pt);\n\n    const ray = {\n        point: pt,\n        vector: _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].unitVector(pointToLightVector)\n    };\n\n    const distanceToLight = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length(pointToLightVector);\n\n    const [dist] = intersectScene(ray, scene);\n\n    return dist > distanceToLight;\n}\n\nfunction render(canvas, scene) {\n\n    const { width, height } = canvas;\n\n    var camera = scene.camera;\n\n    var eyeVector = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].unitVector(_vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subtract(camera.vector, camera.point)),\n\n        vpRight = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].unitVector(_vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].crossProduct(eyeVector, _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].UP)),\n        vpUp = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].unitVector(_vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].crossProduct(vpRight, eyeVector)),\n\n        fovRadians = Math.PI * (camera.fov / 2) / 180,\n        heightWidthRatio = height / width,\n        halfWidth = Math.tan(fovRadians),\n        halfHeight = heightWidthRatio * halfWidth,\n        camerawidth = halfWidth * 2,\n        cameraheight = halfHeight * 2,\n        pixelWidth = camerawidth / (width - 1),\n        pixelHeight = cameraheight / (height - 1);\n\n    var color;\n    var ray = {\n        point: camera.point\n    };\n\n    const dataArray = [];\n\n    for (var y = 0; y < height; y++) {\n        for (var x = 0; x < width; x++) {\n            var xcomp = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scale(vpRight, (x * pixelWidth) - halfWidth),\n                ycomp = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scale(vpUp, (y * pixelHeight) - halfHeight);\n\n            ray.vector = _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].unitVector(_vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add3(eyeVector, xcomp, ycomp));\n\n            color = trace(ray, scene, 0);\n\n            dataArray.push(color.x, color.y, color.z, 255);\n        }\n    }\n\n    return dataArray;\n}\n\n//# sourceURL=webpack:///./lib/javascript.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm */ \"./lib/wasm.js\");\n/* harmony import */ var _wasm_zig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm-zig */ \"./lib/wasm-zig.js\");\n/* harmony import */ var _javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascript */ \"./lib/javascript.js\");\n/* harmony import */ var _fps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fps */ \"./lib/fps.js\");\n\n\n\n\n\nconst canvas = {\n    width: 480,\n    height: 360\n};\n\nconst getScene = () => {\n\n    const input = (selector) => {\n        return parseFloat(document.getElementById(selector).value);\n    };\n\n    return {\n        camera: {\n            point: {\n                x: input('camera-x'),\n                y: input('camera-y'),\n                z: input('camera-z'),\n            },\n            vector: {\n                x: 0,\n                y: 0,\n                z: 0\n            },\n            fov: input('camera-fov')\n        },\n        objects: [\n            {\n                type: 'Sphere',\n                point: { x: -3, y: 0, z: 0 },\n                color: { x: input('obj-1-red'), y: input('obj-1-green'), z: input('obj-1-blue') },\n                specular: input('obj-1-specular') / 100,\n                lambert: input('obj-1-lambert') / 100,\n                ambient: input('obj-1-ambient') / 100,\n                radius: input('obj-1-radius') / 100\n            },\n            {\n                type: 'Sphere',\n                point: { x: 3, y: 0, z: 0 },\n                color: { x: input('obj-2-red'), y: input('obj-2-green'), z: input('obj-2-blue') },\n                specular: input('obj-2-specular') / 100,\n                lambert: input('obj-2-lambert') / 100,\n                ambient: input('obj-2-ambient') / 100,\n                radius: input('obj-2-radius') / 100\n            },\n            {\n                type: 'Sphere',\n                point: { x: 0, y: 0, z: 0 },\n                color: { x: input('obj-3-red'), y: input('obj-3-green'), z: input('obj-3-blue') },\n                specular: input('obj-3-specular') / 100,\n                lambert: input('obj-3-lambert') / 100,\n                ambient: input('obj-3-ambient') / 100,\n                radius: input('obj-3-radius') / 100\n            },\n            {\n                type: 'Plane',\n                point: { x: 0, y: 5, z: 0 },\n                normal: { x: 0, y: -1, z: 0 },\n                color: { x: 200, y: 200, z: 200 },\n                specular: 0.0,\n                lambert: 0.9,\n                ambient: 0.2,\n            },\n            {\n                type: 'Plane',\n                point: { x: 0, y: -5, z: 0 },\n                normal: { x: 0, y: 1, z: 0 },\n                color: { x: 100, y: 100, z: 100 },\n                specular: 0.0,\n                lambert: 0.9,\n                ambient: 0.2,\n            },\n            {\n                type: 'Plane',\n                point: { x: -5, y: 0, z: 0 },\n                normal: { x: 1, y: 0, z: 0 },\n                color: { x: 100, y: 100, z: 100 },\n                specular: 0.0,\n                lambert: 0.9,\n                ambient: 0.2,\n            },\n            {\n                type: 'Plane',\n                point: { x: 5, y: 0, z: 0 },\n                normal: { x: -1, y: 0, z: 0 },\n                color: { x: 100, y: 100, z: 100 },\n                specular: 0.0,\n                lambert: 0.9,\n                ambient: 0.2,\n            },\n            {\n                type: 'Plane',\n                point: { x: 0, y: 0, z: -12 },\n                normal: { x: 0, y: 0, z: 1 },\n                color: { x: 100, y: 100, z: 100 },\n                specular: 0.0,\n                lambert: 0.9,\n                ambient: 0.2,\n            },\n            {\n                type: 'Plane',\n                point: { x: 0, y: 0, z: 12 },\n                normal: { x: 0, y: 0, z: -1 },\n                color: { x: 100, y: 100, z: 100 },\n                specular: 0.0,\n                lambert: 0.9,\n                ambient: 0.2,\n            },\n        ],\n        checker: [\n            {\n                x: input('checker-color-1-red'),\n                y: input('checker-color-1-green'),\n                z: input('checker-color-1-blue')\n            },\n            {\n                x: input('checker-color-2-red'),\n                y: input('checker-color-2-green'),\n                z: input('checker-color-2-blue')\n            }\n        ],\n        lights: [{\n            x: input('light-1-x'),\n            y: input('light-1-y'),\n            z: input('light-1-z')\n        }]\n    };\n};\n\nconst putData = (data) => {\n    const ctx = document.getElementById('canvas').getContext('2d');\n    ctx.putImageData(new ImageData(new Uint8ClampedArray(data), canvas.width, canvas.height), 0, 0);\n};\n\nconst renderWasm = (scene) => {\n\n    const data = _wasm__WEBPACK_IMPORTED_MODULE_0__[\"render\"](canvas, scene);\n    if (data) {         // may return undefined if wasm module not loaded\n        putData(data);\n    }\n};\n\nconst renderWasmZig = (scene) => {\n\n    const data = _wasm_zig__WEBPACK_IMPORTED_MODULE_1__[\"render\"](canvas, scene);\n    if (data) {         // may return undefined if wasm module not loaded\n        putData(data);\n    }\n};\n\nconst renderJs = (scene) => {\n\n    const data = _javascript__WEBPACK_IMPORTED_MODULE_2__[\"render\"](canvas, scene);\n    putData(data);\n};\n\nlet inc = 0;\n\nconst fps = new _fps__WEBPACK_IMPORTED_MODULE_3__[\"default\"](250,  document.querySelector('.fps'));\nlet type = 'wasm';\n\nconst render = () => {\n\n    fps.tick();\n\n    const scene = getScene();\n\n    scene.objects[0].point.x = Math.sin(inc) * 3.0;\n    scene.objects[0].point.z = Math.cos(inc) * 3.0;\n    scene.objects[0].point.y = Math.sin(inc) * 2.0;\n\n    scene.objects[1].point.x = Math.sin(inc) * -3.0;\n    scene.objects[1].point.z = Math.cos(inc) * -3.0;\n    scene.objects[1].point.y = Math.cos(inc) * -2.0;\n\n    inc += parseFloat(document.getElementById('orbit-speed').value / 250);\n\n    if (type === 'wasm') {\n        renderWasm(scene);\n    } else if (type === 'wasm-zig') {\n        renderWasmZig(scene);\n    } else {\n        renderJs(scene);\n    }\n\n    requestAnimationFrame(render);\n};\n\nrequestAnimationFrame(render);\n\ndocument.querySelectorAll('.switch-container a')\n    .forEach((e) => e.addEventListener('click', (e) => {\n        const node = e.target;\n\n        type = node.getAttribute('data-type');\n        [...document.querySelectorAll('.switch-container a')].forEach(node => node.classList = '');\n        node.classList = 'selected';\n\n    e.preventDefault();\n}));\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ }),

/***/ "./lib/vector.js":
/*!***********************!*\
  !*** ./lib/vector.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// JS\n\nvar Vector = {};\n\n// # Constants\nVector.UP = { x: 0, y: 1, z: 0 };\nVector.ZERO = { x: 0, y: 0, z: 0 };\nVector.WHITE = { x: 255, y: 255, z: 255 };\nVector.ZEROcp = function() {\n    return { x: 0, y: 0, z: 0 };\n};\n\n// # Operations\n//\n// ## [Dot Product](https://en.wikipedia.org/wiki/Dot_product)\n// is different than the rest of these since it takes two vectors but\n// returns a single number value.\nVector.dotProduct = function(a, b) {\n    return (a.x * b.x) + (a.y * b.y) + (a.z * b.z);\n};\n\n// ## [Cross Product](https://en.wikipedia.org/wiki/Cross_product)\n//\n// generates a new vector that's perpendicular to both of the vectors\n// given.\nVector.crossProduct = function(a, b) {\n\n    return {\n        x: (a.y * b.z) - (a.z * b.y),\n        y: (a.z * b.x) - (a.x * b.z),\n        z: (a.x * b.y) - (a.y * b.x)\n    };\n};\n\n// Enlongate or shrink a vector by a factor of `t`\nVector.scale = function(a, t) {\n    return {\n        x: a.x * t,\n        y: a.y * t,\n        z: a.z * t\n    };\n};\n\nVector.negate = function(a) {\n    return {\n        x: -a.x,\n        y: -a.y,\n        z: -a.z\n    };\n};\n\n// ## [Unit Vector](http://en.wikipedia.org/wiki/Unit_vector)\n//\n// Turn any vector into a vector that has a magnitude of 1.\n//\n// If you consider that a [unit sphere](http://en.wikipedia.org/wiki/Unit_sphere)\n// is a sphere with a radius of 1, a unit vector is like a vector from the\n// center point (0, 0, 0) to any point on its surface.\nVector.unitVector = function(a) {\n    return Vector.scale(a, 1 / Vector.length(a));\n};\n\n// Add two vectors to each other, by simply combining each\n// of their components\nVector.add = function(a, b) {\n    return {\n        x: a.x + b.x,\n        y: a.y + b.y,\n        z: a.z + b.z\n    };\n};\n\n// A version of `add` that adds three vectors at the same time. While\n// it's possible to write a clever version of `Vector.add` that takes\n// any number of arguments, it's not fast, so we're keeping it simple and\n// just making two versions.\nVector.add3 = function(a, b, c) {\n    return {\n        x: a.x + b.x + c.x,\n        y: a.y + b.y + c.y,\n        z: a.z + b.z + c.z\n    };\n};\n\n// Subtract one vector from another, by subtracting each component\nVector.subtract = function(a, b) {\n    return {\n        x: a.x - b.x,\n        y: a.y - b.y,\n        z: a.z - b.z\n    };\n};\n\n// Length, or magnitude, measured by [Euclidean norm](https://en.wikipedia.org/wiki/Euclidean_vector#Length)\nVector.length = function(a) {\n    return Math.sqrt(Vector.dotProduct(a, a));\n};\n\n// Given a vector `a`, which is a point in space, and a `normal`, which is\n// the angle the point hits a surface, returna  new vector that is reflect\n// off of that surface\nVector.reflectThrough = function(a, normal) {\n    var d = Vector.scale(normal, Vector.dotProduct(a, normal));\n    return Vector.subtract(a, Vector.scale(d, 2));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vector);\n\n//# sourceURL=webpack:///./lib/vector.js?");

/***/ }),

/***/ "./lib/wasm-zig.js":
/*!*************************!*\
  !*** ./lib/wasm-zig.js ***!
  \*************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\nlet rayLoaded = false;\nlet _render;\n__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ray-zig */ \"../zigray/pkg/ray.js\")).then((Ray) => {\n\n    rayLoaded = true;\n\n    _render = function (canvas, scene) {\n        const { width, height } = canvas;\n        //console.log(JSON.stringify(scene));\n        return Ray.binding(JSON.stringify(scene), width, height);\n    };\n});\n\nfunction render(canvas, scene) {\n    if (rayLoaded) {\n        return _render(canvas, scene);\n    }\n}\n\n\n//# sourceURL=webpack:///./lib/wasm-zig.js?");

/***/ }),

/***/ "./lib/wasm.js":
/*!*********************!*\
  !*** ./lib/wasm.js ***!
  \*********************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\nlet rayLoaded = false;\nlet _render;\n\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ray */ \"../ray/pkg/ray.js\")).then((Ray) => {\n\n    rayLoaded = true;\n\n    _render = function (canvas, scene) {\n        const { width, height } = canvas;\n        return Ray.binding(JSON.stringify(scene), width, height);\n    };\n});\n\nfunction render(canvas, scene) {\n    if (rayLoaded) {\n        return _render(canvas, scene);\n    }\n}\n\n//# sourceURL=webpack:///./lib/wasm.js?");

/***/ })

/******/ });