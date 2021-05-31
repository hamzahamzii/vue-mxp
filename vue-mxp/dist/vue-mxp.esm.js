import { defineComponent, pushScopeId, popScopeId, openBlock, createBlock, createVNode, renderSlot, createCommentVNode, withScopeId, withDirectives, vModelText, toDisplayString } from 'vue';

var script$3 = defineComponent({
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
    computedClasses() {
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
    scale() {
      return this.small ? "15" : "23";
    },

    // Button with no props
    default() {
      return !this.filled && !this.stroke && !this.text && !this.subtle;
    },

    computedStyles() {
      return {
        "background-color": this.color ? this.color : ""
      };
    }

  }
});

const _withId$3 = /*#__PURE__*/withScopeId("data-v-15a8f384");

pushScopeId("data-v-15a8f384");

const _hoisted_1$3 = /*#__PURE__*/createVNode("path", {
  d: "M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z"
}, null, -1);

const _hoisted_2$1 = {
  key: 2,
  class: "text-blue"
};

popScopeId();

const render$3 = /*#__PURE__*/_withId$3((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", null, [createVNode("button", {
    style: _ctx.computedStyles,
    class: [_ctx.computedClasses, "focus:outline-none m-2 flex justify-center align-center"],
    disabled: _ctx.disabled
  }, [!_ctx.loader ? renderSlot(_ctx.$slots, "default", {
    key: 0
  }) : createCommentVNode("", true), _ctx.loader && !_ctx.text ? (openBlock(), createBlock("svg", {
    key: 1,
    fill: _ctx.stroke || _ctx.subtle ? 'skyblue' : 'white',
    class: "animate-spin",
    width: _ctx.scale,
    height: _ctx.scale,
    viewBox: "0 0 50 50"
  }, [_hoisted_1$3], 8, ["fill", "width", "height"])) : createCommentVNode("", true), _ctx.loader && _ctx.text ? (openBlock(), createBlock("span", _hoisted_2$1, "loading...")) : createCommentVNode("", true)], 14, ["disabled"])]);
});

function styleInject(css, ref) {
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
}

var css_248z$3 = ".btn-font[data-v-15a8f384] {\n  font-family: Graphik;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 28px;\n  letter-spacing: 1.75px;\n  text-align: center;\n}\n\n.btn-font-sm[data-v-15a8f384] {\n  font-family: Graphik;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 1.75px;\n  text-align: center;\n}\n";
styleInject(css_248z$3);

script$3.render = render$3;
script$3.__scopeId = "data-v-15a8f384";

var script$2 = defineComponent({
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
    message: String,
    success: Boolean,
    error: Boolean,
    // Placeholder
    placeholder: String,
    // Icons
    search: Boolean,
    username: Boolean
  },

  data() {
    return {
      focused: false,
      inputContent: ""
    };
  },

  computed: {
    computedClasses() {
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
    scale() {
      return this.small ? "15" : "23";
    },

    computedStyles() {
      return {
        "background-color": this.color ? this.color : ""
      };
    }

  },
  watch: {
    focus(value) {
      if (value) {
        let elem = document.getElementById("label-transition");

        if (elem) {
          console.log("elem found");
          elem.style.animationName = "example";
        }
      }
    }

  }
});

const _withId$2 = /*#__PURE__*/withScopeId("data-v-28e1f60e");

pushScopeId("data-v-28e1f60e");

const _hoisted_1$2 = {
  class: "flex flex-col"
};
const _hoisted_2 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "bg-transparent mr-2",
  fill: "none",
  height: "21",
  width: "21",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};

const _hoisted_3 = /*#__PURE__*/createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
}, null, -1);

const _hoisted_4 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "bg-transparent mr-2",
  fill: "none",
  height: "21",
  width: "21",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};

const _hoisted_5 = /*#__PURE__*/createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
}, null, -1);

const _hoisted_6 = /*#__PURE__*/createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1);

popScopeId();

const render$2 = /*#__PURE__*/_withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$2, [createVNode("div", {
    class: ["flex relative px-4 bg-gray-100 rounded-xl", _ctx.computedClasses]
  }, [_ctx.search && !_ctx.description ? (openBlock(), createBlock("svg", _hoisted_2, [_hoisted_3])) : createCommentVNode("", true), _ctx.username && !_ctx.description ? (openBlock(), createBlock("svg", _hoisted_4, [_hoisted_5])) : createCommentVNode("", true), !_ctx.description ? withDirectives((openBlock(), createBlock("input", {
    key: 2,
    disabled: _ctx.disabled,
    width: _ctx.width,
    onFocus: _cache[1] || (_cache[1] = $event => _ctx.focused = true),
    onBlur: _cache[2] || (_cache[2] = $event => _ctx.focused = false),
    type: "text",
    class: "outline-none mt-1 bg-transparent w-full",
    required: "",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.inputContent = $event)
  }, null, 40, ["disabled", "width"])), [[vModelText, _ctx.inputContent]]) : withDirectives((openBlock(), createBlock("textarea", {
    key: 3,
    disabled: _ctx.disabled,
    class: "outline-none bg-transparent w-full",
    onFocus: _cache[4] || (_cache[4] = $event => _ctx.focused = true),
    onBlur: _cache[5] || (_cache[5] = $event => _ctx.focused = false),
    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.inputContent = $event),
    required: ""
  }, null, 40, ["disabled"])), [[vModelText, _ctx.inputContent]]), createVNode("label", {
    class: ["text-gray-400 w-3/4 truncate", {
      'left-11': _ctx.search || _ctx.username,
      'text-green-500': _ctx.success,
      'text-red-500': _ctx.error
    }]
  }, toDisplayString(_ctx.placeholder), 3), _ctx.inputContent ? (openBlock(), createBlock("svg", {
    key: 4,
    onClick: _cache[7] || (_cache[7] = $event => _ctx.inputContent = ''),
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 cursor-pointer ...",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_6])) : createCommentVNode("", true)], 2), _ctx.message ? (openBlock(), createBlock("small", {
    key: 0,
    class: ["text-gray-500 mx-2 w-3/4 truncate", {
      'text-red-500': _ctx.error,
      'text-green-500': _ctx.success
    }]
  }, toDisplayString(_ctx.message), 3)) : createCommentVNode("", true)]);
});

var css_248z$2 = ".input-container label[data-v-28e1f60e] {\n  font-family: Graphik;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 28px;\n  letter-spacing: 0.75px;\n  text-align: left;\n  position: absolute;\n  top: 19.5px;\n  pointer-events: none;\n  transition: all 0.25s ease-in-out;\n}\n\n.input-container input:focus ~ label[data-v-28e1f60e],\n.input-container input:valid ~ label[data-v-28e1f60e],\n.input-container textarea:focus ~ label[data-v-28e1f60e],\n.input-container textarea:valid ~ label[data-v-28e1f60e] {\n  font-family: Graphik;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 22px;\n  letter-spacing: 0.25px;\n  text-align: left;\n  position: absolute;\n  transform: translateY(-15.5px);\n  pointer-events: none;\n  transition: all 0.25s ease-in-out;\n}\n\n.input-container-sm label[data-v-28e1f60e] {\n  font-family: Graphik;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 28px;\n  letter-spacing: 0.75px;\n  text-align: left;\n  position: absolute;\n  top: 12.5px;\n  pointer-events: none;\n  transition: all 0.25s ease-in-out;\n}\n\n.input-container-sm input:focus ~ label[data-v-28e1f60e],\n.input-container-sm input:valid ~ label[data-v-28e1f60e],\n.input-container-sm textarea:focus ~ label[data-v-28e1f60e],\n.input-container-sm textarea:valid ~ label[data-v-28e1f60e] {\n  font-family: Graphik;\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 22px;\n  letter-spacing: 0.25px;\n  text-align: left;\n  position: absolute;\n  transform: translateY(-11px);\n  pointer-events: none;\n  transition: all 0.25s ease-in-out;\n}\n";
styleInject(css_248z$2);

script$2.render = render$2;
script$2.__scopeId = "data-v-28e1f60e";

var script$1 = defineComponent({
  name: "mxp-check-box",
  props: {
    // Type
    disabled: Boolean
  }
});

const _withId$1 = /*#__PURE__*/withScopeId("data-v-11af35e3");

pushScopeId("data-v-11af35e3");

const _hoisted_1$1 = {
  class: "container"
};

popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", null, [createVNode("label", _hoisted_1$1, [createVNode("input", {
    disabled: _ctx.disabled,
    class: "absolute opacity-0",
    type: "checkbox",
    checked: "checked"
  }, null, 8, ["disabled"]), createVNode("span", {
    class: [{
      'opacity-40': _ctx.disabled
    }, "checkmark absolute cursor-pointer rounded-full top-0 left-0 bg-gray-300 hover:bg-gray-400"]
  }, null, 2)])]);
});

var css_248z$1 = "/* The container */\n\n.container[data-v-11af35e3] {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  font-size: 22px;\n}\n\n/* Create a custom checkbox */\n\n.checkmark[data-v-11af35e3] {\n  height: 32px;\n  width: 32px;\n}\n\n/* When the checkbox is checked, add a blue background */\n\n.container input:checked ~ .checkmark[data-v-11af35e3] {\n  background-color: #2DB6F5;\n}\n\n.container input:checked ~ .checkmark[data-v-11af35e3]:hover {\n  background-color: #008CDB;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.checkmark[data-v-11af35e3]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n\n.container input:checked ~ .checkmark[data-v-11af35e3]:after {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n\n.container .checkmark[data-v-11af35e3]:after {\n  left: 12px;\n  top: 7px;\n  width: 7px;\n  height: 14px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  /* border-radius: 50%; */\n  transform: rotate(45deg);\n}\n ";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__scopeId = "data-v-11af35e3";

var script = defineComponent({
  name: "mxp-check-box",
  props: {
    // Type
    disabled: Boolean,
    // Checked
    checked: Boolean
  }
});

const _withId = /*#__PURE__*/withScopeId("data-v-07f3384b");

pushScopeId("data-v-07f3384b");

const _hoisted_1 = {
  class: "container"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", null, [createVNode("label", _hoisted_1, [createVNode("input", {
    checked: _ctx.checked,
    disabled: _ctx.disabled,
    class: "opacity-0 absolute cursor-pointer",
    type: "radio",
    name: "radio"
  }, null, 8, ["checked", "disabled"]), createVNode("span", {
    class: [{
      'opacity-40': _ctx.disabled
    }, "checkmark cursor-pointer absolute top-0 left-0 rounded-full bg-gray-300 hover:bg-gray-400"]
  }, null, 2)])]);
});

var css_248z = "/* The container */\n\n.container[data-v-07f3384b] {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  font-size: 22px;\n}\n\n/* Create a custom radio button */\n\n.checkmark[data-v-07f3384b] {\n  height: 32px;\n  width: 32px;\n}\n\n/* When the radio button is checked, add a blue background */\n\n.container input:checked ~ .checkmark[data-v-07f3384b] {\n  background-color: #2DB6F5;\n}\n\n.container input:checked ~ .checkmark[data-v-07f3384b]:hover {\n  background-color: #008CDB;\n}\n\n/* Create the indicator (the dot/circle - hidden when not checked) */\n\n.checkmark[data-v-07f3384b]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the indicator (dot/circle) when checked */\n\n.container input:checked ~ .checkmark[data-v-07f3384b]:after {\n  display: block;\n}\n\n/* Style the indicator (dot/circle) */\n\n.container .checkmark[data-v-07f3384b]:after {\n  top: 8px;\n  left: 8px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: white;\n}\n ";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-07f3384b";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  mxpButton: script$3,
  mxpTextInput: script$2,
  mxpCheckBox: script$1,
  mxpRadioButton: script
});

// Import vue components

const install = function installVueMxp(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script$3 as mxpButton, script$1 as mxpCheckBox, script as mxpRadioButton, script$2 as mxpTextInput };
