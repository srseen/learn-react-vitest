type ChildProps = {
  onNotify: () => void;
};

export function Child({ onNotify }: ChildProps) {
  return (
    <button
      onClick={onNotify}
      className="px-4 py-2 bg-purple-600 text-white rounded"
    >
      Notify Parent
    </button>
  );
}

import { useState } from "react";

export function CallbackToParent() {
  const [message, setMessage] = useState("");

  const handleNotification = () => {
    setMessage("Child has notified the parent!");
  };

  return (
    <div className="p-6 border rounded space-y-4">
      <h2 className="text-xl font-bold">Callback from Child to Parent</h2>
      <Child onNotify={handleNotification} />
      <p data-testid="message">{message}</p>
    </div>
  );
}
