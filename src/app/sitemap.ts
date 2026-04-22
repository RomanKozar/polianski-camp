import type { MetadataRoute } from 'next'

function siteBaseUrl(): string {
	return (
		process.env.NEXT_PUBLIC_SITE_URL ??
		(process.env.VERCEL_URL
			? `https://${process.env.VERCEL_URL}`
			: 'https://polianski-camp.vercel.app')
	)
}

export default function sitemap(): MetadataRoute.Sitemap {
	const base = siteBaseUrl()
	const now = new Date()

	return [
		{
			url: base,
			lastModified: now,
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: `${base}/zmina-1`,
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${base}/zmina-2`,
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	]
}
