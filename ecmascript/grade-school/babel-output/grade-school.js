"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var School = (function () {
  function School() {
    _classCallCheck(this, School);

    this._roster = {};
  }

  _createClass(School, [{
    key: "roster",
    value: function roster() {
      return JSON.parse(JSON.stringify(this._roster));
    }
  }, {
    key: "add",
    value: function add(name, grade) {
      var names = this._roster[grade] || [];
      names.push(name);
      this._roster[grade] = names.sort();
    }
  }, {
    key: "grade",
    value: function grade(_grade) {
      return (this._roster[_grade] || []).slice();
    }
  }]);

  return School;
})();

exports["default"] = School;
module.exports = exports["default"];