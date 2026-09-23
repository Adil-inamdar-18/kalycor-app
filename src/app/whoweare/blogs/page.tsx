import { Footer, Header } from "@/components/landing";
import BlogGrid from "@/components/whoweare/blogs/BlogGrid";
import BlogsCta from "@/components/whoweare/blogs/BlogsCta";
import BlogsHero from "@/components/whoweare/blogs/BlogsHero";
import BlogsIntro from "@/components/whoweare/blogs/BlogsIntro";

export default function BlogsPage() {
  return (
    <main>
      <Header />
      <BlogsHero />
      <BlogsIntro />
      <BlogGrid />
      <BlogsCta />
      <Footer />
    </main>
  );
}
