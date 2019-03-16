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

/***/ "./lib/cookie_mon.js":
/*!***************************!*\
  !*** ./lib/cookie_mon.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./lib/moving_object.js\");\n\nconst DEFAULTS = {\n  dir: [1, 0],\n  pos: [425, 425],\n  vel: 4\n}\n\nclass CookieMon extends MovingObject {\n  constructor(options) {\n    options.pos = DEFAULTS.pos;\n    options.dir = DEFAULTS.dir;\n    options.vel = DEFAULTS.vel;\n    super(options);\n    // debugger;\n    this.ctx = options.ctx;\n    this.headRadius = 20;\n    this.eyeRadius = 4;\n    this.pupilRadius = 1;\n    this.ctx.fillStyle = \"#00adef\";\n    this.ctx.strokeStyle = \"#00adef\";\n    this.eyeOffsets = [\n      [7, 22],\n      [-3, 22]\n    ];\n    this.pupilOffsets = [\n      [7, 23.5],\n      [-3, 20.5],\n    ];\n  }\n\n  renderHead() {\n    this.ctx.beginPath();\n    this.ctx.arc(\n      this.pos[0], \n      this.pos[1], \n      this.headRadius, \n      Math.PI / 4,\n      2 * Math.PI - Math.PI / 4,\n    );\n    this.ctx.lineTo(this.pos[0], this.pos[1]);\n    this.ctx.fill();\n    this.ctx.stroke();\n  }\n\n  renderEye(x, y) {\n    this.ctx.fillStyle = \"#fff\";\n    this.ctx.strokeStyle = \"#fff\";\n    this.ctx.beginPath();\n    this.ctx.arc(x, y, this.eyeRadius, 0, 2 * Math.PI);\n    this.ctx.fill();\n    this.ctx.stroke();\n  }\n\n  renderEyes() {\n    this.renderEye(\n      this.pos[0] + this.eyeOffsets[0][0], \n      this.pos[1] - this.eyeOffsets[0][1]\n    );\n    this.renderEye(\n      this.pos[0] + this.eyeOffsets[1][0], \n      this.pos[1] - this.eyeOffsets[1][1]\n    );\n  }\n\n  renderPupil(x, y) {\n    this.ctx.fillStyle = \"#000\";\n    this.ctx.strokeStyle = \"#000\";\n    this.ctx.beginPath();\n    this.ctx.arc(x, y, this.pupilRadius, 0, 2 * Math.PI);\n    this.ctx.fill();\n    this.ctx.stroke();\n  }\n\n  renderPupils() {\n    this.renderPupil(\n      this.pos[0] + this.pupilOffsets[0][0],\n      this.pos[1] - this.pupilOffsets[0][1]\n    );\n    this.renderPupil(\n      this.pos[0] + this.pupilOffsets[1][0],\n      this.pos[1] - this.pupilOffsets[1][1]\n    );\n  }\n\n  render() {\n    this.renderHead();\n    this.renderEyes();\n    this.renderPupils();\n  }\n}\n\nmodule.exports = CookieMon;\n\n//# sourceURL=webpack:///./lib/cookie_mon.js?");

/***/ }),

/***/ "./lib/entry.js":
/*!**********************!*\
  !*** ./lib/entry.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Maze = __webpack_require__(/*! ./maze */ \"./lib/maze.js\");\nconst CookieMon = __webpack_require__(/*! ./cookie_mon */ \"./lib/cookie_mon.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"canvas\");\n  const blockSize = 30;\n  canvas.width = blockSize * 28;\n  canvas.height = blockSize * 33;\n  const ctx = canvas.getContext('2d');\n  const maze = new Maze(ctx, blockSize);\n  maze.render(ctx);\n  // const cookieMon = new CookieMon(ctx, 425, 425);\n  const cookieMon = new CookieMon({ctx: ctx, x: 425, y: 425});\n  cookieMon.render();\n});\n\n//# sourceURL=webpack:///./lib/entry.js?");

/***/ }),

/***/ "./lib/loader.js":
/*!***********************!*\
  !*** ./lib/loader.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Loader = {\n  MAP: [\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],\n    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],\n    [0, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0],\n    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],\n    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],\n    [0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0],\n    [0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0],\n    [0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0],\n    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],\n    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],\n    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],\n    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],\n    [0, 3, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 3, 0],\n    [0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0],\n    [0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0],\n    [0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0],\n    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],\n    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],\n    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n  ],\n  LEGEND: {\n    wall: 0,\n    empty: 1,\n    pellet: 2,\n    powerPellet: 3,\n    unaccessable: 4,\n  },\n  MOVES: {\n    w: [0, -1],\n    a: [-1, 0],\n    s: [0, 1],\n    d: [1, 0],\n  },\n  OUTTER_WALLS: [\n    [\n      // Draw Upper Outter walls\n      { \"move\": [0, 13.5] },\n      { \"line\": [5, 13.5] },\n      { \"corner\": [5, 13, 0.5, Math.PI/2, 0, true] },\n      { \"line\": [5.5, 10] },\n      { \"corner\": [5, 10, 0.5, 0, 3 * Math.PI/2, true] },\n      { \"line\": [1, 9.5] },\n      { \"corner\": [1, 9, 0.5, Math.PI/2, Math.PI, false] },\n      { \"line\": [0.5, 1] },\n      { \"corner\": [1, 1, 0.5, Math.PI, 3*Math.PI/2, false] },\n      { \"line\": [13, 0.5] },\n      { \"corner\": [13, 1, 0.5, 3*Math.PI/2, 0, false] },\n      { \"line\": [13.5, 4.5] },\n      // // Halfway point\n      { \"corner\": [14, 4.5, 0.5, Math.PI, 0, true] },\n      { \"line\": [14.5, 1] },\n      { \"corner\": [15, 1, 0.5, Math.PI, 3*Math.PI/2, false] },\n      { \"line\": [27, 0.5] },\n      { \"corner\": [27, 1, 0.5, 3*Math.PI/2, 0, false] },\n      { \"line\": [27.5, 9] },\n      { \"corner\": [27, 9, 0.5, 0, Math.PI/2, false] },\n      { \"line\": [23, 9.5] },\n      { \"corner\": [23, 10, 0.5, 3*Math.PI/2, Math.PI, true] },\n      { \"line\": [22.5, 13] },\n      { \"corner\": [23, 13, 0.5, Math.PI, Math.PI/2, true] },\n      { \"line\": [28, 13.5] },\n    ], \n    [\n      // Draw Lower Outter walls\n      { \"move\": [0, 15.5] },\n      { \"line\": [5, 15.5] },\n      { \"corner\": [5, 16, 0.5, 3*Math.PI/2, 0, false] },\n      { \"line\": [5.5, 19] },\n      { \"corner\": [5, 19, 0.5, 0, Math.PI/2, false] },\n      { \"line\": [1, 19.5] },\n      { \"corner\": [1, 20, 0.5, 3*Math.PI/2, Math.PI, true] },\n      { \"line\": [0.5, 24] },\n      { \"corner\": [1, 24, 0.5, Math.PI, Math.PI/2, true] },\n      { \"line\": [2, 24.5] },\n      { \"corner\": [2, 25, 0.5, 3*Math.PI/2, Math.PI/2, false] },\n      { \"line\": [1, 25.5] },\n      { \"corner\": [1, 26, 0.5, 3*Math.PI/2, Math.PI, true] },\n      { \"line\": [0.5, 30] },\n      { \"corner\": [1, 30, 0.5, Math.PI, Math.PI/2, true] },\n      { \"line\": [27, 30.5] },\n      { \"corner\": [27, 30, 0.5, Math.PI/2, 0, true] },\n      { \"line\": [27.5, 26] },\n      { \"corner\": [27, 26, 0.5, 0, 3*Math.PI/2, true] },\n      { \"line\": [26, 25.5] },\n      { \"corner\": [26, 25, 0.5, Math.PI/2, 3*Math.PI/2, false] },\n      { \"line\": [27, 24.5] },\n      { \"corner\": [27, 24, 0.5, Math.PI/2, 0, true] },\n      { \"line\": [27.5, 20] },\n      { \"corner\": [27, 20, 0.5, 0, 3*Math.PI/2, true] },\n      { \"line\": [23, 19.5] },\n      { \"corner\": [23, 19, 0.5, Math.PI/2, Math.PI, false] },\n      { \"line\": [22.5, 16] },\n      { \"corner\": [23, 16, 0.5, Math.PI, 3*Math.PI/2, false] },\n      { \"line\": [28, 15.5] },\n    ]\n  ],\n  INNER_WALLS: [\n    // Top left\n    {\n      x: 2.5,\n      y: 2.5,\n      width: 3,\n      height: 2,\n      radius: 20,\n      fill: true,\n    },\n    // // mid top left\n    {\n      x: 7.5,\n      y: 2.5,\n      width: 4,\n      height: 2,\n      radius: 20, \n      fill: true,\n    },\n    // low top left skinny\n    {\n      x: 2.5,\n      y: 6.5,\n      width: 3,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    // Top left Long horizontal, Sideways T\n    {\n      x: 7.5,\n      y: 6.5,\n      width: 1,\n      height: 7,\n      radius: 12.5,\n      fill: true,\n    },\n    {\n      x: 7.5,\n      y: 9.5,\n      width: 4,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    // Mid vertical\n    {\n      x: 7.5,\n      y: 15.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n    // bottom left mid horizontal\n    {\n      x: 7.5,\n      y: 21.5,\n      width: 4,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    // bottom left angled\n    {\n      x: 2.5,\n      y: 21.5,\n      width: 3,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    {\n      x: 4.5,\n      y: 21.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n    // bottom left T\n    {\n      x: 2.5,\n      y: 27.5,\n      width: 9,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    {\n      x: 7.5,\n      y: 24.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n    // Top Mid T\n    {\n      x: 10.5,\n      y: 6.5,\n      width: 7,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    {\n      x: 13.5,\n      y: 6.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n    // Bottom T 1\n    {\n      x: 10.5,\n      y: 18.5,\n      width: 7,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    {\n      x: 13.5,\n      y: 18.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n    // Bottom T 2\n    {\n      x: 10.5,\n      y: 24.5,\n      width: 7,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    {\n      x: 13.5,\n      y: 24.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n    // Top Right\n    {\n      x: 22.5,\n      y: 2.5,\n      width: 3,\n      height: 2,\n      radius: 20,\n      fill: true,\n    },\n    // // mid top left\n    {\n      x: 16.5,\n      y: 2.5,\n      width: 4,\n      height: 2,\n      radius: 20, \n      fill: true,\n    },\n    // low top left skinny\n    {\n      x: 22.5,\n      y: 6.5,\n      width: 3,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    // Top left Long horizontal, Sideways T\n    {\n      x: 19.5,\n      y: 6.5,\n      width: 1,\n      height: 7,\n      radius: 12.5,\n      fill: true,\n    },\n    {\n      x: 16.5,\n      y: 9.5,\n      width: 4,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    // Mid vertical\n    {\n      x: 7.5,\n      y: 15.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n    // bottom left mid horizontal\n    {\n      x: 7.5,\n      y: 21.5,\n      width: 4,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    // right mid vertical\n    {\n      x: 19.5,\n      y: 15.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n    // bottom right mid horizontal\n    {\n      x: 16.5,\n      y: 21.5,\n      width: 4,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    // bottom right angled\n    {\n      x: 22.5,\n      y: 21.5,\n      width: 3,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    {\n      x: 22.5,\n      y: 21.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n    // bottom right T\n    {\n      x: 16.5,\n      y: 27.5,\n      width: 9,\n      height: 1,\n      radius: 12.5,\n      fill: true,\n    },\n    {\n      x: 19.5,\n      y: 24.5,\n      width: 1,\n      height: 4,\n      radius: 12.5,\n      fill: true,\n    },\n  ]\n}\n\nmodule.exports = Loader;\n\n//# sourceURL=webpack:///./lib/loader.js?");

/***/ }),

/***/ "./lib/maze.js":
/*!*********************!*\
  !*** ./lib/maze.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Loader = __webpack_require__(/*! ./loader */ \"./lib/loader.js\");\nconst PowerPellet = __webpack_require__(/*! ./power_pellet */ \"./lib/power_pellet.js\");\n\nclass Maze {\n  constructor(ctx, blockSize) {\n    this.blockSize = blockSize;\n    this.ctx = ctx;\n    this.ctx.strokeStyle = \"#51999b\";\n    this.ctx.fillStyle = \"#51999b\";\n    // this.ctx.strokeStyle = \"#5cd2ff\";\n    // this.ctx.fillStyle = \"#5cd2ff\";\n    this.ctx.lineWidth = 5;\n    this.ctx.lineCap = 5;\n    this.pelletRadius = 2;\n    this.borderOffset = 0.5;\n  }\n  \n  renderContent() {\n    for (let i = 0; i < Loader.MAP.length; i++) {\n      for (let j = 0; j < Loader.MAP.length; j++) {\n        let tile = Loader.MAP[j][i];\n        let legend = Loader.LEGEND;\n        if (tile === legend.pellet) {\n          this.renderPellet(\n            (i + this.borderOffset) * this.blockSize,\n            (j + this.borderOffset) * this.blockSize,\n            this.pelletRadius\n          );\n        } else if (tile === legend.powerPellet) {\n          let powerPellet = new PowerPellet(\n            this.ctx,\n            (i + this.borderOffset) * this.blockSize,\n            (j + this.borderOffset) * this.blockSize,\n          );\n          powerPellet.animate();  \n        }\n      }\n    } \n  }\n\n  renderInnerWalls() {\n    for (let i = 0; i < Loader.INNER_WALLS.length; i++) {\n      let draw = Loader.INNER_WALLS[i];\n      this.roundRect(\n        draw.x * this.blockSize,\n        draw.y * this.blockSize,\n        draw.width * this.blockSize,\n        draw.height * this.blockSize,\n        draw.radius,\n        draw.fill\n      );\n    }\n  }\n\n  renderOutterWalls() {\n    for (let i = 0; i < Loader.OUTTER_WALLS.length; i++) {\n      let line = Loader.OUTTER_WALLS[i];\n      this.ctx.beginPath();\n      for (let j = 0; j < line.length; j++) {\n        let draw = line[j];\n        if (draw.move) {\n          this.ctx.moveTo(\n            draw.move[0] * this.blockSize, \n            draw.move[1] * this.blockSize\n          );\n        } else if (draw.line) {\n          this.ctx.lineTo(\n            draw.line[0] * this.blockSize, \n            draw.line[1] * this.blockSize\n          );\n        } else if (draw.corner) {\n          this.ctx.arc(\n            draw.corner[0] * this.blockSize,\n            draw.corner[1] * this.blockSize,\n            draw.corner[2] * this.blockSize,\n            draw.corner[3],\n            draw.corner[4],\n            draw.corner[5]\n          );\n        }\n      }\n      this.ctx.stroke();\n    }\n  }\n\n  renderPellet(x, y, radius) {\n    this.ctx.fillStyle = \"#f0d99d\";\n    this.ctx.strokeStyle = \"#f0d99d\";\n    this.ctx.beginPath();\n    this.ctx.moveTo(x, y);\n    this.ctx.arc(x, y, radius, 0, 2*Math.PI);\n    this.ctx.fill();\n    this.ctx.stroke();\n  }\n\n  roundRect(x, y, width, height, radius, fill, stroke) {\n    // Credits: Juan Mendes from Stack Overflow\n    if (typeof stroke == 'undefined') {\n      stroke = true;\n    }\n    if (typeof radius === 'undefined') {\n      radius = 5;\n    }\n    if (typeof radius === 'number') {\n      radius = {tl: radius, tr: radius, br: radius, bl: radius};\n    } else {\n      var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};\n      for (var side in defaultRadius) {\n        radius[side] = radius[side] || defaultRadius[side];\n      }\n    }\n    this.ctx.beginPath();\n    this.ctx.moveTo(x + radius.tl, y);\n    this.ctx.lineTo(x + width - radius.tr, y);\n    this.ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);\n    this.ctx.lineTo(x + width, y + height - radius.br);\n    this.ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);\n    this.ctx.lineTo(x + radius.bl, y + height);\n    this.ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);\n    this.ctx.lineTo(x, y + radius.tl);\n    this.ctx.quadraticCurveTo(x, y, x + radius.tl, y);\n    this.ctx.closePath();\n    if (fill) {\n      this.ctx.fill();\n    }\n    if (stroke) {\n      this.ctx.stroke();\n    }\n  }\n\n  render() {\n    this.renderOutterWalls();\n    this.renderInnerWalls();\n    this.renderContent();\n  }\n}\n\nmodule.exports = Maze;\n\n//# sourceURL=webpack:///./lib/maze.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class MovingObject {\n  constructor(options) {\n    this.pos = options.pos;\n    this.dir = options.dir;\n    this.vel = options.vel;\n    // this.maze = options.maze;\n  }\n\n  willCollide() {\n    // TODO: Figure out logic\n  }\n\n  move() {\n    this.pos = [\n      this.pos[0] + this.dir[0] * this.vel,\n      this.pos[1] + this.dir[1] * this.vel\n    ];\n  }\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/power_pellet.js":
/*!*****************************!*\
  !*** ./lib/power_pellet.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class PowerPellet {\n  constructor(ctx, x, y) {\n    // context\n    this.ctx = ctx; \n    this.x = x;\n    this.y = y;\n    this.minRadius = 2;\n    this.maxRadius = 10;\n    this.radians = 0;\n    this.radius = this.minRadius \n      + ((this.maxRadius - this.minRadius) \n      * (Math.abs(Math.cos(this.radians))));\n    this.animate = this.animate.bind(this);\n  }\n\n  render() {\n    this.ctx.fillStyle = \"#f0d99d\";\n    this.ctx.strokeStyle = \"#f0d99d\";\n    this.ctx.beginPath();\n    this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);\n    this.ctx.fill();\n    this.ctx.stroke();\n  }\n\n  update() {\n    this.radians += Math.PI / 64;\n    this.radius = this.minRadius \n      + ((this.maxRadius - this.minRadius) \n      * (Math.abs(Math.cos(this.radians))));\n    this.render();\n  }\n\n  animate() {\n    requestAnimationFrame(this.animate);\n    // TODO: Figure out math.\n    // Guess and checked here. Math doesn't work cleanly atm.\n    this.ctx.clearRect(\n      this.x - this.maxRadius - this.minRadius - 1,\n      this.y - this.maxRadius - this.minRadius - 1,\n      this.maxRadius * 2 + 3 * this.minRadius,\n      this.maxRadius * 2 + 3 * this.minRadius\n    );\n    this.update();\n  }\n}\n\nmodule.exports = PowerPellet;\n\n//# sourceURL=webpack:///./lib/power_pellet.js?");

/***/ })

/******/ });