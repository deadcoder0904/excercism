"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var make2Digit = function make2Digit(a) {
	return a < 10 ? a = "0" + a : a;
};

var at = function at() {
	for (var _len = arguments.length, n = Array(_len), _key = 0; _key < _len; _key++) {
		n[_key] = arguments[_key];
	}

	var a = n[0];
	var _n$1 = n[1];
	var b = _n$1 === undefined ? "00" : _n$1;

	a = a % 24 + parseInt(b / 60);
	b = b % 60;
	a = make2Digit(a);
	b = make2Digit(b);
	console.log(a + ":" + b);

	return a + ":" + b;
};

exports["default"] = at;
module.exports = exports["default"];