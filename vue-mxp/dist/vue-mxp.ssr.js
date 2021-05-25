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
    // Type
    disabled: Boolean,
    // Icons
    loader: Boolean
  },
  computed: {
    computedClasses: function computedClasses() {
      return {
        "px-8 py-2": !this.small,
        "focus:ring-4": !this.text,
        // Rounded button
        "rounded-lg": this.rounded && !this.square && !this.text,
        "rounded-none": this.square && !this.rounded && !this.text,
        // Small button
        "px-3 py-1 text-xs": this.small,
        // text button
        "bg-white text-blue rounded-full hover:text-blue-dark focus:bg-blue-lightest": this.text && !this.filled && !this.stroke && !this.subtle,
        // stroke button
        "border-2 border-blue active:ring-inset active:ring-white active:bg-blue-lightest active:border-blue active:shadow-2xl active:shadow-inner hover:border-blue-dark hover:text-blue-dark focus:ring-4 focus:ring-blue-lightest bg-white text-blue": this.stroke && !this.filled && !this.text && !this.subtle,
        // filled button
        "bg-blue text-white hover:bg-blue-dark active:bg-blue-dim active:ring-inset active:ring-blue active:shadow-2xl active:shadow-inner": this.filled && !this.stroke && !this.text && !this.subtle || this.default,
        // subtle button
        "bg-white border-2 border-gray-100 text-blue hover:text-blue-dark focus:ring-gray-100 ": this.subtle && !this.stroke && !this.filled && !this.text,
        // disabled button
        "opacity-25 hover:bg-blue": this.disabled
      };
    },
    // Size helper for small/normal button
    scale: function scale() {
      return this.small ? "15" : "23";
    },
    // Button with no props
    default: function _default() {
      return !this.filled && !this.stroke && !this.text && !this.subtle;
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

var _hoisted_2$1 = {
  key: 2,
  class: "text-blue"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", null, [vue.createVNode("button", {
    style: _ctx.computedStyles,
    class: [_ctx.computedClasses, "focus:outline-none m-2 flex justify-center align-center"],
    disabled: _ctx.disabled
  }, [!_ctx.loader ? vue.renderSlot(_ctx.$slots, "default", {
    key: 0
  }) : vue.createCommentVNode("", true), _ctx.loader && !_ctx.text ? (vue.openBlock(), vue.createBlock("svg", {
    key: 1,
    fill: _ctx.stroke || _ctx.subtle ? 'skyblue' : 'white',
    class: "animate-spin",
    width: _ctx.scale,
    height: _ctx.scale,
    viewBox: "0 0 50 50"
  }, [_hoisted_1$1], 8, ["fill", "width", "height"])) : vue.createCommentVNode("", true), _ctx.loader && _ctx.text ? (vue.openBlock(), vue.createBlock("span", _hoisted_2$1, "loading...")) : vue.createCommentVNode("", true)], 14, ["disabled"])]);
}script$1.render = render$1;var script = vue.defineComponent({
  name: "mxpTextInput",
  props: {
    // Sizing
    width: Number,
    maxWidth: Number,
    small: Boolean,
    // Type
    rounded: Boolean,
    description: Boolean,
    disabled: Boolean,
    // Color options
    color: String,
    // Captions
    caption: String,
    successMessage: String,
    errorMessage: String,
    // Placeholder
    placeholder: String,
    // Icons
    search: Boolean
  },
  computed: {
    computedClasses: function computedClasses() {
      return {
        // small inputs
        "px-1 py-1 text-xs": this.small,
        "bg-green-100 border-2 border-green-500": this.successMessage,
        "bg-red-100 border-2 border-red-500": this.errorMessage,
        "bg-gray-100 border-none": this.disabled
      };
    },
    // Size helper for small/normal button
    scale: function scale() {
      return this.small ? "15" : "23";
    },
    computedStyles: function computedStyles() {
      return {
        "background-color": this.color ? this.color : ""
      };
    }
  }
});var _hoisted_1 = {
  class: "flex flex-col"
};
var _hoisted_2 = {
  key: 2,
  class: "text-gray-500 mx-2"
};
var _hoisted_3 = {
  key: 3,
  class: "text-green-500 mx-2"
};
var _hoisted_4 = {
  key: 4,
  class: "text-red-500 mx-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [!_ctx.description ? (vue.openBlock(), vue.createBlock("input", {
    key: 0,
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled,
    width: _ctx.width,
    type: "text",
    class: ["outline-none bg-gray-100 rounded-lg p-2 mx-2 mt-2 active:border-2 border-black focus:border-2 border-black", _ctx.computedClasses],
    style: _ctx.computedStyles
  }, null, 14, ["placeholder", "disabled", "width"])) : (vue.openBlock(), vue.createBlock("textarea", {
    key: 1,
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled,
    class: ["outline-none rounded-lg bg-gray-100 mx-2 mt-2 active:border-2 border-black focus:border-2 border-black", _ctx.computedClasses],
    style: [{
      "padding": "12px !important"
    }, _ctx.computedStyles]
  }, null, 14, ["placeholder", "disabled"])), _ctx.caption ? (vue.openBlock(), vue.createBlock("small", _hoisted_2, vue.toDisplayString(_ctx.caption), 1)) : vue.createCommentVNode("", true), _ctx.successMessage ? (vue.openBlock(), vue.createBlock("small", _hoisted_3, vue.toDisplayString(_ctx.successMessage), 1)) : vue.createCommentVNode("", true), _ctx.errorMessage ? (vue.openBlock(), vue.createBlock("small", _hoisted_4, vue.toDisplayString(_ctx.errorMessage), 1)) : vue.createCommentVNode("", true)]);
}script.render = render;/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,mxpButton: script$1,mxpTextInput: script});var install = function installVueMxp(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,mxpButton: script$1,mxpTextInput: script});// only expose one global var, with component exports exposed as properties of
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