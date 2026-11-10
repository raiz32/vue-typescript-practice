import { defineStore } from "pinia"

export const useCartStore = defineStore("cart", {
  state: () => ({
    totalPrice: 0 as number,
  }),
  actions: {
    addDiscount(amount: string) {
      // แปลง string -> number ก่อนบวก ให้ตรงกับ type ของ totalPrice
      this.totalPrice += Number(amount)
    },
  },
})
