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
    <mxpButton disabled rounded filled>Button</mxpButton>
    <mxpTextInput placeholder="This is a placeholder" ></mxpTextInput>
    <mxpTextInput disabled placeholder="This is a disabled input" ></mxpTextInput>
    <mxpTextInput successMessage="This is a success message" placeholder="I am green" ></mxpTextInput>
    <mxpTextInput description small placeholder="This is a placeholder" ></mxpTextInput>
    <mxpTextInput description errorMessage="This is an error message" placeholder="This is a placeholder" ></mxpTextInput>
  </div>
</template>
