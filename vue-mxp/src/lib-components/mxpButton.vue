<template>
  <div>
    <button
      :style="computedStyles"
      :class="computedClasses"
      class="m-2 px-8 py-1"
    >
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
        "rounded-lg": this.rounded,
        "rounded-none": this.square,
        "border-2 border-blue hover:border-blue-dark hover:text-blue-dark bg-white text-blue":
          this.stroke && !this.filled,
        "bg-blue hover:bg-blue-dark text-white": this.filled && !this.stroke,
      };
    },

    computedStyles(): any {
      return {
        "background-color": this.color ? this.color : "",
      };
    },
  },
});
</script>