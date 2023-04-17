/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

        eval("\n\n//# sourceURL=webpack://battleship/./src/index.js?");

        /***/
})

    /******/
});
/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
  /******/
  /******/
})()
  ;
let bound = 25;
let arr = [];
let x = -1;
let count = 0;
while (arr.length < 25) {
  while (arr.includes(x) || x < 0) {
    x = Math.round(Math.random() * bound - 1);
    count++;
  }
  arr.push(x);
  console.log(x);
}
arr.sort((a,b) =>{
  return b < a;
})
console.log(arr);
console.log(count)