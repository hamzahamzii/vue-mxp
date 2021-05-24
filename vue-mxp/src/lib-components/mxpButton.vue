<template>
  <div>
    <button
      :style="computedStyles"
      :class="computedClasses"
      class="focus:outline-none m-2 flex justify-center align-center"
    >
      <!-- No loader -->
      <slot v-if="!loader"></slot>
      <!-- loader icon -->
      <svg
        v-if="loader && !text"
        :fill="stroke ? 'skyblue' : 'white'"
        class="animate-spin"
        :width="scale"
        :height="scale"
        viewBox="0 0 50 50"
      >
        <path
          d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z"
        ></path>
      </svg>
      <!-- loader text  -->
      <span v-if="loader && text" class="text-blue">loading...</span>
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
        "px-5 py-2": !this.small,
        "px-3 py-1 text-xs": this.small,
        "bg-white text-blue rounded-full hover:text-blue-dark focus:bg-blue-lightest":
          this.text && !this.filled && !this.stroke,
        "rounded-lg": this.rounded && !this.square && !this.text,
        "rounded-none": this.square && !this.rounded && !this.text,
        "border-2 border-blue active:bg-blue-lightest ring-inner-white hover:border-blue-dark hover:text-blue-dark bg-white text-blue":
          this.stroke && !this.filled && !this.text,
        "bg-blue text-white hover:bg-blue-dark active:bg-blue-dim active:ring-inset active:ring-blue active:shadow-2xl active:shadow-inner":
          (this.filled && !this.stroke && !this.text) || this.default,
        "focus:ring-4": !this.text,
      };
    },

    // Size helper for small/normal button
    scale(): string {
      return this.small ? "15" : "23";
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