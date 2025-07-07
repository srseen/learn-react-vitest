import { Link } from "react-router";

const basics = [{ path: "basics", name: "1.Basic" }];

export default function IndexPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">React Basic Components</h2>
      <ul className="space-y-2">
        {basics.map((item) => (
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
