import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PolianskiCamp · Live in the moment",
  description:
    "PolianskiCamp – a ski and adventure camp for kids, created together with the To BE(e) Camp team.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        {/* TODO: You can wrap everything in additional layout providers (e.g. analytics, theming) here. */}
        <Header />
        <main className="mx-auto min-h-[60vh] max-w-6xl px-4 pb-16 pt-24 md:px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

