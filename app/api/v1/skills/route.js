import { skills } from "@/lib/data/skills";
import { jsonOk, methodNotAllowed } from "@/lib/http";

// Resource: /api/v1/skills
// Método: GET | Acepta: GET
// Body de petición: ninguno
// Interfaz: JSON
// Response: array de { id, name, level }
// Códigos: 200 OK
export async function GET() {
  return jsonOk({ data: skills, count: skills.length });
}

export async function POST() {
  return methodNotAllowed(["GET"]);
}
