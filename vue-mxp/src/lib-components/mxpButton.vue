<template>
  <div>
    <button class="m-2 px-3 bg-green-500">click me</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "mxpButton",
  props: {
    rounded: Boolean,
    square: Boolean,
    secondary: Boolean,
    subtle: Boolean,
    primary: Boolean,

    filled: Boolean,
    stroke: Boolean,
    small: Boolean,
    text: Boolean,
  },
});
</script>