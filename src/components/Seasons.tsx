'use client'

import Link from 'next/link'
import Image from 'next/image'

const campPhoneNumber = '+380996384686'

const Seasons = () => {
	return (
		<section
			id='seasons'
			className='-mx-4 rounded-[20px] bg-[#F0F2D6] py-10 md:-mx-6'
		>
			<div className='mx-auto max-w-6xl px-4 md:px-6'>
				<section id='changes-2026' className='space-y-6'>
					<h2 className='text-2xl font-bold tracking-tight text-polian-dark-blue'>
						Зміни 2026 – нові можливості для дітей
					</h2>
					<div className='grid gap-6 md:grid-cols-2'>
						{/* Card 1 – red header */}
						<article
							className='flex flex-col rounded-card-xl bg-white shadow-card-soft'
							style={{ borderRadius: '20px' }}
						>
							<header
								className='flex min-h-[92px] items-center justify-between gap-3 rounded-t-card-xl bg-[#006980] px-5 py-4 text-white'
								style={{
									borderTopLeftRadius: '20px',
									borderTopRightRadius: '20px',
									borderBottomLeftRadius: '0px',
									borderBottomRightRadius: '0px',
									borderStyle: 'none',
									borderWidth: '0px',
									borderColor: 'transparent',
								}}
							>
								<div className='flex items-center gap-3'>
									<div className='flex h-[60px] w-[70px] items-center justify-center'>
										<Image
											src='/images/logo/tobecamp-logo.png'
											alt='To BE(e) Camp logo'
											width={64}
											height={64}
											className='h-15 w-auto object-contain'
										/>
									</div>
									<div className='leading-tight'>
										<p className='text-xs font-semibold uppercase tracking-[0.26em]'>
											Літні зміни PolianskiCamp
										</p>
										<p className='text-[11px] opacity-80'>
											Літні програми в горах на базі PolianskiCamp.
										</p>
									</div>
								</div>
								<div className='hidden shrink-0 md:block'>
									<div className='mr-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 min-h-12 min-w-12'>
										<Image
											src='/images/logo/polianski-camp-logo.png'
											alt='PolianskiCamp logo'
											width={50}
											height={50}
											className='h-12 w-auto'
										/>
									</div>
								</div>
							</header>
							<div className='space-y-6 px-5 py-5 text-sm text-slate-800'>
								<div className='flex justify-center'>
									<p className='inline-flex rounded-full bg-amber-100 px-3 py-1 text-[14px] font-semibold uppercase tracking-wide text-amber-700'>
										Очікуйте старт бронювання
									</p>
								</div>
								<div className='space-y-6 blur-[4px] select-none pointer-events-none'>
								<div className='space-y-3 rounded-2xl bg-polian-blue/5 p-4'>
									<div className='flex items-center justify-between gap-3'>
										<p className='flex items-center gap-2 font-semibold text-polian-dark-blue'>
											<span className='inline-flex h-7 w-7 items-center justify-center rounded-full bg-polian-blue/10 text-base'>
												📅
											</span>
											Дати
										</p>
										<div className='flex flex-wrap items-center justify-end gap-2'>
											<span className='inline-flex items-center rounded-full bg-polian-yellow/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-polian-dark-blue shadow-sm'>
												20 дітей у заїзді
											</span>
										</div>
									</div>
									<ul className='mt-2 space-y-2 text-xs md:text-sm'>
										<li className='flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm'>
											<div className='flex flex-col'>
												<span className='text-[13px] font-semibold text-polian-dark-blue'>
													21.06 – 29.06
												</span>
												<span className='text-[11px] text-slate-600'>
													1-й заїзд
												</span>
											</div>
											<div className='flex flex-col items-end leading-tight'>
												<span className='text-[12px] font-semibold text-slate-900'>
													<span className='text-emerald-600'>₴</span> 21 500 грн
												</span>
												<span className='rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700'>
													Залишилось 5 місць
												</span>
											</div>
										</li>
										<li className='flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm'>
											<div className='flex flex-col'>
												<span className='text-[13px] font-semibold text-polian-dark-blue'>
													05.07 – 11.07
												</span>
												<span className='text-[11px] text-slate-600'>
													2-й заїзд
												</span>
											</div>
											<div className='flex flex-col items-end leading-tight'>
												<span className='text-[12px] font-semibold text-slate-900'>
													<span className='text-emerald-600'>₴</span> 18 500 грн
												</span>
												<span className='rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700'>
													Залишилось 7 місць
												</span>
											</div>
										</li>
										<li className='flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm'>
											<div className='flex flex-col'>
												<span className='text-[13px] font-semibold text-polian-dark-blue'>
													18.07 – 26.07
												</span>
												<span className='text-[11px] text-slate-600'>
													3-й заїзд
												</span>
											</div>
											<div className='flex flex-col items-end leading-tight'>
												<span className='text-[12px] font-semibold text-slate-900'>
													<span className='text-emerald-600'>₴</span> 23 500 грн
												</span>
												<span className='rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700'>
													Залишилось 5 місць
												</span>
											</div>
										</li>
										<li className='flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm'>
											<div className='flex flex-col'>
												<span className='text-[13px] font-semibold text-polian-dark-blue'>
													29.07 – 06.08
												</span>
												<span className='text-[11px] text-slate-600'>
													4-й заїзд
												</span>
											</div>
											<div className='flex flex-col items-end leading-tight'>
												<span className='text-[12px] font-semibold text-slate-900'>
													<span className='text-emerald-600'>₴</span> 23 500 грн
												</span>
												<span className='rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700'>
													Залишилось 8 місць
												</span>
											</div>
										</li>
										<li className='flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm'>
											<div className='flex flex-col'>
												<span className='text-[13px] font-semibold text-polian-dark-blue'>
													09.08 – 17.08
												</span>
												<span className='text-[11px] text-slate-600'>
													5-й заїзд
												</span>
											</div>
											<div className='flex flex-col items-end leading-tight'>
												<span className='text-[12px] font-semibold text-slate-900'>
													<span className='text-emerald-600'>₴</span> 23 500 грн
												</span>
												<span className='rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700'>
													Залишилось 6 місць
												</span>
											</div>
										</li>
									</ul>
								</div>

								<div className='mb-3 rounded-2xl bg-polian-yellow/80 px-4 py-2 text-center text-xs font-semibold text-polian-dark-blue shadow-sm'>
									❗ Раннє бронювання доступне за зверненням на polyana.info або при бронюванні від 2 дітей ❗
								</div>

								<div className='space-y-4 rounded-2xl bg-slate-50 p-4'>
									<p className='text-sm font-extrabold tracking-tight text-polian-dark-blue md:text-base'>
										✨ Що чекає на дітей у нашому таборі? ✨
									</p>

									<div className='space-y-6'>
										<div className='space-y-1'>
											<p className='text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue'>
												🫂 Підтримка та розвиток
											</p>
											<ul className='space-y-1 text-xs md:text-sm'>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													Супровід досвідченого дитячого психолога та
													арттерапевтки Людмили Майор.
												</li>
											</ul>
										</div>

										<div className='space-y-1'>
											<p className='text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue'>
												⛰️ Справжні пригоди
											</p>
											<ul className='space-y-1 text-xs md:text-sm'>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													Похід у ліс та на гору Ріжок з інструкторами. Родзинка
													дня — обід на вершині, який діти готуватимуть на
													вогнищі! 🍳🌲
												</li>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													Лісовий квест зі смугою перешкод від сертифікованих
													інструкторів 🗺️🧗‍♂️
												</li>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													Драйвові туристичні змагання та активні командні ігри
													на свіжому повітрі 🏆🤸‍♂️
												</li>
											</ul>
										</div>

										<div className='space-y-1'>
											<p className='text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue'>
												🎨 Творчість без меж
											</p>
											<ul className='space-y-1 text-xs md:text-sm'>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													Захопливі майстер-класи: виготовлення прикрас, розпис
													трендових шоперів та створення картин акрилом 🖌️🖼️
												</li>
											</ul>
										</div>

										<div className='space-y-1'>
											<p className='text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue'>
												🏰 Мандрівки та враження
											</p>
											<ul className='space-y-1 text-xs md:text-sm'>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													Екскурсія Замками Закарпаття: величний Палац графа
													Шенборна та замок Сент-Міклош у Чинадієві 🚌📸
												</li>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													Поїздка у контактний зоопарк до пухнастих друзів 🦌🐇
												</li>
											</ul>
										</div>

										<div className='space-y-1'>
											<p className='text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue'>
												💦 Розваги та оздоровлення
											</p>
											<ul className='space-y-1 text-xs md:text-sm'>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													Веселі купання в басейні 🏊‍♂️☀️
												</li>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													Екстрим у мотузковому парку та стрибки на батутах 🎢
												</li>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													Оздоровлення: власний бювет із мінеральною водою
													«Поляна» прямо в готелі 💧🌿
												</li>
											</ul>
										</div>

										<div className='space-y-1'>
											<p className='text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue'>
												🔥 Затишні вечори
											</p>
											<ul className='space-y-1 text-xs md:text-sm'>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													Атмосферні посиденьки біля вогнища, пісні під гітару,
													танці, вечори талантів та настільні ігри 🎸🎲
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className='pt-2'>
									<Link
										href={`tel:${campPhoneNumber}`}
										className='inline-flex rounded-full border border-black bg-polian-blue px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground'
										role='button'
										tabIndex={-1}
										aria-disabled='true'
									>
										Зателефонувати
									</Link>
								</div>
								</div>
							</div>
						</article>

						{/* Card 2 – blue header */}
						<article
							className='flex flex-col rounded-card-xl bg-white shadow-card-soft'
							style={{ borderRadius: '20px' }}
						>
							<header
								className='flex min-h-[92px] items-center justify-between gap-3 rounded-t-card-xl bg-[#006980] px-5 py-4 text-white'
								style={{
									borderTopLeftRadius: '20px',
									borderTopRightRadius: '20px',
									borderBottomLeftRadius: '0px',
									borderBottomRightRadius: '0px',
								}}
							>
								<div className='flex items-center gap-3'>
									{/* <div className='flex h-[60px] w-[70px] items-center justify-center'>
										<Image
											src='/images/logo/tobecamp-logo.png'
											alt='To BE(e) Camp logo'
											width={64}
											height={64}
											className='h-15 w-auto object-contain'
										/>
									</div> */}
									<div className='mr-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 min-h-12 min-w-12'>
										<Image
											src='/images/logo/polianski-camp-logo.png'
											alt='PolianskiCamp logo'
											width={50}
											height={50}
											className='h-12 w-auto'
										/>
									</div>
									<div className='leading-tight'>
										<p className='text-xs font-semibold uppercase tracking-[0.26em]'>
											Зимові зміни · Лижний табір
										</p>
										<p className='text-[11px] opacity-80'>
											Сезон 2027 · вік 10–15 років
										</p>
									</div>
								</div>
								<div className='hidden shrink-0 md:block'>
									<div className='mr-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 min-h-12 min-w-12'>
										<Image
											src='/images/logo/lichi-logo-1.png'
											alt='Lichi logo'
											width={50}
											height={50}
											className='h-7 w-auto'
										/>
									</div>
								</div>
							</header>
							<div className='space-y-6 px-5 py-5 text-sm text-slate-800'>
								<div className='space-y-3 rounded-2xl bg-polian-blue/5 p-4'>
									<div className='flex items-center justify-between gap-3'>
										<p className='flex items-center gap-2 font-semibold text-polian-dark-blue'>
											<span className='inline-flex h-7 w-7 items-center justify-center rounded-full bg-polian-blue/10 text-base'>
												📅
											</span>
											Дати
										</p>
										<div className='flex flex-wrap items-center justify-end gap-2 '>
											<span className='inline-flex items-center rounded-full bg-polian-yellow/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-polian-dark-blue shadow-sm'>
												20 дітей · 10–15 років
											</span>
										</div>
									</div>
									<ul className='mt-2 space-y-2 text-xs md:text-sm'>
										<li className='flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm'>
											<div className='flex flex-col'>
												<span className='text-[13px] font-semibold text-polian-dark-blue'>
													04.01 – 09.01
												</span>
												<span className='text-[11px] text-slate-600'>
													1-й заїзд
												</span>
											</div>
											<div className='flex flex-col items-end leading-tight'>
												<span className='text-[12px] font-semibold text-slate-900'>
													<span className='text-emerald-600'>₴</span> 27 000 грн
												</span>
												<span className='rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700'>
													Залишилось 20 місць
												</span>
											</div>
										</li>
										<li className='flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm'>
											<div className='flex flex-col'>
												<span className='text-[13px] font-semibold text-polian-dark-blue'>
													11.01 – 16.01
												</span>
												<span className='text-[11px] text-slate-600'>
													2-й заїзд
												</span>
											</div>
											<div className='flex flex-col items-end leading-tight'>
												<span className='text-[12px] font-semibold text-slate-900'>
													<span className='text-emerald-600'>₴</span> 25 500 грн
												</span>
												<span className='rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700'>
													Залишилось 20 місць
												</span>
											</div>
										</li>
										<li className='flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm'>
											<div className='flex flex-col'>
												<span className='text-[13px] font-semibold text-polian-dark-blue'>
													25.01 – 30.01
												</span>
												<span className='text-[11px] text-slate-600'>
													3-й заїзд
												</span>
											</div>
											<div className='flex flex-col items-end leading-tight'>
												<span className='text-[12px] font-semibold text-slate-900'>
													<span className='text-emerald-600'>₴</span> 25 500 грн
												</span>
												<span className='rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700'>
													Залишилось 20 місць
												</span>
											</div>
										</li>
										<li className='flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm'>
											<div className='flex flex-col'>
												<span className='text-[13px] font-semibold text-polian-dark-blue'>
													01.02 – 06.02
												</span>
												<span className='text-[11px] text-slate-600'>
													4-й заїзд
												</span>
											</div>
											<div className='flex flex-col items-end leading-tight'>
												<span className='text-[12px] font-semibold text-slate-900'>
													<span className='text-emerald-600'>₴</span> 25 500 грн
												</span>
												<span className='rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700'>
													Залишилось 20 місць
												</span>
											</div>
										</li>
										<li className='flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 shadow-sm'>
											<div className='flex flex-col'>
												<span className='text-[13px] font-semibold text-polian-dark-blue'>
													08.02 – 13.02
												</span>
												<span className='text-[11px] text-slate-600'>
													5-й заїзд
												</span>
											</div>
											<div className='flex flex-col items-end leading-tight'>
												<span className='text-[12px] font-semibold text-slate-900'>
													<span className='text-emerald-600'>₴</span> 25 500 грн
												</span>
												<span className='rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700'>
													Залишилось 20 місць
												</span>
											</div>
										</li>
									</ul>
								</div>

								<div className='mb-3 rounded-2xl bg-polian-yellow/80 px-4 py-2 text-center text-xs font-semibold text-polian-dark-blue shadow-sm'>
									❗ Раннє бронювання до 01.11.2026 ❗
								</div>

								<div className='space-y-4 rounded-2xl bg-slate-50 p-4'>
									<p className='text-sm font-extrabold tracking-tight text-polian-dark-blue md:text-base'>
										✨ Лижний табір — це не лише відпочинок ✨
									</p>
									<p className='text-xs md:text-sm'>
										За час перебування дитина опанує техніку катання і полюбить
										лижі або сноуборд на все життя. У цьому сезоні багато хто
										приїжджає до нас уже 4-й раз.
									</p>
									<p className='text-xs font-semibold text-polian-dark-blue md:text-sm'>
										Повне спорядження та безлімітний скі-пас на підйомники вже у
										вартості.
									</p>

									<div className='space-y-6'>
										<div className='space-y-1'>
											<p className='text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue'>
												🏨 Проживання та харчування
											</p>
											<ul className='space-y-1 text-xs md:text-sm'>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													Хостел готелю «Kateryna». Кімнати на 2–6 дітей.
												</li>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													Збалансоване 3-разове харчування у ресторані готелю +
													2 перекуси.
												</li>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													Виховники з дітьми перебувають цілодобово. На поверхах
													готелю постійний відеонагляд.
												</li>
											</ul>
										</div>

										<div className='space-y-1'>
											<p className='text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue'>
												⛷️ Чому саме ми
											</p>
											<ul className='space-y-1 text-xs md:text-sm'>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													4 кваліфіковані інструктори на групу з 20 дітей і
													постійний супровід 4 виховників, які теж добре
													катаються на лижах.
												</li>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													Безпечні траси та розподіл на групи за рівнем
													катання.
												</li>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													20 годин занять з інструкторами. 3–6 годин катання
													щодня, надаємо все спорядження.
												</li>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													Активний відпочинок із користю та в безпеці: SPA,
													чани, тюбінг, вечірка з піцою, майстер-класи та
													настільні ігри. Дитині точно не буде нудно.
												</li>
											</ul>
										</div>

										<div className='space-y-1'>
											<p className='text-xs font-semibold uppercase tracking-[0.18em] text-polian-dark-blue'>
												🚌 Трансфер і супровід
											</p>
											<ul className='space-y-1 text-xs md:text-sm'>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													Повний супровід від зустрічі в Сваляві.
												</li>
												<li>
													<span className='mr-2 text-polian-red'>•</span>
													За потреби організовуємо трансфер з Києва (не входить
													у вартість туру).
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className='pt-2'>
									<Link
										href={`tel:${campPhoneNumber}`}
										className='inline-flex rounded-full border border-black bg-polian-blue px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground transition-all duration-300 hover:bg-[#006980] hover:text-white hover:-translate-y-0.5 hover:scale-105'
										role='button'
									>
										Зателефонувати
									</Link>
								</div>
							</div>
						</article>
					</div>
				</section>
			</div>
		</section>
	)
}

export default Seasons
