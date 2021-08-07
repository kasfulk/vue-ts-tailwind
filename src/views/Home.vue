<template>
  <div class="container">
    <div class="w-full flex justify-center"><img alt="Vue logo" src="../assets/logo.png" class="" /></div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    {{ webName }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Options } from "vue-class-component";
import { default as HelloWorld } from "@/components/HelloWorld.vue";

Options({
  components: {
    HelloWorld,
  },
});

const webName = ref("Vue.js + TypeScript");
</script>
