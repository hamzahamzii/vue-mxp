<template>
  <div>
    <button :class="computedClasses" class="m-2 px-3 bg-green-500">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
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
  },

  computed: {
    computedClasses(): any {
      return {
        rounded: this.rounded,
        "rounded-none": this.square,
      };
    },
  },
});
</script>