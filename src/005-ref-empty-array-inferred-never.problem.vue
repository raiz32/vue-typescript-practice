<script setup lang="ts">
import { ref } from "vue"

interface Todo {
  id: number
  title: string
}

// ไม่ได้บอก type ไว้ และ initial value เป็น [] ว่าง ๆ
// TypeScript จึงเดา type ให้เป็น Ref<never[]> (อาเรย์ที่ "ห้ามมีสมาชิก" ตาม type)
const todos = ref([])

// error: Argument of type '{ id: number; title: string; }' is not assignable to parameter of type 'never'.
// never: type ที่ไม่มีค่าไหนใส่ได้เลย เพราะตอนประกาศไม่ได้บอกว่าอาเรย์นี้เก็บอะไร
// อ่าน: push object Todo เข้าไปใน todos ไม่ได้ เพราะ TypeScript คิดว่า todos เก็บอะไรไม่ได้เลย
todos.value.push({ id: 1, title: "เรียน Vue + TypeScript" })
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
  </ul>
</template>
