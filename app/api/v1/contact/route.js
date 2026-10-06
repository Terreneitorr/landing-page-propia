import { jsonOk, jsonError, methodNotAllowed } from "@/lib/http";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Resource: /api/v1/contact
// Método: POST | Acepta: POST
// Body de petición (JSON): { name: string, email: string, message: string }
// Interfaz: JSON
// Response éxito: { ok: true, receivedAt: ISODate }
// Response error: { error: string }
// Códigos: 201 Created, 400 Bad Request (campos faltantes/email inválido), 415 Unsupported Media Type
//
// Nota: en este entorno serverless no hay base de datos conectada todavía;
// el endpoint valida y confirma recepción. Para guardar el mensaje de verdad,
// conectar aquí un servicio de email (Resend/Nodemailer) o una base de datos.
export async function POST(request) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return jsonError("Content-Type debe ser application/json.", 415);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError("El body no es un JSON válido.", 400);
  }

  const { name, email, message } = body || {};
  const errors = [];
  if (!name || typeof name !== "string") errors.push("'name' es requerido.");
  if (!email || !EMAIL_RE.test(email)) errors.push("'email' es requerido y debe ser válido.");
  if (!message || typeof message !== "string") errors.push("'message' es requerido.");

  if (errors.length > 0) {
    return jsonError(errors.join(" "), 400);
  }

  return jsonOk({ ok: true, receivedAt: new Date().toISOString() }, 201);
}

export async function GET() {
  return methodNotAllowed(["POST"]);
}
