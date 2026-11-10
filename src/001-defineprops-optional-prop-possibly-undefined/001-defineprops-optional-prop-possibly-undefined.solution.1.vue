<script setup lang="ts">
interface Props {
  label?: string
}

const props = defineProps<Props>()

// optional chaining + fallback: ถ้า label เป็น undefined ให้ใช้ "" แทน
// หลังผ่าน ?? "" type จะแคบลงเหลือ string ล้วน จึงเรียก toUpperCase ได้
const upperLabel = (props.label ?? "").toUpperCase()
</script>

<template>
  <span>{{ upperLabel }}</span>
</template>
