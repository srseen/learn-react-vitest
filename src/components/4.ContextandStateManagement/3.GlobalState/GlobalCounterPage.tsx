import { CounterProvider } from "./CounterContext";
import { CounterDisplay } from "./CounterDisplay";
import { CounterControls } from "./CounterControls";

export function GlobalCounterPage() {
  return (
    <CounterProvider>
      <div className="p-4 border rounded space-y-2">
        <h2 className="text-xl font-bold">
          Global Counter (Context + Reducer)
        </h2>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterProvider>
  );
}
