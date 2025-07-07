type CardProps = {
  title?: string;
  children: React.ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <div className="h-50 w-50 border rounded shadow p-4 m-4 space-y-2 bg-white">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}
