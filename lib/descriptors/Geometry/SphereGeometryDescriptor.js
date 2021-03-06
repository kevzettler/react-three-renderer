'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = require('three');

var _three2 = _interopRequireDefault(_three);

var _ReactPropTypes = require('react/lib/ReactPropTypes');

var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);

var _BufferGeometryDescriptorBase = require('./BufferGeometryDescriptorBase');

var _BufferGeometryDescriptorBase2 = _interopRequireDefault(_BufferGeometryDescriptorBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SphereGeometryDescriptor = function (_BufferGeometryDescri) {
  _inherits(SphereGeometryDescriptor, _BufferGeometryDescri);

  function SphereGeometryDescriptor(react3Instance) {
    _classCallCheck(this, SphereGeometryDescriptor);

    var _this = _possibleConstructorReturn(this, (SphereGeometryDescriptor.__proto__ || Object.getPrototypeOf(SphereGeometryDescriptor)).call(this, react3Instance));

    _this.hasProp('radius', {
      type: _ReactPropTypes2.default.number,
      update: _this.updateCacheAndReplace.bind(_this, 'radius'),
      default: undefined
    });

    ['widthSegments', 'heightSegments'].forEach(function (propName) {
      _this.hasProp(propName, {
        type: _ReactPropTypes2.default.number,
        update: _this.triggerRemount,
        default: undefined
      });
    });

    ['phiStart', 'phiLength', 'thetaStart', 'thetaLength'].forEach(function (propName) {
      _this.hasProp(propName, {
        type: _ReactPropTypes2.default.number,
        update: _this.updateCacheAndReplace.bind(_this, propName),
        default: undefined
      });
    });
    return _this;
  }

  _createClass(SphereGeometryDescriptor, [{
    key: 'construct',
    value: function construct(props) {
      var radius = props.radius,
          widthSegments = props.widthSegments,
          heightSegments = props.heightSegments,
          phiStart = props.phiStart,
          phiLength = props.phiLength,
          thetaStart = props.thetaStart,
          thetaLength = props.thetaLength;


      return new _three2.default.SphereBufferGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
    }
  }]);

  return SphereGeometryDescriptor;
}(_BufferGeometryDescriptorBase2.default);

module.exports = SphereGeometryDescriptor;