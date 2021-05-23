<template>
  <div>
    <button
      :style="computedStyles"
      :class="computedClasses"   
      class="active:bg-blue-dim active:ring active:ring-blue active:ring-4 active:ring-offset-0 m-2"  
    >  
     <!-- Displays the slot in case of no loader or loader with filled -->
      <slot class="inline" v-if="!loader || (loader && filled  && !secondary && !subtle && !text) "></slot>
      <!-- Displays the next icon only in case of filled  -->
      <svg  v-if="loader  && filled && !text && !subtle && !secondary" xmlns="http://www.w3.org/2000/svg" class=" inline h-3 w-3" fill="white" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
      <!-- Displays the loader icon only in case of secondary or subtle  -->
      <svg v-if="loader && (secondary || subtle) && !filled && !text" class="animate-spin" width="15" height="15" viewBox="0 0 50 50">
        <path fill="#87ceeb" d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z"></path>
      </svg>
      <!-- Displays the loader icon in case of text  -->
      <span v-if="loader && text && !filled && !subtle && !secondary" class="text-blue">loading...</span>
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
          this.stroke && !this.filled,
        "bg-blue hover:bg-blue-dark  text-white": this.filled && !this.stroke,
      "focus:outline-none focus:ring-4 text-white": !this.text,

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