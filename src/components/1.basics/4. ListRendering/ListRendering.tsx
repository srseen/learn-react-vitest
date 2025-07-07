type ListRenderingProps = {
  items: string[];
};

export function ListRendering({ items }: ListRenderingProps) {
  return (
    <ul className="list-disc pl-5 space-y-1">
      {items.map((item, index) => (
        <li key={index} className="text-gray-800">
          {item}
        </li>
      ))}
    </ul>
  );
}

const listItem = ["Apple", "Banana", "Orange"];

export function List() {
  return <ListRendering items={listItem} />;
}
