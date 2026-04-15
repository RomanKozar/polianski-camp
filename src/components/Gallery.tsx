'use client'

import Image from 'next/image'
import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react' // 👈 Додано імпорти

const benefitsGalleryImages = [
	'/images/reviews/reviews-1.avif',
	'/images/reviews/reviews-2.avif',
	'/images/reviews/reviews-3.avif',
	'/images/reviews/reviews-4.avif',
	'/images/reviews/reviews-5.avif',
	'/images/reviews/reviews-6.avif',
	'/images/reviews/reviews-7.avif',
	'/images/reviews/reviews-8.avif',
	'/images/reviews/reviews-9.avif',
	'/images/reviews/reviews-10.avif',
	'/images/reviews/reviews-11.avif',
	'/images/reviews/reviews-12.avif',
	'/images/reviews/reviews-13.avif',
	'/images/reviews/reviews-14.avif',
	'/images/reviews/reviews-15.avif',
]

const campVisitGalleryImages = Array.from(
	{ length: 16 },
	(_, index) => `/images/camp-visit/camp-visit-${index + 1}.avif`,
)

const campVisitBenefitCaptions = [
	'Нові знайомства та дружба на все життя.',
	'Діти вчаться спілкуванню, дружбі та роботі в команді.',
	'Щоденні ігри зміцнюють фізичну форму та здоровʼя.',
	'Майстер-класи розвивають креативність і таланти дітей.',
	'Живе спілкування допомагає розкритися соромʼязливим дітям.',
	'Командні квести вчать підтримувати одне одного.',
	'Насичена програма не дає нудьгувати жодного дня.',
	'Діти стають самостійнішими в побуті та рішеннях.',
	'Активності на свіжому повітрі додають енергії та радості.',
	'Тематичні вечори створюють теплі спогади на роки.',
	'Безпечна атмосфера допомагає дитині почуватися впевнено.',
	'Наставники уважно підтримують кожну дитину впродовж зміни.',
	'Спільні ігри розвивають лідерство та відповідальність.',
	'Творчі заняття надихають пробувати нове без страху.',
	'Дитина вчиться поважати кордони та думку інших.',
	'Кожен день у таборі дарує нові враження й мотивацію.',
]

const reviewCaptions = [
	'Нові знайомства та дружба на все життя.',
	'Діти вчаться спілкуванню, дружбі та роботі в команді.',
	'Щоденні ігри зміцнюють фізичну форму та здоровʼя.',
	'Майстер-класи розвивають креативність і таланти дітей.',
	'Діти вчаться ухвалювати рішення та відповідати за них.',
	'Вихователі забезпечують комфорт і безпеку кожної дитини.',
]

const benefitCardGradients = [
	'from-orange-500/85 to-orange-400/70',
	'from-emerald-500/85 to-emerald-400/70',
	'from-indigo-500/85 to-indigo-400/70',
	'from-fuchsia-500/85 to-fuchsia-400/70',
	'from-purple-500/85 to-purple-400/70',
	'from-rose-500/85 to-rose-400/70',
]

const campersGalleryImages = [
	'/images/kemp-1.jpg',
	'/images/kemp-2.jpg',
	'/images/kemp-3.jpg',
	'/images/kemp-4.jpg',
	'/images/kemp-5.jpg',
]

const winterGalleryImages = Array.from(
	{ length: 28 },
	(_, index) => `/images/winter/winter-${index + 1}.avif`,
)

const summerGalleryImages = Array.from(
	{ length: 54 },
	(_, index) => `/images/summer/summer-${index + 1}.avif`,
)

const splitIntoTwoRows = <T,>(items: T[]) => {
	const middle = Math.ceil(items.length / 2)
	return [items.slice(0, middle), items.slice(middle)] as const
}

const camperShortVideos = [
	{
		title: 'Shorts #1 · PolianskiCamp',
		embedUrl: 'https://www.youtube.com/embed/fnpqBThZ2AU',
	},
	{
		title: 'Shorts #2 · PolianskiCamp',
		embedUrl: 'https://www.youtube.com/embed/dfvNCnBigk4',
	},
	{
		title: 'Shorts #3 · PolianskiCamp',
		embedUrl: 'https://www.youtube.com/embed/fnpqBThZ2AU',
	},
	{
		title: 'Shorts #4 · PolianskiCamp',
		embedUrl: 'https://www.youtube.com/embed/dfvNCnBigk4',
	},
]

type LightboxState = {
	images: string[]
	index: number
}

const Gallery = () => {
	// 👈 Створено стан для модалки
	const [lightbox, setLightbox] = useState<LightboxState | null>(null)
	const lightboxSrc = lightbox ? lightbox.images[lightbox.index] : null
	const [summerTopRow, summerBottomRow] = splitIntoTwoRows(summerGalleryImages)
	const [winterTopRow, winterBottomRow] = splitIntoTwoRows(winterGalleryImages)

	// 👈 Логіка закриття по клавіші Escape
	useEffect(() => {
		if (!lightbox) return
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setLightbox(null)
				return
			}
			if (e.key === 'ArrowLeft') {
				setLightbox(prev =>
					prev
						? {
								...prev,
								index: (prev.index - 1 + prev.images.length) % prev.images.length,
							}
						: prev,
				)
			}
			if (e.key === 'ArrowRight') {
				setLightbox(prev =>
					prev
						? {
								...prev,
								index: (prev.index + 1) % prev.images.length,
							}
						: prev,
				)
			}
		}
		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [lightbox])

	return (
		<section
			id='gallery'
			className='-mx-4 rounded-[20px] bg-[#F0F2D6] py-10 md:-mx-6'
		>
			<div className='mx-auto max-w-6xl space-y-8 px-4 md:px-6'>
				{/* Блок 0 – що дає відвідування табору */}
				<div className='space-y-5'>
					<h2 className='text-2xl font-bold tracking-tight text-polian-dark-blue md:text-3xl'>
						Що дає дитині відвідування табору
					</h2>
					<div className='relative overflow-hidden rounded-3xl bg-white p-4 shadow-card-soft'>
						<div className='benefits-marquee gap-3 pb-1'>
							{campVisitGalleryImages.map((src, index) => (
									<button
										type='button'
										key={src}
										className='group relative mr-3 min-w-57.5 max-w-65 shrink-0 overflow-hidden rounded-[26px] bg-slate-200 text-left shadow-card-soft cursor-pointer'
										onClick={() =>
											setLightbox({
												images: campVisitGalleryImages,
												index,
											})
										}
										aria-label='Відкрити фото з перевагами табору'
									>
										<div className='relative aspect-4/4.5 w-full'>
											<Image
												src={src}
												alt='Дитячий табір PolianskiCamp · To BE(e) Camp'
												fill
												className='object-cover'
												sizes='(max-width: 640px) 230px, 260px'
											/>
											<div
												className={`absolute inset-x-0 bottom-0 h-[36%] rounded-t-[30px] bg-linear-to-t ${benefitCardGradients[index % benefitCardGradients.length]} transition-all duration-400 group-hover:h-[40%]`}
											/>
										</div>
										<div className='pointer-events-none absolute inset-x-0 bottom-0 p-4'>
											<p className='text-[13px] font-semibold leading-snug text-white drop-shadow-sm'>
												{campVisitBenefitCaptions[index % campVisitBenefitCaptions.length]}
											</p>
										</div>
									</button>
								))}
						</div>
					</div>
				</div>

				{/* Блок 1 – відео-відгуки */}
				<div className='space-y-4'>
					<h2 className='text-2xl font-bold tracking-tight text-polian-dark-blue md:text-3xl'>
						Відео-відгуки кемперів
					</h2>
					<div className='grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4'>
						{camperShortVideos.map(video => (
							<article
								key={video.title}
								className='rounded-card-xl bg-white p-3 shadow-card-soft sm:p-4'
								style={{ borderRadius: '20px' }}
							>
								<div className='space-y-3'>
									<div className='relative aspect-3/4 w-full overflow-hidden rounded-2xl bg-slate-200 sm:aspect-9/16'>
										<iframe
											src={video.embedUrl}
											title={video.title}
											className='h-full w-full'
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
											allowFullScreen
										/>
									</div>
									<p className='text-xs font-semibold text-slate-800 sm:text-sm'>{video.title}</p>
								</div>
							</article>
						))}
					</div>
				</div>

				<div className='space-y-5'>
					<h2 className='text-2xl font-bold tracking-tight text-polian-dark-blue md:text-3xl'>
						Відгуки про нас
					</h2>
					<div className='relative overflow-hidden rounded-3xl bg-white p-4 shadow-card-soft'>
						<div className='benefits-marquee gap-3 pb-1'>
							{benefitsGalleryImages.map((src, index) => (
									<button
										type='button'
										key={src}
										className='group relative mr-3 min-w-57.5 max-w-65 shrink-0 overflow-hidden rounded-[26px] bg-transparent text-left shadow-card-soft cursor-pointer'
										onClick={() =>
											setLightbox({
												images: benefitsGalleryImages,
												index,
											})
										}
										aria-label='Відкрити фото з перевагами табору'
									>
										<div className='relative aspect-4/4.5 w-full'>
											<Image
												src={src}
												alt='Дитячий табір PolianskiCamp · To BE(e) Camp'
												fill
												className='object-contain'
												sizes='(max-width: 640px) 230px, 260px'
											/>
											<div
												className={`absolute inset-x-0 bottom-0 h-[36%] rounded-t-[30px] bg-linear-to-t ${benefitCardGradients[index % benefitCardGradients.length]} transition-all duration-400 group-hover:h-[40%]`}
											/>
										</div>
										<div className='pointer-events-none absolute inset-x-0 bottom-0 p-4'>
											<p className='text-[13px] font-semibold leading-snug text-white drop-shadow-sm'>
												{reviewCaptions[index % reviewCaptions.length]}
											</p>
										</div>
									</button>
								))}
						</div>
					</div>
				</div>

				{/* Блок 2 – фото-галерея / колаж */}
				<div className='space-y-4'>
					<h3 className='text-2xl font-bold tracking-tight text-polian-dark-blue md:text-3xl'>
						Галерея теплих спогадів наших таборів
					</h3>
					<div className='relative overflow-hidden rounded-3xl border border-violet-200/70 bg-white px-5 py-6'>
						<div className='overflow-x-auto pb-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#006980]'>
							<div className='w-max space-y-4'>
								{[summerTopRow, summerBottomRow].map((row, rowIndex) => (
									<div
										key={`summer-grid-row-${rowIndex}`}
										className='flex snap-x snap-mandatory gap-4'
									>
										{row.map((src, index) => {
											const absoluteIndex =
												rowIndex === 0 ? index : summerTopRow.length + index
											return (
												<button
													type='button'
													key={src}
													className='relative min-w-60 max-w-65 shrink-0 snap-start overflow-hidden rounded-2xl bg-slate-200 aspect-4/3 cursor-pointer text-left sm:min-w-65 sm:max-w-70'
													onClick={() =>
														setLightbox({
															images: summerGalleryImages,
															index: absoluteIndex,
														})
													}
													aria-label='Відкрити фото літніх заїздів'
												>
													<Image
														src={src}
														alt='Світлина з літнього заїзду'
														fill
														className='object-cover'
														sizes='(max-width: 640px) 260px, (max-width: 1024px) 300px, 320px'
													/>
												</button>
											)
										})}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Блок 2 – фото-галерея / колаж */}
				<div className='space-y-4'>
					<h3 className='text-2xl font-bold tracking-tight text-polian-dark-blue md:text-3xl'>
						Найяскравіші моменти з зимових заїздів
					</h3>
					<div className='relative overflow-hidden rounded-3xl border border-violet-200/70 bg-white px-5 py-6'>
						<div className='overflow-x-auto pb-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#006980]'>
							<div className='w-max space-y-4'>
								{[winterTopRow, winterBottomRow].map((row, rowIndex) => (
									<div
										key={`winter-grid-row-2-${rowIndex}`}
										className='flex snap-x snap-mandatory gap-4'
									>
										{row.map((src, index) => {
											const absoluteIndex =
												rowIndex === 0 ? index : winterTopRow.length + index
											return (
												<button
													type='button'
													key={src}
													className='relative min-w-60 max-w-65 shrink-0 snap-start overflow-hidden rounded-2xl bg-slate-200 aspect-4/3 cursor-pointer text-left sm:min-w-65 sm:max-w-70'
													onClick={() =>
														setLightbox({
															images: winterGalleryImages,
															index: absoluteIndex,
														})
													}
													aria-label='Відкрити фото зимових заїздів'
												>
													<Image
														src={src}
														alt='Світлина із зимового заїзду'
														fill
														className='object-cover'
														sizes='(max-width: 640px) 260px, (max-width: 1024px) 300px, 320px'
													/>
												</button>
											)
										})}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* 👈 ДОДАНО КОД МОДАЛЬНОГО ВІКНА */}
			{lightboxSrc && typeof document !== 'undefined'
				? createPortal(
						<div
							className='lightbox-overlay-animate fixed inset-0 z-999 flex h-dvh w-full items-center justify-center bg-black/60 p-4 backdrop-blur-sm'
							role='dialog'
							aria-modal='true'
							onClick={() => setLightbox(null)}
						>
							<div
								className='lightbox-panel-animate relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white/5 shadow-2xl'
								onClick={e => e.stopPropagation()}
							>
								<div className='relative h-[82vh] w-full sm:h-[85vh]'>
									<Image
										src={lightboxSrc}
										alt='Фото з табору'
										fill
										className='lightbox-image-animate object-contain'
										sizes='(max-width: 768px) 92vw, 1200px'
									/>
								</div>
								<button
									type='button'
									onClick={() =>
										setLightbox(prev =>
											prev
												? {
														...prev,
														index:
															(prev.index - 1 + prev.images.length) %
															prev.images.length,
													}
												: prev,
										)
									}
									className='absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-semibold text-slate-900 shadow-sm backdrop-blur hover:bg-white'
									aria-label='Попереднє фото'
								>
									‹
								</button>
								<button
									type='button'
									onClick={() =>
										setLightbox(prev =>
											prev
												? {
														...prev,
														index: (prev.index + 1) % prev.images.length,
													}
												: prev,
										)
									}
									className='absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-semibold text-slate-900 shadow-sm backdrop-blur hover:bg-white'
									aria-label='Наступне фото'
								>
									›
								</button>
								<button
									type='button'
									onClick={() => setLightbox(null)}
									className='absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg font-semibold text-slate-900 shadow-sm backdrop-blur hover:bg-white'
									aria-label='Закрити'
								>
									×
								</button>
							</div>
						</div>,
						document.body,
					)
				: null}
		</section>
	)
}

export default Gallery
