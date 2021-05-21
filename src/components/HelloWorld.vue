<template>
  <div>
    <button class="px-3 py-2 hover:bg-red-500 bg-red-300">click me</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>