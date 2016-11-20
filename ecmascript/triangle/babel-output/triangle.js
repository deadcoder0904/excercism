"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Triangle = (function () {
	function Triangle(x, y, z) {
		_classCallCheck(this, Triangle);

		this._x = x;
		this._y = y;
		this._z = z;
	}

	_createClass(Triangle, [{
		key: "kind",
		value: function kind() {
			var x = this._x,
			    y = this._y,
			    z = this._z;
			if (x <= 0 || y <= 0 || z <= 0 || z > x + y || x > y + z || y > x + z) throw new Error("Hell yeah");
			if (x == y && y == z) return "equilateral";
			if (x == y || y == z || x == z) return "isosceles";
			return "scalene";
		}
	}]);

	return Triangle;
})();

exports["default"] = Triangle;
module.exports = exports["default"];