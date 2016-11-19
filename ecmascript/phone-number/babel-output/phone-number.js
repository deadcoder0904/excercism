'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PhoneNumber = (function () {
	function PhoneNumber(n) {
		_classCallCheck(this, PhoneNumber);

		this.n = n;
	}

	_createClass(PhoneNumber, [{
		key: 'makeItHuman',
		value: function makeItHuman(s) {
			return s.replace(/\(|\)|\s|-|\./g, '');
		}
	}, {
		key: 'areaCode',
		value: function areaCode() {
			return this.makeItHuman(this.n).substr(0, 3);
		}
	}, {
		key: 'toString',
		value: function toString() {
			var s1 = this.makeItHuman(this.n);
			var s2 = '(' + s1.substr(0, 3) + ') ' + s1.substr(3, 3) + '-' + s1.substr(6, 10);
			return s2;
		}
	}, {
		key: 'number',
		value: function number() {
			var str = this.makeItHuman(this.n);
			if (str.length === 11) {
				if (str.substr(0, 1) == '1') {
					str = this.makeItHuman(str.substr(1, 11));
					return str;
				} else return '0000000000';
			} else if (str.length === 10) {
				str = this.makeItHuman(str);
				return str;
			} else return '0000000000';
		}
	}]);

	return PhoneNumber;
})();

exports['default'] = PhoneNumber;
module.exports = exports['default'];