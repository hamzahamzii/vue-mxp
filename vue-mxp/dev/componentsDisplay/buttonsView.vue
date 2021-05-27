<template>
  <!-- Square -->
  <div class="flex text-sm items-center justify-center m-2">
    <b>Square</b>
    <div class="flex mx-2 flex-col items-center">
      Filled<mxpButton square filled>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Filled (loading)<mxpButton square loader filled>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Filled (disabled)<mxpButton square filled disabled>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Stroke<mxpButton square stroke>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Stroke (loading)<mxpButton square loader stroke>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Stroke (disabled)<mxpButton square stroke disabled>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle<mxpButton square subtle>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle (loading)<mxpButton square loader subtle>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle (disabled)<mxpButton square subtle disabled>Button</mxpButton>
    </div>
  </div>
  <hr />
  <!-- Rounded -->
  <div class="flex text-sm items-center justify-center m-2">
    <b>Rounded</b>
    <div class="flex mx-2 flex-col items-center">
      Filled<mxpButton rounded filled>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Filled (loading)<mxpButton rounded loader filled>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Filled (disabled)<mxpButton rounded filled disabled>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Stroke<mxpButton rounded stroke>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Stroke (loading)<mxpButton rounded loader stroke>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Stroke (disabled)<mxpButton rounded stroke disabled>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle<mxpButton rounded subtle>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle (loading)<mxpButton rounded loader subtle>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle (disabled)<mxpButton rounded subtle disabled>Button</mxpButton>
    </div>
  </div>
  <hr />
  <!-- Small square -->
  <div class="flex text-sm items-center justify-center m-2">
    <b>Small square</b>
    <div class="flex mx-2 flex-col items-center">
      Filled<mxpButton square small filled>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Filled (loading)<mxpButton square small loader filled>Button</mxpButton>
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
      Stroke (loading)<mxpButton square small loader stroke>Button</mxpButton>
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
      Subtle (loading)<mxpButton small square loader subtle>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle (disabled)<mxpButton small square subtle disabled
        >Button</mxpButton
      >
    </div>
  </div>
  <hr />
  <!-- Small rounded -->
  <div class="flex text-sm items-center justify-center m-2">
    <b>Small rounded</b>
    <div class="flex mx-2 flex-col items-center">
      Filled<mxpButton rounded small filled>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Filled (loading)<mxpButton rounded small loader filled>Button</mxpButton>
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
      Stroke (loading)<mxpButton rounded small loader stroke>Button</mxpButton>
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
      Subtle (loading)<mxpButton small rounded loader subtle>Button</mxpButton>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle (disabled)<mxpButton small rounded subtle disabled
        >Button</mxpButton
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { mxpButton } from "@/entry.esm";

export default defineComponent({
  name: "buttonsView",
  components: {
    mxpButton,
  },
});
</script>