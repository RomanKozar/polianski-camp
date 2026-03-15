// TODO: Replace placeholder texts and lists with real information
// about your 2026 seasons, dates, prices and options.

import Link from "next/link";
import Image from "next/image";

const partnerShifts = [
  {
    range: "09.06 – 18.06",
    label: "1 зміна (9 ночей / 10 днів)",
    price: "24 000 грн.",
    status: "available",
  },
  {
    range: "21.06 – 30.06",
    label: "2 зміна (9 ночей / 10 днів)",
    status: "sold-out",
  },
  {
    range: "03.07 – 12.07",
    label: "3 зміна (9 ночей / 10 днів)",
    status: "sold-out",
  },
  {
    range: "15.07 – 24.07",
    label: "4 зміна (9 ночей / 10 днів)",
    status: "sold-out",
  },
  {
    range: "27.07 – 05.08",
    label: "5 зміна (9 ночей / 10 днів)",
    status: "sold-out",
  },
  {
    range: "08.08 – 17.08",
    label: "6 зміна (9 ночей / 10 днів)",
    status: "sold-out",
  },
  {
    range: "20.08 – 28.08",
    label: "7 зміна (8 ночей / 9 днів)",
    status: "sold-out",
  },
];

const polianskiShifts = partnerShifts;
const campPhoneNumber = "+380XXXXXXXXX"; // TODO: replace with real phone number

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Floating phone contact widget visible on first screen */}
      <div className="fixed bottom-1 left-20 z-50">
        <div className="group relative flex items-center">
          <Link
            href={`tel:${campPhoneNumber}`}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#006980] text-2xl text-white shadow-md transition hover:scale-110 hover:bg-polian-yellow hover:text-[#006980]"
            aria-label="Зателефонувати"
          >
            📞
          </Link>
        </div>
      </div>
      {/* Hero / Intro section */}
      {/* Верхній блок на окремому фоні (теплий відтінок), далі фон сторінки білий */}
      <section className="mx-[-1rem] mb-10 bg-[#F0F2D6] pt-4 pb-12 md:mx-[-1.5rem] md:pt-6">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div
            className="rounded-card-xl bg-white/95 p-6 shadow-card-soft lg:flex lg:items-center lg:justify-between lg:p-10"
            style={{ borderRadius: "20px" }}
          >
            <div className="max-w-xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-polian-red">
            PolianskiCamp · To BE(e) Camp
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-polian-dark-blue md:text-4xl">
            Зміни 2026 – нові можливості для дітей
          </h1>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            {/* TODO: Short description of your camp philosophy and what makes 2026
                special – winter, mountains, English, soft skills, etc. */}
            Here you can briefly explain what is unique about PolianskiCamp:
            location, activities, and why kids will want to come back every
            season.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="#changes-2026"
              className="rounded-full bg-polian-red px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-card-soft transition hover:bg-polian-yellow hover:text-polian-dark-blue"
            >
              View 2026 shifts
            </Link>
            <Link
              href="#contacts"
              className="rounded-full border border-polian-dark-blue/20 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wide text-polian-dark-blue shadow-sm transition hover:border-polian-dark-blue/40 hover:bg-polian-blue/10"
            >
              Ask a question
            </Link>
          </div>
            </div>

            {/* Decorative ski + bee circle similar to reference hero visual */}
            <div className="mt-8 flex w-full justify-center lg:mt-0 lg:w-auto">
              <div className="relative h-40 w-40 rounded-full bg-polian-yellow/70 shadow-card-soft">
                <div className="absolute inset-4 flex justify-center gap-3">
                  <span className="h-28 w-3 rounded-full bg-polian-dark-blue" />
                  <span className="h-28 w-3 rounded-full bg-polian-blue" />
                </div>
                <div className="absolute -top-2 -right-1 flex h-10 w-10 items-center justify-center">
                  <span className="relative h-7 w-7 rounded-full bg-tobe-yellow">
                    <span className="absolute -left-2 top-1 h-4 w-2 rounded-full border border-black/70 bg-white/60" />
                    <span className="absolute -right-2 top-1 h-4 w-2 rounded-full border border-black/70 bg-white/60" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Changes 2026 section */}
      <section id="seasons" className="mx-[-1rem] bg-[#F0F2D6] py-10 md:mx-[-1.5rem]">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <section id="changes-2026" className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-polian-dark-blue">
              Зміни 2026 – нові можливості для дітей
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1 – red header */}
          <article
            className="flex flex-col rounded-card-xl bg-white shadow-card-soft"
            style={{ borderRadius: "20px" }}
          >
            <header
              className="flex items-center justify-between gap-3 rounded-t-card-xl bg-[#006980] px-5 py-4 text-white"
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
                borderStyle: "none",
                borderWidth: "0px",
                borderColor: "transparent",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-[60px] w-[70px] items-center gap-2 text-[28px]">
                  <Image
                    src="/images/tobecamp-logo.png"
                    alt="To BE(e) Camp logo"
                    width={64}
                    height={64}
                    className="h-15 w-16"
                  />
                </div>
                <div className="leading-tight">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em]">
                    Літні зміни PolianskiCamp
                  </p>
                  <p className="text-[11px] opacity-80">
                    Літні програми в горах на базі PolianskiCamp.
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 md:block">
                <div className="mr-1 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Image
                    src="/images/polianski-logo.png"
                    alt="PolianskiCamp logo"
                    width={50}
                    height={50}
                    className="h-7 w-auto"
                  />
                </div>
              </div>
            </header>
            <div className="space-y-4 px-5 py-5 text-sm text-slate-800">
              <p className="flex items-center gap-2 font-semibold text-polian-dark-blue">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-polian-blue/10 text-base">
                  📅
                </span>
                Дати:
              </p>
              <ul className="space-y-2 text-xs md:text-sm">
                {polianskiShifts.map((shift, index) => (
                  <li
                    key={index}
                    className="flex items-baseline justify-between gap-3 rounded-lg bg-polian-blue/5 px-3 py-2"
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg leading-none text-violet-500">
                        ✦
                      </span>
                      <span>
                        <span className="font-semibold">{shift.range}</span>{" "}
                        — {shift.label}
                      </span>
                    </div>
                    <div className="whitespace-nowrap text-right text-[11px] md:text-xs">
                      {shift.status === "sold-out" ? (
                        <span className="inline-flex items-center gap-1 font-semibold text-red-500">
                          <span>❗</span>
                          <span>SOLD OUT</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 font-semibold text-emerald-500">
                          <span>$</span>
                          <span>{shift.price}</span>
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="pt-2 text-xs text-slate-600">
                Раннє бронювання до 1 березня. В ціну входить проживання, харчування,
                тренування, анімаційна програма та страхування.
              </div>
              <div className="pt-2">
                <Link
                  href={`tel:${campPhoneNumber}`}
                  className="inline-flex rounded-full border border-black bg-polian-blue px-4 py-2 text-xs font-semibold uppercase tracking-wide text-polian-dark-blue transition-all duration-300 hover:bg-[#006980] hover:text-white hover:-translate-y-0.5 hover:scale-105"
                  role="button"
                >
                  Зателефонувати
                </Link>
              </div>
            </div>
          </article>

          {/* Card 2 – blue header */}
          <article
            className="flex flex-col rounded-card-xl bg-white shadow-card-soft"
            style={{ borderRadius: "20px" }}
          >
            <header
              className="flex items-center justify-between gap-3 rounded-t-card-xl bg-[#006980] px-5 py-4 text-white"
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
              }}
            >
              <div className="flex items-center gap-3">
              <div className="flex h-[60px] w-[70px] items-center gap-2 text-[28px]">
                  <Image
                    src="/images/tobecamp-logo.png"
                    alt="To BE(e) Camp logo"
                    width={64}
                    height={64}
                    className="h-15 w-16"
                  />
                </div>
                <div className="leading-tight">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em]">
                    Літні зміни на території партнера
                  </p>
                  <p className="text-[11px] opacity-80">
                    ONE CAMP + PolianskiCamp: спільні зміни на базі партнера.
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 md:block">
                <div className="mr-1 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Image
                    src="/images/polianski-logo.png"
                    alt="PolianskiCamp logo"
                    width={50}
                    height={50}
                    className="h-7 w-auto"
                  />
                </div>
              </div>
            </header>
            <div className="space-y-4 px-5 py-5 text-sm text-slate-800">
              <p className="flex items-center gap-2 font-semibold text-polian-dark-blue">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-polian-red/10 text-base">
                  📅
                </span>
                Дати:
              </p>
              <ul className="space-y-2 text-xs md:text-sm">
                {partnerShifts.map((shift, index) => (
                  <li
                    key={index}
                    className="flex items-baseline justify-between gap-3 rounded-lg bg-polian-red/5 px-3 py-2"
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg leading-none text-violet-500">
                        ✦
                      </span>
                      <span>
                        <span className="font-semibold">{shift.range}</span>{" "}
                        — {shift.label}
                      </span>
                    </div>
                    <div className="whitespace-nowrap text-right text-[11px] md:text-xs">
                      {shift.status === "sold-out" ? (
                        <span className="inline-flex items-center gap-1 font-semibold text-red-500">
                          <span>❗</span>
                          <span>SOLD OUT</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 font-semibold text-emerald-500">
                          <span>$</span>
                          <span>{shift.price}</span>
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="pt-2 text-xs text-slate-600">
                Спільний продукт з ONE CAMP: комфортні умови розміщення, активна
                програма, англомовні та україномовні вожаті.
              </div>
              <div className="pt-2">
                <Link
                  href={`tel:${campPhoneNumber}`}
                  className="inline-flex rounded-full border border-black bg-polian-blue px-4 py-2 text-xs font-semibold uppercase tracking-wide text-polian-dark-blue transition-all duration-300 hover:bg-[#006980] hover:text-white hover:-translate-y-0.5 hover:scale-105"
                  role="button"
                >
                  Зателефонувати
                </Link>
              </div>
            </div>
          </article>
            </div>
          </section>
        </div>
      </section>

      {/* About / Program section (similar styled block) */}
      <section id="about" className="mx-[-1rem] bg-[#F0F2D6] py-10 md:mx-[-1.5rem]">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <section id="about-program" className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-polian-dark-blue">
              Про нас · To BE(e) Camp
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Left column – visual / logo + highlight */}
              <article
                className="flex flex-col justify-between rounded-card-xl bg-white shadow-card-soft"
                style={{ borderRadius: "20px" }}
              >
                <div className="space-y-4 p-5">
                  <div className="inline-flex items-center gap-3 rounded-full bg-polian-yellow/70 px-4 py-2">
                    <span className="text-sm font-semibold uppercase tracking-[0.22em] text-polian-dark-blue">
                      To BE(e) Camp
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-800">
                    Творчі театральні кемпи, які проводять актори та педагоги відомої театральної дитячої студії.
                    Тут діти пробують себе в акторстві, імпровізації та командних проєктах.
                  </p>
                  <p className="text-sm leading-relaxed text-slate-800">
                    Окрім походів у гори, екскурсій і квестів, є купання в басейні, посиденьки біля вогнища та багато живого спілкування.
                  </p>
                </div>
                {/* Placeholder for future image – you can replace src пізніше */}
                <div className="border-t border-polian-dark-blue/10 bg-polian-blue/5 p-5">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200">
                    <Image
                      src="/images/about-program-1.jpg"
                      alt="Діти в таборі To BE(e) Camp"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </article>

              {/* Right column – detailed description blocks */}
              <article
                className="flex flex-col justify-between rounded-card-xl bg-white shadow-card-soft"
                style={{
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
              >
                <div className="space-y-4 p-5 text-sm text-slate-800">
                  <h3 className="text-lg font-semibold text-polian-dark-blue">
                    Що по програмі?
                  </h3>
                  <p>
                    Щоденні тренажі, ігри та акторські етюди, спрямовані на те, щоб діти стали більш відкритими,
                    креативними та впевненими в собі, навчилися не боятися публічних виступів.
                  </p>
                  <p className="font-semibold text-polian-dark-blue">
                    Ми будемо знімати кліпи, ставити танці та навіть невеличку виставу!
                  </p>
                  <p>
                    У програмі є час і для творчості, і для відпочинку: ранкові руханки, майстерки, командні ігри,
                    вільний час та вечірні шоу.
                  </p>
                </div>
                {/* Placeholder for second future image */}
                <div className="border-t border-polian-dark-blue/10 bg-polian-yellow/10 p-5">
                  <div
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200"
                    style={{ borderRadius: "20px" }}
                  >
                    <Image
                      src="/images/about-program-2.jpg"
                      alt="Акторські заняття To BE(e) Camp"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>

      <section id="accommodations" className="space-y-3">
        <h2 className="text-xl font-bold text-polian-dark-blue">
          Проживання
        </h2>
        <p className="text-sm text-slate-700">
          {/* TODO: Insert details about rooms, safety, food, photos, etc. */}
          Add accommodation details here.
        </p>
      </section>

      <section id="reviews" className="space-y-3">
        <h2 className="text-xl font-bold text-polian-dark-blue">Часті питання</h2>
        <p className="text-sm text-slate-700">
          {/* TODO: Replace with real parent & kids testimonials. */}
          Add testimonials or link to video reviews here.
        </p>
      </section>

      <section id="gallery" className="space-y-3">
        <h2 className="text-xl font-bold text-polian-dark-blue">Галерея</h2>
        <p className="text-sm text-slate-700">
          {/* TODO: Insert image grid or slider with camp photos. */}
          Add gallery component here.
        </p>
      </section>

      <section
        id="contacts"
        className="mx-[-1rem] bg-[#F0F2D6] py-10 md:mx-[-1.5rem] md:py-14"
      >
        <div className="mx-auto max-w-6xl space-y-6 px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-polian-dark-blue md:text-3xl">
            Наші контакти
          </h2>

          <div
            className="grid gap-6 rounded-card-xl bg-white/95 p-6 shadow-card-soft md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:p-8"
            style={{ borderRadius: "20px" }}
          >
            {/* Left side – contact details and CTA */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-polian-dark-blue">
                  Катерина Готель
                </h3>
                <div className="space-y-2 rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-700">
                  Сонячна, 55 Б, Поляна, Закарпатська область
                  </p>
                  <div className="space-y-1 text-sm text-slate-800">
                    <p>
                      <span className="mr-2 text-polian-blue">📞</span>
                      <a
                        href="tel:+380969112222"
                        className="text-polian-dark-blue underline-offset-2 hover:text-polian-yellow hover:underline"
                      >
                        +38 (096) 000-0000
                      </a>
                    </p>
                    <p>
                      <span className="mr-2 text-polian-blue">✉️</span>
                      <a
                        href="mailto:onecamp.ua@gmail.com"
                        className="text-polian-dark-blue underline-offset-2 hover:text-polian-yellow hover:underline"
                      >
                        polianskicamp.ua@gmail.com
                      </a>
                    </p>
                    <p>
                      <span className="mr-2 text-polian-blue">💬</span>
                      <a
                        href="https://t.me/polianskicamp"
                        target="_blank"
                        rel="noreferrer"
                        className="text-polian-dark-blue underline-offset-2 hover:text-polian-yellow hover:underline"
                      >
                        Telegram
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <Link
                  href={`tel:${campPhoneNumber}`}
                  className="flex h-[100px] items-center justify-center gap-3 rounded-2xl bg-[#8BC53F] px-4 py-3 text-left text-white shadow-card-soft transition hover:-translate-y-0.5 hover:shadow-lg mt-[20px] mb-[20px]"
                >
                  <span className="mb-2 inline-flex h-8 w-8 flex-col items-center justify-center rounded-lg bg-white/15 text-xl">
                    💬
                  </span>
                  <span className="text-base font-semibold leading-snug">
                    Забронювати місце
                  </span>
                </Link>

                <p className="text-sm leading-relaxed text-slate-700">
                  Зателефонуйте нам або надішліть повідомлення у месенджер.
                  Запишемо ваших діток до табору, обговоримо, що для цього
                  потрібно, та відповімо на всі ваші запитання. Ми завжди на
                  зв&apos;язку, щоб забезпечити вам комфортний процес реєстрації
                  та підготовки до відпочинку!
                </p>
              </div>
            </div>

            {/* Right side – map / image */}
            <div className="flex items-stretch">
              <div className="relative w-full overflow-hidden rounded-3xl bg-slate-100">
                <Image
                  src="/images/contacts-map.jpg"
                  alt="Мапа розташування Катерина готель"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

