<script setup lang="ts">
import { ref } from "vue"

interface Todo {
  id: number
  title: string
}

// บอก generic type ให้ ref ตรง ๆ ว่าอาเรย์นี้เก็บ Todo[]
const todos = ref<Todo[]>([])

todos.value.push({ id: 1, title: "เรียน Vue + TypeScript" })
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
  </ul>
</template>
