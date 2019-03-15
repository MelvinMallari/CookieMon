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

eval("const Maze = __webpack_require__(/*! ./maze */ \"./lib/maze.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"canvas\");\n  const blockSize = 30;\n  canvas.width = blockSize * 28;\n  canvas.height = blockSize * 33;\n  const ctx = canvas.getContext('2d');\n  const maze = new Maze(ctx, blockSize);\n  maze.render(ctx);\n});\n\n//# sourceURL=webpack:///./lib/entry.js?");

/***/ }),

/***/ "./lib/loader.js":
/*!***********************!*\
  !*** ./lib/loader.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Loader = {\n  OUTTER_WALLS: [\n    [\n      // Draw Upper Outter walls\n      { \"move\": [0, 13.5] },\n      { \"line\": [5, 13.5] },\n      { \"corner\": [5, 13, 0.5, Math.PI/2, 0, true] },\n      { \"line\": [5.5, 10] },\n      { \"corner\": [5, 10, 0.5, 0, 3 * Math.PI/2, true] },\n      { \"line\": [1, 9.5] },\n      { \"corner\": [1, 9, 0.5, Math.PI/2, Math.PI, false] },\n      { \"line\": [0.5, 1] },\n      { \"corner\": [1, 1, 0.5, Math.PI, 3*Math.PI/2, false] },\n      { \"line\": [13, 0.5] },\n      { \"corner\": [13, 1, 0.5, 3*Math.PI/2, 0, false] },\n      { \"line\": [13.5, 4.5] },\n      // // Halfway point\n      { \"corner\": [14, 4.5, 0.5, Math.PI, 0, true] },\n      { \"line\": [14.5, 1] },\n      { \"corner\": [15, 1, 0.5, Math.PI, 3*Math.PI/2, false] },\n      { \"line\": [27, 0.5] },\n      { \"corner\": [27, 1, 0.5, 3*Math.PI/2, 0, false] },\n      { \"line\": [27.5, 9] },\n      { \"corner\": [27, 9, 0.5, 0, Math.PI/2, false] },\n      { \"line\": [23, 9.5] },\n      { \"corner\": [23, 10, 0.5, 3*Math.PI/2, Math.PI, true] },\n      { \"line\": [22.5, 13] },\n      { \"corner\": [23, 13, 0.5, Math.PI, Math.PI/2, true] },\n      { \"line\": [28, 13.5] },\n    ], \n    [\n      // Draw Lower Outter walls\n      { \"move\": [0, 15.5] },\n      { \"line\": [5, 15.5] },\n      { \"corner\": [5, 16, 0.5, 3*Math.PI/2, 0, false] },\n      { \"line\": [5.5, 19] },\n      { \"corner\": [5, 19, 0.5, 0, Math.PI/2, false] },\n      { \"line\": [1, 19.5] },\n      { \"corner\": [1, 20, 0.5, 3*Math.PI/2, Math.PI, true] },\n      { \"line\": [0.5, 24] },\n      { \"corner\": [1, 24, 0.5, Math.PI, Math.PI/2, true] },\n      { \"line\": [2, 24.5] },\n      { \"corner\": [2, 25, 0.5, 3*Math.PI/2, Math.PI/2, false] },\n      { \"line\": [1, 25.5] },\n      { \"corner\": [1, 26, 0.5, 3*Math.PI/2, Math.PI, true] },\n      { \"line\": [0.5, 30] },\n      { \"corner\": [1, 30, 0.5, Math.PI, Math.PI/2, true] },\n      { \"line\": [27, 30.5] },\n      { \"corner\": [27, 30, 0.5, Math.PI/2, 0, true] },\n      { \"line\": [27.5, 26] },\n      { \"corner\": [27, 26, 0.5, 0, 3*Math.PI/2, true] },\n      { \"line\": [26, 25.5] },\n      { \"corner\": [26, 25, 0.5, Math.PI/2, 3*Math.PI/2, false] },\n      { \"line\": [27, 24.5] },\n      { \"corner\": [27, 24, 0.5, Math.PI/2, 0, true] },\n      { \"line\": [27.5, 20] },\n      { \"corner\": [27, 20, 0.5, 0, 3*Math.PI/2, true] },\n      { \"line\": [23, 19.5] },\n      { \"corner\": [23, 19, 0.5, Math.PI/2, Math.PI, false] },\n      { \"line\": [22.5, 16] },\n      { \"corner\": [23, 16, 0.5, Math.PI, 3*Math.PI/2, false] },\n      { \"line\": [28, 15.5] },\n    ]\n  ],\n  INNER_WALLS: [\n    // Top left\n    {\n      x: 2.5,\n      y: 2.5,\n      width: 3,\n      height: 2,\n      radius: 20,\n      fill: true,\n    },\n    // // mid top left\n    {\n      x: 7.5,\n      y: 2.5,\n      width: 4,\n      height: 2,\n      radius: 20, \n      fill: true,\n    },\n    // low top left skinny\n    {\n      x: 2.5,\n      y: 6.5,\n      width: 3,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    // Top left Long horizontal, Sideways T\n    {\n      x: 7.5,\n      y: 6.5,\n      width: 1,\n      height: 7,\n      radius: 12.5,\n      fill: true,\n    },\n    {\n      x: 7.5,\n      y: 9.5,\n      width: 4,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    // Mid vertical\n    {\n      x: 7.5,\n      y: 15.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n    // bottom left mid horizontal\n    {\n      x: 7.5,\n      y: 21.5,\n      width: 4,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    // bottom left angled\n    {\n      x: 2.5,\n      y: 21.5,\n      width: 3,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    {\n      x: 4.5,\n      y: 21.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n    // bottom left T\n    {\n      x: 2.5,\n      y: 27.5,\n      width: 9,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    {\n      x: 7.5,\n      y: 24.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n    // Top Mid T\n    {\n      x: 10.5,\n      y: 6.5,\n      width: 7,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    {\n      x: 13.5,\n      y: 6.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n    // Bottom T 1\n    {\n      x: 10.5,\n      y: 18.5,\n      width: 7,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    {\n      x: 13.5,\n      y: 18.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n    // Bottom T 2\n    {\n      x: 10.5,\n      y: 24.5,\n      width: 7,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    {\n      x: 13.5,\n      y: 24.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n    // Top Right\n    {\n      x: 22.5,\n      y: 2.5,\n      width: 3,\n      height: 2,\n      radius: 20,\n      fill: true,\n    },\n    // // mid top left\n    {\n      x: 16.5,\n      y: 2.5,\n      width: 4,\n      height: 2,\n      radius: 20, \n      fill: true,\n    },\n    // low top left skinny\n    {\n      x: 22.5,\n      y: 6.5,\n      width: 3,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    // Top left Long horizontal, Sideways T\n    {\n      x: 19.5,\n      y: 6.5,\n      width: 1,\n      height: 7,\n      radius: 12.5,\n      fill: true,\n    },\n    {\n      x: 16.5,\n      y: 9.5,\n      width: 4,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    // Mid vertical\n    {\n      x: 7.5,\n      y: 15.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n    // bottom left mid horizontal\n    {\n      x: 7.5,\n      y: 21.5,\n      width: 4,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    // right mid vertical\n    {\n      x: 19.5,\n      y: 15.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n    // bottom right mid horizontal\n    {\n      x: 16.5,\n      y: 21.5,\n      width: 4,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    // bottom right angled\n    {\n      x: 22.5,\n      y: 21.5,\n      width: 3,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    {\n      x: 22.5,\n      y: 21.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n    // bottom right T\n    {\n      x: 16.5,\n      y: 27.5,\n      width: 9,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    {\n      x: 19.5,\n      y: 24.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n  ]\n}\n\nmodule.exports = Loader;\n\n//# sourceURL=webpack:///./lib/loader.js?");

/***/ }),

/***/ "./lib/maze.js":
/*!*********************!*\
  !*** ./lib/maze.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Loader = __webpack_require__(/*! ./loader */ \"./lib/loader.js\");\n\nclass Maze {\n  constructor(c, blockSize) {\n    this.blockSize = blockSize;\n    this.c = c;\n  }\n\n  render() {\n    \n    this.c.strokeStyle = \"#5cd2ff\";\n    this.c.lineWidth = 5;\n    this.c.lineCap = 5;\n    this.c.fillStyle = \"#5cd2ff\";\n    // c.lineCap = \"round\";\n\n    // this.roundRect(c, 300, 5, 200, 25, {\n    //   tl: 12,\n    //   tr: 12,\n    //   br: 12,\n    //   bl: 12\n    // }, true);\n\n    for (let i = 0; i < Loader.OUTTER_WALLS.length; i++) {\n      \n      let line = Loader.OUTTER_WALLS[i];\n      this.c.beginPath();\n      for (let j = 0; j < line.length; j++) {\n        let draw = line[j];\n        if (draw.move) {\n          this.c.moveTo(\n            draw.move[0] * this.blockSize, \n            draw.move[1] * this.blockSize\n          );\n        } else if (draw.line) {\n          this.c.lineTo(\n            draw.line[0] * this.blockSize, \n            draw.line[1] * this.blockSize\n          );\n        } else if (draw.corner) {\n          this.c.arc(\n            draw.corner[0] * this.blockSize,\n            draw.corner[1] * this.blockSize,\n            draw.corner[2] * this.blockSize,\n            draw.corner[3],\n            draw.corner[4],\n            draw.corner[5]\n          );\n        }\n      }\n      this.c.stroke();\n    }\n\n    for (let i = 0; i < Loader.INNER_WALLS.length; i++) {\n      let draw = Loader.INNER_WALLS[i];\n      this.roundRect(\n        draw.x * this.blockSize,\n        draw.y * this.blockSize,\n        draw.width * this.blockSize,\n        draw.height * this.blockSize,\n        draw.radius,\n        draw.fill,\n      )\n    }\n\n\n  }\n\n  roundRect(x, y, width, height, radius, fill, stroke) {\n    // Credits: Juan Mendes from Stack Overflow\n    if (typeof stroke == 'undefined') {\n      stroke = true;\n    }\n    if (typeof radius === 'undefined') {\n      radius = 5;\n    }\n    if (typeof radius === 'number') {\n      radius = {tl: radius, tr: radius, br: radius, bl: radius};\n    } else {\n      var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};\n      for (var side in defaultRadius) {\n        radius[side] = radius[side] || defaultRadius[side];\n      }\n    }\n    this.c.fillStyle = \"#5cd2ff\";\n    this.c.beginPath();\n    this.c.moveTo(x + radius.tl, y);\n    this.c.lineTo(x + width - radius.tr, y);\n    this.c.quadraticCurveTo(x + width, y, x + width, y + radius.tr);\n    this.c.lineTo(x + width, y + height - radius.br);\n    this.c.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);\n    this.c.lineTo(x + radius.bl, y + height);\n    this.c.quadraticCurveTo(x, y + height, x, y + height - radius.bl);\n    this.c.lineTo(x, y + radius.tl);\n    this.c.quadraticCurveTo(x, y, x + radius.tl, y);\n    this.c.closePath();\n    if (fill) {\n      this.c.fill();\n    }\n    if (stroke) {\n      this.c.stroke();\n    }\n  \n  }\n}\n\nmodule.exports = Maze;\n\n//# sourceURL=webpack:///./lib/maze.js?");

/***/ })

/******/ });