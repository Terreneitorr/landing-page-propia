import { NextResponse } from "next/server";

const BASE_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "X-API-Version": "1",
};

export function jsonOk(data, status = 200, extraHeaders = {}) {
  return NextResponse.json(data, {
    status,
    headers: { ...BASE_HEADERS, ...extraHeaders },
  });
}

export function jsonError(message, status = 400, extraHeaders = {}) {
  return NextResponse.json(
    { error: message, status },
    { status, headers: { ...BASE_HEADERS, ...extraHeaders } }
  );
}

export function methodNotAllowed(allowed = []) {
  return jsonError(`Método no permitido. Usa: ${allowed.join(", ")}`, 405, {
    Allow: allowed.join(", "),
  });
}
