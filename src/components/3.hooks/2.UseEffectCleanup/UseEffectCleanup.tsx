import { useEffect, useState } from "react";

function Timer() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Timer running");
    }, 10000);

    return () => {
      console.log("Timer cleaned up");
      clearInterval(id);
    };
  }, []);

  return <p>Timer is running... (check console)</p>;
}

export function UseEffectCleanup() {
  const [show, setShow] = useState(true);

  return (
    <div className="p-6 border rounded space-y-4">
      <h2 className="text-xl font-bold">useEffect (Cleanup)</h2>
      <button
        onClick={() => setShow(!show)}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Toggle Timer
      </button>
      {show && <Timer />}
    </div>
  );
}
