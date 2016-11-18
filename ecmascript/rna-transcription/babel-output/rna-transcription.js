'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Transcriptor = (function () {
	function Transcriptor() {
		_classCallCheck(this, Transcriptor);
	}

	_createClass(Transcriptor, [{
		key: 'toRna',
		value: function toRna(str) {
			var str1 = "";
			for (var i = 0; i < str.length; i++) {
				switch (str[i]) {
					case 'C':
						str1 += 'G';break;
					case 'G':
						str1 += 'C';break;
					case 'A':
						str1 += 'U';break;
					case 'T':
						str1 += 'A';break;
				}
			}

			return str1;
		}
	}]);

	return Transcriptor;
})();

exports['default'] = Transcriptor;
module.exports = exports['default'];