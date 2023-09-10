<script setup>
//@ts-check
import { ref } from "vue";

const count = ref(0);

function increment() {
  count.value++;
}

const props = defineProps(["title"]);

console.log(props.title);
</script>

<template>
  <div>
    Haii <button @click="increment">Clicked {{ count }} times!!!</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
</style>
