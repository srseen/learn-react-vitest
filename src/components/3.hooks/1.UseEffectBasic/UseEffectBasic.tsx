import { useEffect, useState } from "react";

export function UseEffectBasic() {
  const [count, setCount] = useState(0);
  const [log, setLog] = useState<string[]>([]);

  useEffect(() => {
    setLog((prev) => [...prev, `Effect triggered: count = ${count}`]);
  }, [count]);

  return (
    <div className="p-6 border rounded space-y-4">
      <h2 className="text-xl font-bold">useEffect (Basic)</h2>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Increment
      </button>

      <div>
        <h3 className="font-semibold mt-4">Effect Log:</h3>
        <ul className="list-disc pl-5">
          {log.map((line, index) => (
            <li key={index} data-testid="log-line">
              {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
