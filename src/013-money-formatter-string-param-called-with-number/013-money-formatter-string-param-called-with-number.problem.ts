// ตัวอย่างอิงจาก pattern จริงที่เจอใน production: ฟังก์ชัน format เงินแยกกันสองตัว
// ตัวหนึ่งรับ string (ค่าจาก input field) อีกตัวรับ number (ผลจากการคำนวณ) แล้วมีคนเอาไปสลับใช้กัน
function formatComma(value: string): string {
  const raw = value.replace(/,/g, "")
  return Number(raw).toLocaleString("th-TH", { maximumFractionDigits: 2 })
}

// amounts เป็นผลคำนวณ (number) ไม่ใช่ค่าจาก input ฟอร์ม
const amounts = [1200, 350.5, 80]
const total = amounts.reduce((sum, amount) => sum + amount, 0)

// error: Argument of type 'number' is not assignable to parameter of type 'string'.
// argument: ค่าที่ "ส่งเข้า" function ตอนเรียกใช้งาน
// อ่าน: total ที่ reduce ได้เป็น number แต่ formatComma ประกาศรับ string เท่านั้น (เพราะออกแบบมาสำหรับ .replace บนค่าจาก input)
const totalDisplay = formatComma(total)
