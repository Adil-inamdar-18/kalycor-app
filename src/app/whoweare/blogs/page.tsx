import { Footer, Header } from "@/components/landing";
import BlogExplorer from "@/components/whoweare/blogs/BlogExplorer";
import BlogFeatured from "@/components/whoweare/blogs/BlogFeatured";
import BlogsCta from "@/components/whoweare/blogs/BlogsCta";
import BlogsMasthead from "@/components/whoweare/blogs/BlogsMasthead";
import { blogCategories } from "@/data/blogs";
import { getSortedPosts } from "@/lib/blog";

/**
 * Blogs is an editorial page: masthead, a featured story with top stories,
 * then a filterable, searchable article grid. Each card opens a full
 * article at /whoweare/blogs/[slug].
 */
export default function BlogsPage() {
  const posts = getSortedPosts();

  return (
    <main>
      <Header />
      <BlogsMasthead />
      <BlogFeatured />
      <BlogExplorer
        posts={posts}
        categories={blogCategories}
        featuredSlug={posts[0]?.slug}
      />
      <BlogsCta />
      <Footer />
    </main>
  );
}
