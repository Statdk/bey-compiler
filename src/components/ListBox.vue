<script setup>
import ListItem from "./ListItem.vue";

defineProps({
  list: [{ name: String }],
});
</script>

<template>
  <div class="box">
    <ListItem v-for="item in list" :item="item"></ListItem>
  </div>
</template>

<style scoped>
.box {
  display: grid;
  grid-column: auto auto auto auto;

  width: 75%;
  margin: auto;
}
</style>
