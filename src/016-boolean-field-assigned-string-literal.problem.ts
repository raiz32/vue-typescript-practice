// ตัวอย่างอิงจาก pattern จริงที่เจอใน production: field เดิมถูกใช้ทั้งเป็น boolean และ string "true"/"false"
// สลับกันไปมาในคนละจุดของโค้ด จนมีจุดหนึ่งเผลอ assign string กลับเข้า field ที่ type เป็น boolean
interface Employee {
  name: string
  statusSuperAdmin: boolean
}

const employee: Employee = { name: "Somchai", statusSuperAdmin: true }

// error: Type 'string' is not assignable to type 'boolean'.
// อ่าน: statusSuperAdmin ถูกประกาศไว้เป็น boolean แต่โค้ดนี้พยายาม assign "true"/"false" (string)
// กลับเข้าไปใน field เดิม ซึ่งที่จริงค่า string นี้มีไว้สำหรับส่งให้ API เท่านั้น ไม่ควรเขียนทับ field ที่เป็น boolean
employee.statusSuperAdmin = employee.statusSuperAdmin === true ? "true" : "false"
