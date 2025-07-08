import { Link } from "react-router";
import { contextandStateManagementRoutes } from "../data/contextandStateManagementRoutes";

export function ContextandStateManegementPage() {
  return (
    <div className="px-6">
      <h2 className="text-lg font-bold mb-4">4.Context and State Management</h2>
      <ul className="space-y-2">
        {contextandStateManagementRoutes.map((item) => (
          <li key={item.path}>
            <Link
              to={`/contextandStateManagement/${item.path}`}
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
