export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1 className="text-xl font-bold mb-4">Data User</h1>
      {children}
    </section>
  );
}
