<template>
  <div>
    <label class="container">
      <input :checked="checked" :disabled="disabled" class="opacity-0 absolute cursor-pointer" type="radio" name="radio">
      <span :class="{'opacity-40':disabled}"  class="checkmark cursor-pointer absolute top-0 left-0 rounded-full bg-gray-300 hover:bg-gray-400"></span>
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

    // Checked
    checked: Boolean,

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

/* Create a custom radio button */
.checkmark {
  height: 32px;
  width: 32px;
}


/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2DB6F5;
}

.container input:checked ~ .checkmark:hover {
  background-color: #008CDB;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
 	top: 8px;
	left: 8px;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background: white;
}
 </style>