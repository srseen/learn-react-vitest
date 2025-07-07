type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="p-6 border rounded space-y-4">
      <header className="bg-blue-600 text-white p-4 rounded">
        <h1>My App Header</h1>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-200 p-4 text-center rounded">
        <small>© 2025 My App</small>
      </footer>
    </div>
  );
}

export function ComponentComposition() {
  return (
    <Layout>
      <section className="bg-white p-4 border rounded shadow">
        <h2 className="text-lg font-semibold">Component Composition</h2>
        <p>This content is passed as children into the Layout component.</p>
      </section>
    </Layout>
  );
}
