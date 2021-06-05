<template>
  <!-- Buttons -->
  <!-- Square -->
  <div class="flex text-sm items-center justify-center m-2">
    <b>Square</b>
    <div class="flex mx-2 flex-col items-center ">
      Filled<mxp-btn square filled>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Filled (loading)<mxp-btn square loader filled>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Filled (disabled)<mxp-btn square filled disabled>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Stroke<mxp-btn square stroke>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Stroke (loading)<mxp-btn square loader stroke>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Stroke (disabled)<mxp-btn square stroke disabled>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle<mxp-btn square subtle>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle (loading)<mxp-btn square loader subtle>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle (disabled)<mxp-btn square subtle disabled>Button</mxp-btn>
    </div>
  </div>
  <hr />
  <!-- Rounded -->
  <div class="flex text-sm items-center justify-center m-2">
    <b>Rounded</b>
    <div class="flex mx-2 flex-col items-center">
      Filled<mxp-btn rounded filled>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Filled (loading)<mxp-btn rounded loader filled>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Filled (disabled)<mxp-btn rounded filled disabled>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Stroke<mxp-btn rounded stroke>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Stroke (loading)<mxp-btn rounded loader stroke>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Stroke (disabled)<mxp-btn rounded stroke disabled>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle<mxp-btn rounded subtle>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle (loading)<mxp-btn rounded loader subtle>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle (disabled)<mxp-btn rounded subtle disabled>Button</mxp-btn>
    </div>
  </div>
  <hr />
  <!-- Small square -->
  <div class="flex text-sm items-center justify-center m-2">
    <b>Small square</b>
    <div class="flex mx-2 flex-col items-center">
      Filled<mxp-btn square small filled>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Filled (loading)<mxp-btn square small loader filled>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Filled (disabled)<mxp-btn square small filled disabled
        >Button</mxp-btn
      >
    </div>
    <div class="flex mx-2 flex-col items-center">
      Stroke<mxp-btn square small stroke>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Stroke (loading)<mxp-btn square small loader stroke>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Stroke (disabled)<mxp-btn square small stroke disabled
        >Button</mxp-btn
      >
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle<mxp-btn small square subtle>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle (loading)<mxp-btn small square loader subtle>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle (disabled)<mxp-btn small square subtle disabled
        >Button</mxp-btn
      >
    </div>
  </div>
  <hr />
  <!-- Small rounded -->
  <div class="flex text-sm items-center justify-center m-2">
    <b>Small rounded</b>
    <div class="flex mx-2 flex-col items-center">
      Filled<mxp-btn rounded small filled>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Filled (loading)<mxp-btn rounded small loader filled>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Filled (disabled)<mxp-btn rounded small filled disabled
        >Button</mxp-btn
      >
    </div>
    <div class="flex mx-2 flex-col items-center">
      Stroke<mxp-btn rounded small stroke>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Stroke (loading)<mxp-btn rounded small loader stroke>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Stroke (disabled)<mxp-btn rounded small stroke disabled
        >Button</mxp-btn
      >
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle<mxp-btn small rounded subtle>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle (loading)<mxp-btn small rounded loader subtle>Button</mxp-btn>
    </div>
    <div class="flex mx-2 flex-col items-center">
      Subtle (disabled)<mxp-btn small rounded subtle disabled
        >Button</mxp-btn
      >
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { mxpBtn } from "@/entry.esm";

export default defineComponent({
  name: "buttonsView",
  components: {
    mxpBtn,
  },
});
</script>