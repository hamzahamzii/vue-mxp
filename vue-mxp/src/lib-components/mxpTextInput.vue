<template>
  <div class="flex flex-col">
    <input
      v-if="!description"
      :placeholder="placeholder"
      :disabled="disabled"
      :width="width"
      type="text"
      class="outline-none bg-gray-100 rounded-lg p-2 mx-2 mt-2 active:border-2 border-black focus:border-2 border-black"
      :style="computedStyles"
      :class="computedClasses"
    />
    <textarea
      v-else
      :placeholder="placeholder"
      :disabled="disabled"
      class="outline-none rounded-lg bg-gray-100 mx-2 mt-2 active:border-2 border-black focus:border-2 border-black"
      style="padding: 12px !important"
      :style="computedStyles"
      :class="computedClasses"
    ></textarea>
    <small v-if="caption" class="text-gray-500 mx-2">{{ caption }}</small>
    <small v-if="successMessage" class="text-green-500 mx-2">{{
      successMessage
    }}</small>
    <small v-if="errorMessage" class="text-red-500 mx-2">{{
      errorMessage
    }}</small>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "mxp-text-input",
  props: {
    // Sizing
    width: Number,
    maxWidth: Number,
    small: Boolean,

    // Type
    rounded: Boolean,
    description: Boolean,
    disabled: Boolean,

    // Color options
    color: String,

    // Captions
    caption: String,
    successMessage: String,
    errorMessage: String,

    // Placeholder
    placeholder: String,

    // Icons
    search: Boolean,
  },

  computed: {
    computedClasses(): any {
      return {
        // small inputs
        "px-1 py-1 text-xs": this.small,
        "bg-green-100 border-2 border-green-500": this.successMessage,
        "bg-red-100 border-2 border-red-500": this.errorMessage,
        "bg-gray-100 border-none": this.disabled,
      };
    },

    // Size helper for small/normal button
    scale(): string {
      return this.small ? "15" : "23";
    },

    computedStyles(): any {
      return {
        "background-color": this.color ? this.color : "",
      };
    },
  },
});
</script>