"use strict";
exports.__esModule = true;
exports.kToF = exports.fToK = exports.kToC = exports.cToK = exports.cToF = exports.fToC = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
var fToC = function (value) {
    console.log(((Number(value) - 32) * 5) / 9);
};
exports.fToC = fToC;
var cToF = function (value) {
    console.log((Number(value) * 9) / 5 + 32);
};
exports.cToF = cToF;
var cToK = function (value) {
    console.log(Number(value) + 273.15);
};
exports.cToK = cToK;
var kToC = function (value) {
    console.log(Number(value) - 273.15);
};
exports.kToC = kToC;
var fToK = function (value) {
    console.log(((Number(value) - 32) * 5) / 9 + 273.15);
};
exports.fToK = fToK;
var kToF = function (value) {
    console.log(((Number(value) - 273.15) * 9) / 5 + 32);
};
exports.kToF = kToF;
