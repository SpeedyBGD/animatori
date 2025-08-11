export default function AnimatorProfilePage({ params }: { params: Promise<{ id: string }> }) {
  // In Next 15 App Router, params is async
  const _ = params; // placeholder to satisfy unused var if not awaited here
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-bold">Profil animatora</h1>
      <p className="text-neutral-600 mt-2">Ovde će ići detalji profila, galerija, recenzije…</p>
    </main>
  );
}


