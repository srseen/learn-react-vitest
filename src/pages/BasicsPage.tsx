import { Link } from "react-router";

const basics = [
  { path: "functional", name: "1.Functional Component" },
  { path: "prop", name: "2.Props" },
  { path: "children", name: "3.Children Prop" },
  { path: "conditional", name: "4.Conditional Rendering" },
  { path: "list", name: "5.List Rendering" },
  { path: "event", name: "6.Event Handling" },
  { path: "state", name: "7.useState" },
  { path: "input", name: "8.Input Form Handling" },
];

export default function BasicsPage() {
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
