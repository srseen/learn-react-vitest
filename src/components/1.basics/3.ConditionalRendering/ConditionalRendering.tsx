import { useState } from "react";

type Props = {
  isLoggedIn: boolean;
  showMessage?: boolean;
  score?: number;
};

export function ConditionalRendering({
  isLoggedIn,
  showMessage = false,
  score = 0,
}: Props) {
  // ❗️Classic if
  if (!isLoggedIn) {
    return <div className="text-red-600">Please log in to continue.</div>;
  }

  return (
    <div className="space-y-2">
      {/* ✅ && operator */}
      {showMessage && <div className="text-blue-600">Welcome back!</div>}

      {/* ✅ Ternary ? : */}
      <div className="text-green-600">
        Your score is: {score > 80 ? "Excellent" : "Keep trying"}
      </div>

      {/* ✅ Nested ternary */}
      <div>
        Grade: {score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "F"}
      </div>
    </div>
  );
}

export function ConditionalPlayground() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showMessage, setShowMessage] = useState(true);
  const [score, setScore] = useState(85);

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Conditional Rendering Playground</h1>

      <div className="flex gap-4 flex-wrap">
        <button
          onClick={() => setIsLoggedIn((prev) => !prev)}
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          isLoggedIn: {String(isLoggedIn)}
        </button>

        <button
          onClick={() => setShowMessage((prev) => !prev)}
          className="px-4 py-2 rounded bg-purple-500 text-white"
        >
          showMessage: {String(showMessage)}
        </button>

        <div>
          <label className="block text-sm font-medium">Score</label>
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
            className="mt-1 px-3 py-1 border rounded"
          />
        </div>
      </div>

      <div className="border-t pt-4">
        <ConditionalRendering
          isLoggedIn={isLoggedIn}
          showMessage={showMessage}
          score={score}
        />
      </div>
    </div>
  );
}
