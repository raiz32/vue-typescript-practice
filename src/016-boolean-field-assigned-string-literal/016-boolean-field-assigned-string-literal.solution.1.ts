interface Employee {
  name: string
  statusSuperAdmin: boolean
}

const employee: Employee = { name: "Somchai", statusSuperAdmin: true }

// เก็บค่า string ไว้ในตัวแปรแยกสำหรับส่งให้ API เท่านั้น ไม่เขียนทับ field เดิมที่เป็น boolean
const statusSuperAdminForApi = employee.statusSuperAdmin ? "true" : "false"
