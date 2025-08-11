import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  // TODO: create booking via server action/service
  return NextResponse.json({ ok: true, body }, { status: 200 });
}


