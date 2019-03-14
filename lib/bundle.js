/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/entry.js":
/*!**********************!*\
  !*** ./lib/entry.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Maze = __webpack_require__(/*! ./maze */ \"./lib/maze.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"canvas\");\n  const blockSize = 30;\n  canvas.width = blockSize * 21;\n  canvas.height = blockSize * 25;\n  const ctx = canvas.getContext('2d');\n  const maze = new Maze(ctx, blockSize);\n  maze.render(ctx);\n});\n\n//# sourceURL=webpack:///./lib/entry.js?");

/***/ }),

/***/ "./lib/loader.js":
/*!***********************!*\
  !*** ./lib/loader.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Loader = {\n  WALLS: [\n    [\n      { \"move\": [0, 9.5] },\n      { \"line\": [3.5, 9.5] },\n      { \"corner\": [3.5, 9.0, 0.5, Math.PI/2, 0, true] },\n      { \"line\": [4, 8] },\n      { \"corner\": [3.5, 8, 0.5, 0, 3 * Math.PI/2, true] },\n      { \"line\": [1, 7.5] },\n      { \"corner\": [1, 7, 0.5, Math.PI/2, Math.PI, false] },\n      { \"line\": [0.5, 1] },\n      { \"corner\": [1, 1, 0.5, Math.PI, 3*Math.PI/2, false] },\n      { \"line\": [9.75, 0.5] },\n      { \"corner\": [9.75, 1, 0.5, 3*Math.PI/2, 0, false] },\n      { \"line\": [10.25, 3] },\n      // Halfway point\n      { \"corner\": [10.5, 3, 0.25, Math.PI, 0, true] },\n      { \"line\": [10.75, 1] },\n      { \"corner\": [11.25, 1, 0.5, Math.PI, 3*Math.PI/2, false] },\n      { \"line\": [20, 0.5] },\n      { \"corner\": [20, 1, 0.5, 3*Math.PI/2, 0, false] },\n      { \"line\": [20.5, 7] },\n      { \"corner\": [20, 7, 0.5, 0, Math.PI/2, false] },\n      { \"line\": [17.5, 7.5] },\n      { \"corner\": [17.5, 8, 0.5, 3*Math.PI/2, Math.PI, true] },\n      { \"line\": [17, 9] },\n      { \"corner\": [17.5, 9, 0.5, Math.PI, Math.PI/2, true] },\n      { \"line\": [21, 9.5] },\n    ], \n    [\n      { \"move\": [0, 11] },\n      { \"line\": [3.5, 11] },\n      { \"corner\": [3.5, 11.5, 0.5, 3*Math.PI/2, 0, false] },\n      { \"line\": [4, 12.5] },\n      { \"corner\": [3.5, 12.5, 0.5, 0, Math.PI/2, false] },\n      { \"line\": [1, 13] },\n      { \"corner\": [1, 13.5, 0.5, 3*Math.PI/2, Math.PI, true] },\n      { \"line\": [0.5, 17] },\n      { \"corner\": [0.75, 17, 0.25, Math.PI, Math.PI/2, true] },\n      { \"line\": [1.5, 17.25] },\n      { \"corner\": [1.5, 17.5, 0.25, 3*Math.PI/2, Math.PI/2, false] },\n      { \"line\": [0.75, 17.75] },\n      { \"corner\": [0.75, 18, 0.25, 3*Math.PI/2, Math.PI, true] },\n      { \"line\": [0.5, 21.75] },\n      { \"corner\": [1, 21.75, 0.5, Math.PI, Math.PI/2, true] },\n      { \"line\": [20, 22.25] },\n      { \"corner\": [20, 21.75, 0.5, Math.PI/2, 0, true] },\n      { \"line\": [20.5, 18] },\n      { \"corner\": [20.25, 18, 0.25, 0, 3*Math.PI/2, true] },\n      { \"line\": [19.5, 17.75] },\n      { \"corner\": [19.5, 17.5, 0.25, Math.PI/2, 3*Math.PI/2, false] },\n      { \"line\": [20.25, 17.25] },\n      { \"corner\": [20.25, 17, 0.25, Math.PI/2, 0, true] },\n      { \"line\": [20.5, 13.5] },\n      { \"corner\": [20, 13.5, 0.5, 0, 3*Math.PI/2, true] },\n      { \"line\": [17.5, 13] },\n      { \"corner\": [17.5, 12.5, 0.5, Math.PI/2, Math.PI, false] },\n      { \"line\": [17, 11.5] },\n      { \"corner\": [17.5, 11.5, 0.5, Math.PI, 3*Math.PI/2, false] },\n      { \"line\": [21, 11] },\n    ]\n  ],\n}\n\nmodule.exports = Loader;\n\n//# sourceURL=webpack:///./lib/loader.js?");

/***/ }),

/***/ "./lib/maze.js":
/*!*********************!*\
  !*** ./lib/maze.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Loader = __webpack_require__(/*! ./loader */ \"./lib/loader.js\");\n\nclass Maze {\n  constructor(c, blockSize) {\n    this.blockSize = blockSize;\n    this.c = c;\n  }\n\n  render() {\n    \n    this.c.strokeStyle = \"#5cd2ff\";\n    this.c.lineWidth = 5;\n    this.c.lineCap = 5;\n    this.c.fillStyle = \"#5cd2ff\";\n    // c.lineCap = \"round\";\n\n    // this.roundRect(c, 300, 5, 200, 25, {\n    //   tl: 12,\n    //   tr: 12,\n    //   br: 12,\n    //   bl: 12\n    // }, true);\n\n    for (let i = 0; i < Loader.WALLS.length; i += 1) {\n      \n      let line = Loader.WALLS[i];\n      this.c.beginPath();\n      for (let j = 0; j < line.length; j += 1) {\n        let draw = line[j];\n        if (draw.move) {\n          this.c.moveTo(\n            draw.move[0] * this.blockSize, \n            draw.move[1] * this.blockSize\n          );\n        } else if (draw.line) {\n          this.c.lineTo(\n            draw.line[0] * this.blockSize, \n            draw.line[1] * this.blockSize\n          );\n        } else if (draw.corner) {\n          this.c.arc(\n            draw.corner[0] * this.blockSize,\n            draw.corner[1] * this.blockSize,\n            draw.corner[2] * this.blockSize,\n            draw.corner[3],\n            draw.corner[4],\n            draw.corner[5]\n          );\n        }\n      }\n      this.c.stroke();\n    }\n  }\n\n  roundRect(ctx, x, y, width, height, radius, fill, stroke) {\n    // Credits: Juan Mendes from Stack Overflow\n    if (typeof stroke == 'undefined') {\n      stroke = true;\n    }\n    if (typeof radius === 'undefined') {\n      radius = 5;\n    }\n    if (typeof radius === 'number') {\n      radius = {tl: radius, tr: radius, br: radius, bl: radius};\n    } else {\n      var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};\n      for (var side in defaultRadius) {\n        radius[side] = radius[side] || defaultRadius[side];\n      }\n    }\n    ctx.beginPath();\n    ctx.moveTo(x + radius.tl, y);\n    ctx.lineTo(x + width - radius.tr, y);\n    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);\n    ctx.lineTo(x + width, y + height - radius.br);\n    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);\n    ctx.lineTo(x + radius.bl, y + height);\n    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);\n    ctx.lineTo(x, y + radius.tl);\n    ctx.quadraticCurveTo(x, y, x + radius.tl, y);\n    ctx.closePath();\n    if (fill) {\n      ctx.fill();\n    }\n    if (stroke) {\n      ctx.stroke();\n    }\n  \n  }\n}\n\nmodule.exports = Maze;\n\n//# sourceURL=webpack:///./lib/maze.js?");

/***/ })

/******/ });