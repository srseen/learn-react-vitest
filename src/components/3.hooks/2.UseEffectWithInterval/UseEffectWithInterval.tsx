import { useState, useEffect } from "react";

export function UseEffectWithInterval() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="p-6 border rounded space-y-4">
      <h2 className="text-xl font-bold">useEffect (With Interval)</h2>
      <p data-testid="counter" className="text-lg">
        Count: <span className="font-semibold">{count}</span>
      </p>
    </div>
  );
}
