"use strict";
exports.__esModule = true;
exports.meterSqToSqFeet = exports.sqFeetToMeterSq = exports.acreToHectare = exports.hectareToAcre = exports.meterSqToHectare = exports.hectareToMeterSq = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
var hectareToMeterSq = function (value) {
    console.log(Number(10000 * Number(value)));
};
exports.hectareToMeterSq = hectareToMeterSq;
var meterSqToHectare = function (value) {
    console.log(Number(Number(value) / 10000));
};
exports.meterSqToHectare = meterSqToHectare;
var hectareToAcre = function (value) {
    console.log(Number(2.47105 * Number(value)));
};
exports.hectareToAcre = hectareToAcre;
var acreToHectare = function (value) {
    console.log(Number(Number(value) / 2.47105));
};
exports.acreToHectare = acreToHectare;
var sqFeetToMeterSq = function (value) {
    console.log(Number(Number(value) / 10.7639));
};
exports.sqFeetToMeterSq = sqFeetToMeterSq;
var meterSqToSqFeet = function (value) {
    console.log(Number(Number(value) * 10.7639));
};
exports.meterSqToSqFeet = meterSqToSqFeet;
