<template>
  <div class="my-2 w-1/2 flex flex-col justify-center">
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
</template>
