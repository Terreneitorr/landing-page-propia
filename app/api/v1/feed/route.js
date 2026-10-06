import { feedItems } from "@/lib/data/feed";
import { jsonOk, jsonError, methodNotAllowed } from "@/lib/http";

// Resource: /api/v1/feed
// Método: GET | Acepta: GET
// Query params: ?limit=<int> (default 20)
// Body de petición: ninguno
// Interfaz: JSON
// Response: { data: [{ id, date, text }], total }
// Códigos: 200 OK, 400 Bad Request (limit inválido)
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get("limit") || 20);

  if (!Number.isInteger(limit) || limit < 1) {
    return jsonError("El parámetro 'limit' debe ser un entero positivo.", 400);
  }

  return jsonOk({ data: feedItems.slice(0, limit), total: feedItems.length });
}

export async function POST() {
  return methodNotAllowed(["GET"]);
}
