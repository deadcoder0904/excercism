"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Anagram = (function () {
	function Anagram(val) {
		_classCallCheck(this, Anagram);

		this.val = val;
	}

	_createClass(Anagram, [{
		key: "makeSortedArray",
		value: function makeSortedArray(str) {
			return str.split("").sort().join("");
		}
	}, {
		key: "equalChars",
		value: function equalChars(a, b) {
			var s1 = this.makeSortedArray(a);
			var s2 = this.makeSortedArray(b);
			if (s1 === s2) return true;
			return false;
		}
	}, {
		key: "matches",
		value: function matches() {
			var result = [];

			for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
				arr[_key] = arguments[_key];
			}

			var arr1 = [].concat.apply([], arr);
			for (var i = 0; i < arr1.length; i++) {
				var x = this.val.toLowerCase(),
				    y = arr1[i].toLowerCase();
				if (x != y && this.equalChars(x, y)) result.push(arr1[i]);
			}
			return result;
		}
	}]);

	return Anagram;
})();

exports["default"] = Anagram;
module.exports = exports["default"];