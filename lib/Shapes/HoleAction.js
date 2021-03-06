'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = require('three');

var _three2 = _interopRequireDefault(_three);

var _ShapeAction2 = require('./ShapeAction');

var _ShapeAction3 = _interopRequireDefault(_ShapeAction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HoleAction = function (_ShapeAction) {
  _inherits(HoleAction, _ShapeAction);

  function HoleAction() {
    _classCallCheck(this, HoleAction);

    var _this = _possibleConstructorReturn(this, (HoleAction.__proto__ || Object.getPrototypeOf(HoleAction)).call(this));

    _this.path = new _three2.default.Path();
    return _this;
  }

  _createClass(HoleAction, [{
    key: 'performAction',
    value: function performAction(shape) {
      shape.holes.push(this.path);
    }
  }]);

  return HoleAction;
}(_ShapeAction3.default);

module.exports = HoleAction;