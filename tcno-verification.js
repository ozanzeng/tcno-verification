"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var TCNoVerification = function TCNoVerification(identyNumber) {
  var replacedText = identyNumber.replace(/\D+/g, '');
  if (replacedText.substring(0, 1) === '0' || replacedText.length !== 11) return false;
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
