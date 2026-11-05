<script setup lang="ts">
interface Props {
  size: "sm" | "md" | "lg"
}

// แก้ที่ค่า default ให้ตรงกับ union จริง ๆ (วิธีนี้แก้ตรงจุดที่ error บอก)
const props = withDefaults(defineProps<Props>(), {
  size: "md",
})
</script>

<template>
  <div :class="`size-${props.size}`" />
</template>
