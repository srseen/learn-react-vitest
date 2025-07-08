import { UseCounter } from "./CounterContext";

export function CounterControls() {
  const { dispatch } = UseCounter();
  return (
    <div className="flex gap-2">
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
