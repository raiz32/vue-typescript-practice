<script setup lang="ts">
// tuple [value: number] คือ "สัญญา" ว่า event change จะส่ง argument เป็น number เท่านั้น
const emit = defineEmits<{
  change: [value: number]
}>()

function onInputChange(e: Event) {
  const target = e.target as HTMLInputElement

  // error: Argument of type 'string' is not assignable to parameter of type 'number'.
  // argument: ค่าที่ "ส่งเข้า" function ตอนเรียกใช้งาน
  // อ่าน: target.value เป็น string เสมอ แต่ emit "change" ต้องการ number ตามที่ประกาศไว้ด้านบน
  emit("change", target.value)
}
</script>

<template>
  <input type="number" @input="onInputChange" />
</template>
