export default function Home() {
  return (
    <div className="min-h-screen w-full text-neutral-900">
      {/* Hero */}
      <section className="bg-[#FFD54F]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 text-center">
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Pronađi savršenog animatora
            <br />za rođendan svog deteta! <span role="img" aria-label="balloon">🎈</span>
          </p>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-neutral-800 max-w-3xl mx-auto">
            Na jednom mestu – sportski animatori, omiljeni likovi iz crtaća, mađioničari i zabavljači za sve uzraste. Bržo, jednostavno, bez stresa.
          </p>
          <div className="mt-8">
            <a
              href="#kategorije"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors shadow-sm"
            >
              PRONAĐI ANIMATORA
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="kategorije" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8">Kako funkcioniše</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <CategoryCard color="#FFB74D" emoji="🏀" title="Sportski i takmičarski" />
          <CategoryCard color="#B39DDB" emoji="🧚" title="Disney i bajke" />
          <CategoryCard color="#64B5F6" emoji="🎩" title="Mađioničari i iluzionisti" />
          <CategoryCard color="#F48FB1" emoji="🎨" title="Kreativne radionice" />
          <CategoryCard color="#81C784" emoji="🎈" title="Baloni i face painting" />
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">Kako funkcioniše</h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 text-center">
          <Step
            icon={<IconSearch />}
            title="1. Pretraži ponudu"
            desc={
              <>
                po gradu, ceni i
                <br /> tipu animacije
              </>
            }
          />
          <Step
            icon={<IconCalendar />}
            title="2. Rezerviši online"
            desc={
              <>
                izaberi datum i
                <br /> animatora
              </>
            }
          />
          <Step
            icon={<IconParty />}
            title="3. Uživaj u slavlju"
            desc={
              <>
                bez organizacionog
                <br /> stresa
              </>
            }
          />
        </div>
      </section>

      {/* For animators */}
      <section className="bg-[#E3F2FD]">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Za animatore</h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-neutral-700">
            Poveži se sa stotinama novih klijenata svaki mesec. Registracija traje 3 minuta, profil je besplatan prvih 60 dana.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors shadow-sm"
            >
              POSTANI ANIMATOR
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

type CategoryCardProps = {
  color: string;
  emoji: string;
  title: string;
};

function CategoryCard({ color, emoji, title }: CategoryCardProps) {
  return (
    <div
      className="rounded-2xl p-5 text-white shadow-sm"
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">
          <span aria-hidden>{emoji}</span>
        </div>
        <p className="font-semibold leading-snug">{title}</p>
      </div>
    </div>
  );
}

type StepProps = {
  icon: React.ReactNode;
  title: string;
  desc: React.ReactNode;
};

function Step({ icon, title, desc }: StepProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 h-16 w-16 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-800">
        {icon}
      </div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-neutral-600 mt-2">{desc}</p>
    </div>
  );
}

function IconSearch() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconParty() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 2s-7 1-10 4-4 10-4 10l-6 6 6-6s7-1 10-4 4-10 4-10Z" />
      <path d="M14 7l3 3" />
    </svg>
  );
}
