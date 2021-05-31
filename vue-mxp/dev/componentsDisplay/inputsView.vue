<template>
  <b class="mx-4"> Text Inputs </b>
  <div class="flex justify-center">
    <div class="w-1/4 my-2 flex flex-col justify-center">
      <!-- Text inputs -->
      <mxpTextInput
        small
        class="my-2"
        placeholder="A random large placeholder to check text truncation on width overflow"
      />
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
  <b class="mx-4"> Custom Inputs </b>
  <!-- Custom inputs -->
  <div class="flex justify-center">
    <!-- Checkbox -->
    <div class="mx-3">Checkboxes</div>
    <mxpCheckBox disabled class="mx-3"></mxpCheckBox>
    <mxpCheckBox disabled class="mx-3"></mxpCheckBox>
    <mxpCheckBox class="mx-3"></mxpCheckBox>
  </div>
  <div class="flex justify-center my-6">
    <!-- Radio Buttons -->
    <div class="mx-3">Radio Buttons</div>
    <mxpRadioButton disabled class="mx-3"></mxpRadioButton>
    <mxpRadioButton class="mx-3"></mxpRadioButton>
    <mxpRadioButton checked class="mx-3"></mxpRadioButton>
    <mxpRadioButton class="mx-3"></mxpRadioButton>
    <mxpRadioButton class="mx-3"></mxpRadioButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { mxpTextInput } from "@/entry.esm";
import { mxpCheckBox } from "@/entry.esm";
import { mxpRadioButton } from "@/entry.esm";

export default defineComponent({
  name: "inputsView",
  components: {
    mxpTextInput,
    mxpCheckBox,
    mxpRadioButton,
  },
});
</script>