import { Link } from "react-router";
import { hooksRoutes } from "../data/hooksRoutes";

export function HooksPage() {
  return (
    <div className="px-6">
      <h2 className="text-lg font-bold mb-4">3.Hooks</h2>
      <ul className="space-y-2">
        {hooksRoutes.map((item) => (
          <li key={item.path}>
            <Link
              to={`/hooks/${item.path}`}
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
