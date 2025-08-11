import { z } from "zod";

export const animatorSchema = z.object({
  fullName: z.string().min(2, "Unesite ime i prezime"),
  stageName: z.string().optional().or(z.literal("")),
  cities: z.array(z.string().min(1)).min(1, "Unesite bar jedan grad"),
  types: z.array(z.string().min(1)).min(1, "Izaberite bar jednu opciju"),
  pricing: z.string().min(1, "Unesite cenu ili pakete"),
  description: z
    .string()
    .min(20, "Unesite opis (min 20 reči)")
    .max(2000, "Opis je predugačak"),
  photos: z
    .array(
      z.custom<File>((v) => v instanceof File, {
        message: "Neispravna datoteka",
      })
    )
    .min(3, "Dodajte najmanje 3 fotografije")
    .max(5, "Maksimalno 5 fotografija"),
  video: z
    .custom<File | undefined>((v) => v === undefined || v instanceof File, {
      message: "Neispravan video",
    })
    .optional(),
  contacts: z.object({
    phone: z.string().optional(),
    email: z.string().email("Neispravan email").optional(),
    instagram: z.string().optional(),
    tiktok: z.string().optional(),
    other: z.string().optional(),
  }),
});

export type AnimatorInput = z.infer<typeof animatorSchema>;


