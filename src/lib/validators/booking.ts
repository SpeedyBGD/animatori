import { z } from "zod";

export const bookingSchema = z.object({
  animatorId: z.string().min(1),
  date: z.string(),
  timeSlot: z.string(),
  name: z.string().min(1),
  email: z.string().email(),
});

export type BookingInput = z.infer<typeof bookingSchema>;


