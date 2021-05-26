<template>
  <div class="flex flex-col">
  <!-- Text input -->
    <!-- Search icon -->
    <div v-if="!description" class="flex items-center">
    <svg v-if="search" xmlns="http://www.w3.org/2000/svg" class="h-19 w-9 p-2 bg-gray-100 rounded-tl-lg mt-2 rounded-bl-lg border-2 border-gray-50 border-r-0 "
      :class="{'bg-red-100 border-red-500 ':error, 'bg-green-100 border-green-500':success}"
      fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <!-- user icon -->
    <svg v-if="username" xmlns="http://www.w3.org/2000/svg" class="h-19 w-9 p-2 bg-gray-100 rounded-tl-lg mt-2 rounded-bl-lg border-2 border-gray-50 border-r-0 "
     :class="{'bg-red-100 border-red-500 ':error, 'bg-green-100 border-green-500':success}"
     fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
    <!-- Input field -->
    <input  :placeholder="placeholder" :disabled="disabled" :width="width" type="text" 
     class="outline-none inline bg-gray-100 rounded-lg text-xs w-full p-2 mx-2 mt-2 border-2 border-gray-50 focus:border-2 focus:border-black"
    :style="computedStyles"
    :class="computedClasses"
    >
    </div>
  <!-- Text area -->
    <textarea v-else :placeholder="placeholder" :disabled="disabled"
     class="outline-none rounded-lg bg-gray-100 text-xs mx-2 mt-2  border-2 border-gray-50 focus:border-2 focus:border-black"
     style="padding:12px!important "
     :style="computedStyles"
     :class="computedClasses"
    ></textarea>
    <!-- Caption -->
    <small v-if="message" class="text-gray-500 mx-2" :class="{'text-red-500':error, 'text-green-500':success}">{{message}}</small>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "mxpTextInput",
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
    message: String,
    success: Boolean,
    error: Boolean,

    // Placeholder
    placeholder: String,

    // Icons
    search: Boolean,
    username: Boolean,
  },

  computed: {
    computedClasses(): any {
      return {
        // small inputs
        "px-1 py-1":this.small,
        // Success  input
        "bg-green-100 border-2 border-green-500 focus:border-green-500 :":this.success,
        // Error input
        "bg-red-100 border-2 border-red-500 focus:border-red-500  ":this.error,
        // disabled input
        "bg-gray-50 border-none":this.disabled,
        // Icon input
        "ml-0 pl-0 border-l-0 rounded-tl-none rounded-bl-none":(this.search || this.username)  && !this.description,
        
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
<style scoped>
.search-icon{
  position: absolute;
}
</style>