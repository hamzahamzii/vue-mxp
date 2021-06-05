<template>
  <h1 class="display-medium-bold m-4">Signup</h1>
  <div class="p-10 m-3 w-full max-w-xl shadow-2xl">
    <mxp-txt-input
      class="my-4 shadow-md"
      icon="user"
      small
      placeholder="User name"
    />
    <mxp-txt-input class="my-4 shadow-md" icon="envelope" small placeholder="Email" />
    <mxp-txt-input
      type="Password"
      class="my-4 shadow-md"
      icon='envelope'
      small
      placeholder="Password"
    />
    <div class="flex my-4">
      <mxp-radio-btn></mxp-radio-btn>
      <small class="my-1 mx-1">Male</small>
      <mxp-radio-btn class="mx-1"></mxp-radio-btn>
      <small class="my-1 mx-1">Female</small>
    </div>
    <div class="flex my-4">
      <mxp-check-box></mxp-check-box>
      <small class="my-1 mx-1">I accept all the terms and conditions.</small>
    </div>
    <mxp-btn class="sm:float-right" rounded filled>Signup</mxp-btn>
  </div>
</template>