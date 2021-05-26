<template>
  <div class="flex justify-center">
    <div class="w-1/4 flex flex-col justify-center">
      <mxpTextInput placeholder="Text field" />
      <mxpTextInput description placeholder="Text area" />
      <mxpTextInput
        placeholder="Success field"
        message="Success message"
        success
      />
      <mxpTextInput placeholder="Error field" error message="Error message" />
      <mxpTextInput disabled placeholder="disabled" message="message" />

      <!-- Search Inputs -->
      <mxpTextInput search placeholder="Text field" />
      <mxpTextInput
        username
        placeholder="Success field"
        message="Success message"
        success
      />
      <mxpTextInput
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