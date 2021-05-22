'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script$1 = vue.defineComponent({
  name: "mxpButton",
  props: {
    // Sizing
    width: Number,
    maxWidth: Number,
    small: Boolean,
    // Border
    rounded: Boolean,
    square: Boolean,
    // Color options
    color: String,
    secondary: Boolean,
    subtle: Boolean,
    primary: Boolean,
    filled: Boolean,
    stroke: Boolean,
    text: Boolean
  },
  computed: {
    computedClasses: function computedClasses() {
      return {
        "px-5 py-1": !this.small,
        "px-3 py-1 text-xs": this.small,
        "bg-white text-blue hover:text-blue-dark rounded-lg": this.text && !this.filled && !this.stroke,
        "rounded-lg": this.rounded && !this.square && !this.text,
        "rounded-none": this.square && !this.rounded && !this.text,
        "border-2 border-blue hover:border-blue-dark hover:text-blue-dark bg-white text-blue": this.stroke && !this.filled,
        "bg-blue hover:bg-blue-dark text-white": this.filled && !this.stroke
      };
    },
    computedStyles: function computedStyles() {
      return {
        "background-color": this.color ? this.color : ""
      };
    }
  }
});function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", null, [vue.createVNode("button", {
    style: _ctx.computedStyles,
    class: [_ctx.computedClasses, "active:bg-red m-2"]
  }, [vue.renderSlot(_ctx.$slots, "default")], 6)]);
}script$1.render = render$1;var script = vue.defineComponent({
  name: "mxpInput"
});var _hoisted_1 = /*#__PURE__*/vue.createVNode("input", {
  type: "text",
  class: "m-2 px-3 bg-red-200"
}, null, -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", null, [_hoisted_1]);
}script.render = render;/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,mxpButton: script$1,mxpInput: script});var install = function installVueMxp(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,mxpButton: script$1,mxpInput: script});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== "default") {
    var key = componentName;
    var val = component;
    install[key] = val;
  }
});module.exports=install;