<template>
  <div class="w-full flex justify-center">
    <div
      class="
        border
        bg-green-500
        p-3
        rounded-lg
        hover:text-white
        cursor-pointer
        w-36
        font-bold
        flex
        justify-center
      "
      @click="clickAdd"
    >
      + Count {{ count }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

const ButtonClickAdd = defineComponent({
  name: "Button Click Add",
  setup() {
    let count = ref(0);

    const clickAdd = (): void => {
      count.value++;
    };

    return { clickAdd, count };
  },
});
export default ButtonClickAdd;
</script>
