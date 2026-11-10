// ตัวอย่างอิงจาก pattern จริงที่เจอใน production: route.query.code ถูกส่งตรงเข้า
// ฟังก์ชัน decode โดยไม่เช็ค type ก่อน (ไม่ได้ติดตั้ง vue-router ในโฟลเดอร์นี้ เลยจำลอง type ของ route.query ไว้ตรงนี้
// ให้ตรงกับของจริงใน vue-router เพื่อฝึกอ่าน error โดยไม่ต้องรันจริง)
type LocationQueryValue = string | null
type LocationQueryValueRaw = LocationQueryValue | LocationQueryValue[]

declare const route: { query: Record<string, LocationQueryValueRaw> }

function decodeInvoiceCode(code: string): { invoiceId: number } {
  return { invoiceId: Number(code) }
}

// error: Argument of type 'LocationQueryValueRaw' is not assignable to parameter of type 'string'.
// อ่าน: route.query.code อาจเป็น string, null, หรือ array ของ string ก็ได้ (ตาม type จริงของ vue-router)
// ไม่ใช่ string เพียว ๆ เหมือนที่ decodeInvoiceCode ต้องการ
const decoded = decodeInvoiceCode(route.query.code)
