/**
 * The "Who We Are" landing page and its four subpages share the landing
 * page's visual theme, so this layout puts them on the `landing` surface
 * (see the SURFACE THEMES block in globals.css) instead of leaving them
 * with no data-surface at all — which is what let their --primary token
 * fall back to the root default (a lighter navy) instead of matching the
 * rest of the site.
 */
export default function WhoWeAreLayout({
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
