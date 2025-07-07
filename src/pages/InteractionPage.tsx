import { Link } from "react-router";

const basics = [{ path: "lifting-state-up", name: "1.Lifting State Up" }];

export function InteractionsPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">React Basic Components</h2>
      <h2 className="text-lg font-bold mb-4">2.Interactions</h2>
      <ul className="space-y-2">
        {basics.map((item) => (
          <li key={item.path}>
            <Link
              to={`/interactions/${item.path}`}
              className="text-blue-600 hover:underline"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
