import { UseCounter } from "./CounterContext";

export function CounterDisplay() {
  const { state } = UseCounter();
  return <p data-testid="global-count">Count: {state.count}</p>;
}
