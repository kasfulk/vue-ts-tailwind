<template>
  <div class="flex justify-center">
    <h1>{{ msg }}</h1>
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
    let msg = ref(props.msg);

    return { msg };
  },
});
export default HelloWorld;
</script>
