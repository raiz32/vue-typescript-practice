<script setup lang="ts">
import { ref } from "vue"

const count = ref(0)

// error: Operator '*' cannot be applied to types 'Ref<number, number>' and 'number'.
// Ref<number, number>: count ไม่ใช่ number ตรง ๆ แต่เป็น "กล่อง" ที่ครอบ number ไว้
// ต้องเข้าถึงค่าจริงผ่าน .value ก่อน ถึงจะเอามาคูณกับ number ได้
// อ่าน: เอาตัว "กล่อง" ไปคูณกับ number ตรง ๆ ไม่ได้ ต้องแกะกล่องก่อน
const double = count * 2
</script>

<template>
  <p>{{ double }}</p>
</template>
