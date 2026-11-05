<script setup lang="ts">
import { ref, computed } from "vue"

const count = ref(1)
const double = computed(() => count.value * 2)

// error: Cannot assign to 'value' because it is a read-only property.
// read-only: อ่านได้อย่างเดียว ห้ามเขียนทับ
// อ่าน: double คำนวณมาจาก count เสมอ จะไปกำหนดค่าตรง ๆ ให้ double.value ไม่ได้
double.value = 10
</script>

<template>
  <p>{{ double }}</p>
</template>
