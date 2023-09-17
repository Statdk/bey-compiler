<script setup>
const props = defineProps({
  list: {
    required: true,
  },
  key: {
    required: true,
  },
}); // []"list", "key"]
const emit = defineEmits({
  delete: (name) => {
    if (typeof name === "string") {
      return true;
    } else {
      console.warn("Cannot delete part with no name!");
      return false;
    }
  },
});
</script>

<template>
  <div class="ListBox">
    <div class="ListItem" v-for="(data, name) in props.list">
      <div class="ListItemName">{{ name }}</div>
      <ul>
        <li>System: {{ data.system }}</li>
        <li>Type: {{ data.type }}</li>
      </ul>
      <button :onclick="() => $emit('delete', name)">Delete</button>
    </div>
  </div>
</template>

<style scoped>
.ListBox {
  display: flex;
  flex-wrap: wrap;

  margin: 20px;
  padding: 15px;
  min-height: 50px;

  border: 1px solid black;
  border-radius: 20px;
}
.ListItem {
  margin: 5px;
  padding: 10px;
  padding-right: 15px;

  height: fit-content;

  border: 1px solid black;
  border-radius: 5px;
}
.ListItemName {
  font-weight: bold;
  margin: 5px;
}
</style>
