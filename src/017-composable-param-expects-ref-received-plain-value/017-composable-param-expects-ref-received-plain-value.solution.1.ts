import { ref, type Ref } from "vue"

function useVerifyInvoiceList(loading: Ref<boolean>) {
  async function fn_loadAccount() {
    loading.value = true
    // ... โหลดข้อมูลจริง
    loading.value = false
  }
  return { fn_loadAccount }
}

// ครอบด้วย ref() ให้เป็น Ref<boolean> จริง ๆ ตามที่ composable ต้องการ
const isLoading = ref(false)

const { fn_loadAccount } = useVerifyInvoiceList(isLoading)
