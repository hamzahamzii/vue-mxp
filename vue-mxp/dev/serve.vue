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
  <div class="flex" id="app">
    <mxpButton rounded square>YOOO</mxpButton>
  </div>
</template>
