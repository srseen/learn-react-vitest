type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className="border px-3 py-2 rounded w-full text-sm focus:outline-none focus:ring focus:border-blue-500"
    />
  );
}
