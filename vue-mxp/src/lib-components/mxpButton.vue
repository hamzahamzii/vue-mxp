<template>
  <div>
    <button
      :style="computedStyles"
      :class="computedClasses"   
      class="m-2"  
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
        "px-5 py-1": !this.small,
        "px-3 py-1 text-xs": this.small,
        "bg-white text-blue hover:text-blue-dark rounded-lg focus:outline-none focus:bg-blue-lightest":
          this.text && !this.filled && !this.stroke,
        "rounded-lg": this.rounded && !this.square && !this.text,
        "rounded-none": this.square && !this.rounded && !this.text,
        "border-2 border-blue hover:border-blue-dark hover:text-blue-dark bg-white text-blue":
          this.stroke && !this.filled,
        "bg-blue hover:bg-blue-dark  text-white": this.filled && !this.stroke,
      "focus:outline-none focus:ring-4 text-white active:bg-blue-dim active:ring active:ring-blue active:ring-8 active:ring-offset-0 active:rounded-full": !this.text
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