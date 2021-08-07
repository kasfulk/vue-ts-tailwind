<template>
  <div class="flex justify-center">
  </div>
  <div class="py-6 w-full flex justify-center">
    <h1>{{ msg1 }}</h1>
    <br />
    <h1>{{ name }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

const props = {
  msg: String,
};

const HelloWorld = defineComponent({
  name: "Hello World",
  props: props,
  setup(props) {
    let msg1 = ref(props.msg);
    const name = ref("John Doe");
    return { msg1, name };
  },
});
export default HelloWorld;
</script>
