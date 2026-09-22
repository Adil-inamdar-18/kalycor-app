/**
 * All four industry pages share the landing page's visual theme, so this
 * layout puts them on the `landing` surface (see the SURFACE THEMES block
 * in globals.css) instead of leaving them with no data-surface at all —
 * which is what let them drift into their own hard-coded colour palette.
 */
export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-surface="landing" className="min-h-screen bg-background text-paragraph">
      {children}
    </div>
  );
}
