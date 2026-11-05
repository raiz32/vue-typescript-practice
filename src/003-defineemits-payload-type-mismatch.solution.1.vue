<script setup lang="ts">
const emit = defineEmits<{
  change: [value: number]
}>()

function onInputChange(e: Event) {
  const target = e.target as HTMLInputElement

  // แปลง string -> number ก่อน emit ออกไป ให้ตรงกับสัญญาที่ประกาศไว้
  emit("change", Number(target.value))
}
</script>

<template>
  <input type="number" @input="onInputChange" />
</template>
