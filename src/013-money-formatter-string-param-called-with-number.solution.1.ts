function formatComma(value: string): string {
  const raw = value.replace(/,/g, "")
  return Number(raw).toLocaleString("th-TH", { maximumFractionDigits: 2 })
}

const amounts = [1200, 350.5, 80]
const total = amounts.reduce((sum, amount) => sum + amount, 0)

// แปลง total เป็น string ก่อนส่งเข้า formatComma ให้ตรงกับ parameter ที่ประกาศไว้
const totalDisplay = formatComma(String(total))
