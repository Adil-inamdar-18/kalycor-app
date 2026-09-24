/**
 * The contact page shares the landing page's visual theme, so this layout
 * puts it on the `landing` surface (see the SURFACE THEMES block in
 * globals.css) instead of leaving it with no data-surface at all — which
 * is what let its --primary token fall back to the root default (a
 * lighter navy) instead of matching the rest of the site.
 */
export default function ContactLayout({
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
