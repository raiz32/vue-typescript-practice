// ตัวอย่างอิงจาก pattern จริงที่เจอใน production: อ่านค่าที่เซฟไว้จาก localStorage มา JSON.parse ตรง ๆ
interface TableOptions {
  page: number
  itemsPerPage: number
}

// localStorage.getItem คืนค่าเป็น string | null เสมอ (null ถ้าไม่มี key นี้เก็บไว้มาก่อน)
const saved = localStorage.getItem("tableStatusOptions")

// error: Argument of type 'string | null' is not assignable to parameter of type 'string'.
// อ่าน: saved อาจเป็น null ได้ (ยังไม่เคยเซฟไว้) แต่ JSON.parse ต้องการ string เท่านั้น ห้ามส่ง null เข้าไป
const options: TableOptions = JSON.parse(saved)
