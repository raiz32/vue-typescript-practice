<script setup lang="ts">
// อีกทางคือขยาย union ให้รองรับ "medium" ด้วย ถ้า "medium" เป็นค่าที่ถูกต้องจริง ๆ
// ใช้วิธีนี้เมื่อ default เดิมถูกต้องอยู่แล้ว แต่ type ที่ประกาศไว้แคบเกินไป
interface Props {
  size: "sm" | "md" | "lg" | "medium"
}

const props = withDefaults(defineProps<Props>(), {
  size: "medium",
})
</script>

<template>
  <div :class="`size-${props.size}`" />
</template>
