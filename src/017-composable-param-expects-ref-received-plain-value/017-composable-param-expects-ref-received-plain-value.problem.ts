import { type Ref } from "vue"

// composable นี้ตั้งใจรับ loading ref จากข้างนอก เพื่อ toggle สถานะ loading ของ parent ได้โดยตรงผ่าน .value
function useVerifyInvoiceList(loading: Ref<boolean>) {
  async function fn_loadAccount() {
    loading.value = true
    // ... โหลดข้อมูลจริง
    loading.value = false
  }
  return { fn_loadAccount }
}

// isLoading เป็น boolean ธรรมดา ไม่ได้ครอบด้วย ref()
const isLoading = false

// error: Argument of type 'boolean' is not assignable to parameter of type 'Ref<boolean, boolean>'.
// อ่าน: useVerifyInvoiceList ต้องการ Ref<boolean> (ตัว "กล่อง" ที่มี .value ให้แก้ไขค่าข้างนอกได้)
// แต่ isLoading เป็น boolean ธรรมดา ไม่มี .value ให้แก้ จึงไม่ตรงกับ parameter ที่ประกาศไว้
const { fn_loadAccount } = useVerifyInvoiceList(isLoading)
