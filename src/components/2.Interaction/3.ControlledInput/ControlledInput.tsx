import { useState } from "react";

export function ControlledInput() {
  const [text, setText] = useState("");

  return (
    <div className="p-6 border rounded max-w-md space-y-4">
      <h2 className="text-xl font-bold">Controlled Input</h2>
      <label htmlFor="controlled" className="block font-medium">
        Type something:
      </label>
      <input
        id="controlled"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Controlled input"
        className="border p-2 w-full rounded"
      />
      <p data-testid="display">You typed: {text || "(empty)"}</p>
    </div>
  );
}
