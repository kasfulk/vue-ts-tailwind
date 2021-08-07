<template>
  <div class="pt-6 w-full">
    <div class="w-full flex justify-center"><img alt="Vue logo" src="../assets/logo.png" class="" /></div>
    <ButtonClickAdd />
    <HelloWorld class="w-full flex justify-center" msg="Welcome to " />
    <div class="w-full flex justify-center"> {{ webName }} </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { default as HelloWorld } from "@/components/HelloWorld.vue";
import { default as ButtonClickAdd } from "@/components/ButtonClickAdd.vue";

const webName = ref("Vue.js + TypeScript + Tailwind");
</script>
