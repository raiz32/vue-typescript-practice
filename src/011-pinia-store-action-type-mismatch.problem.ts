// ตัวอย่างนี้เป็นโค้ดสมมติ (pinia ยังไม่ได้ติดตั้งในโฟลเดอร์นี้) ใช้ฝึกอ่าน error เท่านั้น
// ไม่ต้อง npm install ก็อ่านและเข้าใจ error ได้ ถ้าจะรันจริงต้องติดตั้ง pinia ก่อน
import { defineStore } from "pinia"

export const useCartStore = defineStore("cart", {
  state: () => ({
    // state() คืนค่าตอน init เท่านั้น -> TypeScript ล็อก type ของ totalPrice เป็น number
    totalPrice: 0 as number,
  }),
  actions: {
    addDiscount(amount: string) {
      // error: Operator '+=' cannot be applied to types 'number' and 'string'.
      // อ่าน: this.totalPrice เป็น number แต่ amount ที่รับเข้ามาเป็น string บวกกันตรง ๆ ไม่ได้
      this.totalPrice += amount
    },
  },
})
