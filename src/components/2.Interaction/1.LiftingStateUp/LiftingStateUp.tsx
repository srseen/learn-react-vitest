import { useState } from "react";

type CounterControlProps = {
  count: number;
  onIncrement: () => void;
};

function CounterControl({ count, onIncrement }: CounterControlProps) {
  return (
    <div className="space-y-2">
      <p className="text-lg">Count in Control: {count}</p>
      <button
        onClick={onIncrement}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
    </div>
  );
}

type CounterDisplayProps = {
  count: number;
};

function CounterDisplay({ count }: CounterDisplayProps) {
  return <p className="text-green-600 text-lg">Count in Display: {count}</p>;
}

export function LiftingStateUp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="p-6 border rounded space-y-6">
      <h1 className="text-2xl font-bold">Lifting State Up</h1>

      <CounterControl count={count} onIncrement={handleIncrement} />
      <CounterDisplay count={count} />
    </div>
  );
}
