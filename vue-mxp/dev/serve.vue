<template>
  <div id="app" class="my-5 p-2 flex flex-col items-center">
    <!-- Navbar -->
    <div class="flex mb-4 items-center justify-center">
      <button class="mx-2 p-2" @click="tab = 'buttons'"><b>BUTTONS</b></button>
      <button class="mx-2 p-2" @click="tab = 'inputs'">
        <b>Text Inputs</b>
      </button>
      <button class="mx-2 p-2" @click="tab = 'colorsTypography'">
        <b>Colors and Typography</b>
      </button>
      <button class="mx-2 p-2" @click="tab = 'customInputs'">
        <b>Custom inputs</b>
      </button>
      <button class="mx-2 p-2" @click="tab = 'testForm'"><b>FORM</b></button>
    </div>
    <hr />

    <!-- Buttons -->
    <buttonsView v-if="tab == 'buttons'" />

    <!-- Inputs -->
    <inputsView v-if="tab == 'inputs'" />

    <!-- Colors and Typography -->
    <colorsTypography v-if="tab == 'colorsTypography'" />
    <customInputs v-if="tab == 'customInputs'" />

    <testForm v-if="tab == 'testForm'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import buttonsView from "./componentsDisplay/buttonsView.vue";
import inputsView from "./componentsDisplay/inputsView.vue";
import colorsTypography from "./componentsDisplay/colorsTypography.vue";
import testForm from "./componentsDisplay/testForm.vue";
import customInputs from "./componentsDisplay/customInputs.vue";

export default defineComponent({
  name: "ServeDev",
  components: {
    buttonsView,
    inputsView,
    colorsTypography,
    testForm,
    customInputs,
  },
  data(): any {
    return {
      tab: "buttons",
    };
  },
});
</script>
