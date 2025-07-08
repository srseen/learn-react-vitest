import { useReducer } from "react";

type State = {
  count: number;
};

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export function UseReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-4 border rounded space-y-2">
      <h2 className="text-xl font-bold">useReducer: Counter</h2>
      <p data-testid="count">Count: {state.count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
