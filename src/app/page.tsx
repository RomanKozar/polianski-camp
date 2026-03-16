// TODO: Replace placeholder texts and lists with real information
// about your 2026 seasons, dates, prices and options.

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxSrc]);

  return (
    <div className="space-y-16">
      {lightboxSrc && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[999] flex h-[100dvh] w-[100vw] items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
              role="dialog"
              aria-modal="true"
              onClick={() => setLightboxSrc(null)}
            >
              <div
                className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-black shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
                  <Image
                    src={lightboxSrc}
                    alt="Фото"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 95vw, 900px"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxSrc(null)}
                  className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg font-semibold text-slate-900 shadow-sm backdrop-blur hover:bg-white"
                  aria-label="Закрити"
                >
                  ×
                </button>
              </div>
            </div>,
            document.body
          )
        : null}
      {/* Floating phone contact widget visible on first screen */}
      <div className="fixed bottom-3 left-3 z-50 md:bottom-1 md:left-20">
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
            Приєднуйтесь до PolianskiCamp — світу, що дарує дітям найяскравіші враження та незабутні емоції! 
            Готові подарувати вашій дитині незабутні пригоди? Записуйтесь зараз!
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="#gallery"
              className="inline-flex rounded-full border border-black bg-polian-red px-5 py-2 text-xs font-semibold uppercase tracking-wide text-polian-dark-blue shadow-card-soft transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-[#006980] hover:text-white"
            >
              Ознайомче відео
            </Link>
            <Link
              href="#contacts"
              className="inline-flex rounded-full border border-black bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wide text-polian-dark-blue shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-black hover:bg-[#006980] hover:text-white"
            >
              Приєднатись
            </Link>
          </div>
            </div>

            <div className="mt-8 w-full max-w-xl lg:mt-0 lg:max-w-[380px]">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/children-v2.jpg"
                    alt="Діти в таборі PolianskiCamp · To BE(e) Camp"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                  <div className="inline-flex items-center rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold text-slate-700 shadow-sm backdrop-blur">
                    PolianskiCamp · To BE(e) Camp
                  </div>
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
            <div className="space-y-6 px-5 py-5 text-sm text-slate-800">
              <div className="space-y-3 rounded-2xl bg-polian-blue/5 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="flex items-center gap-2 font-semibold text-polian-dark-blue">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-polian-blue/10 text-base">
                      📅
                    </span>
                    Дати
                  </p>
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    <span className="inline-flex items-center rounded-full bg-polian-yellow/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-polian-dark-blue shadow-sm">
                      20 дітей у заїзді
                    </span>
                  </div>
                </div>
                <ul className="mt-2 space-y-2 text-xs md:text-sm">
                  <li className="flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm">
                    <div className="flex flex-col">
                      <span className="text-[13px] font-semibold text-polian-dark-blue">
                        21.06 – 29.06
                      </span>
                      <span className="text-[11px] text-slate-600">1-й заїзд</span>
                    </div>
                    <div className="flex flex-col items-end leading-tight">
                      <span className="text-[12px] font-semibold text-slate-900">
                        💲23 500 грн
                      </span>
                      <span className="text-[10px] font-semibold text-polian-red">
                        22 000 грн до 15.05
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm">
                    <div className="flex flex-col">
                      <span className="text-[13px] font-semibold text-polian-dark-blue">
                        07.07 – 15.07
                      </span>
                      <span className="text-[11px] text-slate-600">2-й заїзд</span>
                    </div>
                    <div className="flex flex-col items-end leading-tight">
                      <span className="text-[12px] font-semibold text-slate-900">
                        💲23 500 грн
                      </span>
                      <span className="text-[10px] font-semibold text-polian-red">
                        22 000 грн до 15.05
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm">
                    <div className="flex flex-col">
                      <span className="text-[13px] font-semibold text-polian-dark-blue">
                        18.07 – 26.07
                      </span>
                      <span className="text-[11px] text-slate-600">3-й заїзд</span>
                    </div>
                    <div className="flex flex-col items-end leading-tight">
                      <span className="text-[12px] font-semibold text-slate-900">
                        💲23 500 грн
                      </span>
                      <span className="text-[10px] font-semibold text-polian-red">
                        22 000 грн до 15.05
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm">
                    <div className="flex flex-col">
                      <span className="text-[13px] font-semibold text-polian-dark-blue">
                        29.07 – 06.08
                      </span>
                      <span className="text-[11px] text-slate-600">4-й заїзд</span>
                    </div>
                    <div className="flex flex-col items-end leading-tight">
                      <span className="text-[12px] font-semibold text-slate-900">
                        💲23 500 грн
                      </span>
                      <span className="text-[10px] font-semibold text-polian-red">
                        22 000 грн до 15.05
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm">
                    <div className="flex flex-col">
                      <span className="text-[13px] font-semibold text-polian-dark-blue">
                        09.08 – 17.08
                      </span>
                      <span className="text-[11px] text-slate-600">5-й заїзд</span>
                    </div>
                    <div className="flex flex-col items-end leading-tight">
                      <span className="text-[12px] font-semibold text-slate-900">
                        💲23 500 грн
                      </span>
                      <span className="text-[10px] font-semibold text-polian-red">
                        22 000 грн до 15.05
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-3 rounded-2xl bg-polian-yellow/80 px-4 py-2 text-center text-xs font-semibold text-polian-dark-blue shadow-sm">
                ❗ Раннє бронювання до 15 травня ❗
              </div>

              <div className="space-y-4 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-extrabold tracking-tight text-polian-dark-blue md:text-base">
                  ✨ Що чекає на дітей у нашому таборі? ✨
                </p>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue">
                      🫂 Підтримка та розвиток
                    </p>
                    <ul className="space-y-1 text-xs md:text-sm">
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Супровід досвідченого дитячого психолога та арттерапевтки
                        Людмили Майор.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue">
                      ⛰️ Справжні пригоди
                    </p>
                    <ul className="space-y-1 text-xs md:text-sm">
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Похід у ліс та на гору Ріжок з інструкторами. Родзинка дня —
                        обід на вершині, який діти готуватимуть на вогнищі! 🍳🌲
                      </li>
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Лісовий квест зі смугою перешкод від сертифікованих
                        інструкторів 🗺️🧗‍♂️
                      </li>
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Драйвові туристичні змагання та активні командні ігри на
                        свіжому повітрі 🏆🤸‍♂️
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue">
                      🎨 Творчість без меж
                    </p>
                    <ul className="space-y-1 text-xs md:text-sm">
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Захопливі майстер-класи: виготовлення прикрас, розпис
                        трендових шоперів та створення картин акрилом 🖌️🖼️
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue">
                      🏰 Мандрівки та враження
                    </p>
                    <ul className="space-y-1 text-xs md:text-sm">
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Екскурсія Замками Закарпаття: величний Палац графа Шенборна та
                        замок Сент-Міклош у Чинадієві 🚌📸
                      </li>
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Поїздка у контактний зоопарк до пухнастих друзів 🦌🐇
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue">
                      💦 Розваги та оздоровлення
                    </p>
                    <ul className="space-y-1 text-xs md:text-sm">
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Веселі купання в басейні 🏊‍♂️☀️
                      </li>
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Екстрим у мотузковому парку та стрибки на батутах 🎢
                      </li>
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Оздоровлення: власний бювет із мінеральною водою «Поляна»
                        прямо в готелі 💧🌿
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue">
                      🔥 Затишні вечори
                    </p>
                    <ul className="space-y-1 text-xs md:text-sm">
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Атмосферні посиденьки біля вогнища, пісні під гітару, танці,
                        вечори талантів та настільні ігри 🎸🎲
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href={`tel:${campPhoneNumber}`}
                  className="inline-flex rounded-full border border-black bg-polian-blue px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground transition-all duration-300 hover:bg-[#006980] hover:text-white hover:-translate-y-0.5 hover:scale-105"
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
                    Зимні зміни на території партнера
                  </p>
                  <p className="text-[11px] opacity-80">
                  To BE(e) Camp + PolianskiCamp: спільні зміни на базі партнера.
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
            <div className="space-y-6 px-5 py-5 text-sm text-slate-800">
              <div className="space-y-3 rounded-2xl bg-polian-blue/5 p-4">
                <div className="flex items-center justify-between gap-3 blur-[3px] select-none">
                  <p className="flex items-center gap-2 font-semibold text-polian-dark-blue">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-polian-blue/10 text-base">
                      📅
                    </span>
                    Дати
                  </p>
                  <div className="flex flex-wrap items-center justify-end gap-2 ">
                    <span className="inline-flex items-center rounded-full bg-polian-yellow/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-polian-dark-blue shadow-sm">
                      20 дітей у заїзді
                    </span>
                  </div>
                </div>
                <ul className="mt-2 space-y-2 text-xs md:text-sm">
                  <li className="flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm">
                    <div className="flex flex-col blur-[3px] select-none">
                      <span className="text-[13px] font-semibold text-polian-dark-blue">
                        26.06 – 04.07
                      </span>
                      <span className="text-[11px] text-slate-600">1-й заїзд</span>
                    </div>
                    <div className="flex flex-col items-end leading-tight blur-[3px] select-none">
                      <span className="text-[12px] font-semibold text-slate-900">
                        💲23 500 грн
                      </span>
                      <span className="text-[10px] font-semibold text-polian-red">
                        22 000 грн до 15.05
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm">
                    <div className="flex flex-col blur-[3px] select-none">
                      <span className="text-[13px] font-semibold text-polian-dark-blue">
                        07.07 – 15.07
                      </span>
                      <span className="text-[11px] text-slate-600">2-й заїзд</span>
                    </div>
                    <div className="flex flex-col items-end leading-tight blur-[3px] select-none">
                      <span className="text-[12px] font-semibold text-slate-900">
                        💲23 500 грн
                      </span>
                      <span className="text-[10px] font-semibold text-polian-red">
                        22 000 грн до 15.05
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm">
                    <div className="flex flex-col blur-[3px] select-none">
                      <span className="text-[13px] font-semibold text-polian-dark-blue">
                        18.07 – 26.07
                      </span>
                      <span className="text-[11px] text-slate-600">3-й заїзд</span>
                    </div>
                    <div className="flex flex-col items-end leading-tight blur-[3px] select-none">
                      <span className="text-[12px] font-semibold text-slate-900">
                        💲23 500 грн
                      </span>
                      <span className="text-[10px] font-semibold text-polian-red">
                        22 000 грн до 15.05
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm">
                    <div className="flex flex-col blur-[3px] select-none">
                      <span className="text-[13px] font-semibold text-polian-dark-blue">
                        29.07 – 06.08
                      </span>
                      <span className="text-[11px] text-slate-600">4-й заїзд</span>
                    </div>
                    <div className="flex flex-col items-end leading-tight blur-[3px] select-none">
                      <span className="text-[12px] font-semibold text-slate-900">
                        💲23 500 грн
                      </span>
                      <span className="text-[10px] font-semibold text-polian-red">
                        22 000 грн до 15.05
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm">
                    <div className="flex flex-col blur-[3px] select-none">
                      <span className="text-[13px] font-semibold text-polian-dark-blue">
                        09.08 – 17.08
                      </span>
                      <span className="text-[11px] text-slate-600">5-й заїзд</span>
                    </div>
                    <div className="flex flex-col items-end leading-tight blur-[3px] select-none">
                      <span className="text-[12px] font-semibold text-slate-900">
                        💲23 500 грн
                      </span>
                      <span className="text-[10px] font-semibold text-polian-red">
                        22 000 грн до 15.05
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-3 rounded-2xl bg-polian-yellow/80 px-4 py-2 text-center text-xs font-semibold text-polian-dark-blue shadow-sm blur-[3px] select-none">
                ❗ Раннє бронювання до 15 травня ❗
              </div>

              <div className="space-y-4 rounded-2xl bg-slate-50 p-4 blur-[3px] select-none">
                <p className="text-sm font-extrabold tracking-tight text-polian-dark-blue md:text-base">
                  ✨ Що чекає на дітей у нашому таборі? ✨
                </p>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue">
                      🫂 Підтримка та розвиток
                    </p>
                    <ul className="space-y-1 text-xs md:text-sm">
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Супровід досвідченого дитячого психолога та арттерапевтки
                        Людмили Майор.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue">
                      ⛰️ Справжні пригоди
                    </p>
                    <ul className="space-y-1 text-xs md:text-sm">
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Похід у ліс та на гору Ріжок з інструкторами. Родзинка дня —
                        обід на вершині, який діти готуватимуть на вогнищі! 🍳🌲
                      </li>
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Лісовий квест зі смугою перешкод від сертифікованих
                        інструкторів 🗺️🧗‍♂️
                      </li>
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Драйвові туристичні змагання та активні командні ігри на
                        свіжому повітрі 🏆🤸‍♂️
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue">
                      🎨 Творчість без меж
                    </p>
                    <ul className="space-y-1 text-xs md:text-sm">
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Захопливі майстер-класи: виготовлення прикрас, розпис
                        трендових шоперів та створення картин акрилом 🖌️🖼️
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue">
                      🏰 Мандрівки та враження
                    </p>
                    <ul className="space-y-1 text-xs md:text-sm">
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Екскурсія Замками Закарпаття: величний Палац графа Шенборна та
                        замок Сент-Міклош у Чинадієві 🚌📸
                      </li>
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Поїздка у контактний зоопарк до пухнастих друзів 🦌🐇
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue">
                      💦 Розваги та оздоровлення
                    </p>
                    <ul className="space-y-1 text-xs md:text-sm">
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Веселі купання в басейні 🏊‍♂️☀️
                      </li>
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Екстрим у мотузковому парку та стрибки на батутах 🎢
                      </li>
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Оздоровлення: власний бювет із мінеральною водою «Поляна»
                        прямо в готелі 💧🌿
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue">
                      🔥 Затишні вечори
                    </p>
                    <ul className="space-y-1 text-xs md:text-sm">
                      <li>
                        <span className="mr-2 text-polian-red">•</span>
                        Атмосферні посиденьки біля вогнища, пісні під гітару, танці,
                        вечори талантів та настільні ігри 🎸🎲
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href={`tel:${campPhoneNumber}`}
                  className="inline-flex rounded-full border border-black bg-polian-blue px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground transition-all duration-300 hover:bg-[#006980] hover:text-white hover:-translate-y-0.5 hover:scale-105"
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
                      src="/images/foto-1.jpg"
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
                  <h3 className="text-lg font-semibold text-foreground">
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
                      src="/images/foto-2.jpg"
                      alt="Акторські заняття To BE(e) Camp"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </article>
            </div>

            <div className="grid gap-6 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)]">
              <article
                className="rounded-card-xl bg-white p-6 shadow-card-soft"
                style={{ borderRadius: "20px" }}
              >
                <h3 className="text-2xl font-extrabold tracking-tight text-polian-dark-blue">
                  Чому PolianskiCamp особливий?
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  Тому що підліток на дієт організовує особливе командо-професійне!
                  Ми точимо знання, які активності припадають до душі дітям і
                  <span className="font-semibold text-polian-dark-blue">
                    {" "}
                    закладаємо основу
                  </span>{" "}
                  їхніх життєвих, ураховуючи інтереси, таланти й уподобання. Наша
                  програма насичена різноманітними заходами, які роблять відпочинок
                  не тільки веселим, але й корисним для розвитку.
                </p>
                <div className="mt-5 flex items-center gap-2 text-2xl">
                  <span aria-hidden>🎭</span>
                  <span aria-hidden>🐝</span>
                  <span aria-hidden>🎬</span>
                  <span aria-hidden>💃</span>
                  <span aria-hidden>🏔️</span>
                </div>
              </article>

              <article
                className="rounded-card-xl bg-white p-6 shadow-card-soft"
                style={{ borderRadius: "20px" }}
              >
                <div className="rounded-2xl border border-violet-200/70 bg-white p-5 max-h-64 overflow-y-auto">
                  <ul className="divide-y divide-violet-100/70">
                    <li className="flex gap-4 py-4 first:pt-0 last:pb-0">
                      <span className="mt-0.5 text-violet-500">＋</span>
                      <p className="text-sm leading-relaxed text-slate-700">
                        Спортивні естафети та змагання, що розвивають спритність,
                        силу та командний дух.
                      </p>
                    </li>
                    <li className="flex gap-4 py-4 first:pt-0 last:pb-0">
                      <span className="mt-0.5 text-violet-500">＋</span>
                      <p className="text-sm leading-relaxed text-slate-700">
                        Різноманітні командні ігри, де діти вчаться ефективно
                        спілкуватися, працювати в новоствореному колективі та
                        досягати спільних цілей.
                      </p>
                    </li>
                    <li className="flex gap-4 py-4 first:pt-0 last:pb-0">
                      <span className="mt-0.5 text-violet-500">＋</span>
                      <p className="text-sm leading-relaxed text-slate-700">
                        Творчі майстер-класи, на яких кемпери власноруч створюють
                        справжні витвори мистецтва.
                      </p>
                    </li>
                    <li className="flex gap-4 py-4 first:pt-0 last:pb-0">
                      <span className="mt-0.5 text-violet-500">＋</span>
                      <p className="text-sm leading-relaxed text-slate-700">
                        Вечірня програма, де кожен може відчути себе справжньою
                        зіркою, виступаючи на табірній сцені.
                      </p>
                    </li>
                    <li className="flex gap-4 py-4 first:pt-0 last:pb-0">
                      <span className="mt-0.5 text-violet-500">＋</span>
                      <p className="text-sm leading-relaxed text-slate-700">
                        Затишні вечірні посиденьки біля вогнища в компанії друзів, де
                        панує магічна атмосфера єдності та дружби.
                      </p>
                    </li>
                    <li className="flex gap-4 py-4 first:pt-0 last:pb-0">
                      <span className="mt-0.5 text-violet-500">＋</span>
                      <p className="text-sm leading-relaxed text-slate-700">
                        Цікаві екскурсії, що дозволяють зануритися в атмосферу
                        Прикарпаття та насолодитися культурою нашого краю.
                      </p>
                    </li>
                    <li className="flex gap-4 py-4 first:pt-0 last:pb-0">
                      <span className="mt-0.5 text-violet-500">＋</span>
                      <p className="text-sm leading-relaxed text-slate-700">
                        З нами круто, весело, драйвово і, найголовніше, абсолютно
                        безпечно!
                      </p>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>

      <section
        id="accommodations"
        className="mx-[-1rem] bg-[#F0F2D6] py-10 md:mx-[-1.5rem]"
      >
        <div className="mx-auto max-w-6xl space-y-6 px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-polian-dark-blue">
            Проживання та харчування
          </h2>
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)]">
            {/* Left column – відео та галерея (ти додаси свої медіа) */}
            <article
              className="rounded-card-xl bg-white p-6 shadow-card-soft"
              style={{ borderRadius: "20px" }}
            >
              <div className="space-y-4">
                <button
                  type="button"
                  className="relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-2xl bg-slate-200 text-left"
                  onClick={() => setLightboxSrc("/images/food-1.jpg")}
                  aria-label="Відкрити фото харчування"
                >
                  <Image
                    src="/images/food-1.jpg"
                    alt="Харчування в таборі"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                  />
                </button>
                <div className="grid grid-cols-3 gap-3 md:grid-cols-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                    <button
                      type="button"
                      key={item}
                      className="aspect-[4/3] cursor-pointer overflow-hidden rounded-xl bg-slate-200 text-left"
                      onClick={() => setLightboxSrc("/images/home-1.jpg")}
                      aria-label="Відкрити фото проживання"
                    >
                      <div className="relative h-full w-full">
                        <Image
                          src="/images/home-1.jpg"
                          alt="Проживання та територія табору"
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-[1.04]"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </article>

            {/* Right column – деталі проживання та харчування */}
            <article
  className="rounded-card-xl bg-white p-6 shadow-card-soft"
  style={{ borderRadius: "20px" }}
>
  <div className="space-y-4 text-sm leading-relaxed text-slate-800">
    <p>
      Наші заїзди (групи до <strong>20 дітей</strong>) разом із наставниками 
      проживають у комфортному та теплому хостелі готелю <strong>«Катерина»</strong>, 
      який повністю займає 3-й поверх. Це створює атмосферу затишку та відчуття 
      великої дружньої родини.
    </p>

    <div>
      <h3 className="text-base font-semibold text-polian-dark-blue">
        Умови проживання:
      </h3>
      <ul className="mt-2 space-y-2 text-sm">
        <li>
          ✦ <strong>Затишні кімнати:</strong> на поверсі всього 5 кімнат, розрахованих 
          на 2, 3, 4, 5 та 6 дітей. Ліжка зручні, з чистою постільною білизною.
        </li>
        <li>
          ✦ <strong>Спільний простір:</strong> на поверсі є велика зона для проведення 
          майстер-класів, гри в настолки та вечірніх посиденьок, а також обладнана кухня.
        </li>
        <li>
          ✦ <strong>Санітарні зони:</strong> для комфорту дітей на поверсі передбачено 
          4 сучасні санвузли та 3 душові кімнати.
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-base font-semibold text-polian-dark-blue">
        Безпека — наш пріоритет:
      </h3>
      <ul className="mt-2 space-y-2 text-sm">
        <li>
          ✦ Команда наставників та вожатих <strong>знаходиться з дітьми цілодобово (24/7)</strong>. 
          Ми завжди поруч.
        </li>
        <li>
          ✦ На території готелю та безпосередньо в хостелі ведеться <strong>відеонагляд</strong>.
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-base font-semibold text-polian-dark-blue">
        Здорове та смачне харчування:
      </h3>
      <p className="mt-1">
        У таборі діє збалансоване меню, яке дає дітям енергію для активного відпочинку:
      </p>
      <ul className="mt-2 space-y-1 text-sm">
        <li>
          ✦ <strong>Триразове повноцінне харчування</strong> (гарячі сніданки, ситні обіди та вечері).
        </li>
        <li>
          ✦ <strong>+ 2 додаткові перекуси</strong> протягом дня (фрукти, печиво, чай), 
          щоб ніхто не був голодним між активностями.
        </li>
      </ul>
    </div>
    <div className="pt-2">
              <Link
                href={`tel:${campPhoneNumber}`}
                className="inline-flex rounded-full border border-black bg-[var(--foreground)] px-6 py-2.5 text-sm font-semibold text-white shadow-card-soft transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Забронювати путівку зараз
              </Link>
            </div>
  </div>
</article>
            
          </div>
        </div>
      </section>

      <section
        id="reviews"
        className="mx-[-1rem] bg-[#F0F2D6] py-10 md:mx-[-1.5rem]"
      >
        <div className="mx-auto max-w-6xl space-y-6 px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-polian-dark-blue">
            Часті питання
          </h2>

          <div className="grid gap-6 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)]">
            {/* Left card – фото + короткий текст (ти додаси фото) */}
            <article
              className="rounded-card-xl bg-white p-6 shadow-card-soft"
              style={{ borderRadius: "20px" }}
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-200">
                  <Image
                    src="/images/about.jpg"
                    alt="Про табір PolianskiCamp · To BE(e) Camp"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-polian-dark-blue">
                    Дружня атмосфера з перших хвилин
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    У таборі PolianskiCamp · To BE(e) Camp ми прагнемо забезпечити дітям комфортну та
                    приємну відпочинкову атмосферу. У цьому блоці ми зібрали часті
                    питання, які можуть виникати у батьків перед поїздкою, та надали
                    відповіді на них.
                  </p>
                  <p className="text-sm leading-relaxed text-slate-700">
                    Адаптація кемперів – надзвичайно важлива, тому проводимо у
                    дружній атмосфері з підтримкою вожатих.
                  </p>
                  <p className="text-sm leading-relaxed text-slate-700">
                    Не дарма кажуть: найкраще виховання – це приклад. Ми створюємо
                    атмосферу, де кожна дитина може відчути себе особливою та
                    щасливою.
                  </p>
                  <p className="text-sm leading-relaxed text-slate-700">
                    Якщо у вас виникли додаткові питання, ми завжди готові
                    відповісти на них!
                  </p>
                </div>
              </div>
            </article>

            {/* Right card – FAQ accordion */}
            <article
              className="rounded-card-xl bg-white p-6 shadow-card-soft"
              style={{ borderRadius: "20px" }}
            >
              <div className="space-y-3 rounded-2xl bg-slate-50 p-4">
                {[
                {
                  q: "Адаптація кемперів – як це відбувається?",
                  a: "У перший день знайомимось, формуємо команди, проводимо легкі активності та ігри, щоб діти швидко відчули себе “своїми”. Вожаті підтримують кожного та стежать за комфортом.",
                },
                {
                  q: "Як батьки можуть стимулювати комфортну адаптацію?",
                  a: "Порадьте дитині бути відкритою до знайомств, налаштуйте на нові враження та підтримайте самостійність. Важливо: не лякати табором і не підсилювати тривожність.",
                },
                {
                  q: "Що взяти з собою в табір?",
                  a: "Зручний одяг по погоді, спортивний комплект, купальник/плавки, змінне взуття, особисту гігієну, кепку/панаму, сонцезахист. Детальний список можна надіслати в месенджер.",
                },
                {
                  q: "Що не треба брати з собою в табір?",
                  a: "Дорогоцінні речі, великі суми готівки, небезпечні предмети. Також просимо не брати енергетики та швидкопсувні продукти.",
                },
                {
                  q: "Якщо є алергії або медичні потреби, що потрібно знати?",
                  a: "Обов’язково повідомте нас завчасно. Ми врахуємо особливості харчування та навантаження, а також узгодимо необхідні препарати/процедури з батьками.",
                },
                {
                  q: "Чи надає табір PolianskiCamp · To BE(e) Camp послугу трансферу дітей?",
                  a: "Так, за потреби організовуємо трансфер. Деталі (місто, час, вартість) узгоджуються індивідуально.",
                },
                ].map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-2xl bg-white px-4 py-3 shadow-sm"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-slate-800">
                        {item.q}
                      </span>
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-sm text-slate-700 transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="pt-3 text-sm leading-relaxed text-slate-700">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="mx-[-1rem] bg-[#F0F2D6] py-10 md:mx-[-1.5rem]"
      >
        <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
        {/* Блок 0 – що дає відвідування табору */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold tracking-tight text-polian-dark-blue md:text-3xl">
            Що дає дитині відвідування табору
          </h2>
          <div className="relative overflow-hidden rounded-3xl bg-white p-4 shadow-card-soft">
            <div className="benefits-marquee gap-3 pb-1">
              {[
                // {
                //   title:
                //     "Діти долають труднощі, формуючи впевненість і стійкість.",
                //   color: "from-polian-blue/80 to-polian-blue/60",
                // },
                {
                  title: "Нові знайомства та дружба на все життя.",
                  color: "from-orange-500/85 to-orange-400/70",
                },
                {
                  title:
                    "Діти вчаться спілкуванню, дружбі та роботі в команді.",
                  color: "from-emerald-500/85 to-emerald-400/70",
                },
                {
                  title:
                    "Щоденні ігри зміцнюють фізичну форму та здоровʼя.",
                  color: "from-indigo-500/85 to-indigo-400/70",
                },
                {
                  title:
                    "Майстер-класи розвивають креативність і таланти дітей.",
                  color: "from-fuchsia-500/85 to-fuchsia-400/70",
                },
                {
                  title: "Нові знайомства та дружба на все життя.",
                  color: "from-orange-500/85 to-orange-400/70",
                },
                {
                  title:
                    "Діти вчаться ухвалювати рішення та відповідати за них.",
                  color: "from-purple-500/85 to-purple-400/70",
                },
                {
                  title:
                    "Вихователі забезпечують комфорт і безпеку кожної дитини.",
                  color: "from-rose-500/85 to-rose-400/70",
                },
                {
                  title:
                    "Діти вчаться спілкуванню, дружбі та роботі в команді.",
                  color: "from-emerald-500/85 to-emerald-400/70",
                },
              ]
                .concat([
                  // {
                  //   title:
                  //     "Діти долають труднощі, формуючи впевненість і стійкість.",
                  //   color: "from-polian-blue/80 to-polian-blue/60",
                  // },
                  {
                    title: "Нові знайомства та дружба на все життя.",
                    color: "from-orange-500/85 to-orange-400/70",
                  },
                ])
                .map((item, index) => (
                  <article
                    key={index}
                    className="group relative mr-3 min-w-[230px] max-w-[260px] flex-shrink-0 overflow-hidden rounded-[26px] bg-slate-200 shadow-card-soft"
                  >
                    <div className="relative aspect-[4/4.5] w-full">
                      {/* TODO: Замінити плейсхолдери на реальні фото, наприклад /images/benefit-1.jpg */}
                      <Image
                        src={
                          [
                            "/images/gallery-1.jpg",
                            "/images/gallery-2.jpg",
                            "/images/gallery-3.jpg",
                          ][index % 3]
                        }
                        alt="Дитячий табір PolianskiCamp · To BE(e) Camp"
                        fill
                        className="object-cover"
                      />
                      <div
                        className={`absolute inset-x-0 bottom-0 h-[36%] rounded-t-[30px] bg-gradient-to-t ${item.color} transition-all duration-400 group-hover:h-[40%]`}
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                      <p className="text-[13px] font-semibold leading-snug text-white drop-shadow-sm">
                        {item.title}
                      </p>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </div>

        {/* Блок 1 – відео-відгуки */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-polian-dark-blue">
            Відео-відгуки кемперів
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <article
              className="rounded-card-xl bg-white p-5 shadow-card-soft"
              style={{ borderRadius: "20px" }}
            >
              <div className="space-y-3">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200">
                  <iframe
                    src="https://www.youtube.com/embed/fnpqBThZ2AU"
                    title="Відео про PolianskiCamp · To BE(e) Camp"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <p className="text-sm font-semibold text-slate-800">
                  Що для тебе PolianskiCamp · To BE(e) Camp?
                </p>
              </div>
            </article>

            <article
              className="rounded-card-xl bg-white p-5 shadow-card-soft"
              style={{ borderRadius: "20px" }}
            >
              <div className="space-y-3">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200">
                  <iframe
                    src="https://www.youtube.com/embed/dfvNCnBigk4"
                    title="Відео-відгук про PolianskiCamp · To BE(e) Camp"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <p className="text-sm font-semibold text-slate-800">
                  Про PolianskiCamp · To BE(e) Camp – яскраві емоції та спогади
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* Блок 2 – фото-галерея / колаж */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-polian-dark-blue">
            Деякі світлини з нашими кемперами
          </h3>
          <div className="relative overflow-hidden rounded-3xl bg-[#F3F4FF] px-5 py-6">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
              {[
                "/images/kemp-1.jpg",
                "/images/kemp-2.jpg",
                "/images/kemp-3.jpg",
                "/images/kemp-4.jpg",
                "/images/kemp-5.jpg",
              ].map((src) => (
                <button
                  type="button"
                  key={src}
                  className="relative min-w-[240px] max-w-[260px] flex-shrink-0 snap-start overflow-hidden rounded-2xl bg-slate-200 aspect-[4/3] cursor-pointer text-left sm:min-w-[260px] sm:max-w-[280px]"
                  onClick={() => setLightboxSrc(src)}
                  aria-label="Відкрити фото кемперів"
                >
                  <Image
                    src={src}
                    alt="Світлина з кемпером"
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
        </div>
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
                        href="mailto:polianskicamp.ua@gmail.com"
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
                  className="flex h-[92px] items-center justify-center gap-3 rounded-2xl bg-[var(--foreground)] px-4 py-3 text-left text-white shadow-card-soft transition hover:-translate-y-0.5 hover:shadow-lg mt-3 mb-3 md:h-[100px] md:mt-[20px] md:mb-[20px]"
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
              <a
                href="https://www.google.com/maps/place/%D0%9A%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0/@48.6212797,22.968822,506m/data=!3m1!1e3!4m9!3m8!1s0x47391853102c6fb5:0x1b8d4f42d81957a2!5m2!4m1!1i2!8m2!3d48.6211428!4d22.9703324!16s%2Fg%2F1tkc5fzz?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="block w-full overflow-hidden rounded-3xl bg-slate-100"
              >
                <div className="relative aspect-[4/3] w-full md:aspect-auto md:h-full">
                  <Image
                    src="/images/contact-map-v2.png"
                    alt="Мапа розташування Катерина готель"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-end p-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-slate-800 shadow-sm">
                      Відкрити в Google Maps
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

