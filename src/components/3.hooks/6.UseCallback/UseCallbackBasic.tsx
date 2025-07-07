import React, { useState, useCallback } from "react";

type ButtonProps = {
  onClick: () => void;
  label: string;
  className: string;
};

const ChildButton = React.memo(({ onClick, label, className }: ButtonProps) => {
  console.log("ChildButton rendered");
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
});

export function UseCallbackBasic() {
  const [count, setCount] = useState(0);

  // useCallback จะคืนฟังก์ชันเดิมถ้า dependencies ไม่เปลี่ยน
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div className="p-6 border rounded space-y-4">
      <h2 className="text-xl font-bold">useCallback Example</h2>
      <p data-testid="counter" className="text-lg">
        Count: {count}
      </p>
      <ChildButton
        onClick={increment}
        label="Increment"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      />
    </div>
  );
}
