import { Link } from "react-router";

const basics = [
  { path: "functional", name: "1.Functional Component" },
  { path: "prop", name: "2.Props" },
  { path: "conditional", name: "3.Conditional Rendering" },
  { path: "list", name: "4.List Rendering" },
  { path: "event", name: "5.Event Handling" },
  { path: "state", name: "6.useState" },
  { path: "input", name: "7.Input Form Handling" },
];

export function BasicsPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">React Basic Components</h2>
      <h2 className="text-lg font-bold mb-4">Basics</h2>
      <ul className="space-y-2">
        {basics.map((item) => (
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
