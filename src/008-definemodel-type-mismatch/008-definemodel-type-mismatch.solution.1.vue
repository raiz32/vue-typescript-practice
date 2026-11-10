<script setup lang="ts">
const model = defineModel<number>()

function reset() {
  // ใส่ค่าให้ตรงกับ type ที่ประกาศไว้ (number) แทน
  model.value = 0
}
</script>

<template>
  <input :value="model" type="number" />
  <button @click="reset">Reset</button>
</template>
