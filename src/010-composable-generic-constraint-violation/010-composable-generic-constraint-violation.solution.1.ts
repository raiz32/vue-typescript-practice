import { ref } from "vue"

function useCounter<T extends number>(initial: T) {
  const count = ref(initial)
  return count
}

// ส่ง number จริง ๆ เข้าไปให้ตรงกับ constraint ที่ประกาศไว้
const count = useCounter(5)
