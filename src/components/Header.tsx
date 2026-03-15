import Link from "next/link";
import Image from "next/image";

// TODO: Поклади свій логотип у `public/images/polianski-logo.png`
// і, якщо захочеш, зміни шлях/розмір нижче.

export const Header = () => {
  return (
    <header
      className="fixed inset-x-0 top-0 z-40 text-white shadow-card-soft"
      style={{ backgroundColor: "#006980" }} // Polian dark blue
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 md:px-6 md:py-5">
        {/* Logo section – тут показується твій логотип */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/polianski-logo.png"
            alt="PolianSki Camp logo"
            width={140}
            height={70}
            className="h-12 w-auto md:h-14"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 text-base font-medium md:flex">
          {/* TODO: Wire these links to real sections/routes when ready. */}
          <Link href="#seasons" className="transition hover:text-polian-yellow">
            Зміни
          </Link>
          <Link href="#about" className="transition hover:text-polian-yellow">
            Про нас
          </Link>
          <Link
            href="#accommodations"
            className="transition hover:text-polian-yellow"
          >
            Проживання
          </Link>
          <Link href="#reviews" className="transition hover:text-polian-yellow">
            Часті-питання
          </Link>
          <Link href="#gallery" className="transition hover:text-polian-yellow">
            Галерея
          </Link>
          <Link href="#contacts" className="transition hover:text-polian-yellow">
            Контакти
          </Link>
        </nav>

        {/* Phone / CTA */}
        <div className="flex items-center gap-3">
          {/* TODO: Replace placeholder phone with your actual camp phone number. */}
          <a
            href="tel:+380000000000"
            className="hidden text-sm font-semibold tracking-wide md:inline-block"
          >
            +38 (000) 000-00-00
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

