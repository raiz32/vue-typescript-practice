<script setup lang="ts">
interface Props {
  // literal union: size ต้องเป็นหนึ่งใน 3 ค่านี้เท่านั้น ไม่ใช่ string ทั่วไป
  size: "sm" | "md" | "lg"
}

// error: Type '"medium"' is not assignable to type '"sm" | "md" | "lg"'.
// assignable: เอา source ไปใส่ target ได้โดยไม่ผิด type
// อ่าน: ค่า default "medium" ไม่ได้อยู่ใน union "sm" | "md" | "lg" เลยใส่ไม่ได้
const props = withDefaults(defineProps<Props>(), {
  size: "medium",
})
</script>

<template>
  <div :class="`size-${props.size}`" />
</template>
