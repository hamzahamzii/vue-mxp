<template>
  <div>
    <button
      :style="computedStyles"
      :class="computedClasses"
      class="active:bg-blue-dim active:ring active:ring-blue active:ring-4 active:ring-offset-0 m-2"
    >
      <!-- Displays the slot in case of no loader -->
      <slot v-if="!loader"></slot>
      <!-- Displays the loader in case of filled and secondary -->
      <svg
        v-if="loader && !text"
        :fill="stroke ? 'skyblue' : 'white'"
        class="animate-spin"
        width="15"
        height="15"
        viewBox="0 0 50 50"
      >
        <path
          d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z"
        ></path>
      </svg>
      <!-- Displays the loader icon in case of text  -->
      <span
        v-if="loader && text && !filled && !subtle && !stroke"
        class="text-blue"
        >loading...</span
      >
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

    // Icons
    loader: Boolean,
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
          this.stroke && !this.filled && !this.text,
        "bg-blue hover:bg-blue-dark text-white":
          (this.filled && !this.stroke && !this.text) || this.default,
        "focus:outline-none focus:ring-4 text-white active:bg-blue-dim active:ring active:ring-blue active:ring-8 active:ring-offset-0 active:rounded-full": !this
          .text,
      };
    },

    // Button with no props
    default(): Boolean {
      return !this.filled && !this.stroke && !this.text;
    },

    computedStyles(): any {
      return {
        "background-color": this.color ? this.color : "",
      };
    },
  },
});
</script>