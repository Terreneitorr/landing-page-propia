import { posts } from "@/lib/data/posts";
import { jsonOk, jsonError, methodNotAllowed } from "@/lib/http";

// Resource: /api/v1/posts/{slug}
// Método: GET | Acepta: GET
// Body de petición: ninguno
// Interfaz: JSON
// Response: objeto post completo (incluye "content")
// Códigos: 200 OK, 404 Not Found
export async function GET(request, { params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return jsonError(`No existe un post con slug "${slug}".`, 404);
  }

  return jsonOk(post);
}

export async function POST() {
  return methodNotAllowed(["GET"]);
}
