export default function WhoWeAreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-surface="landing"
      className="min-h-screen bg-background text-paragraph"
    >
      {children}
    </div>
  );
}
