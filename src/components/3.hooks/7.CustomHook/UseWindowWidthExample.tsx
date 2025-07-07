import { useWindowWidth } from "./useWindowWidth";

export function UseWindowWidthExample() {
  const width = useWindowWidth();

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold">Custom Hook: useWindowWidth</h2>
      <p data-testid="window-width">Window width: {width}px</p>
    </div>
  );
}
