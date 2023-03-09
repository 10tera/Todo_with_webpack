/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/electron-is-dev/index.js":
/*!***********************************************!*\
  !*** ./node_modules/electron-is-dev/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst electron = __webpack_require__(/*! electron */ \"electron\");\n\nif (typeof electron === 'string') {\n\tthrow new TypeError('Not running in an Electron environment!');\n}\n\nconst isEnvSet = 'ELECTRON_IS_DEV' in process.env;\nconst getFromEnv = Number.parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;\n\nmodule.exports = isEnvSet ? getFromEnv : !electron.app.isPackaged;\n\n\n//# sourceURL=webpack://Todo_with_webpack/./node_modules/electron-is-dev/index.js?");

/***/ }),

/***/ "./main/src/main.ts":
/*!**************************!*\
  !*** ./main/src/main.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst electron_1 = __webpack_require__(/*! electron */ \"electron\");\r\nconst electronIsDev = __webpack_require__(/*! electron-is-dev */ \"./node_modules/electron-is-dev/index.js\");\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\nlet mainWindow;\r\n//メインウィンドウの作成\r\nconst createMainWindow = () => {\r\n    mainWindow = new electron_1.BrowserWindow({\r\n        title: \"Todo Soft\",\r\n        width: 800,\r\n        height: 600,\r\n        webPreferences: {\r\n            //nodeIntegration: false,\r\n            contextIsolation: true,\r\n            webSecurity: false,\r\n            preload: path.join(__dirname, \"preload.js\")\r\n        }\r\n    });\r\n    //開発時\r\n    if (electronIsDev) {\r\n        mainWindow.loadURL(\"http://localhost:8080\");\r\n        mainWindow.webContents.openDevTools();\r\n    }\r\n    //パッケージ済みの時\r\n    else {\r\n        mainWindow.loadFile(path.join(__dirname, \"./index.html\"));\r\n    }\r\n    //mainWindow.loadFile(path.join(__dirname, \"./index.html\"));\r\n};\r\n//app準備完了\r\nelectron_1.app.on(\"ready\", () => {\r\n    createMainWindow();\r\n});\r\n//全てのウィンドウが閉じられた時\r\nelectron_1.app.on(\"window-all-closed\", () => {\r\n    if (process.platform !== \"darwin\") {\r\n        mainWindow = null;\r\n        electron_1.app.quit();\r\n    }\r\n});\r\nelectron_1.app.on(\"activate\", () => {\r\n    if (mainWindow === null) {\r\n        createMainWindow();\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://Todo_with_webpack/./main/src/main.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main/src/main.ts");
/******/ 	
/******/ })()
;