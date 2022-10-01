"use strict";
exports.__esModule = true;
exports.meterToYard = exports.yardToMeter = exports.meterToMile = exports.mileToMeter = exports.cmToInch = exports.inchToCm = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
var inchToCm = function (value) {
    console.log(2.54 * Number(value));
};
exports.inchToCm = inchToCm;
var cmToInch = function (value) {
    console.log(Number(value) / 2.54);
};
exports.cmToInch = cmToInch;
var mileToMeter = function (value) {
    console.log(Number(1609.344 * Number(value)));
};
exports.mileToMeter = mileToMeter;
var meterToMile = function (value) {
    console.log(Number(value) / 1609.344);
};
exports.meterToMile = meterToMile;
var yardToMeter = function (value) {
    console.log(Number(0.9144 * Number(value)));
};
exports.yardToMeter = yardToMeter;
var meterToYard = function (value) {
    console.log(Number(value) / 0.9144);
};
exports.meterToYard = meterToYard;
