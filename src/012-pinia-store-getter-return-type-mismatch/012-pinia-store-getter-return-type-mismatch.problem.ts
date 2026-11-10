// ตัวอย่างนี้เป็นโค้ดสมมติ (pinia ยังไม่ได้ติดตั้งในโฟลเดอร์นี้) ใช้ฝึกอ่าน error เท่านั้น
import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  getters: {
    // ประกาศ return type ของ getter ไว้ชัดเจนว่าต้องเป็น number
    doubleCount(state): number {
      // error: Type 'string' is not assignable to type 'number'.
      // อ่าน: state.count + "x" เป็นการต่อ string ผลลัพธ์จึงเป็น string ไม่ตรงกับ return type ที่ประกาศไว้ (number)
      return state.count + "x"
    },
  },
})
