<script setup>
import beyData from "../json/beyData.json";
import { ref } from "vue";

const emit = defineEmits(["create"]);

let partName = ref("");
let partType = ref("");
let partSystem = ref("");
let isShown = ref(false);

function create() {
  toggle();
  emit("create", {
    name: partName.value,
    data: {
      type: partType.value,
      system: partSystem.value,
    },
  });
  partName.value = "";
  partType.value = "";
  partSystem.value = "";
}

function toggle() {
  isShown.value = !isShown.value;
}
</script>

<template>
  <div class="showBtnBox" v-show="!isShown">
    <button class="showBtn" :onclick="toggle">New Part +</button>
  </div>
  <form v-show="isShown" class="panel" @submit.prevent="create">
    <div class="hideBtnBox">
      <button class="hideBtn" :onclick="toggle">X</button>
    </div>
    <input
      class="panelTxt"
      type="text"
      id="partName"
      placeholder="Enter a Name..."
      v-model.trim="partName"
      required
    />
    <div>
      <input
        class="panelTxt"
        type="text"
        id="partSystem"
        placeholder="Enter a System..."
        maxlength="12"
        v-model.trim="partSystem"
      />
      <select v-model="partSystem">
        <option v-for="(value, key) in beyData.systems" :value="key">
          {{ key }}
        </option>
      </select>
      <input
        class="panelTxt"
        type="text"
        id="partType"
        placeholder="Enter a Type..."
        maxlength="12"
        v-model.trim="partType"
      />
      <select v-model="partType">
        <option
          v-for="(value, key) in beyData.systems[partSystem]"
          :value="key"
        >
          {{ key }}
        </option>
      </select>
    </div>
    <input type="submit" class="panelBtn" value="Create Part" />
  </form>
</template>

<style>
.panel {
  display: inline-block;

  margin: 15px;
  padding: 15px;

  background-color: #00000022;
  border: 1px solid black;
  border-radius: 10px;
}

.panelTxt {
  margin: 5px;
  padding: 15px;

  height: auto;
  width: auto;
}
.panelBtn {
  margin: 5px;
  padding: 5px;

  height: fit-content;
  width: fit-content;
}

.showBtnBox {
  margin: auto;
  margin-top: 20px;
  justify-content: center;
  display: flex;
}
.showBtn {
  padding: 4px;
}

.hideBtnBox {
  margin: auto;
  justify-content: right;
  display: flex;
}
.hideBtn {
  padding: 5px;
}
</style>
