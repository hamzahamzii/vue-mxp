<script lang="ts">
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { mxpButton } from "@/entry.esm";
import { mxpTextInput } from "@/entry.esm";

export default defineComponent({
  name: "ServeDev",
  components: {
    mxpButton,
    mxpTextInput,
  },
  data(): any {
    return {
      tab: "buttons",
    };
  },
});
</script>

<template>
  <div id="app" class="my-10">
    <!-- Navbar -->
    <div class="flex mb-8 items-center justify-center">
      <button class="mx-2 p-2" @click="tab = 'buttons'">BUTTONS</button>
      <button class="mx-2 p-2" @click="tab = 'inputs'">INPUTS</button>
    </div>

    <!-- Buttons -->
    <div v-if="tab == 'buttons'">
      <!-- Square -->
      <div class="flex items-center justify-center m-2">
        Square
        <div class="flex mx-2 flex-col items-center">
          Filled<mxpButton square filled>Button</mxpButton>
        </div>
        <div class="flex mx-2 flex-col items-center">
          Filled (disabled)<mxpButton square filled disabled>Button</mxpButton>
        </div>
        <div class="flex mx-2 flex-col items-center">
          Stroke<mxpButton square stroke>Button</mxpButton>
        </div>
        <div class="flex mx-2 flex-col items-center">
          Stroke (disabled)<mxpButton square stroke disabled>Button</mxpButton>
        </div>
        <div class="flex mx-2 flex-col items-center">
          Subtle<mxpButton square subtle>Button</mxpButton>
        </div>
        <div class="flex mx-2 flex-col items-center">
          Subtle (disabled)<mxpButton square subtle disabled>Button</mxpButton>
        </div>
      </div>
      <!-- Rounded -->
      <div class="flex items-center justify-center m-2">
        Rounded
        <div class="flex mx-2 flex-col items-center">
          Filled<mxpButton rounded filled>Button</mxpButton>
        </div>
        <div class="flex mx-2 flex-col items-center">
          Filled (disabled)<mxpButton rounded filled disabled>Button</mxpButton>
        </div>
        <div class="flex mx-2 flex-col items-center">
          Stroke<mxpButton rounded stroke>Button</mxpButton>
        </div>
        <div class="flex mx-2 flex-col items-center">
          Stroke (disabled)<mxpButton rounded stroke disabled>Button</mxpButton>
        </div>
        <div class="flex mx-2 flex-col items-center">
          Subtle<mxpButton rounded subtle>Button</mxpButton>
        </div>
        <div class="flex mx-2 flex-col items-center">
          Subtle (disabled)<mxpButton rounded subtle disabled>Button</mxpButton>
        </div>
      </div>
      <!-- Small square -->
      <div class="flex items-center justify-center m-2">
        Small square
        <div class="flex mx-2 flex-col items-center">
          Filled<mxpButton square small filled>Button</mxpButton>
        </div>
        <div class="flex mx-2 flex-col items-center">
          Filled (disabled)<mxpButton square small filled disabled
            >Button</mxpButton
          >
        </div>
        <div class="flex mx-2 flex-col items-center">
          Stroke<mxpButton square small stroke>Button</mxpButton>
        </div>
        <div class="flex mx-2 flex-col items-center">
          Stroke (disabled)<mxpButton square small stroke disabled
            >Button</mxpButton
          >
        </div>
        <div class="flex mx-2 flex-col items-center">
          Subtle<mxpButton small square subtle>Button</mxpButton>
        </div>
        <div class="flex mx-2 flex-col items-center">
          Subtle (disabled)<mxpButton small square subtle disabled
            >Button</mxpButton
          >
        </div>
      </div>
      <!-- Small rounded -->
      <div class="flex items-center justify-center m-2">
        Small rounded
        <div class="flex mx-2 flex-col items-center">
          Filled<mxpButton rounded small filled>Button</mxpButton>
        </div>
        <div class="flex mx-2 flex-col items-center">
          Filled (disabled)<mxpButton rounded small filled disabled
            >Button</mxpButton
          >
        </div>
        <div class="flex mx-2 flex-col items-center">
          Stroke<mxpButton rounded small stroke>Button</mxpButton>
        </div>
        <div class="flex mx-2 flex-col items-center">
          Stroke (disabled)<mxpButton rounded small stroke disabled
            >Button</mxpButton
          >
        </div>
        <div class="flex mx-2 flex-col items-center">
          Subtle<mxpButton small rounded subtle>Button</mxpButton>
        </div>
        <div class="flex mx-2 flex-col items-center">
          Subtle (disabled)<mxpButton small rounded subtle disabled
            >Button</mxpButton
          >
        </div>
      </div>
    </div>

    <!-- Inputs -->
    <div class="flex justify-center" v-if="tab == 'inputs'">
      <div class="w-1/4 flex flex-col justify-center">
        <mxpTextInput placeholder="Text field" />
        <mxpTextInput description placeholder="Text area" />
        <mxpTextInput
          placeholder="Success field"
          successMessage="Success message"
        />
        <mxpTextInput placeholder="Error field" errorMessage="Error message" />
      </div>
    </div>
  </div>
</template>
