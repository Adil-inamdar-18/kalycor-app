export default function SolutionsLayout({
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
