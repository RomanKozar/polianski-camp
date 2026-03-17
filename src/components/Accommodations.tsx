'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const campPhoneNumber = '+380XXXXXXXXX'

const Accommodations = () => {
	const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

	useEffect(() => {
		if (!lightboxSrc) return
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setLightboxSrc(null)
		}
		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [lightboxSrc])

	return (
		<section
			id='accommodations'
			className='mx--1rem bg-[#F0F2D6] py-10 md:mx--1.5rem'
		>
			<div className='mx-auto max-w-6xl space-y-6 px-4 md:px-6'>
				<h2 className='text-2xl font-bold tracking-tight text-polian-dark-blue'>
					Проживання та харчування
				</h2>
				<div className='grid gap-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)]'>
					{/* Left column – відео та галерея */}
					<article
						className='rounded-card-xl bg-white p-6 shadow-card-soft'
						style={{ borderRadius: '20px' }}
					>
						<div className='space-y-4'>
							<button
								type='button'
								className='relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl bg-slate-200 text-left'
								onClick={() => setLightboxSrc('/images/food-1.jpg')}
								aria-label='Відкрити фото харчування'
							>
								<Image
									src='/images/food-1.jpg'
									alt='Харчування в таборі'
									fill
									className='object-cover transition-transform duration-300 hover:scale-[1.02]'
								/>
							</button>
							<div className='grid grid-cols-3 gap-3 md:grid-cols-4'>
								{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => (
									<button
										type='button'
										key={item}
										className='aspect-4/3 cursor-pointer overflow-hidden rounded-xl bg-slate-200 text-left'
										onClick={() => setLightboxSrc('/images/home-1.jpg')}
										aria-label='Відкрити фото проживання'
									>
										<div className='relative h-full w-full'>
											<Image
												src='/images/home-1.jpg'
												alt='Проживання та територія табору'
												fill
												className='object-cover transition-transform duration-300 hover:scale-[1.04]'
											/>
										</div>
									</button>
								))}
							</div>
						</div>
					</article>

					{/* Right column – деталі проживання та харчування */}
					<article
						className='rounded-card-xl bg-white p-6 shadow-card-soft'
						style={{ borderRadius: '20px' }}
					>
						<div className='space-y-4 text-sm leading-relaxed text-slate-800'>
							<p>
								Наші заїзди (групи до <strong>20 дітей</strong>) разом із
								наставниками проживають у комфортному та теплому хостелі готелю{' '}
								<strong>«Катерина»</strong>, який повністю займає 3-й поверх. Це
								створює атмосферу затишку та відчуття великої дружньої родини.
							</p>

							<div>
								<h3 className='text-base font-semibold text-polian-dark-blue'>
									Умови проживання:
								</h3>
								<ul className='mt-2 space-y-2 text-sm'>
									<li>
										✦ <strong>Затишні кімнати:</strong> на поверсі всього 5
										кімнат, розрахованих на 2, 3, 4, 5 та 6 дітей. Ліжка зручні,
										з чистою постільною білизною.
									</li>
									<li>
										✦ <strong>Спільний простір:</strong> на поверсі є велика
										зона для проведення майстер-класів, гри в настолки та
										вечірніх посиденьок, а також обладнана кухня.
									</li>
									<li>
										✦ <strong>Санітарні зони:</strong> для комфорту дітей на
										поверсі передбачено 4 сучасні санвузли та 3 душові кімнати.
									</li>
								</ul>
							</div>

							<div>
								<h3 className='text-base font-semibold text-polian-dark-blue'>
									Безпека — наш пріоритет:
								</h3>
								<ul className='mt-2 space-y-2 text-sm'>
									<li>
										✦ Команда наставників та вожатих{' '}
										<strong>знаходиться з дітьми цілодобово (24/7)</strong>. Ми
										завжди поруч.
									</li>
									<li>
										✦ На території готелю та безпосередньо в хостелі ведеться{' '}
										<strong>відеонагляд</strong>.
									</li>
								</ul>
							</div>

							<div>
								<h3 className='text-base font-semibold text-polian-dark-blue'>
									Здорове та смачне харчування:
								</h3>
								<p className='mt-1'>
									У таборі діє збалансоване меню, яке дає дітям енергію для
									активного відпочинку:
								</p>
								<ul className='mt-2 space-y-1 text-sm'>
									<li>
										✦ <strong>Триразове повноцінне харчування</strong> (гарячі
										сніданки, ситні обіди та вечері).
									</li>
									<li>
										✦ <strong>+ 2 додаткові перекуси</strong> протягом дня
										(фрукти, печиво, чай), щоб ніхто не був голодним між
										активностями.
									</li>
								</ul>
							</div>
							<div className='pt-2'>
								<Link
									href={`tel:${campPhoneNumber}`}
									className='inline-flex rounded-full border border-black bg-foreground px-6 py-2.5 text-sm font-semibold text-white shadow-card-soft transition hover:-translate-y-0.5 hover:shadow-lg'
								>
									Забронювати путівку зараз
								</Link>
							</div>
						</div>
					</article>
				</div>
			</div>

			{/* 👈 ДОДАНО КОД САМОГО ВІКНА (ЛАЙТБОКСУ) */}
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
										alt='Фото табору'
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

export default Accommodations
