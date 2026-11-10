<script setup lang="ts">
interface Item {
  id: number
  name: string
}

const items: Item[] = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
]

// อีกทางคือแก้ "สัญญา" ให้ตรงกับสิ่งที่อยากส่งจริง ๆ
// ใช้วิธีนี้เมื่อ id (number) คือสิ่งที่ parent ควรได้รับจริง ๆ ไม่ใช่ name
defineSlots<{
  item(props: { id: number }): any
}>()
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <slot name="item" :id="item.id" />
    </li>
  </ul>
</template>
