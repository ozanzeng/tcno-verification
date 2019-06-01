"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var TCNoVerification = function TCNoVerification(identyNumber) {
  if (identyNumber.length !== 11) return false;
  var TCNoFirstTen = identyNumber.substring(0, 10);
  var TCNoLastDigit = TCNoFirstTen.split('').map(function (i) {
    return parseInt(i);
  }).reduce(function (a, b) {
    return a + b;
  }) % 10;
  return TCNoLastDigit === +identyNumber[10];
};

var _default = TCNoVerification;
exports.default = _default;