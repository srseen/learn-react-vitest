import { useState } from "react";

export function EventHandling() {
  const [clickCount, setClickCount] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="p-6 border rounded space-y-4">
      {/* onClick */}
      <div>
        <button
          onClick={() => setClickCount((prev) => prev + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Click me
        </button>
        <p>You clicked {clickCount} times</p>
      </div>

      {/* onMouseOver */}
      <div
        className="p-4 bg-gray-100 rounded cursor-pointer"
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Hover over this box
        {hovered && <p className="text-green-600">Mouse is over the box!</p>}
      </div>

      {/* onChange */}
      <div>
        <input
          type="text"
          placeholder="Type something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <p className="mt-2">You typed: {inputValue}</p>
      </div>
    </div>
  );
}
