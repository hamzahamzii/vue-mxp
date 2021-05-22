<script lang="ts">
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { mxpButton } from "@/entry.esm";

export default defineComponent({
  name: "ServeDev",
  components: {
    mxpButton,
  },
});
</script>

<template>
  <div class="flex mt-4 ml-4" id="app">
    <mxpButton text>Button</mxpButton>
  </div>
</template>
