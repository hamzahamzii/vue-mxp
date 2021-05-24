import { defineComponent, openBlock, createBlock, createVNode, renderSlot, createCommentVNode } from 'vue';

var script$1 = defineComponent({
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
    computedClasses() {
      return {
        "px-5 py-2": !this.small,
        "px-3 py-1 text-xs": this.small,
        "bg-white text-blue rounded-full hover:text-blue-dark focus:bg-blue-lightest": this.text && !this.filled && !this.stroke,
        "rounded-lg": this.rounded && !this.square && !this.text,
        "rounded-none": this.square && !this.rounded && !this.text,
        "border-2 border-blue active:bg-blue-lightest ring-inner-white hover:border-blue-dark hover:text-blue-dark bg-white text-blue": this.stroke && !this.filled && !this.text,
        "bg-blue text-white active:bg-blue-dim hover:bg-blue-dark ": this.filled && !this.stroke && !this.text || this.default,
        "focus:ring-4": !this.text
      };
    },

    // Size helper for small/normal button
    scale() {
      return this.small ? "15" : "23";
    },

    // Button with no props
    default() {
      return !this.filled && !this.stroke && !this.text;
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

const _hoisted_2 = {
  key: 2,
  class: "text-blue"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", null, [createVNode("button", {
    style: _ctx.computedStyles,
    class: [_ctx.computedClasses, "focus:outline-none active:bg-blue-dim active:ring active:ring-blue active:ring-4 active:ring-offset-0 m-2 flex justify-center align-center"]
  }, [!_ctx.loader ? renderSlot(_ctx.$slots, "default", {
    key: 0
  }) : createCommentVNode("", true), _ctx.loader && !_ctx.text ? (openBlock(), createBlock("svg", {
    key: 1,
    fill: _ctx.stroke ? 'skyblue' : 'white',
    class: "animate-spin",
    width: _ctx.scale,
    height: _ctx.scale,
    viewBox: "0 0 50 50"
  }, [_hoisted_1$1], 8, ["fill", "width", "height"])) : createCommentVNode("", true), _ctx.loader && _ctx.text ? (openBlock(), createBlock("span", _hoisted_2, "loading...")) : createCommentVNode("", true)], 6)]);
}

script$1.render = render$1;

var script = defineComponent({
  name: "mxpInput"
});

const _hoisted_1 = /*#__PURE__*/createVNode("input", {
  type: "text",
  class: "m-2 px-3 bg-red-200"
}, null, -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", null, [_hoisted_1]);
}

script.render = render;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  mxpButton: script$1,
  mxpInput: script
});

// Import vue components

const install = function installVueMxp(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script$1 as mxpButton, script as mxpInput };
