import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL ?? 'https://polianski-camp.vercel.app'
/** Google Search Console; можна замінити через GOOGLE_SITE_VERIFICATION */
const googleSiteVerification =
	process.env.GOOGLE_SITE_VERIFICATION ??
	'Ry90muz5f4mcdihUWpg--5DuAvOsDAYahvTQijtr6FQ'

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: 'Дитячий табір PolianskiCamp | Живи в моменті',
		template: '%s | PolianskiCamp',
	},
	description:
		'PolianskiCamp – активний відпочинок та пригоди для дітей у Карпатах. Створено спільно з командою To BE(e) Camp.',
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true },
	},
	verification: { google: googleSiteVerification },
	openGraph: {
		type: 'website',
		locale: 'uk_UA',
		url: siteUrl,
		siteName: 'PolianskiCamp',
		title: 'Дитячий табір PolianskiCamp | Живи в моменті',
		description:
			'PolianskiCamp – активний відпочинок та пригоди для дітей у Карпатах. Створено спільно з командою To BE(e) Camp.',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='uk'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased bg-[url('/images/gori.webp')] bg-cover bg-center bg-fixed text-slate-900`}
			>
				{/* TODO: You can wrap everything in additional layout providers (e.g. analytics, theming) here. */}
				<Header />
				<main className='mx-auto min-h-[60vh] max-w-6xl px-4 pb-16 pt-24 md:px-6'>
					{children}
				</main>
				<Footer />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
