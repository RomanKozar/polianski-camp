/**
 * Канонічний URL сайту для metadata, sitemap, robots.
 * Не використовуйте VERCEL_URL — на збірці це зазвичай хост конкретного деплою,
 * через що Google Search Console лається «URL-адреса заборонена» у sitemap.
 */
const DEFAULT_SITE = 'https://polianski-camp.vercel.app'

export function getSiteBaseUrl(): string {
	return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || DEFAULT_SITE
}
