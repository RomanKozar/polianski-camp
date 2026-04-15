import Link from 'next/link'

const campPhoneNumber = '+380996384686'

const Contacts = () => {
	return (
		<section
			id='contacts'
			className='-mx-4 rounded-[20px] bg-[#F0F2D6] py-10 md:-mx-6 md:py-14'
		>
			<div className='mx-auto max-w-6xl space-y-6 px-4 md:px-6'>
				<h2 className='text-2xl font-bold tracking-tight text-polian-dark-blue md:text-3xl'>
					Наші контакти
				</h2>

				<div
					className='grid gap-6 rounded-card-xl bg-white/95 p-6 shadow-card-soft md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:p-8'
					style={{ borderRadius: '20px' }}
				>
					{/* Left side – contact details and CTA */}
					<div className='space-y-6'>
						<div className='space-y-2'>
							<h3 className='text-xl font-semibold text-polian-dark-blue'>
								Катерина Готель
							</h3>
							<div className='space-y-2 rounded-2xl bg-slate-50 p-4'>
								<p className='text-sm text-slate-700'>
									Сонячна, 55 Б, Поляна, Закарпатська область
								</p>
								<div className='space-y-1 text-sm text-slate-800'>
									<p className='flex flex-wrap items-center gap-2'>
										<span className='mr-2 text-polian-blue'>📞</span>
										<a
											href='tel:+380996384686'
											className='text-polian-dark-blue underline-offset-2 hover:text-polian-yellow hover:underline'
										>
											+38 (099) 638-4686
										</a>
										<span className='inline-flex rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-700'>
										Відділ бронювання
										</span>
									</p>
									<p className='flex flex-wrap items-center gap-2'>
									<span className='mr-2 text-polian-blue'>📞</span>
										<a
											href='tel:+380935523253'
											className='text-polian-dark-blue underline-offset-2 hover:text-polian-yellow hover:underline'
										>
											+38 (093) 552-3253
										</a>
										<span className='inline-flex rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-700'>
										Групові заїзди
										</span>
									</p>
									{/* <p>
										<span className='mr-2 text-polian-blue'>✉️</span>
										<a
											href='mailto:polianskicamp.ua@gmail.com'
											className='text-polian-dark-blue underline-offset-2 hover:text-polian-yellow hover:underline'
										>
											polianskicamp.ua@gmail.com
										</a>
									</p> */}
									<p>
										<span className='mr-2 text-polian-blue'>💬</span>
										<a
											href='https://t.me/iyalynao'
											target='_blank'
											rel='noreferrer'
											className='text-polian-dark-blue underline-offset-2 hover:text-polian-yellow hover:underline'
										>
											Telegram
										</a>
									</p>
								</div>
							</div>
						</div>

						<div className='grid gap-4 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]'>
							<Link
								href={`tel:${campPhoneNumber}`}
								className='mt-3 mb-3 inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-black bg-[#006980] px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide text-white shadow-card-soft transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 md:mt-5 md:mb-5'
							>
								<span className='inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-sm'>
									💬
								</span>
								<span className='leading-snug'>
									Забронювати місце
								</span>
							</Link>

							<p className='text-sm leading-relaxed text-slate-700'>
								Зателефонуйте нам або надішліть повідомлення у месенджер.
								Запишемо ваших діток до табору, обговоримо, що для цього
								потрібно, та відповімо на всі ваші запитання. Ми завжди на
								зв&apos;язку, щоб забезпечити вам комфортний процес реєстрації
								та підготовки до відпочинку!
							</p>
						</div>
					</div>

					{/* Right side – interactive Google Map */}
					<div className='flex items-stretch'>
						<div className='relative w-full overflow-hidden rounded-3xl bg-slate-100'>
							<div className='relative aspect-4/3 w-full md:aspect-auto md:h-full md:min-h-[420px]'>
								<iframe
									title='Мапа розташування Катерина готель'
									src='https://maps.google.com/maps?ll=48.6211428,22.9703324&q=%D0%9A%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%20%D0%B3%D0%BE%D1%82%D0%B5%D0%BB%D1%8C,%20%D0%9F%D0%BE%D0%BB%D1%8F%D0%BD%D0%B0&t=k&z=16&output=embed'
									className='h-full w-full border-0'
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
									allowFullScreen
								/>
								<div className='pointer-events-none absolute inset-x-0 bottom-0 flex justify-end p-3'>
									<a
										href='https://www.google.com/maps/place/%D0%9A%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0/@48.6212797,22.968822,506m/data=!3m1!1e3!4m9!3m8!1s0x47391853102c6fb5:0x1b8d4f42d81957a2!5m2!4m1!1i2!8m2!3d48.6211428!4d22.9703324!16s%2Fg%2F1tkc5fzz?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D'
										target='_blank'
										rel='noreferrer'
										className='pointer-events-auto inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-slate-800 shadow-sm transition hover:bg-white'
									>
										Відкрити в Google Maps
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contacts
