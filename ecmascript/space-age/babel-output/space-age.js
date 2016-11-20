"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpaceAge = (function () {
	function SpaceAge(n) {
		_classCallCheck(this, SpaceAge);

		this._n = n;
		this.Earth_Year_in_Seconds = 365.25 * 24 * 60 * 60;
	}

	_createClass(SpaceAge, [{
		key: "calculate",
		value: function calculate(n) {
			return parseFloat(n.toFixed(2));
		}
	}, {
		key: "onEarth",
		value: function onEarth() {
			return this.calculate(this._n / this.Earth_Year_in_Seconds);
		}
	}, {
		key: "onMercury",
		value: function onMercury() {
			return this.calculate(this.onEarth() / 0.2408467);
		}
	}, {
		key: "onVenus",
		value: function onVenus() {
			return parseFloat((this.onEarth() / 0.61519726).toString().substr(0, 4));
		}
	}, {
		key: "onMars",
		value: function onMars() {
			return this.calculate(this.onEarth() / 1.8808158);
		}
	}, {
		key: "onJupiter",
		value: function onJupiter() {
			return this.calculate(this.onEarth() / 11.862615);
		}
	}, {
		key: "onSaturn",
		value: function onSaturn() {
			return this.calculate(this.onEarth() / 29.447498);
		}
	}, {
		key: "onUranus",
		value: function onUranus() {
			return this.calculate(this.onEarth() / 84.016846);
		}
	}, {
		key: "onNeptune",
		value: function onNeptune() {
			return this.calculate(this.onEarth() / 164.79132);
		}
	}, {
		key: "seconds",
		get: function get() {
			return this._n;
		}
	}]);

	return SpaceAge;
})();

exports["default"] = SpaceAge;
module.exports = exports["default"];