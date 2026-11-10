<script setup lang="ts">
import { ref } from "vue"

const count = ref(0)

// เข้าถึงค่าจริงผ่าน .value ก่อนเอาไปคำนวณ
const double = count.value * 2
</script>

<template>
  <p>{{ double }}</p>
</template>
