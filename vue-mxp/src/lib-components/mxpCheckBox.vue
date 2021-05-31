<template>
  <div>
    <label class="container">
      <input :disabled="disabled" class="absolute opacity-0" type="checkbox" checked="checked">
      <span  :class="{'opacity-40':disabled}"  class="checkmark absolute cursor-pointer rounded-full top-0 left-0 bg-gray-300 hover:bg-gray-400"></span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "mxp-check-box",
  props: {
    // Type
    disabled: Boolean,

  },

});
  </script>

 <style scoped>
 /* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  font-size: 22px;
}
/* Create a custom checkbox */
.checkmark {
  height: 32px;
  width: 32px;
}
/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2DB6F5;
}
.container input:checked ~ .checkmark:hover {
  background-color: #008CDB;
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 12px;
  top: 7px;
  width: 7px;
  height: 14px;
  border: solid white;
  border-width: 0 2px 2px 0;
  /* border-radius: 50%; */
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
 </style>