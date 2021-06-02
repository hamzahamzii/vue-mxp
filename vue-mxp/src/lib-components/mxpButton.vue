<template>
  <div>
    <button
      :style="computedStyles"
      :class="computedClasses"
      class="focus:outline-none flex justify-center align-center w-full sm:w-auto"
      :disabled="disabled"
    >
      <!-- No loader -->
      <slot v-if="!loader"></slot>
      <!-- loader icon -->
      <!-- white loader -->
      <img
        v-if="loader && !text && !subtle && !stroke"
        class="animate-spin p-0"
        :style="`height:${scale}px; width: ${scale}px`"
        src="../assets/icons/loader-white.svg"
        alt=""
      />
      <!-- skyblue loader -->
      <img
        v-if="loader && !text && (stroke || subtle)"
        class="animate-spin p-0"
        :style="`height:${scale}px; width: ${scale}px`"
        src="../assets/icons/loader-skyblue.svg"
        alt=""
      />
      <!-- loader text  -->
      <span v-if="loader && text" class="text-blue">loading...</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
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
    loader: Boolean,
  },

  computed: {
    computedClasses(): any {
      return {
        "px-8 py-2 btn-font": !this.small,
        "focus:ring-4 focus:ring-blue-light": !this.text,
        // Rounded button
        "rounded-lg": this.rounded && !this.square && !this.text,
        "rounded-none": this.square && !this.rounded && !this.text,
        // Small button
        "px-5 py-1 btn-font-sm": this.small,
        // text button
        "bg-white text-blue rounded-full hover:text-blue-dark focus:bg-blue-dim":
          this.text && !this.filled && !this.stroke && !this.subtle,
        // stroke button
        "border-2 border-blue active:ring-inset active:ring-white active:bg-blue-lightest active:border-blue active:shadow-2xl active:shadow-inner hover:border-blue-dark hover:text-blue-dark focus:ring-4 focus:ring-blue-dim bg-white text-blue":
          this.stroke && !this.filled && !this.text && !this.subtle,
        // filled button
        "bg-blue text-white hover:bg-blue-dark active:bg-blue-dim active:ring-inset active:ring-blue active:shadow-2xl active:shadow-inner":
          (this.filled && !this.stroke && !this.text && !this.subtle) ||
          this.default,
        // subtle button
        "bg-white border-2 border-gray-100 text-blue hover:text-blue-dark focus:ring-gray-100 ":
          this.subtle && !this.stroke && !this.filled && !this.text,
        // disabled button
        "opacity-25 hover:bg-blue": this.disabled,
      };
    },

    // Size helper for small/normal button
    scale(): string {
      return this.small ? "24" : "28";
    },

    // Button with no props
    default(): Boolean {
      return !this.filled && !this.stroke && !this.text && !this.subtle;
    },

    computedStyles(): any {
      return {
        "background-color": this.color ? this.color : "",
      };
    },
  },
});
</script>

<style scoped>
.btn-font {
  font-family: Graphik;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 1.75px;
  text-align: center;
}
.btn-font-sm {
  font-family: Graphik;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.75px;
  text-align: center;
}
</style>