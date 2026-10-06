import Link from "next/link";
import { posts } from "@/lib/data/posts";
import Thumb from "@/components/Thumb";

export const metadata = { title: "DevBlog" };

export default async function DevBlogPage({ searchParams }) {
  const params = await searchParams;
  const activeTag = params?.tag || null;

  const allTags = [...new Set(posts.flatMap((p) => p.tags))];
  const filtered = activeTag ? posts.filter((p) => p.tags.includes(activeTag)) : posts;
  const sorted = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="container section" style={{ borderBottom: "none" }}>
      <h1>DevBlog</h1>
      <p style={{ color: "var(--text-muted)", marginTop: 8 }}>
        Notas sobre lo que voy construyendo y aprendiendo.
      </p>

      <div className="chip-row" style={{ marginTop: 20 }}>
        <Link href="/devblog" className={`chip ${!activeTag ? "active" : ""}`}>
          todos
        </Link>
        {allTags.map((tag) => (
          <Link
            key={tag}
            href={`/devblog?tag=${tag}`}
            className={`chip ${activeTag === tag ? "active" : ""}`}
          >
            {tag}
          </Link>
        ))}
      </div>

      <div className="posts-grid" style={{ marginTop: 24 }}>
        {sorted.map((post) => (
          <Link key={post.slug} href={`/devblog/${post.slug}`} className="post-row">
            <Thumb src={post.image} alt={post.title} />
            <div>
              <h3>{post.title}</h3>
              <p className="meta">
                {post.date} · {post.readingTime}
              </p>
              <p style={{ marginTop: 4 }}>{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
