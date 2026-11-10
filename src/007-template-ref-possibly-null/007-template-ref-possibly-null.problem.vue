<script setup lang="ts">
import { ref, onMounted } from "vue"

// ตอนประกาศ ยังไม่มี element จริงให้ผูก จึงต้องใส่ null ไว้ก่อน
// type ที่ได้คือ Ref<HTMLInputElement | null>
const inputRef = ref<HTMLInputElement | null>(null)

onMounted(() => {
  // error: 'inputRef.value' is possibly 'null'.
  // possibly 'null': อาจจะเป็น null ได้ ไม่ใช่ HTMLInputElement เพียวๆ
  // focus เป็น method ของ HTMLInputElement เท่านั้น เรียกบน null ไม่ได้
  // อ่าน: inputRef.value อาจยังไม่ถูก mount จริง (เช่นอยู่ใน v-if) จึงต้องเช็ค null ก่อนใช้
  inputRef.value.focus()
})
</script>

<template>
  <input ref="inputRef" type="text" />
</template>
