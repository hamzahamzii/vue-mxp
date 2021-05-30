<template>
  <div class="flex slef-center flex-col">
    <!-- Element Colors -->
    <div class="flex flex-col justify-center">
    <b class="m-3">Elements Colors</b>
    <div class="flex mx-4 flex-col justify-center">
        <div> <span>Body Text color :</span>  Text in body (Lorem Ipsum is simply dummy text of the printing and typesetting industry.)</div>
        <div> <span>Active Link color :</span> <a href="https://www.google.com/">Link to google</a></div>
        <div> <span>Lable color :</span> <label for="">Lable text </label></div>
        <div> <span>Placeholder color:</span> <input class="p-1 m-1 border-2 border-black-1000 rounded-lg" type="text" placeholder="Placeholder"></div>
        <div> <span>Input background color:</span> <input class="p-1 m-1 border-2 border-black-1000 rounded-lg" type="text" placeholder="Placeholder"></div>        
    </div>
    </div>
    <hr class="m-3">
    
    <!-- Background Colors Colors -->
    <div class="flex flex-col justify-center">
    <b class="m-3"> Background Colors</b>
    <div class="flex justify-center">
    <div class="rounded-lg m-2 p-2 primary">Primary</div>
    <div class="rounded-lg m-2 p-2 secondary">Secondary</div>
    <div class="rounded-lg m-2 p-2 error">Error</div>
    <div class="rounded-lg m-2 p-2 warning">Warning</div>
    <div class="rounded-lg m-2 p-2 gradient-primary">Gradient-primary</div>
    <div class="rounded-lg m-2 p-2 gradient-secondary">Gradient-secondary</div>
    <div class="rounded-lg m-2 p-2 gradient-accent">Gradient-accent</div>
    </div>
    </div>
    <hr class="m-3">

    <!-- Typography -->
    <div class="m-4">
    <!-- Display -->
    <div>
    <b>Typography (Display)</b>
    <div class="flex">
        <div class="flex flex-col">
           <div class="display-large">Display Large</div>
           <div class="display-large-bold">Display Large Bold</div>
           <div class="display-medium">Display Medium</div>
           <div class="display-medium-bold">Display Medium Bold</div>
           <div class="display-small">Display Small</div>
           <div class="display-small-bold">Display Small Bold</div>
        </div>
    </div>
    </div>
    <hr class="m-3">
    <!-- Text -->
    <div class="my-5">
    <b>Typography (Text)</b>
    <div class="flex my-3">
        <div class="flex flex-col">
           <div class="text-large">Text Large</div>
           <div class="text-medium">Text Medium</div>
           <div class="text-small">Text Small</div>
           <div class="text-x-small">Text Extra Small</div>
           <div class="link-large"><a href="https://www.google.com/">Link Large</a></div>
           <div class="link-medium"><a href="https://www.google.com/">Link Medium</a></div>
           <div class="link-small"><a href="https://www.google.com/">Link Small</a></div>
           <div class="link-x-small"><a href="https://www.google.com/">Link Extra Small</a></div>
        </div>
    </div>
    </div>
    </div>



    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "colorsTypography",
});
</script>