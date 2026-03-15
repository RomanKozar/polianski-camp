import Link from "next/link";
import Image from "next/image";

// TODO: You can enrich this footer with additional navigation, social links or partner logos later.

export const Footer = () => {
  return (
    <footer className="mt-16 mx-[-1rem] border-t border-white/10 bg-[#006980] text-white md:mx-[-1.5rem]">
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
        <div className="relative flex items-center justify-center rounded-t-[40px] bg-[#006980] px-6 py-4 md:rounded-t-[60px]">
          {/* Left call button */}
          <Link
            href="#contacts"
            className="absolute left-0 hidden h-11 w-11 items-center justify-center rounded-full bg-polian-yellow text-[#006980] shadow-card-soft md:flex"
            aria-label="Зателефонувати"
          >
            📞
          </Link>

          {/* Center content: logo + text line */}
          <div className="flex flex-col items-center gap-2 text-center md:flex-row md:gap-4">
            {/* Mini logo mark */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                
               <Image
            src="/images/polianski-logo.png"
            alt="PolianskiCamp logo"
            width={100}
            height={70}
            className="h-17 w-auto"
          />
              </div>
              <span className="text-sm font-semibold tracking-[0.16em] uppercase">
                PolianskiCamp
              </span>
            </Link>

            <span className="hidden text-[11px] text-white/60 md:inline">
              ·
            </span>

            <div className="flex flex-col items-center gap-1 text-xs uppercase tracking-[0.16em] md:flex-row md:gap-3">
              <span className="text-polian-yellow">Live in the moment</span>
              <span className="text-white/70">
                © {new Date().getFullYear()} PolianskiCamp · To BE(e) Camp team
              </span>
            </div>
          </div>

          {/* Right side: simple social / up controls */}
          <div className="absolute right-0 flex items-center gap-2">
            <Link
              href="#top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-xs text-white/80 hover:border-white hover:text-white"
              aria-label="Вгору"
            >
              ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

