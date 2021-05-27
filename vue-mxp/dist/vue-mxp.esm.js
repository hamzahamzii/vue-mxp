import { defineComponent, pushScopeId, popScopeId, openBlock, createBlock, createVNode, renderSlot, createCommentVNode, withScopeId, toDisplayString } from 'vue';

var script$1 = defineComponent({
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

const _withId$1 = /*#__PURE__*/withScopeId("data-v-15a8f384");

pushScopeId("data-v-15a8f384");

const _hoisted_1$1 = /*#__PURE__*/createVNode("path", {
  d: "M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z"
}, null, -1);

const _hoisted_2$1 = {
  key: 2,
  class: "text-blue"
};

popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
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
  }, [_hoisted_1$1], 8, ["fill", "width", "height"])) : createCommentVNode("", true), _ctx.loader && _ctx.text ? (openBlock(), createBlock("span", _hoisted_2$1, "loading...")) : createCommentVNode("", true)], 14, ["disabled"])]);
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

var css_248z$1 = ".btn-font[data-v-15a8f384] {\n  font-family: Graphik;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 28px;\n  letter-spacing: 1.75px;\n  text-align: center;\n}\n\n.btn-font-sm[data-v-15a8f384] {\n  font-family: Graphik;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 1.75px;\n  text-align: center;\n}\n";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__scopeId = "data-v-15a8f384";

var script = defineComponent({
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
      focused: false
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
        "bg-red-100 border-2 border-red-500 focus:border-red-500  ": this.error,
        // disabled input
        "bg-gray-50 border-none": this.disabled,
        "border-2 border-black": this.focused,
        "border-2 border-gray-100": !this.focused
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

const _withId = /*#__PURE__*/withScopeId("data-v-0e41c514");

pushScopeId("data-v-0e41c514");

const _hoisted_1 = {
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

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1, [!_ctx.description ? (openBlock(), createBlock("div", {
    key: 0,
    class: ["flex relative items-center px-6 bg-gray-100 rounded-xl", _ctx.computedClasses]
  }, [_ctx.search ? (openBlock(), createBlock("svg", _hoisted_2, [_hoisted_3])) : createCommentVNode("", true), _ctx.username ? (openBlock(), createBlock("svg", _hoisted_4, [_hoisted_5])) : createCommentVNode("", true), createVNode("input", {
    disabled: _ctx.disabled,
    width: _ctx.width,
    onFocus: _cache[1] || (_cache[1] = $event => _ctx.focused = true),
    onBlur: _cache[2] || (_cache[2] = $event => _ctx.focused = false),
    type: "text",
    class: "outline-none bg-transparent w-full"
  }, null, 40, ["disabled", "width"]), createVNode("label", {
    class: _ctx.search || _ctx.username ? 'left-14' : ''
  }, toDisplayString(_ctx.placeholder), 3)], 2)) : (openBlock(), createBlock("textarea", {
    key: 1,
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled,
    class: ["outline-none px-6 rounded-xl bg-gray-100 focus:border-2 focus:border-black", _ctx.computedClasses],
    style: _ctx.computedStyles,
    onFocus: _cache[3] || (_cache[3] = $event => _ctx.focused = true),
    onBlur: _cache[4] || (_cache[4] = $event => _ctx.focused = false)
  }, null, 46, ["placeholder", "disabled"])), _ctx.message ? (openBlock(), createBlock("small", {
    key: 2,
    class: ["text-gray-500 mx-2", {
      'text-red-500': _ctx.error,
      'text-green-500': _ctx.success
    }]
  }, toDisplayString(_ctx.message), 3)) : createCommentVNode("", true)]);
});

var css_248z = ".input-container label[data-v-0e41c514] {\n  font-family: Graphik;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 28px;\n  letter-spacing: 0.75px;\n  text-align: left;\n  color: #a0a3bd !important;\n  position: absolute;\n  top: 18.5px;\n  pointer-events: none;\n  transition: all 0.25s ease-in-out;\n}\n\n.input-container input:focus ~ label[data-v-0e41c514] {\n  font-family: Graphik;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 22px;\n  letter-spacing: 0.25px;\n  text-align: left;\n  color: #a0a3bd !important;\n  position: absolute;\n  transform: translateY(-14.5px);\n  pointer-events: none;\n  transition: all 0.25s ease-in-out;\n}\n\n.input-container-sm label[data-v-0e41c514] {\n  font-family: Graphik;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 28px;\n  letter-spacing: 0.75px;\n  text-align: left;\n  color: #a0a3bd !important;\n  position: absolute;\n  top: 10.5px;\n  pointer-events: none;\n  transition: all 0.25s ease-in-out;\n}\n\n.input-container-sm input:focus ~ label[data-v-0e41c514] {\n  font-family: Graphik;\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 22px;\n  letter-spacing: 0.25px;\n  text-align: left;\n  color: #a0a3bd !important;\n  position: absolute;\n  transform: translateY(-10.5px);\n  pointer-events: none;\n  transition: all 0.25s ease-in-out;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-0e41c514";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  mxpButton: script$1,
  mxpTextInput: script
});

// Import vue components

const install = function installVueMxp(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script$1 as mxpButton, script as mxpTextInput };
