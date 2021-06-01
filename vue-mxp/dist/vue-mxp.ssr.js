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
}var script$3 = vue.defineComponent({
  name: "mxp-btn",
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
        "px-8 py-2 btn-font": !this.small,
        "focus:ring-4 focus:ring-blue-light": !this.text,
        // Rounded button
        "rounded-lg": this.rounded && !this.square && !this.text,
        "rounded-none": this.square && !this.rounded && !this.text,
        // Small button
        "px-5 py-1 btn-font-sm": this.small,
        // text button
        "bg-white text-blue rounded-full hover:text-blue-dark focus:bg-blue-dim": this.text && !this.filled && !this.stroke && !this.subtle,
        // stroke button
        "border-2 border-blue active:ring-inset active:ring-white active:bg-blue-lightest active:border-blue active:shadow-2xl active:shadow-inner hover:border-blue-dark hover:text-blue-dark focus:ring-4 focus:ring-blue-dim bg-white text-blue": this.stroke && !this.filled && !this.text && !this.subtle,
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
});var _withId$3 = /*#__PURE__*/vue.withScopeId("data-v-9a7a29b0");

vue.pushScopeId("data-v-9a7a29b0");

var _hoisted_1$3 = /*#__PURE__*/vue.createVNode("path", {
  d: "M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z"
}, null, -1);

var _hoisted_2$1 = {
  key: 2,
  class: "text-blue"
};

vue.popScopeId();

var render$3 = /*#__PURE__*/_withId$3(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", null, [vue.createVNode("button", {
    style: _ctx.computedStyles,
    class: [_ctx.computedClasses, "focus:outline-none flex justify-center align-center w-full sm:w-auto"],
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
  }, [_hoisted_1$3], 8, ["fill", "width", "height"])) : vue.createCommentVNode("", true), _ctx.loader && _ctx.text ? (vue.openBlock(), vue.createBlock("span", _hoisted_2$1, "loading...")) : vue.createCommentVNode("", true)], 14, ["disabled"])]);
});function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z$3 = ".btn-font[data-v-9a7a29b0] {\n  font-family: Graphik;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 28px;\n  letter-spacing: 1.75px;\n  text-align: center;\n}\n\n.btn-font-sm[data-v-9a7a29b0] {\n  font-family: Graphik;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 1.75px;\n  text-align: center;\n}\n";
styleInject(css_248z$3);script$3.render = render$3;
script$3.__scopeId = "data-v-9a7a29b0";var script$2 = vue.defineComponent({
  name: "mxpTextInput",
  props: {
    // Sizing
    width: Number,
    maxWidth: Number,
    small: Boolean,
    // Type
    type: String,
    rounded: Boolean,
    description: Boolean,
    disabled: Boolean,
    // Color options
    color: String,
    // Captions
    message: String,
    success: Boolean,
    error: Boolean,
    // Placeholder
    placeholder: String,
    // Icons
    search: Boolean,
    username: Boolean,
    email: Boolean,
    pass: Boolean
  },
  data: function data() {
    return {
      focused: false,
      inputContent: ""
    };
  },
  computed: {
    computedClasses: function computedClasses() {
      return {
        // small inputs
        "py-3 input-container-sm": this.small,
        "py-5 input-container": !this.small,
        // Success  input
        "bg-green-100 border-2 border-green-500 focus:border-green-500 :": this.success,
        // Error input
        "bg-red-100 border-2 border-red-500 focus:border-red-500": this.error,
        // disabled input
        "bg-gray-50 border-none": this.disabled,
        "border-2 border-black": this.focused,
        "border-2 border-gray-100": !this.focused,
        "items-start": this.description,
        "items-center": !this.description
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
  },
  watch: {
    focus: function focus(value) {
      if (value) {
        var elem = document.getElementById("label-transition");

        if (elem) {
          console.log("elem found");
          elem.style.animationName = "example";
        }
      }
    }
  }
});var _withId$2 = /*#__PURE__*/vue.withScopeId("data-v-4c9db392");

vue.pushScopeId("data-v-4c9db392");

var _hoisted_1$2 = {
  class: "flex w-full rounded-xl flex-col"
};
var _hoisted_2 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "bg-transparent mr-2",
  fill: "none",
  height: "21",
  width: "21",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};

var _hoisted_3 = /*#__PURE__*/vue.createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
}, null, -1);

var _hoisted_4 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "bg-transparent mr-2",
  fill: "none",
  height: "21",
  width: "21",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};

var _hoisted_5 = /*#__PURE__*/vue.createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
}, null, -1);

var _hoisted_6 = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  height: "21",
  width: "21",
  class: "bg-transparent mr-2",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};

var _hoisted_7 = /*#__PURE__*/vue.createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
}, null, -1);

var _hoisted_8 = {
  key: 3,
  xmlns: "http://www.w3.org/2000/svg",
  height: "21",
  width: "21",
  class: "bg-transparent mr-2",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};

var _hoisted_9 = /*#__PURE__*/vue.createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
}, null, -1);

var _hoisted_10 = /*#__PURE__*/vue.createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1);

vue.popScopeId();

var render$2 = /*#__PURE__*/_withId$2(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$2, [vue.createVNode("div", {
    class: ["flex relative px-4 bg-gray-100 rounded-xl", _ctx.computedClasses]
  }, [_ctx.search && !_ctx.description ? (vue.openBlock(), vue.createBlock("svg", _hoisted_2, [_hoisted_3])) : vue.createCommentVNode("", true), _ctx.username && !_ctx.description ? (vue.openBlock(), vue.createBlock("svg", _hoisted_4, [_hoisted_5])) : vue.createCommentVNode("", true), _ctx.email && !_ctx.description ? (vue.openBlock(), vue.createBlock("svg", _hoisted_6, [_hoisted_7])) : vue.createCommentVNode("", true), _ctx.pass && !_ctx.description ? (vue.openBlock(), vue.createBlock("svg", _hoisted_8, [_hoisted_9])) : vue.createCommentVNode("", true), !_ctx.description ? vue.withDirectives((vue.openBlock(), vue.createBlock("input", {
    key: 4,
    disabled: _ctx.disabled,
    width: _ctx.width,
    onFocus: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.focused = true;
    }),
    onBlur: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.focused = false;
    }),
    type: _ctx.type,
    class: "outline-none mt-1 bg-transparent w-full",
    required: "",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return _ctx.inputContent = $event;
    })
  }, null, 40, ["disabled", "width", "type"])), [[vue.vModelDynamic, _ctx.inputContent]]) : vue.withDirectives((vue.openBlock(), vue.createBlock("textarea", {
    key: 5,
    disabled: _ctx.disabled,
    class: "outline-none bg-transparent w-full ",
    onFocus: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.focused = true;
    }),
    onBlur: _cache[5] || (_cache[5] = function ($event) {
      return _ctx.focused = false;
    }),
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return _ctx.inputContent = $event;
    }),
    required: ""
  }, null, 40, ["disabled"])), [[vue.vModelText, _ctx.inputContent]]), vue.createVNode("label", {
    class: ["text-gray-400 truncate", {
      'left-11 w-3/4': _ctx.search || _ctx.username || _ctx.email || _ctx.pass,
      'text-green-500': _ctx.success,
      'text-red-500': _ctx.error,
      'w-1/2': !_ctx.search && !_ctx.username
    }]
  }, vue.toDisplayString(_ctx.placeholder), 3), _ctx.inputContent ? (vue.openBlock(), vue.createBlock("svg", {
    key: 6,
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return _ctx.inputContent = '';
    }),
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 cursor-pointer ...",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_10])) : vue.createCommentVNode("", true)], 2), _ctx.message ? (vue.openBlock(), vue.createBlock("small", {
    key: 0,
    class: ["text-gray-500 mx-2 w-3/4 truncate", {
      'text-red-500': _ctx.error,
      'text-green-500': _ctx.success
    }]
  }, vue.toDisplayString(_ctx.message), 3)) : vue.createCommentVNode("", true)]);
});var css_248z$2 = ".input-container label[data-v-4c9db392] {\n  font-family: Graphik;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 28px;\n  letter-spacing: 0.75px;\n  text-align: left;\n  position: absolute;\n  top: 19.5px;\n  pointer-events: none;\n  transition: all 0.25s ease-in-out;\n}\n\n.input-container input:focus ~ label[data-v-4c9db392],\n.input-container input:valid ~ label[data-v-4c9db392],\n.input-container textarea:focus ~ label[data-v-4c9db392],\n.input-container textarea:valid ~ label[data-v-4c9db392] {\n  font-family: Graphik;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 22px;\n  letter-spacing: 0.25px;\n  text-align: left;\n  position: absolute;\n  transform: translateY(-15.5px);\n  pointer-events: none;\n  transition: all 0.25s ease-in-out;\n}\n\n.input-container-sm label[data-v-4c9db392] {\n  font-family: Graphik;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 28px;\n  letter-spacing: 0.75px;\n  text-align: left;\n  position: absolute;\n  top: 12.5px;\n  pointer-events: none;\n  transition: all 0.25s ease-in-out;\n}\n\n.input-container-sm input:focus ~ label[data-v-4c9db392],\n.input-container-sm input:valid ~ label[data-v-4c9db392],\n.input-container-sm textarea:focus ~ label[data-v-4c9db392],\n.input-container-sm textarea:valid ~ label[data-v-4c9db392] {\n  font-family: Graphik;\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 22px;\n  letter-spacing: 0.25px;\n  text-align: left;\n  position: absolute;\n  transform: translateY(-11px);\n  pointer-events: none;\n  transition: all 0.25s ease-in-out;\n}\n";
styleInject(css_248z$2);script$2.render = render$2;
script$2.__scopeId = "data-v-4c9db392";var script$1 = vue.defineComponent({
  name: "mxp-check-box",
  props: {
    // Type
    disabled: Boolean
  }
});var _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-11af35e3");

vue.pushScopeId("data-v-11af35e3");

var _hoisted_1$1 = {
  class: "container"
};

vue.popScopeId();

var render$1 = /*#__PURE__*/_withId$1(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", null, [vue.createVNode("label", _hoisted_1$1, [vue.createVNode("input", {
    disabled: _ctx.disabled,
    class: "absolute opacity-0",
    type: "checkbox",
    checked: "checked"
  }, null, 8, ["disabled"]), vue.createVNode("span", {
    class: [{
      'opacity-40': _ctx.disabled
    }, "checkmark absolute cursor-pointer rounded-full top-0 left-0 bg-gray-300 hover:bg-gray-400"]
  }, null, 2)])]);
});var css_248z$1 = "/* The container */\n\n.container[data-v-11af35e3] {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  font-size: 22px;\n}\n\n/* Create a custom checkbox */\n\n.checkmark[data-v-11af35e3] {\n  height: 32px;\n  width: 32px;\n}\n\n/* When the checkbox is checked, add a blue background */\n\n.container input:checked ~ .checkmark[data-v-11af35e3] {\n  background-color: #2DB6F5;\n}\n\n.container input:checked ~ .checkmark[data-v-11af35e3]:hover {\n  background-color: #008CDB;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.checkmark[data-v-11af35e3]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n\n.container input:checked ~ .checkmark[data-v-11af35e3]:after {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n\n.container .checkmark[data-v-11af35e3]:after {\n  left: 12px;\n  top: 7px;\n  width: 7px;\n  height: 14px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  /* border-radius: 50%; */\n  transform: rotate(45deg);\n}\n ";
styleInject(css_248z$1);script$1.render = render$1;
script$1.__scopeId = "data-v-11af35e3";var script = vue.defineComponent({
  name: "mxp-check-box",
  props: {
    // Type
    disabled: Boolean,
    // Checked
    checked: Boolean
  }
});var _withId = /*#__PURE__*/vue.withScopeId("data-v-07f3384b");

vue.pushScopeId("data-v-07f3384b");

var _hoisted_1 = {
  class: "container"
};

vue.popScopeId();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", null, [vue.createVNode("label", _hoisted_1, [vue.createVNode("input", {
    checked: _ctx.checked,
    disabled: _ctx.disabled,
    class: "opacity-0 absolute cursor-pointer",
    type: "radio",
    name: "radio"
  }, null, 8, ["checked", "disabled"]), vue.createVNode("span", {
    class: [{
      'opacity-40': _ctx.disabled
    }, "checkmark cursor-pointer absolute top-0 left-0 rounded-full bg-gray-300 hover:bg-gray-400"]
  }, null, 2)])]);
});var css_248z = "/* The container */\n\n.container[data-v-07f3384b] {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  font-size: 22px;\n}\n\n/* Create a custom radio button */\n\n.checkmark[data-v-07f3384b] {\n  height: 32px;\n  width: 32px;\n}\n\n/* When the radio button is checked, add a blue background */\n\n.container input:checked ~ .checkmark[data-v-07f3384b] {\n  background-color: #2DB6F5;\n}\n\n.container input:checked ~ .checkmark[data-v-07f3384b]:hover {\n  background-color: #008CDB;\n}\n\n/* Create the indicator (the dot/circle - hidden when not checked) */\n\n.checkmark[data-v-07f3384b]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the indicator (dot/circle) when checked */\n\n.container input:checked ~ .checkmark[data-v-07f3384b]:after {\n  display: block;\n}\n\n/* Style the indicator (dot/circle) */\n\n.container .checkmark[data-v-07f3384b]:after {\n  top: 8px;\n  left: 8px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: white;\n}\n ";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-07f3384b";/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,mxpButton: script$3,mxpTextInput: script$2,mxpCheckBox: script$1,mxpRadioButton: script});var install = function installVueMxp(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,mxpButton: script$3,mxpTextInput: script$2,mxpCheckBox: script$1,mxpRadioButton: script});// only expose one global var, with component exports exposed as properties of
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