import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount(state): number {
      // คำนวณเป็น number ล้วน ๆ ให้ตรงกับ return type ที่ประกาศไว้
      return state.count * 2
    },
  },
})
