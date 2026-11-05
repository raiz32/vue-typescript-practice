<script setup lang="ts">
// defineModel สร้าง ref ที่ sync สองทางกับ v-model ของ parent โดยอัตโนมัติ
// <number> คือสัญญาว่า v-model ตัวนี้ต้องเป็นตัวเลขเท่านั้น
const model = defineModel<number>()

function reset() {
  // error: Type 'string' is not assignable to type 'number'.
  // อ่าน: model.value ถูกประกาศไว้ว่าต้องเป็น number แต่ใส่ "" (string) เข้าไปไม่ได้
  model.value = ""
}
</script>

<template>
  <input :value="model" type="number" />
  <button @click="reset">Reset</button>
</template>
