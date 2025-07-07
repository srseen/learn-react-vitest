# React Component Lab

> รวมตัวอย่างการใช้งาน React component ตั้งแต่พื้นฐานถึงระดับกลาง พร้อมทดสอบด้วย Vitest และตกแต่งด้วย TailwindCSS

## จุดประสงค์

- เรียนรู้และฝึกใช้งาน React component โดยแยกแต่ละหัวข้อ
- ทดสอบทุก component ด้วย Vitest + Testing Library
- ใช้ TailwindCSS สำหรับตกแต่ง UI

## Stack

- React + Vite + TypeScript
- TailwindCSS
- React Router (Lib React Router DOM)
- Vitest + React Testing Library

## 📁 โครงสร้างตัวอย่าง

```
src/
├── components/
│   ├── basics/
│   ├── hooks/
│   ├── interaction/
│   ├── context/
│   └── ui/
├── App.tsx
├── main.tsx
```
## วิธีใช้งาน

```bash
npm install
npm run dev
npm run test
```

- Test

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```
