<script setup lang="ts">
interface Item {
  id: number
  name: string
}

const items: Item[] = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
]

defineSlots<{
  item(props: { name: string }): any
}>()
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <!-- ส่ง item.name (string) ให้ตรงกับที่ defineSlots ประกาศไว้ -->
      <slot name="item" :name="item.name" />
    </li>
  </ul>
</template>
