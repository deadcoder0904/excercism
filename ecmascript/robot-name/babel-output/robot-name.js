"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var names = [];
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";

var random = function random(max) {
  return Math.floor(Math.random() * (max - 1));
};

var Robot = (function () {
  function Robot() {
    _classCallCheck(this, Robot);

    this._name = Robot.newName();
  }

  _createClass(Robot, [{
    key: "reset",
    value: function reset() {
      this._name = Robot.newName();
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }], [{
    key: "newName",
    value: function newName() {
      var name = Robot.generateName();

      while (names.indexOf(name) != -1) {
        name = Robot.generateName();
      }
      names.push(name);
      return name;
    }
  }, {
    key: "generateName",
    value: function generateName() {
      var name = "";
      name += alphabet[random(26)];
      name += alphabet[random(26)];
      name += number[random(10)];
      name += number[random(10)];
      name += number[random(10)];
      return name;
    }
  }]);

  return Robot;
})();

exports["default"] = Robot;
module.exports = exports["default"];