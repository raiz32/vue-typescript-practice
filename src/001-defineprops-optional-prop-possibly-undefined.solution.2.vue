<script setup lang="ts">
interface Props {
  label?: string
}

// ให้ withDefaults กำหนดค่า default ตั้งแต่ตอนรับ prop
// หลังจากนี้ type ของ props.label จะเป็น string ล้วน ไม่มี undefined อีกต่อไป
const props = withDefaults(defineProps<Props>(), {
  label: "",
})

const upperLabel = props.label.toUpperCase()
</script>

<template>
  <span>{{ upperLabel }}</span>
</template>
