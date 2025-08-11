export default function BookPage({ params }: { params: Promise<{ id: string }> }) {
  const _ = params;
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-bold">Rezervacija</h1>
      <p className="text-neutral-600 mt-2">Ovde ide checkout / izbor termina, podaci i potvrda.</p>
    </main>
  );
}


