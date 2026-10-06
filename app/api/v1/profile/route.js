import { profile } from "@/lib/data/profile";
import { jsonOk, methodNotAllowed } from "@/lib/http";

// Resource: /api/v1/profile
// Método: GET | Acepta: GET
// Body de petición: ninguno
// Interfaz: JSON
// Response: objeto profile completo (nombre, rol, tagline, about, social, educación, experiencia)
// Códigos: 200 OK
export async function GET() {
  return jsonOk(profile);
}

export async function POST() {
  return methodNotAllowed(["GET"]);
}
