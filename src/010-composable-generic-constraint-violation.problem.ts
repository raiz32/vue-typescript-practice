import { ref } from "vue"

// <T extends number> แปลว่า T ต้องเป็น number หรือ type ย่อยของ number เท่านั้น
function useCounter<T extends number>(initial: T) {
  const count = ref(initial)
  return count
}

// error: Argument of type 'string' is not assignable to parameter of type 'number'.
// อ่าน: "5" เป็น string ไม่ใช่ number เลยไม่ผ่าน constraint "T extends number" ที่ประกาศไว้
const count = useCounter("5")
