type PropsAndChildrenProps = {
  title: string;
  children: React.ReactNode;
};

export function Children({ title, children }: PropsAndChildrenProps) {
  return (
    <div className="m-4 p-4 border rounded-md bg-amber-200">
      <h2 className="text-lg font-semibold text-amber-950">{title}</h2>
      <div className="mt-2 text-amber-950">{children}</div>
    </div>
  );
}

export function Prop() {
  return (
    <>
      <Children title="Hello World!">
        This is from PropAndChildren component v.1
      </Children>
      <Children title="Hello component!">
        This is from PropAndChildren component v.2
      </Children>
    </>
  );
}
