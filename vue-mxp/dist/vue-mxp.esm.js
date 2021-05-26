import { defineComponent, openBlock, createBlock, createVNode, renderSlot, createCommentVNode, pushScopeId, popScopeId, toDisplayString, withScopeId } from 'vue';

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
        "px-8 py-2": !this.small,
        "focus:ring-4 focus:ring-blue-light": !this.text,
        // Rounded button
        "rounded-lg": this.rounded && !this.square && !this.text,
        "rounded-none": this.square && !this.rounded && !this.text,
        // Small button
        "px-3 py-1 text-sm": this.small,
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

const _hoisted_1$1 = /*#__PURE__*/createVNode("path", {
  d: "M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z"
}, null, -1);

const _hoisted_2$1 = {
  key: 2,
  class: "text-blue"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
}

script$1.render = render$1;

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
  computed: {
    computedClasses() {
      return {
        // small inputs
        "px-1 py-1": this.small,
        // Success  input
        "bg-green-100 border-2 border-green-500 focus:border-green-500 :": this.success,
        // Error input
        "bg-red-100 border-2 border-red-500 focus:border-red-500  ": this.error,
        // disabled input
        "bg-gray-50 border-none": this.disabled,
        // Icon input
        "ml-0 pl-0 border-l-0 rounded-tl-none rounded-bl-none": (this.search || this.username) && !this.description
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

  }
});

const _withId = /*#__PURE__*/withScopeId("data-v-539ece79");

pushScopeId("data-v-539ece79");

const _hoisted_1 = {
  class: "flex flex-col"
};
const _hoisted_2 = {
  key: 0,
  class: "flex items-center"
};

const _hoisted_3 = /*#__PURE__*/createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
}, null, -1);

const _hoisted_4 = /*#__PURE__*/createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
}, null, -1);

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1, [!_ctx.description ? (openBlock(), createBlock("div", _hoisted_2, [_ctx.search ? (openBlock(), createBlock("svg", {
    key: 0,
    xmlns: "http://www.w3.org/2000/svg",
    class: ["h-19 w-9 p-2 bg-gray-100 rounded-tl-lg mt-2 rounded-bl-lg border-2 border-gray-50 border-r-0 ", {
      'bg-red-100 border-red-500 ': _ctx.error,
      'bg-green-100 border-green-500': _ctx.success
    }],
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_3], 2)) : createCommentVNode("", true), _ctx.username ? (openBlock(), createBlock("svg", {
    key: 1,
    xmlns: "http://www.w3.org/2000/svg",
    class: ["h-19 w-9 p-2 bg-gray-100 rounded-tl-lg mt-2 rounded-bl-lg border-2 border-gray-50 border-r-0 ", {
      'bg-red-100 border-red-500 ': _ctx.error,
      'bg-green-100 border-green-500': _ctx.success
    }],
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_4], 2)) : createCommentVNode("", true), createVNode("input", {
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled,
    width: _ctx.width,
    type: "text",
    class: ["outline-none inline bg-gray-100 rounded-lg text-xs w-full p-2 mx-2 mt-2 border-2 border-gray-50 focus:border-2 focus:border-black", _ctx.computedClasses],
    style: _ctx.computedStyles
  }, null, 14, ["placeholder", "disabled", "width"])])) : (openBlock(), createBlock("textarea", {
    key: 1,
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled,
    class: ["outline-none rounded-lg bg-gray-100 text-xs mx-2 mt-2  border-2 border-gray-50 focus:border-2 focus:border-black", _ctx.computedClasses],
    style: [{
      "padding": "12px!important"
    }, _ctx.computedStyles]
  }, null, 14, ["placeholder", "disabled"])), _ctx.message ? (openBlock(), createBlock("small", {
    key: 2,
    class: ["text-gray-500 mx-2", {
      'text-red-500': _ctx.error,
      'text-green-500': _ctx.success
    }]
  }, toDisplayString(_ctx.message), 3)) : createCommentVNode("", true)]);
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

var css_248z = ".search-icon[data-v-539ece79]{\n  position: absolute;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-539ece79";

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
