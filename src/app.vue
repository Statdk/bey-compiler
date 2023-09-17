<script setup>
import { ref } from "vue";
import DB from "./js/DB.js";

import PartPanel from "./components/PartPanel.vue";
import PartList from "./components/PartList.vue";

const PartDB = ref(new DB("parts"));
console.log(PartDB.value.getAll());

function createPart(data) {
  if (PartDB.value.get(data.name) === undefined) {
    PartDB.value.set(data.name, data.data);
    console.log(`New Part: ${data.name}\n${JSON.stringify(data)}`);
  } else {
    const countChar = "I";

    if (data.name.charAt(data.name.length - 1) != countChar) {
      data.name += " ";
    }
    data.name += countChar;

    createPart(data);
  }
}

function deletePart(name) {
  if (confirm(`Delete ${name}?`)) {
    PartDB.value.delete(name);
    console.log(`Deleted: ${name}`);
  }
}
</script>

<template>
  <h2>Parts List</h2>
  <PartPanel @create="createPart"></PartPanel>
  <PartList
    :list="PartDB.getAll()"
    :key="PartDB.keyValue"
    @delete="deletePart"
  ></PartList>
  <h2>Bey List</h2>
  <PartList></PartList>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

h2 {
  text-align: center;
  margin: auto;
}
</style>
