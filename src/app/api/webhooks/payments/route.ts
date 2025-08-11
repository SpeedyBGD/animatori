import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // TODO: verify signature (e.g., from Stripe) and process event
  const payload = await request.text();
  return NextResponse.json({ received: true, length: payload.length });
}


