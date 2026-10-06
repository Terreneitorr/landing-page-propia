import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/data/posts";
import { profile } from "@/lib/data/profile";
import Thumb from "@/components/Thumb";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="container section" style={{ borderBottom: "none" }}>
      <Link href="/devblog" style={{ color: "var(--text-muted)", fontSize: 14 }}>
        ← Volver
      </Link>

      <div className="wide-2col" style={{ marginTop: 16 }}>
        <div>
          <h1>{post.title}</h1>
          <p className="meta" style={{ marginTop: 8 }}>
            {post.date} · {post.readingTime} ·{" "}
            {post.tags.map((t) => `#${t}`).join(" ")}
          </p>

          <Thumb
            src={post.image}
            alt={post.title}
            style={{ width: "100%", height: 220, marginTop: 20 }}
          />

          <div style={{ marginTop: 20, maxWidth: "70ch" }}>
            {post.content.split("\n\n").map((paragraph, i) => (
              <p key={i} style={{ marginTop: i === 0 ? 0 : 16 }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <aside>
          <div className="card">
            <h3>Sobre el autor</h3>
            <p style={{ marginTop: 8, fontSize: 14 }}>
              {profile.name} — {profile.role}
            </p>
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Posts relacionados</h3>
            <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
              {related.map((r) => (
                <Link key={r.slug} href={`/devblog/${r.slug}`} style={{ fontSize: 14 }}>
                  {r.title}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
