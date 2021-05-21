import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script$1 = defineComponent({
  name: "mxpButton"
});

const _hoisted_1$1 = /*#__PURE__*/createVNode("button", {
  class: "px-3 bg-red-500"
}, "click me", -1);

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", null, [_hoisted_1$1]);
}

script$1.render = render$1;

var script = defineComponent({
  name: "mxpInput"
});

const _hoisted_1 = /*#__PURE__*/createVNode("button", {
  class: "px-3 bg-red-500"
}, "click me", -1);

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
