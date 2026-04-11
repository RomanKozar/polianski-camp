"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const scrollToTop = () => {
    const cleanUrl = `${window.location.pathname}${window.location.search}`;
    window.history.replaceState(null, "", cleanUrl);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  const navItems = [
    { href: "#seasons", label: "Зміни" },
    { href: "#about", label: "Про нас" },
    { href: "#accommodations", label: "Проживання" },
    { href: "#reviews", label: "Відгуки" },
    { href: "#gallery", label: "Галерея" },
    { href: "#contacts", label: "Контакти" },
  ];

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 text-white shadow-md transition-all duration-300"
      style={{ backgroundColor: "#006980" }} // Ваш фірмовий темно-бірюзовий
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Ліва частина: Логотип */}
        <div className="flex shrink-0 items-center px-2.5">
          <button
            type="button"
            className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-90"
            onClick={scrollToTop}
            aria-label="Прокрутити на початок сторінки"
          >
            {/* Замініть src на свій реальний шлях до логотипу */}
            <Image
              src="/images/logo/polianski-camp-logo.png" 
              alt="PolianSki Camp"
              width={160}
              height={50}
              className="h-28 w-auto object-contain"
            />
          </button>
        </div>

        {/* Центральна частина: Меню (тільки для десктопу) */}
        <nav className="hidden lg:flex items-center justify-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:text-[#F9E267]" // Жовтий hover
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Права частина: Номер телефону та Бургер */}
        <div className="flex items-center gap-6">
          {/* Номер телефону (видимий завжди) */}
          <a
            href="tel:+380996384686"
            className="text-base font-bold tracking-wider text-white transition-colors hover:text-[#F9E267] sm:text-lg"
          >
            +38 (099) 638-4686
          </a>

          {/* Бургер-меню (тільки для мобільних) */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#F9E267] hover:bg-white/10 focus:outline-none lg:hidden transition-colors"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            <span className="sr-only">Відкрити головне меню</span>
            {/* Іконка бургера (дві лінії, як на вашому фото) */}
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Мобільне випадаюче меню */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100 border-t border-white/20" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "#005566" }} // Трохи темніший фон для випадаючого меню
      >
        <nav className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white/10 hover:text-[#F9E267] transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {/* Додаткова кнопка в мобільному меню */}
          <a
            href="tel:+380996384686"
            className="mt-4 block w-full rounded-md bg-[#F9E267] px-4 py-3 text-center text-base font-bold text-[#006980] shadow-sm hover:bg-opacity-90 transition-all"
            onClick={() => setOpen(false)}
          >
            Подзвонити зараз
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;