type LocationQueryValue = string | null
type LocationQueryValueRaw = LocationQueryValue | LocationQueryValue[]

declare const route: { query: Record<string, LocationQueryValueRaw> }

function decodeInvoiceCode(code: string): { invoiceId: number } {
  return { invoiceId: Number(code) }
}

// เช็คก่อนว่าเป็น string จริง ๆ ถ้าไม่ใช่ (null หรือ array) ก็ไม่เรียก decode
const code = route.query.code
const decoded = typeof code === "string" ? decodeInvoiceCode(code) : null
