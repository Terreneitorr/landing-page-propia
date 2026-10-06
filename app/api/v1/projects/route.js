import { projects } from "@/lib/data/projects";
import { jsonOk, methodNotAllowed } from "@/lib/http";

// Resource: /api/v1/projects
// Método: GET | Acepta: GET
// Body de petición: ninguno
// Interfaz: JSON
// Response: array de { id, title, description, tags }
// Códigos: 200 OK
export async function GET() {
  return jsonOk({ data: projects, count: projects.length });
}

export async function POST() {
  return methodNotAllowed(["GET"]);
}
