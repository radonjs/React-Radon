'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function bind(ComponentToBind) {
  var WrapperFunction =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WrapperFunction, _React$Component);

    function WrapperFunction() {
      var _this;

      _classCallCheck(this, WrapperFunction);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WrapperFunction).call(this));
      _this.siloRender = _this.siloRender.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(WrapperFunction, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        var silo = this.context.silo;
        this.unsubscribe = silo.subscribe(this.siloRender, ComponentToBind.prototype.constructor.name + 'State');
      }
    }, {
      key: "render",
      value: function render() {
        var silo = this.context.silo;
        var newState = {};

        if (this.updatedState) {
          newState = this.updatedState;
        }

        return React.createElement(ComponentToBind, _extends({}, this.props, newState));
      }
    }, {
      key: "siloRender",
      value: function siloRender(updatedState) {
        this.previousUpdate = this.updatedState;
        this.updatedState = updatedState;
        this.forceUpdate();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unsubscribe();
      }
    }, {
      key: "render",
      value: function render() {
        var newState = {}; // this.updatedState is set when siloRender is run

        if (this.updatedState) {
          newState = this.updatedState;
        } // pass in dev written props and the siloState


        return React.createElement(ComponentToBind, _extends({}, this.props, newState));
      }
    }, {
      key: "siloRender",
      value: function siloRender(updatedState) {
        // wrapperfunction now has a variable called updatedState
        this.updatedState = updatedState; // part of react, calls render function

        this.forceUpdate();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        // unsubscribe removes the relevant render function from the subscribers array
        this.unsubscribe();
      }
    }]);

    return WrapperFunction;
  }(React.Component); // looking for something called silo that is an object 


  WrapperFunction.contextTypes = {
    silo: PropTypes.object
  };
  return WrapperFunction;
}

function objectBind(ComponentToBind, key, siloObject) {
  var WrapperFunction =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WrapperFunction, _React$Component);

    function WrapperFunction() {
      var _this;

      _classCallCheck(this, WrapperFunction);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WrapperFunction).call(this));
      _this.siloRender = _this.siloRender.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(WrapperFunction, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this.unsubscribe = siloObject.keySubscribe(key, this.siloRender);
      }
    }, {
      key: "render",
      value: function render() {
        var newState = {};

        if (this.updatedState) {
          newState = this.updatedState;
        }

        return React.createElement(ComponentToBind, _extends({}, this.props, newState));
      }
    }, {
      key: "siloRender",
      value: function siloRender(updatedState) {
        this.updatedState = updatedState;
        this.forceUpdate();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {//this.unsubscribe();
      }
    }]);

    return WrapperFunction;
  }(React.Component); // dont need


  WrapperFunction.contextTypes = {
    silo: PropTypes.object
  };
  return WrapperFunction;
}

var ProviderComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProviderComponent, _React$Component);

  function ProviderComponent() {
    _classCallCheck(this, ProviderComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProviderComponent).apply(this, arguments));
  }

  _createClass(ProviderComponent, [{
    key: "getChildContext",
    // function definition provided by react, called by this.context
    value: function getChildContext() {
      return {
        silo: this.props.silo
      };
    }
  }, {
    key: "render",
    value: function render() {
      // this.props.children are any elements listed inside the component (like App)
      return React.createElement("div", null, " ", this.props.children, " ");
    }
  }]);

  return ProviderComponent;
}(React.Component); // we are telling it what we are going to provide


ProviderComponent.childContextTypes = {
  silo: PropTypes.object
};

var bind$1 = bind;
var objectBind$1 = objectBind;
var Provider = ProviderComponent;

exports.bind = bind$1;
exports.objectBind = objectBind$1;
exports.Provider = Provider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9yZWFjdEJpbmRpbmdzL2JpbmQuanMiLCIuLi9yZWFjdEJpbmRpbmdzL29iamVjdEJpbmQuanMiLCIuLi9yZWFjdEJpbmRpbmdzL1Byb3ZpZGVyLmpzIiwiLi4vcmVhY3RCaW5kaW5ncy9yZWFjdEJpbmRpbmdzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnOyBcblxuZnVuY3Rpb24gYmluZChDb21wb25lbnRUb0JpbmQpIHtcbiAgICBjbGFzcyBXcmFwcGVyRnVuY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLnNpbG9SZW5kZXIgPSB0aGlzLnNpbG9SZW5kZXIuYmluZCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHtzaWxvfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzaWxvLnN1YnNjcmliZSh0aGlzLnNpbG9SZW5kZXIsIENvbXBvbmVudFRvQmluZC5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZSArICdTdGF0ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3Qge3NpbG99ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICAgICAgbGV0IG5ld1N0YXRlID0ge307XG4gICAgICAgICAgICBpZih0aGlzLnVwZGF0ZWRTdGF0ZSkge1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlID0gdGhpcy51cGRhdGVkU3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKDxDb21wb25lbnRUb0JpbmQgey4uLnRoaXMucHJvcHN9IHsuLi5uZXdTdGF0ZX0vPilcbiAgICAgICAgfVxuXG4gICAgICAgIHNpbG9SZW5kZXIodXBkYXRlZFN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzVXBkYXRlID0gdGhpcy51cGRhdGVkU3RhdGU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZWRTdGF0ZSA9IHVwZGF0ZWRTdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBsZXQgbmV3U3RhdGUgPSB7fTtcbiAgICAgIC8vIHRoaXMudXBkYXRlZFN0YXRlIGlzIHNldCB3aGVuIHNpbG9SZW5kZXIgaXMgcnVuXG4gICAgICBpZiAodGhpcy51cGRhdGVkU3RhdGUpIHtcbiAgICAgICAgICBuZXdTdGF0ZSA9IHRoaXMudXBkYXRlZFN0YXRlO1xuICAgICAgfVxuICAgICAgLy8gcGFzcyBpbiBkZXYgd3JpdHRlbiBwcm9wcyBhbmQgdGhlIHNpbG9TdGF0ZVxuICAgICAgcmV0dXJuICg8Q29tcG9uZW50VG9CaW5kIHsuLi50aGlzLnByb3BzfSB7Li4ubmV3U3RhdGV9Lz4pXG4gICAgfVxuXG4gICAgc2lsb1JlbmRlcih1cGRhdGVkU3RhdGUpIHtcbiAgICAgIC8vIHdyYXBwZXJmdW5jdGlvbiBub3cgaGFzIGEgdmFyaWFibGUgY2FsbGVkIHVwZGF0ZWRTdGF0ZVxuICAgICAgdGhpcy51cGRhdGVkU3RhdGUgPSB1cGRhdGVkU3RhdGU7XG4gICAgICAvLyBwYXJ0IG9mIHJlYWN0LCBjYWxscyByZW5kZXIgZnVuY3Rpb25cbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIC8vIHVuc3Vic2NyaWJlIHJlbW92ZXMgdGhlIHJlbGV2YW50IHJlbmRlciBmdW5jdGlvbiBmcm9tIHRoZSBzdWJzY3JpYmVycyBhcnJheVxuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxvb2tpbmcgZm9yIHNvbWV0aGluZyBjYWxsZWQgc2lsbyB0aGF0IGlzIGFuIG9iamVjdCBcbiAgV3JhcHBlckZ1bmN0aW9uLmNvbnRleHRUeXBlcyA9IHtcbiAgICAgIHNpbG86IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHJldHVybiBXcmFwcGVyRnVuY3Rpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJpbmQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8vIHNpbG9PYmplY3QgaXMgcGFzc2VkIGluIHRvIGhhdmUgYWNjZXNzIHRvIGtleVN1YnNjcmliZSBmdW5jdGlvblxuZnVuY3Rpb24gb2JqZWN0QmluZChDb21wb25lbnRUb0JpbmQsIGtleSwgc2lsb09iamVjdCkge1xuICBjbGFzcyBXcmFwcGVyRnVuY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuc2lsb1JlbmRlciA9IHRoaXMuc2lsb1JlbmRlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzaWxvT2JqZWN0LmtleVN1YnNjcmliZShrZXksIHRoaXMuc2lsb1JlbmRlcik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgbGV0IG5ld1N0YXRlID0ge307XG4gICAgICBpZiAodGhpcy51cGRhdGVkU3RhdGUpIHtcbiAgICAgICAgICBuZXdTdGF0ZSA9IHRoaXMudXBkYXRlZFN0YXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuICg8Q29tcG9uZW50VG9CaW5kIHsuLi50aGlzLnByb3BzfSB7Li4ubmV3U3RhdGV9Lz4pXG4gICAgfVxuXG4gICAgc2lsb1JlbmRlcih1cGRhdGVkU3RhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlZFN0YXRlID0gdXBkYXRlZFN0YXRlO1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgLy90aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gZG9udCBuZWVkXG4gIFdyYXBwZXJGdW5jdGlvbi5jb250ZXh0VHlwZXMgPSB7XG4gICAgICBzaWxvOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICByZXR1cm4gV3JhcHBlckZ1bmN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvYmplY3RCaW5kOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBQcm92aWRlckNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgLy8gZnVuY3Rpb24gZGVmaW5pdGlvbiBwcm92aWRlZCBieSByZWFjdCwgY2FsbGVkIGJ5IHRoaXMuY29udGV4dFxuICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHtzaWxvOiB0aGlzLnByb3BzLnNpbG99XG4gICAgfVxuXG4gICAgcmVuZGVyKCkgeyAgICAgIFxuICAgICAgLy8gdGhpcy5wcm9wcy5jaGlsZHJlbiBhcmUgYW55IGVsZW1lbnRzIGxpc3RlZCBpbnNpZGUgdGhlIGNvbXBvbmVudCAobGlrZSBBcHApXG4gICAgICAgIHJldHVybiAoPGRpdj4ge3RoaXMucHJvcHMuY2hpbGRyZW59IDwvZGl2PilcbiAgICB9XG59XG5cbi8vIHdlIGFyZSB0ZWxsaW5nIGl0IHdoYXQgd2UgYXJlIGdvaW5nIHRvIHByb3ZpZGVcblByb3ZpZGVyQ29tcG9uZW50LmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIHNpbG86IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXJDb21wb25lbnQ7IiwiaW1wb3J0IGJpbmRJbXBvcnQgZnJvbSAnLi9iaW5kLmpzJztcbmltcG9ydCBvYmplY3RCaW5kSW1wb3J0IGZyb20gJy4vb2JqZWN0QmluZC5qcyc7XG5pbXBvcnQgUHJvdmlkZXJJbXBvcnQgZnJvbSAnLi9Qcm92aWRlci5qcyc7XG5cbmV4cG9ydCBjb25zdCBiaW5kID0gYmluZEltcG9ydDtcbmV4cG9ydCBjb25zdCBvYmplY3RCaW5kID0gb2JqZWN0QmluZEltcG9ydDtcbmV4cG9ydCBjb25zdCBQcm92aWRlciA9IFByb3ZpZGVySW1wb3J0OyJdLCJuYW1lcyI6WyJiaW5kIiwiQ29tcG9uZW50VG9CaW5kIiwiV3JhcHBlckZ1bmN0aW9uIiwic2lsb1JlbmRlciIsInNpbG8iLCJjb250ZXh0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJwcm90b3R5cGUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJuZXdTdGF0ZSIsInVwZGF0ZWRTdGF0ZSIsInByb3BzIiwicHJldmlvdXNVcGRhdGUiLCJmb3JjZVVwZGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Iiwib2JqZWN0QmluZCIsImtleSIsInNpbG9PYmplY3QiLCJrZXlTdWJzY3JpYmUiLCJQcm92aWRlckNvbXBvbmVudCIsImNoaWxkcmVuIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJiaW5kSW1wb3J0Iiwib2JqZWN0QmluZEltcG9ydCIsIlByb3ZpZGVyIiwiUHJvdmlkZXJJbXBvcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLFNBQVNBLElBQVQsQ0FBY0MsZUFBZCxFQUErQjtNQUNyQkMsZUFEcUI7Ozs7OytCQUVU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
