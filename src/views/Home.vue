<template>
  <div class="container pt-6">
    <div class="w-full flex justify-center"><img alt="Vue logo" src="../assets/logo.png" class="" /></div>
    <HelloWorld msg="Welcome to " />
    <div class="w-full flex justify-center"> {{ webName }} </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { default as HelloWorld } from "@/components/HelloWorld.vue";

const webName = ref("Vue.js + TypeScript + Tailwind");
</script>
