'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const campPhoneNumber = '+380996384686'
const accommodationGalleryImages = [
	'/images/accommodation/accommodation-9.avif',
	'/images/accommodation/accommodation-1.avif',
	'/images/accommodation/accommodation-2.avif',
	'/images/accommodation/accommodation-3.avif',
	'/images/accommodation/accommodation-4.avif',
	'/images/accommodation/accommodation-5.avif',
	'/images/accommodation/accommodation-6.avif',
	'/images/accommodation/accommodation-7.avif',
	'/images/accommodation/accommodation-8.avif',
	'/images/accommodation/accommodation-10.avif',
]

const Accommodations = () => {
	const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
	const lightboxSrc =
		lightboxIndex !== null ? accommodationGalleryImages[lightboxIndex] : null

	useEffect(() => {
		if (lightboxIndex === null) return
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setLightboxIndex(null)
				return
			}
			if (e.key === 'ArrowLeft') {
				setLightboxIndex(prev =>
					prev === null
						? prev
						: (prev - 1 + accommodationGalleryImages.length) %
						  accommodationGalleryImages.length,
				)
			}
			if (e.key === 'ArrowRight') {
				setLightboxIndex(prev =>
					prev === null
						? prev
						: (prev + 1) % accommodationGalleryImages.length,
				)
			}
		}
		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [lightboxIndex])

	return (
		<section
			id='accommodations'
			className='-mx-4 rounded-[20px] bg-[#F0F2D6] py-10 md:-mx-6'
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
								onClick={() => setLightboxIndex(0)}
								aria-label='Відкрити фото харчування'
							>
								<Image
									src={accommodationGalleryImages[0]}
									alt='Харчування в таборі'
									fill
									className='object-cover transition-transform duration-300 hover:scale-[1.02]'
									sizes='(max-width: 768px) 100vw, 520px'
								/>
							</button>
							<div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
								{accommodationGalleryImages.slice(1).map((src, index) => (
									<button
										type='button'
										key={`home-photo-${index}`}
										className='aspect-video cursor-pointer overflow-hidden rounded-xl bg-slate-200 text-left md:aspect-4/3'
										onClick={() => setLightboxIndex(index + 1)}
										aria-label='Відкрити фото проживання'
									>
										<div className='relative h-full w-full'>
											<Image
												src={src}
												alt='Проживання та територія табору'
												fill
												className='object-cover transition-transform duration-300 hover:scale-[1.04]'
												sizes='(max-width: 768px) 100vw, 220px'
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
								Заїзди проходять у форматі невеликих груп до{' '}
								<strong>20 дітей</strong>, тож кожна дитина отримує увагу
								наставників, підтримку та комфорт. Ми тримаємо чіткий, але
								дружній режим дня, щоб поєднати активний відпочинок і здоровий
								баланс.
							</p>

							<div>
								<h3 className='text-base font-semibold text-polian-dark-blue'>
									Режим дня в таборі:
								</h3>
								<ul className='mt-2 space-y-2 text-sm'>
									<li>✦ Підйом о 08:00, ранкова руханка о 08:30.</li>
									<li>
										✦ Після сніданку — насичена програма: майстер-класи, ігри,
										прогулянки, походи та виїзні активності за планом зміни.
									</li>
									<li>
										✦ Щодня діти купаються в теплому басейні на території
										комплексу (незалежно від погоди).
									</li>
									<li>
										✦ Після обіду є година спокійного відпочинку: сон, читання,
										спілкування або дзвінок батькам.
									</li>
									<li>
										✦ Увечері — ватра, ігри на свіжому повітрі, командні
										активності та тепла атмосфера таборової спільноти.
									</li>
								</ul>
							</div>

							<div>
								<h3 className='text-base font-semibold text-polian-dark-blue'>
									Харчування:
								</h3>
								<p className='mt-1'>
									Харчування організоване у ресторані комплексу «Катерина», де
									для дітей накривають окремі столи.
								</p>
								<ul className='mt-2 space-y-2 text-sm'>
									<li>
										✦ <strong>Триразове харчування:</strong> сніданок (09:00),
										обід (13:30), вечеря (19:00).
									</li>
									<li>
										✦ <strong>Два перекуси:</strong> орієнтовно о 16:00 та
										21:00 (фрукти, йогурти, сирочки, соки, випічка).
									</li>
									<li>
										✦ Меню затверджене та збалансоване; обід обов&apos;язково
										включає першу страву.
									</li>
									<li>
										✦ Враховуємо індивідуальні особливості харчування за
										рекомендаціями батьків і з огляду на здоров&apos;я дитини.
									</li>
								</ul>
								<p className='mt-3 text-sm leading-relaxed text-slate-800'>
									Увечері ми також інколи готуємо разом із дітьми на вогнищі —
									це додає тепла, командності та справжніх таборових емоцій.
								</p>
								<ul className='mt-2 space-y-1 text-sm'>
									<li>✦ сосиски в тісті;</li>
									<li>✦ лаваш із сиром та овочами;</li>
									<li>✦ смажений маршмелоу.</li>
								</ul>
								<p className='mt-2 text-sm leading-relaxed text-slate-800'>
									Це створює особливу атмосферу та додає таборових емоцій 🌿
								</p>
								<div className='mt-3 rounded-2xl bg-slate-50 p-3'>
									<h4 className='text-sm font-semibold text-polian-dark-blue'>
										Особливі події:
									</h4>
									<p className='mt-1 text-sm leading-relaxed text-slate-800'>
										У передостанній день зміни проводимо велику спільну вечірку,
										де об&apos;єднуємо вечерю та перекус:
									</p>
									<ul className='mt-2 space-y-1 text-sm text-slate-800'>
										<li>✦ піца;</li>
										<li>✦ картопля фрі;</li>
										<li>✦ нагетси;</li>
										<li>✦ соки та смаколики.</li>
									</ul>
								</div>
							</div>

							<div>
								<h3 className='text-base font-semibold text-polian-dark-blue'>
									Турбота та безпека:
								</h3>
								<ul className='mt-2 space-y-2 text-sm'>
									<li>
										✦ Наставники поруч із дітьми <strong>24/7</strong>, тож
										кожна ситуація під контролем.
									</li>
									<li>
										✦ На території комплексу та у хостелі діє{' '}
										<strong>відеонагляд</strong>.
									</li>
									<li>
										✦ Телефони протягом дня доступні дітям; для старших груп на
										ніч телефони можуть збирати виховники, щоб діти якісно
										відпочивали.
									</li>
								</ul>
							</div>
							<div className='pt-2'>
								<Link
									href={`tel:${campPhoneNumber}`}
									className='inline-flex rounded-full border border-black bg-[#006980] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-card-soft transition-all duration-300 hover:-translate-y-0.5 hover:scale-105'
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
							className='lightbox-overlay-animate fixed inset-0 z-999 flex h-dvh w-full items-center justify-center bg-black/60 p-4 backdrop-blur-sm'
							role='dialog'
							aria-modal='true'
							onClick={() => setLightboxIndex(null)}
						>
							<div
								className='lightbox-panel-animate relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white/5 shadow-2xl'
								onClick={e => e.stopPropagation()}
							>
								<div className='relative h-[82vh] w-full sm:h-[85vh]'>
									<Image
										src={lightboxSrc}
										alt='Фото табору'
										fill
										className='lightbox-image-animate object-contain'
										sizes='(max-width: 768px) 92vw, 1200px'
									/>
								</div>
								<button
									type='button'
									onClick={() =>
										setLightboxIndex(prev =>
											prev === null
												? prev
												: (prev - 1 + accommodationGalleryImages.length) %
												  accommodationGalleryImages.length,
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
										setLightboxIndex(prev =>
											prev === null
												? prev
												: (prev + 1) % accommodationGalleryImages.length,
										)
									}
									className='absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-semibold text-slate-900 shadow-sm backdrop-blur hover:bg-white'
									aria-label='Наступне фото'
								>
									›
								</button>
								<button
									type='button'
									onClick={() => setLightboxIndex(null)}
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
