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
    text: Boolean,
    // Icons
    loader: Boolean
  },
  computed: {
    computedClasses: function computedClasses() {
      return {
        "px-5 py-1": !this.small,
        "px-3 py-1 text-xs": this.small,
        "bg-white text-blue hover:text-blue-dark rounded-lg focus:outline-none focus:bg-blue-lightest": this.text && !this.filled && !this.stroke,
        "rounded-lg": this.rounded && !this.square && !this.text,
        "rounded-none": this.square && !this.rounded && !this.text,
        "border-2 border-blue hover:border-blue-dark hover:text-blue-dark bg-white text-blue": this.stroke && !this.filled && !this.text,
        "bg-blue hover:bg-blue-dark text-white": this.filled && !this.stroke && !this.text || this.default,
        "focus:outline-none focus:ring-4 text-white active:bg-blue-dim active:ring active:ring-blue active:ring-8 active:ring-offset-0 active:rounded-full": !this.text
      };
    },
    // Button with no props
    default: function _default() {
      return !this.filled && !this.stroke && !this.text;
    },
    computedStyles: function computedStyles() {
      return {
        "background-color": this.color ? this.color : ""
      };
    }
  }
});var _hoisted_1$1 = /*#__PURE__*/vue.createVNode("path", {
  d: "M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z"
}, null, -1);

var _hoisted_2 = {
  key: 2,
  class: "text-blue"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", null, [vue.createVNode("button", {
    style: _ctx.computedStyles,
    class: [_ctx.computedClasses, "active:bg-blue-dim active:ring active:ring-blue active:ring-4 active:ring-offset-0 m-2"]
  }, [!_ctx.loader ? vue.renderSlot(_ctx.$slots, "default", {
    key: 0
  }) : vue.createCommentVNode("", true), _ctx.loader && !_ctx.text ? (vue.openBlock(), vue.createBlock("svg", {
    key: 1,
    fill: _ctx.stroke ? 'skyblue' : 'white',
    class: "animate-spin",
    width: "15",
    height: "15",
    viewBox: "0 0 50 50"
  }, [_hoisted_1$1], 8, ["fill"])) : vue.createCommentVNode("", true), _ctx.loader && _ctx.text && !_ctx.filled && !_ctx.subtle && !_ctx.stroke ? (vue.openBlock(), vue.createBlock("span", _hoisted_2, "loading...")) : vue.createCommentVNode("", true)], 6)]);
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