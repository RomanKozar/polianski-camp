'use client'

import Image from 'next/image'
import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react' // 👈 Додано імпорти

const Gallery = () => {
	// 👈 Створено стан для модалки
	const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

	// 👈 Логіка закриття по клавіші Escape
	useEffect(() => {
		if (!lightboxSrc) return
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setLightboxSrc(null)
		}
		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [lightboxSrc])

	return (
		<section id='gallery' className='-mx-4 bg-[#F0F2D6] py-10 md:-mx-6'>
			<div className='mx-auto max-w-6xl space-y-8 px-4 md:px-6'>
				{/* Блок 0 – що дає відвідування табору */}
				<div className='space-y-5'>
					<h2 className='text-2xl font-bold tracking-tight text-polian-dark-blue md:text-3xl'>
						Що дає дитині відвідування табору
					</h2>
					<div className='relative overflow-hidden rounded-3xl bg-white p-4 shadow-card-soft'>
						<div className='benefits-marquee gap-3 pb-1'>
							{[
								{
									title: 'Нові знайомства та дружба на все життя.',
									color: 'from-orange-500/85 to-orange-400/70',
								},
								{
									title:
										'Діти вчаться спілкуванню, дружбі та роботі в команді.',
									color: 'from-emerald-500/85 to-emerald-400/70',
								},
								{
									title: 'Щоденні ігри зміцнюють фізичну форму та здоровʼя.',
									color: 'from-indigo-500/85 to-indigo-400/70',
								},
								{
									title:
										'Майстер-класи розвивають креативність і таланти дітей.',
									color: 'from-fuchsia-500/85 to-fuchsia-400/70',
								},
								{
									title: 'Нові знайомства та дружба на все життя.',
									color: 'from-orange-500/85 to-orange-400/70',
								},
								{
									title:
										'Діти вчаться ухвалювати рішення та відповідати за них.',
									color: 'from-purple-500/85 to-purple-400/70',
								},
								{
									title:
										'Вихователі забезпечують комфорт і безпеку кожної дитини.',
									color: 'from-rose-500/85 to-rose-400/70',
								},
								{
									title:
										'Діти вчаться спілкуванню, дружбі та роботі в команді.',
									color: 'from-emerald-500/85 to-emerald-400/70',
								},
							]
								.concat([
									{
										title: 'Нові знайомства та дружба на все життя.',
										color: 'from-orange-500/85 to-orange-400/70',
									},
								])
								.map((item, index) => (
									<article
										key={index}
										className='group relative mr-3 min-w-57.5 max-w-65 shrink-0 overflow-hidden rounded-[26px] bg-slate-200 shadow-card-soft'
									>
										<div className='relative aspect-4/4.5 w-full'>
											{/* TODO: Замінити плейсхолдери на реальні фото */}
											<Image
												src={
													[
														'/images/gallery-1.jpg',
														'/images/gallery-2.jpg',
														'/images/gallery-3.jpg',
													][index % 3]
												}
												alt='Дитячий табір PolianskiCamp · To BE(e) Camp'
												fill
												className='object-cover'
											/>
											<div
												className={`absolute inset-x-0 bottom-0 h-[36%] rounded-t-[30px] bg-linear-to-t ${item.color} transition-all duration-400 group-hover:h-[40%]`}
											/>
										</div>
										<div className='pointer-events-none absolute inset-x-0 bottom-0 p-4'>
											<p className='text-[13px] font-semibold leading-snug text-white drop-shadow-sm'>
												{item.title}
											</p>
										</div>
									</article>
								))}
						</div>
					</div>
				</div>

				{/* Блок 1 – відео-відгуки */}
				<div className='space-y-4'>
					<h2 className='text-2xl font-bold tracking-tight text-polian-dark-blue'>
						Відео-відгуки кемперів
					</h2>
					<div className='grid gap-4 md:grid-cols-2'>
						<article
							className='rounded-card-xl bg-white p-5 shadow-card-soft'
							style={{ borderRadius: '20px' }}
						>
							<div className='space-y-3'>
								<div className='relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-200'>
									<iframe
										src='https://www.youtube.com/embed/fnpqBThZ2AU'
										title='Відео про PolianskiCamp · To BE(e) Camp'
										className='h-full w-full'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
										allowFullScreen
									/>
								</div>
								<p className='text-sm font-semibold text-slate-800'>
									Що для тебе PolianskiCamp · To BE(e) Camp?
								</p>
							</div>
						</article>

						<article
							className='rounded-card-xl bg-white p-5 shadow-card-soft'
							style={{ borderRadius: '20px' }}
						>
							<div className='space-y-3'>
								<div className='relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-200'>
									<iframe
										src='https://www.youtube.com/embed/dfvNCnBigk4'
										title='Відео-відгук про PolianskiCamp · To BE(e) Camp'
										className='h-full w-full'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
										allowFullScreen
									/>
								</div>
								<p className='text-sm font-semibold text-slate-800'>
									Про PolianskiCamp · To BE(e) Camp – яскраві емоції та спогади
								</p>
							</div>
						</article>
					</div>
				</div>

				{/* Блок 2 – фото-галерея / колаж */}
				<div className='space-y-4'>
					<h3 className='text-xl font-bold text-polian-dark-blue'>
						Деякі світлини з нашими кемперами
					</h3>
					<div className='relative overflow-hidden rounded-3xl bg-[#ffffff] px-5 py-6'>
						<div className='flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2'>
							{[
								'/images/kemp-1.jpg',
								'/images/kemp-2.jpg',
								'/images/kemp-3.jpg',
								'/images/kemp-4.jpg',
								'/images/kemp-5.jpg',
							].map(src => (
								<button
									type='button'
									key={src}
									className='relative min-w-60 max-w-65 shrink-0 snap-start overflow-hidden rounded-2xl bg-slate-200 aspect-4/3 cursor-pointer text-left sm:min-w-65 sm:max-w-70'
									onClick={() => setLightboxSrc(src)} // 👈 Клік передає фото в стейт
									aria-label='Відкрити фото кемперів'
								>
									<Image
										src={src}
										alt='Світлина з кемпером'
										fill
										className='object-cover'
									/>
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* 👈 ДОДАНО КОД МОДАЛЬНОГО ВІКНА */}
			{lightboxSrc && typeof document !== 'undefined'
				? createPortal(
						<div
							className='fixed inset-0 z-999 flex h-dvh w-full items-center justify-center bg-black/60 p-4 backdrop-blur-sm'
							role='dialog'
							aria-modal='true'
							onClick={() => setLightboxSrc(null)}
						>
							<div
								className='relative w-full max-w-5xl overflow-hidden rounded-3xl bg-black shadow-2xl'
								onClick={e => e.stopPropagation()}
							>
								<div className='relative aspect-4/3 w-full sm:aspect-16/10'>
									<Image
										src={lightboxSrc}
										alt='Фото з табору'
										fill
										className='object-contain'
										sizes='(max-width: 768px) 95vw, 900px'
									/>
								</div>
								<button
									type='button'
									onClick={() => setLightboxSrc(null)}
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
