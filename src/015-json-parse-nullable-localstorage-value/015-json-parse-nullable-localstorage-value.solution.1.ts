interface TableOptions {
  page: number
  itemsPerPage: number
}

const saved = localStorage.getItem("tableStatusOptions")

// ถ้า saved เป็น null (ยังไม่เคยเซฟไว้) ให้ใช้ค่า default แทน ไม่ส่ง null เข้า JSON.parse
const options: TableOptions = saved ? JSON.parse(saved) : { page: 1, itemsPerPage: 10 }
