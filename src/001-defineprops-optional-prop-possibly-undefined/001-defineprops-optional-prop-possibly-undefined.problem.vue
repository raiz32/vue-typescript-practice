<script setup lang="ts">
interface Props {
  // "?" แปลว่า prop นี้จะไม่ส่งมาก็ได้ -> type จริงคือ string | undefined
  label?: string
}

const props = defineProps<Props>()

// error: 'props.label' is possibly 'undefined'.
// possibly 'undefined': อาจจะเป็น undefined ได้ ไม่ใช่ string เพียวๆ
// toUpperCase เป็น method ของ string เท่านั้น เรียกบน undefined ไม่ได้
// อ่าน: label อาจไม่ถูกส่งมาจาก parent เลยต้องกันเคส undefined ก่อนใช้งาน
const upperLabel = props.label.toUpperCase()
</script>

<template>
  <span>{{ upperLabel }}</span>
</template>
