'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = require('three');

var _three2 = _interopRequireDefault(_three);

var _ReactPropTypes = require('react/lib/ReactPropTypes');

var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);

var _GeometryDescriptorBase = require('./GeometryDescriptorBase');

var _GeometryDescriptorBase2 = _interopRequireDefault(_GeometryDescriptorBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParametricGeometryDescriptor = function (_GeometryDescriptorBa) {
  _inherits(ParametricGeometryDescriptor, _GeometryDescriptorBa);

  function ParametricGeometryDescriptor(react3Instance) {
    _classCallCheck(this, ParametricGeometryDescriptor);

    var _this = _possibleConstructorReturn(this, (ParametricGeometryDescriptor.__proto__ || Object.getPrototypeOf(ParametricGeometryDescriptor)).call(this, react3Instance));

    ['slices', 'stacks'].forEach(function (propName) {
      _this.hasProp(propName, {
        type: _ReactPropTypes2.default.number.isRequired,
        update: _this.triggerRemount,
        default: undefined
      });
    });

    _this.hasProp('parametricFunction', {
      type: _ReactPropTypes2.default.func.isRequired,
      update: _this.triggerRemount,
      default: undefined
    });
    return _this;
  }

  _createClass(ParametricGeometryDescriptor, [{
    key: 'construct',
    value: function construct(props) {
      var parametricFunction = props.parametricFunction,
          slices = props.slices,
          stacks = props.stacks;


      return new _three2.default.ParametricGeometry(parametricFunction, slices, stacks);
    }
  }]);

  return ParametricGeometryDescriptor;
}(_GeometryDescriptorBase2.default);

module.exports = ParametricGeometryDescriptor;