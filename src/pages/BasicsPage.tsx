import { Link } from "react-router";
import { basicsRoutes } from "../data/data";

export function BasicsPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">React Basic Components</h2>
      <h2 className="text-lg font-bold mb-4">1.Basics</h2>
      <ul className="space-y-2">
        {basicsRoutes.map((item) => (
          <li key={item.path}>
            <Link
              to={`/basics/${item.path}`}
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
