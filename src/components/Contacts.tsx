import Link from 'next/link'
import Image from 'next/image'

const campPhoneNumber = '+380XXXXXXXXX'

const Contacts = () => {
	return (
		<section
			id='contacts'
			className='-mx-4 bg-[#F0F2D6] py-10 md:-mx-6 md:py-14'
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
									<p>
										<span className='mr-2 text-polian-blue'>📞</span>
										<a
											href='tel:+380969112222'
											className='text-polian-dark-blue underline-offset-2 hover:text-polian-yellow hover:underline'
										>
											+38 (096) 000-0000
										</a>
									</p>
									<p>
										<span className='mr-2 text-polian-blue'>✉️</span>
										<a
											href='mailto:polianskicamp.ua@gmail.com'
											className='text-polian-dark-blue underline-offset-2 hover:text-polian-yellow hover:underline'
										>
											polianskicamp.ua@gmail.com
										</a>
									</p>
									<p>
										<span className='mr-2 text-polian-blue'>💬</span>
										<a
											href='https://t.me/polianskicamp'
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
								className='flex h-23 items-center justify-center gap-3 rounded-2xl bg-foreground px-4 py-3 text-left text-white shadow-card-soft transition hover:-translate-y-0.5 hover:shadow-lg mt-3 mb-3 md:h-25 md:mt-5 md:mb-5'
							>
								<span className='mb-2 inline-flex h-8 w-8 flex-col items-center justify-center rounded-lg bg-white/15 text-xl'>
									💬
								</span>
								<span className='text-base font-semibold leading-snug'>
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

					{/* Right side – map / image */}
					<div className='flex items-stretch'>
						<a
							href='https://www.google.com/maps/place/%D0%9A%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0/@48.6212797,22.968822,506m/data=!3m1!1e3!4m9!3m8!1s0x47391853102c6fb5:0x1b8d4f42d81957a2!5m2!4m1!1i2!8m2!3d48.6211428!4d22.9703324!16s%2Fg%2F1tkc5fzz?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D'
							target='_blank'
							rel='noreferrer'
							className='block w-full overflow-hidden rounded-3xl bg-slate-100'
						>
							<div className='relative aspect-4/3 w-full md:aspect-auto md:h-full'>
								<Image
									src='/images/contact-map-v2.png'
									alt='Мапа розташування Катерина готель'
									fill
									className='object-cover transition-transform duration-300 hover:scale-105'
								/>
								<div className='pointer-events-none absolute inset-x-0 bottom-0 flex justify-end p-3'>
									<span className='inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-slate-800 shadow-sm'>
										Відкрити в Google Maps
									</span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contacts
