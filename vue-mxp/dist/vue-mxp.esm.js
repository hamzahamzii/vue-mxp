import { defineComponent, openBlock, createBlock, createVNode, renderSlot } from 'vue';

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
    text: Boolean
  },
  computed: {
    computedClasses() {
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

    computedStyles() {
      return {
        "background-color": this.color ? this.color : ""
      };
    }

  }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", null, [createVNode("button", {
    style: _ctx.computedStyles,
    class: [_ctx.computedClasses, "active:bg-red m-2"]
  }, [renderSlot(_ctx.$slots, "default")], 6)]);
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
