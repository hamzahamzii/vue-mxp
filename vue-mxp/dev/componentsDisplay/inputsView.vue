<template>
  <div class="flex justify-center">
    <div class="w-1/4 my-2 flex flex-col justify-center">
      <mxpTextInput class="my-2" placeholder="Text field" />
      <mxpTextInput class="my-2" description placeholder="Text area" />
      <mxpTextInput
        class="my-2"
        disabled
        placeholder="disabled"
        message="message"
      />

      <!-- Search Inputs -->
      <mxpTextInput class="my-2" search placeholder="Text field" />
      <mxpTextInput
        class="my-2"
        username
        placeholder="Success field"
        message="Success message"
        success
      />
      <mxpTextInput
        class="my-2"
        username
        placeholder="Error field"
        error
        message="Error message"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { mxpTextInput } from "@/entry.esm";

export default defineComponent({
  name: "inputsView",
  components: {
    mxpTextInput,
  },
});
</script>