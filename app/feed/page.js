import { feedItems } from "@/lib/data/feed";

export const metadata = { title: "Feed" };

function relativeDate(dateStr) {
  const diffDays = Math.floor((Date.now() - new Date(dateStr)) / 86400000);
  if (diffDays <= 0) return "hoy";
  if (diffDays === 1) return "hace 1 día";
  return `hace ${diffDays} días`;
}

export default function FeedPage() {
  return (
    <div className="container section" style={{ borderBottom: "none" }}>
      <h1>Feed</h1>
      <p style={{ color: "var(--text-muted)", marginTop: 8 }}>
        Actualizaciones cortas de lo que voy haciendo.
      </p>

      <div className="feed-layout" style={{ marginTop: 24 }}>
        <div className="card">
          <h3>Filtrar por</h3>
          <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
            <span>○ Proyectos</span>
            <span>○ Aprendizaje</span>
            <span>○ Posts</span>
          </div>
        </div>

        <ul className="timeline">
          {feedItems.map((item, i) => (
            <li key={item.id} className={i === 0 ? "recent" : ""}>
              <p className="meta">{relativeDate(item.date)}</p>
              <p style={{ marginTop: 4 }}>{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="card">
          <h3>Resumen</h3>
          <p style={{ marginTop: 10, fontSize: 14 }}>
            {feedItems.length} actualizaciones recientes.
          </p>
        </div>
      </div>
    </div>
  );
}
