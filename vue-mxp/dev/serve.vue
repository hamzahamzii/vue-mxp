<template>
  <div id="app" class="mt-10 mb-5">
    <!-- Navbar -->
    <div class="flex mb-8 items-center justify-center">
      <button class="mx-2 p-2" @click="tab = 'buttons'"><b>BUTTONS</b></button>
      <button class="mx-2 p-2" @click="tab = 'inputs'"><b>INPUTS</b></button>
    </div>
    <hr />

    <!-- Buttons -->
    <buttonsView v-if="tab == 'buttons'" />

    <!-- Inputs -->
    <inputsView v-if="tab == 'inputs'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import buttonsView from "./componentsDisplay/buttonsView.vue";
import inputsView from "./componentsDisplay/inputsView.vue";

export default defineComponent({
  name: "ServeDev",
  components: {
    buttonsView,
    inputsView,
  },
  data(): any {
    return {
      tab: "buttons",
    };
  },
});
</script>
