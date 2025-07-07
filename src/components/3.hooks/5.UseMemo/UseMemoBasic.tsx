import { useState, useMemo } from "react";

function heavyCalculation(num: number) {
  console.log("Calculating...");
  let result = 0;
  for (let i = 0; i < 1_000_000_0; i++) {
    result += i * num;
  }
  return result;
}

export function UseMemoBasic() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  // useMemo จะคำนวณใหม่เมื่อ num เปลี่ยนเท่านั้น
  const computedValue = useMemo(() => heavyCalculation(num), [num]);

  return (
    <div className="p-6 border rounded space-y-4">
      <h2 className="text-xl font-bold">useMemo Example</h2>
      <p className="text-lg">
        Computed Value: <span className="font-semibold">{computedValue}</span>
      </p>
      <div className="flex space-x-2">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Increment Count: {count}
        </button>
        <button
          onClick={() => setNum((n) => n + 1)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
        >
          Change Num: {num}
        </button>
      </div>
    </div>
  );
}
