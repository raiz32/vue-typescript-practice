import { defineStore } from "pinia"

// อีกทางคือแก้ที่ parameter ของ action ให้รับ number ตั้งแต่ต้น
// ใช้วิธีนี้เมื่อฝั่งที่เรียก action นี้ส่ง number มาอยู่แล้ว ไม่จำเป็นต้องรับ string เลย
export const useCartStore = defineStore("cart", {
  state: () => ({
    totalPrice: 0 as number,
  }),
  actions: {
    addDiscount(amount: number) {
      this.totalPrice += amount
    },
  },
})
