import { Link } from "react-router";
import { sectionRoutes } from "../data/sectionRoutes";

export function IndexPage() {
  return (
    <div className="px-6">
      <ul className="space-y-2">
        {sectionRoutes.map((item) => (
          <li key={item.path}>
            <Link
              to={`/${item.path}`}
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
