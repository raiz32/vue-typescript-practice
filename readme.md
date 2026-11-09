# Vue + TypeScript: ฝึกอ่าน error และแก้

ชุดโจทย์สไตล์เดียวกับ `error-messages-tutorial` แต่ปรับมาเป็น Vue 3 + Composition API
เป้าหมายคือฝึกอ่าน compiler error message ของ Vue + TS แล้วแก้เอง ไม่จำเป็นต้อง `npm install`
หรือรันจริงก็ได้ — อ่านไฟล์ `.problem` แล้วลองเดาวิธีแก้จากคอมเมนต์ที่อธิบาย error ไว้
ก่อนเปิดไฟล์ `.solution` เทียบคำตอบ

ถ้าอยากรันตรวจจริงผ่าน `vue-tsc` (เห็น error บรรทัดที่แน่นอน):

```sh
npm install
npm run typecheck
```

## วิธีฝึก

1. เปิดไฟล์ `NNN-topic.problem.vue` (หรือ `.ts`)
2. อ่านคอมเมนต์ error message ที่ฝังไว้เหนือบรรทัดที่พัง อย่าดูแค่ว่า "error อะไร" แต่ลองแปลทุกคำศัพท์ในข้อความ error ก่อน
3. ลองแก้เองในใจ/ในไฟล์ก่อน
4. เทียบกับ `NNN-topic.solution.1.vue` (บางโจทย์มี `.solution.2` เป็นทางเลือกอื่น)

## รายการโจทย์ (เรียงจากพื้นฐาน -> ยาก)

### Props / Emits typing

- `001` optional prop เข้าถึง `.value` โดยไม่เช็ค `undefined`
- `002` `withDefaults` ใส่ default ไม่ตรงกับ literal union
- `003` `defineEmits` payload type ไม่ตรงกับที่ประกาศไว้

### ref / reactive / computed

- `004` ลืม `.value` ตอนเอา `ref` ไปคำนวณ
- `005` `ref([])` ไม่ระบุ generic เลยถูก infer เป็น `never[]`
- `006` เขียนทับ `computed().value` ที่เป็น read-only

### Template-level typing

- `007` template ref เป็น `null` ได้ แต่ไม่เช็คก่อนเรียก method
- `008` `defineModel<number>()` ใส่ค่าผิด type
- `009` `defineSlots` ส่ง prop ให้ slot ผิด type

### Composables & Pinia

- `010` composable generic มี constraint แต่ส่ง argument ผิด type
- `011` Pinia action บวกค่าที่ type ไม่ตรงกับ state
- `012` Pinia getter ประกาศ return type ไว้ แต่ return ค่าผิด type

> หมายเหตุ: โจทย์ `011` และ `012` อ้างอิง `pinia` ซึ่งยังไม่ได้ติดตั้งในโฟลเดอร์นี้ ใช้ฝึกอ่าน
> error แบบ conceptual ได้โดยไม่ต้องรันจริง ถ้าต้องการรันตรวจจริงให้ `npm install pinia` เพิ่ม

### ข้อมูลจากภายนอก (route / localStorage / production patterns)

> โจทย์กลุ่มนี้ปรับจาก pattern จริงที่เจอในโปรเจกต์ production (Vue 3 + JS ที่ยังไม่ได้ขึ้น TypeScript)
> โดยจำลองเป็นตัวอย่างสั้น ๆ แบบ TypeScript ให้ฝึกอ่าน error ประเภทที่มักเกิดตอนเอาโค้ด JS เดิมมาขึ้น type

- `013` ฟังก์ชัน format เงินประกาศรับ `string` แต่มีคนเอาผลคำนวณที่เป็น `number` ไปเรียกใช้ตรง ๆ
- `014` `route.query.code` จาก vue-router มี type กว้างกว่าที่คิด (`string | null | array`) ถูกส่งเข้าฟังก์ชันที่ต้องการ `string` เพียว ๆ โดยไม่เช็คก่อน
- `015` `localStorage.getItem()` คืนค่าเป็น `string | null` เสมอ แต่เอาไปใส่ `JSON.parse()` ตรง ๆ โดยไม่กันเคส `null`
- `016` field ที่ประกาศเป็น `boolean` ถูกเขียนทับด้วยค่า `string` `"true"/"false"` เพราะในโค้ดเดิมใช้ทั้งสองแบบสลับกัน
- `017` composable ต้องการ parameter เป็น `Ref<boolean>` แต่ผู้เรียกส่ง `boolean` ธรรมดาเข้าไปโดยไม่ได้ครอบด้วย `ref()`
