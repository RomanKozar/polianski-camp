// TODO: This page is a template for a specific PolianskiCamp change (shift).
// Replace all placeholder texts and gallery items with real information for "Change 1".

export default function ZminaOnePage() {
  return (
    <div className="space-y-10">
      {/* Hero section – main information about this shift */}
      <section className="rounded-card-xl bg-white p-6 shadow-card-soft lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-polian-red">
          Зміна 1 · PolianskiCamp
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-polian-dark-blue md:text-4xl">
          {/* TODO: Insert official name of this change, e.g. "Alpine Adventure 2026". */}
          Назва зміни 1
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
          {/* TODO: 2–3 sentences describing age range, focus (ski / English / soft
              skills), location and key highlights of this particular change. */}
          Короткий опис зміни 1. Тут ви розкажете батькам, для кого ця зміна,
          де вона проходить і чому діти полюблять саме цей заїзд.
        </p>

        <div className="mt-4 grid gap-4 text-sm md:grid-cols-3">
          {/* TODO: Replace these items with real dates, price and location. */}
          <div className="rounded-xl bg-polian-blue/10 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-polian-dark-blue">
              Дати
            </p>
            <p className="mt-1 text-sm text-slate-800">
              00.00 – 00.00 2026 (9 ночей / 10 днів)
            </p>
          </div>
          <div className="rounded-xl bg-polian-red/10 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-polian-dark-blue">
              Вартість
            </p>
            <p className="mt-1 text-sm text-slate-800">від ₴00 000</p>
          </div>
          <div className="rounded-xl bg-polian-yellow/20 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-polian-dark-blue">
              Локація
            </p>
            <p className="mt-1 text-sm text-slate-800">
              Назва готелю / комплексу, країна.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery section – replace with real photos */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-polian-dark-blue">Gallery</h2>
        <p className="text-sm text-slate-700">
          {/* TODO: Brief intro text for the gallery – what parents will see in these photos. */}
          Тут будуть фото з цієї зміни: гори, активності, команда, діти.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {/* TODO: Replace each placeholder div with <Image> components pointing to
              your photos in public/images/zmina-1, keeping the same rounded corners and shadow. */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="flex h-32 items-center justify-center rounded-card-xl bg-gradient-to-br from-polian-blue/20 via-polian-yellow/40 to-polian-red/30 text-xs font-semibold uppercase tracking-wide text-polian-dark-blue shadow-card-soft"
            >
              Photo {i}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

