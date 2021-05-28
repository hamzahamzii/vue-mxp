<template>
  <div class="flex flex-col">
    <!-- Text input -->
    <div
      class="flex relative px-4 bg-gray-100 rounded-xl"
      :class="computedClasses"
    >
      <!-- Search icon -->
      <svg
        v-if="search && !description"
        xmlns="http://www.w3.org/2000/svg"
        class="bg-transparent mr-2"
        fill="none"
        height="21"
        width="21"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <!-- user icon -->
      <svg
        v-if="username && !description"
        xmlns="http://www.w3.org/2000/svg"
        class="bg-transparent mr-2"
        fill="none"
        height="21"
        width="21"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      <!-- Input field -->
      <input
        v-if="!description"
        :disabled="disabled"
        :width="width"
        @focus="focused = true"
        @blur="focused = false"
        type="text"
        class="outline-none bg-transparent w-full"
        required
        v-model="inputContent"
      />
      <!-- Text area -->
      <textarea
        v-else
        :disabled="disabled"
        class="outline-none bg-transparent w-full"
        @focus="focused = true"
        @blur="focused = false"
        v-model="inputContent"
        required
      ></textarea>
      <label class="text-gray-300" :class="{'left-11': (search || username) , 'text-green-500': success, 'text-red-500': error}">{{
        placeholder
      }}</label>
      <svg  v-if="inputContent" @click="inputContent = ''" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer ..."  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <!-- Caption -->
    <small
      v-if="message"
      class="text-gray-500 mx-2"
      :class="{ 'text-red-500': error, 'text-green-500': success }"
      >{{ message }}</small
    >
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
  data() {
    return {
      focused: false,
      inputContent:'',
    };
  },
  computed: {
    computedClasses(): any {
      return {
        // small inputs
        "py-3 input-container-sm": this.small,
        "py-5 input-container": !this.small,
        // Success  input
        "bg-green-100 border-2 border-green-500 focus:border-green-500 :": this
          .success,
        // Error input
        "bg-red-100 border-2 border-red-500 focus:border-red-500": this.error,
        // disabled input
        "bg-gray-50 border-none": this.disabled,
        "border-2 border-black": this.focused,
        "border-2 border-gray-100": !this.focused,
        "items-start":this.description,
        "items-center":!this.description,
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
  watch: {
    focus(value) {
      if (value) {
        let elem = document.getElementById("label-transition");
        if (elem) {
          console.log("elem found");
          elem.style.animationName = "example";
        }
      }
    },
  },
});
</script>

<style scoped>
.input-container label {
  font-family: Graphik;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.75px;
  text-align: left;
  position: absolute;
  top: 18.5px;
  pointer-events: none;
  transition: all 0.25s ease-in-out;
}

.input-container input:focus ~ label, 
.input-container input:valid ~ label,
.input-container textarea:focus ~ label, 
.input-container textarea:valid ~ label {
  font-family: Graphik;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.25px;
  text-align: left;
  position: absolute;
  transform: translateY(-14.5px);
  pointer-events: none;
  transition: all 0.25s ease-in-out;
}

.input-container-sm label {
  font-family: Graphik;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.75px;
  text-align: left;
  position: absolute;
  top: 10.5px;
  pointer-events: none;
  transition: all 0.25s ease-in-out;
}

.input-container-sm input:focus ~ label,
.input-container-sm input:valid ~ label,
.input-container-sm textarea:focus ~ label, 
.input-container-sm textarea:valid ~ label {
  font-family: Graphik;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.25px;
  text-align: left;
  position: absolute;
  transform: translateY(-10.5px);
  pointer-events: none;
  transition: all 0.25s ease-in-out;
}
</style>
