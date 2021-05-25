import { defineComponent, openBlock, createBlock, createVNode, renderSlot, createCommentVNode, toDisplayString } from 'vue';

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
  name: "mxp-text-input",
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
    computedClasses() {
      return {
        // small inputs
        "px-1 py-1 text-xs": this.small,
        "bg-green-100 border-2 border-green-500": this.successMessage,
        "bg-red-100 border-2 border-red-500": this.errorMessage,
        "bg-gray-100 border-none": this.disabled
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

const _hoisted_1 = {
  class: "flex flex-col"
};
const _hoisted_2 = {
  key: 2,
  class: "text-gray-500 mx-2"
};
const _hoisted_3 = {
  key: 3,
  class: "text-green-500 mx-2"
};
const _hoisted_4 = {
  key: 4,
  class: "text-red-500 mx-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1, [!_ctx.description ? (openBlock(), createBlock("input", {
    key: 0,
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled,
    width: _ctx.width,
    type: "text",
    class: ["outline-none bg-gray-100 rounded-lg p-2 mx-2 mt-2 active:border-2 border-black focus:border-2 border-black", _ctx.computedClasses],
    style: _ctx.computedStyles
  }, null, 14, ["placeholder", "disabled", "width"])) : (openBlock(), createBlock("textarea", {
    key: 1,
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled,
    class: ["outline-none rounded-lg bg-gray-100 mx-2 mt-2 active:border-2 border-black focus:border-2 border-black", _ctx.computedClasses],
    style: [{
      "padding": "12px !important"
    }, _ctx.computedStyles]
  }, null, 14, ["placeholder", "disabled"])), _ctx.caption ? (openBlock(), createBlock("small", _hoisted_2, toDisplayString(_ctx.caption), 1)) : createCommentVNode("", true), _ctx.successMessage ? (openBlock(), createBlock("small", _hoisted_3, toDisplayString(_ctx.successMessage), 1)) : createCommentVNode("", true), _ctx.errorMessage ? (openBlock(), createBlock("small", _hoisted_4, toDisplayString(_ctx.errorMessage), 1)) : createCommentVNode("", true)]);
}

script.render = render;

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
