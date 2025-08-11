"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { animatorSchema, type AnimatorInput } from "@/lib/validators/animator";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const ANIMATION_TYPES = [
  "Sportski i takmičarski",
  "Disney i bajke",
  "Mađioničari i iluzionisti",
  "Kreativne radionice",
  "Baloni i face painting",
  "Maskote / likovi",
];

export default function BecomeAnimatorPage() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<AnimatorInput>({
    resolver: zodResolver(animatorSchema),
    defaultValues: {
      cities: [],
      types: [],
      contacts: {},
    },
  });

  const onSubmit = async (data: AnimatorInput) => {
    setSubmitting(true);
    try {
      // TODO: send to server action or API
      console.log("Submit animator:", data);
      alert("Hvala! Poslao si podatke. (MVP stub)");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-4">
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-neutral-100 hover:bg-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900"
        >
          ← Početna
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-1">Postani animator</h1>
      <p className="text-neutral-600 mb-8">Popuni formular i kreiraj svoj profil.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Ime i prezime */}
        <div>
          <label className="block font-medium">Ime i prezime</label>
          <input
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2"
            placeholder="npr. Ana Anić"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-red-600 text-sm mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Umetničko ime */}
        <div>
          <label className="block font-medium">Umetničko ime (ako postoji)</label>
          <input
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2"
            placeholder="npr. Vila Anica"
            {...register("stageName")}
          />
        </div>

        {/* Gradovi */}
        <div>
          <label className="block font-medium">Grad(ovi) u kojima radite</label>
          <Controller
            control={control}
            name="cities"
            render={({ field }) => (
              <TagInput placeholder="Dodaj grad i pritisni Enter" values={field.value} onChange={field.onChange} />
            )}
          />
          {errors.cities && (
            <p className="text-red-600 text-sm mt-1">{errors.cities.message as string}</p>
          )}
        </div>

        {/* Tip animacije (više opcija) */}
        <div>
          <label className="block font-medium">Tip animacije (može više opcija)</label>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {ANIMATION_TYPES.map((t) => (
              <label key={t} className="flex items-center gap-2 border rounded-md px-3 py-2">
                <input
                  type="checkbox"
                  value={t}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    const current = getValues("types") ?? [];
                    const set = new Set<string>(current);
                    if (checked) set.add(t);
                    else set.delete(t);
                    setValue("types", Array.from(set), { shouldValidate: true });
                  }}
                />
                <span>{t}</span>
              </label>
            ))}
          </div>
          {errors.types && (
            <p className="text-red-600 text-sm mt-1">{errors.types.message as string}</p>
          )}
        </div>

        {/* Cena / paketi */}
        <div>
          <label className="block font-medium">Cena po satu / paketi</label>
          <textarea
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2"
            rows={3}
            placeholder="Npr. 4000 RSD/h ili paketi: Basic/Standard/Premium"
            {...register("pricing")}
          />
          {errors.pricing && (
            <p className="text-red-600 text-sm mt-1">{errors.pricing.message}</p>
          )}
        </div>

        {/* Opis (otvara u novom prozoru) */}
        <div>
          <label className="block font-medium">Opis</label>
          <OpenWindowTextarea
            placeholder="Do 200 reči"
            valueKey="description"
            onChange={(value) => setValue("description", value, { shouldValidate: true })}
          />
          {errors.description && (
            <p className="text-red-600 text-sm mt-1">{errors.description.message}</p>
          )}
        </div>

        {/* Fotke 3-5 */}
        <div>
          <label className="block font-medium">3 - 5 fotografija</label>
          <Controller
            control={control}
            name="photos"
            render={({ field }) => (
              <MultiFileInput accept="image/*" minFiles={3} maxFiles={5} onFiles={(f) => field.onChange(f)} />
            )}
          />
          {errors.photos && (
            <p className="text-red-600 text-sm mt-1">{errors.photos.message as string}</p>
          )}
        </div>

        {/* Video opcionalno */}
        <div>
          <label className="block font-medium">Video (opciono)</label>
          <Controller
            control={control}
            name="video"
            render={({ field }) => (
              <SingleFileInput accept="video/*" onFile={(f) => field.onChange(f)} />
            )}
          />
          {errors.video && (
            <p className="text-red-600 text-sm mt-1">{errors.video.message as string}</p>
          )}
        </div>

        {/* Kontakt */}
        <div>
          <label className="block font-medium">Kontakt</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            <input className="rounded-md border border-neutral-300 px-3 py-2" placeholder="Telefon" {...register("contacts.phone")} />
            <input className="rounded-md border border-neutral-300 px-3 py-2" placeholder="Email" {...register("contacts.email")} />
            <input className="rounded-md border border-neutral-300 px-3 py-2" placeholder="Instagram" {...register("contacts.instagram")} />
            <input className="rounded-md border border-neutral-300 px-3 py-2" placeholder="TikTok" {...register("contacts.tiktok")} />
            <input className="rounded-md border border-neutral-300 px-3 py-2 sm:col-span-2" placeholder="Drugi kontakt (opciono)" {...register("contacts.other")} />
          </div>
        </div>

        <div className="pt-2">
          <Button type="submit" disabled={submitting}>
            {submitting ? "Slanje..." : "Pošalji prijavu"}
          </Button>
        </div>
      </form>
    </main>
  );
}

// Components
function TagInput({ values, onChange, placeholder }: { values: string[]; onChange: (v: string[]) => void; placeholder?: string }) {
  const [input, setInput] = useState("");
  return (
    <div className="mt-1">
      <div className="flex flex-wrap gap-2 mb-2">
        {values?.map((v) => (
          <span key={v} className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-sm">
            {v}
            <button type="button" onClick={() => onChange(values.filter((x) => x !== v))} aria-label={`Ukloni ${v}`}>
              ×
            </button>
          </span>
        ))}
      </div>
      <input
        className="w-full rounded-md border border-neutral-300 px-3 py-2"
        value={input}
        placeholder={placeholder}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && input.trim()) {
            e.preventDefault();
            const next = Array.from(new Set([...(values ?? []), input.trim()]));
            onChange(next);
            setInput("");
          }
        }}
      />
    </div>
  );
}

function OpenWindowTextarea({ valueKey, value, onChange, placeholder }: { valueKey: string; value?: string; onChange: (v: string) => void; placeholder?: string }) {
  const [local, setLocal] = useState(value ?? "");
  return (
    <div className="mt-1">
      <textarea
        className="w-full rounded-md border border-neutral-300 px-3 py-2"
        rows={4}
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        placeholder={placeholder}
      />
      <div className="mt-2">
        <Button
          type="button"
          variant="secondary"
          onClick={() => {
            const win = window.open("", valueKey, "width=600,height=600");
            if (!win) return;
            win.document.write(`<textarea style="width:100%;height:90%;font-size:16px;">${local}</textarea>`);
            const check = setInterval(() => {
              const el = win.document.querySelector("textarea") as HTMLTextAreaElement | null;
              if (!win || win.closed) {
                clearInterval(check);
                return;
              }
              if (el) {
                setLocal(el.value);
                onChange(el.value);
              }
            }, 500);
            win.onbeforeunload = () => clearInterval(check);
          }}
        >
          Otvori u novom prozoru
        </Button>
      </div>
    </div>
  );
}

function MultiFileInput({ accept, minFiles, maxFiles, onFiles }: { accept?: string; minFiles: number; maxFiles: number; onFiles: (files: File[]) => void }) {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <div className="mt-1">
      <input
        type="file"
        accept={accept}
        multiple
        onChange={(e) => {
          const next = Array.from(e.target.files ?? []);
          setFiles(next);
          onFiles(next);
        }}
      />
      <p className="text-sm text-neutral-600 mt-1">Izaberite {minFiles}–{maxFiles} fotografija.</p>
      {files.length > 0 && (
        <ul className="list-disc ml-5 mt-2 text-sm text-neutral-700">
          {files.map((f) => (
            <li key={f.name}>{f.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SingleFileInput({ accept, onFile }: { accept?: string; onFile: (file?: File) => void }) {
  const [fileName, setFileName] = useState<string | undefined>();
  return (
    <div className="mt-1">
      <input
        type="file"
        accept={accept}
        onChange={(e) => {
          const file = e.target.files?.[0];
          setFileName(file?.name);
          onFile(file);
        }}
      />
      {fileName && <p className="text-sm text-neutral-700 mt-1">{fileName}</p>}
    </div>
  );
}


