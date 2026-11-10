<script setup lang="ts">
import { ref, onMounted } from "vue"

const inputRef = ref<HTMLInputElement | null>(null)

onMounted(() => {
  // optional chaining: ถ้า inputRef.value เป็น null จะหยุดเรียก .focus() โดยไม่ error
  inputRef.value?.focus()
})
</script>

<template>
  <input ref="inputRef" type="text" />
</template>
