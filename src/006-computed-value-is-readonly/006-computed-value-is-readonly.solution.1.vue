<script setup lang="ts">
import { ref, computed } from "vue"

const count = ref(1)
const double = computed(() => count.value * 2)

// ถ้าอยากเปลี่ยนค่า ต้องไปเปลี่ยนที่ "ต้นทาง" (count) แทน
// double จะคำนวณค่าใหม่ให้เองโดยอัตโนมัติ
count.value = 5
</script>

<template>
  <p>{{ double }}</p>
</template>
