"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var TCNoVerification = function TCNoVerification(identyNumber) {
  var replacedText = identyNumber.replace(/\D+/g, '');
  if (replacedText.substring(0, 1) === '0' || replacedText.length !== 11) return false;
  var TCNoFirstTen = identyNumber.substring(0, 10);
  var TCNoLastDigit = TCNoFirstTen.split('').map(function (i) {
    return parseInt(i);
  }).reduce(function (a, b) {
    return a + b;
  }) % 10;
  var TCNoFirstNineArray = identyNumber.substring(0, 9).split('');
  var sumOfEvenIndexes = 0;
  var sumOfOddIndexes = 0;

  for (var i = 0; i < 9; _readOnlyError("i"), i++) {
    if (i % 2 == 0) sumOfEvenIndexes += (_readOnlyError("sumOfEvenIndexes"), parseInt(TCNoFirstNineArray[i]));else sumOfOddIndexes += (_readOnlyError("sumOfOddIndexes"), parseInt(TCNoFirstNineArray[i]));
  }

  var TCNoSecondFromTheLastDigit = ((sumOfEvenIndexes * 7 - sumOfOddIndexes) % 10 + 10) % 10;
  return TCNoLastDigit === +identyNumber[10] & TCNoSecondFromTheLastDigit == +identyNumber[9];
};

var _default = TCNoVerification;
exports.default = _default;
