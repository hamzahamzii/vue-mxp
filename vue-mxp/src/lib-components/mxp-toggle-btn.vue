<template>
  <div>
    <!-- Rounded switch -->
    <label class="relative inline-block bg-gray-300 rounded-full hover:bg-gray-400 switch">
        <input :checked="checked" :disabled="disabled" type="checkbox" class="opacity-0 w-0 h-0">
        <span :class="{'opacity-30':disabled}" class="slider round rounded-full cursro-pointer top-0 left-0 bottom-0 right-0 absolute"></span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "mxp-toggle-btn",
  props: {
    // Type
    disabled: Boolean,
    checked: Boolean
  },

});
  </script>

 <style scoped>
/* The switch - the box around the slider */
.switch {
  width: 64px;
  height: 36px;
}

/* The slider */
.slider {
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 28px;
  width: 28px;
  left: 4px;
  bottom: 4px;
  border-radius: 50%;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2DB6F5;
}

input:checked + .slider:hover {
  background-color: #008CDB;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2DB6F5;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

 </style>