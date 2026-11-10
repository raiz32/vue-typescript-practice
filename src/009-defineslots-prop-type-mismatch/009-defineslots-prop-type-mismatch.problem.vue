<script setup lang="ts">
interface Item {
  id: number
  name: string
}

const items: Item[] = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
]

// defineSlots ประกาศ "สัญญา" ว่า slot ชื่อ item จะส่ง prop name เป็น string ให้ parent ใช้
defineSlots<{
  item(props: { name: string }): any
}>()
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <!--
        error: Type 'number' is not assignable to type 'string'.
        อ่าน: ส่ง item.id (number) ให้ slot prop ที่ชื่อ name แต่ name ถูกประกาศไว้ว่าต้องเป็น string
      -->
      <slot name="item" :name="item.id" />
    </li>
  </ul>
</template>
