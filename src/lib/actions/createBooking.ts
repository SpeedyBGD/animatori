"use server";

import { bookingSchema } from "@/lib/validators/booking";

export async function createBooking(formData: unknown) {
  const parsed = bookingSchema.safeParse(formData);
  if (!parsed.success) {
    throw new Error("Invalid booking payload");
  }
  // TODO: persist booking using DB/Supabase
  return { ok: true, booking: parsed.data };
}


