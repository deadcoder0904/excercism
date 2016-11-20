"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var transform = function transform(n) {
	var obj = {};
	for (var key in n) {
		for (var i = 0; i < n[key].length; i++) {
			obj[n[key][i].toLowerCase()] = parseInt(key);
		}
	}
	return obj;
};

exports["default"] = transform;
module.exports = exports["default"];