import { useState } from "react";

export function EventHandling() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prev) => prev + 1);
  }

  return (
    <div className="bg-blue-300 m-4 p-4 border rounded space-y-2">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Click me
      </button>
      <p>You clicked {count} times</p>
    </div>
  );
}
