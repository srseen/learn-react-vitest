import { useState } from "react";

export function UseState() {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  const [items, setItems] = useState<string[]>([]);

  function handleAddItem() {
    setItems((prev) => [...prev, `Item ${prev.length + 1}`]);
  }

  function handleReset() {
    setName("");
    setCounter(0);
    setUser({ firstName: "", lastName: "" });
    setItems([]);
  }

  return (
    <div className="p-6 space-y-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold">useState Deep Dive</h2>

      {/* Primitive (string) */}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          className="border p-2 ml-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="mt-1">Hello, {name || "..."}</p>
      </div>

      {/* Primitive (number) with callback */}
      <div className="space-x-2">
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded"
          onClick={() => setCounter((c) => c + 1)}
        >
          +
        </button>
        <button
          className="px-2 py-1 bg-red-500 text-white rounded"
          onClick={() => setCounter((c) => c - 1)}
        >
          -
        </button>
        <span>Count: {counter}</span>
      </div>

      {/* Object */}
      <div>
        <label htmlFor="firstName" className="block">
          First Name:
        </label>
        <input
          id="firstName"
          className="border p-2 mb-2 w-full"
          type="text"
          value={user.firstName}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, firstName: e.target.value }))
          }
        />
        <label htmlFor="LastName" className="block">
          Last Name:
        </label>
        <input
          id="LastName"
          className="border p-2 w-full"
          type="text"
          value={user.lastName}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, lastName: e.target.value }))
          }
        />
        <p>
          Full Name: {user.firstName} {user.lastName}
        </p>
      </div>

      {/* Array */}
      <div className="space-y-2">
        <button
          className="px-3 py-1 bg-green-600 text-white rounded"
          onClick={handleAddItem}
        >
          Add Item
        </button>
        <ul className="list-disc pl-5">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Reset */}
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded"
        onClick={handleReset}
      >
        Reset All
      </button>
    </div>
  );
}
