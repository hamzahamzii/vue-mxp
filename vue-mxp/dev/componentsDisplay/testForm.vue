<template>
  <h1 class="display-medium-bold m-4">Signup</h1>
  <div class="p-10 m-3 w-full max-w-xl shadow-2xl">
    <mxpTextInput
      class="my-4 shadow-md"
      username
      small
      placeholder="User name"
    />
    <mxpTextInput class="my-4 shadow-md" email small placeholder="Email" />
    <mxpTextInput
      type="Password"
      class="my-4 shadow-md"
      pass
      small
      placeholder="Password"
    />
    <div class="flex my-4">
      <mxpRadioButton></mxpRadioButton>
      <small class="my-1 mx-1">Male</small>
      <mxpRadioButton class="mx-1"></mxpRadioButton>
      <small class="my-1 mx-1">Female</small>
    </div>
    <div class="flex my-4">
      <mxpCheckBox></mxpCheckBox>
      <small class="my-1 mx-1">I accept all the terms and conditions.</small>
    </div>
    <mxpButton class="" rounded filled>Signup</mxpButton>
  </div>
</template>