import { posts } from "@/lib/data/posts";
import { jsonOk, jsonError, methodNotAllowed } from "@/lib/http";

// Resource: /api/v1/posts
// Método: GET | Acepta: GET
// Query params: ?tag=<string> (opcional) &page=<int> (default 1) &limit=<int> (default 10)
// Body de petición: ninguno
// Interfaz: JSON
// Response: { data: [{ slug, title, excerpt, date, readingTime, tags }], page, limit, total }
// Códigos: 200 OK, 400 Bad Request (page/limit inválidos)
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get("tag");
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);

  if (!Number.isInteger(page) || page < 1 || !Number.isInteger(limit) || limit < 1) {
    return jsonError("Los parámetros 'page' y 'limit' deben ser enteros positivos.", 400);
  }

  let filtered = posts;
  if (tag) {
    filtered = filtered.filter((p) => p.tags.includes(tag));
  }

  const start = (page - 1) * limit;
  const paginated = filtered
    .slice(start, start + limit)
    // en el listado no se manda el "content" completo, solo el excerpt
    .map(({ content, ...rest }) => rest);

  return jsonOk({
    data: paginated,
    page,
    limit,
    total: filtered.length,
  });
}

export async function POST() {
  return methodNotAllowed(["GET"]);
}
