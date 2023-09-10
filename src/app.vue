<script setup>
import ListBox from "./components/ListBox.vue";

let foo = ["eef", "freef"];
</script>

<template>
  <ListBox list="{{foo}}"></ListBox>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
</style>
