import { useEffect, useState } from "react";

export function UseEffectWithDependency() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(`Count is ${count}`);
  }, [count]);

  return (
    <div className="p-6 border rounded space-y-4">
      <h2 className="text-xl font-bold">useEffect (With Dependency)</h2>
      <p className="text-lg">
        Current Count: <span className="font-semibold">{count}</span>
      </p>
      <p data-testid="message" className="text-md text-gray-700">
        {message}
      </p>
      <div className="flex space-x-2">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
