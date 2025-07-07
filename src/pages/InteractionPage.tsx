import { Link } from "react-router";
import { interactionsRoutes } from "../data/data";

export function InteractionsPage() {
  return (
    <div className="px-6">
      <h2 className="text-lg font-bold mb-4">2.Interactions</h2>
      <ul className="space-y-2">
        {interactionsRoutes.map((item) => (
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
