'use client'

import Image from 'next/image'

const Reviews = () => {
	return (
		<section id='reviews' className='-mx-4 bg-[#F0F2D6] py-10 md:-mx-6'>
			<div className='mx-auto max-w-6xl space-y-6 px-4 md:px-6'>
				<h2 className='text-2xl font-bold tracking-tight text-polian-dark-blue'>
					Часті питання
				</h2>

				<div className='grid gap-6 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)]'>
					{/* Left card – фото + короткий текст (ти додаси фото) */}
					<article
						className='rounded-card-xl bg-white p-6 shadow-card-soft'
						style={{ borderRadius: '20px' }}
					>
						<div className='space-y-4'>
							<div className='relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-slate-200'>
								<Image
									src='/images/about.jpg'
									alt='Про табір PolianskiCamp · To BE(e) Camp'
									fill
									className='object-cover'
								/>
							</div>

							<div className='space-y-2'>
								<h3 className='text-base font-semibold text-polian-dark-blue'>
									Дружня атмосфера з перших хвилин
								</h3>
								<p className='text-sm leading-relaxed text-slate-700'>
									У таборі PolianskiCamp · To BE(e) Camp ми прагнемо забезпечити
									дітям комфортну та приємну відпочинкову атмосферу. У цьому
									блоці ми зібрали часті питання, які можуть виникати у батьків
									перед поїздкою, та надали відповіді на них.
								</p>
								<p className='text-sm leading-relaxed text-slate-700'>
									Адаптація кемперів – надзвичайно важлива, тому проводимо у
									дружній атмосфері з підтримкою вожатих.
								</p>
								<p className='text-sm leading-relaxed text-slate-700'>
									Не дарма кажуть: найкраще виховання – це приклад. Ми створюємо
									атмосферу, де кожна дитина може відчути себе особливою та
									щасливою.
								</p>
								<p className='text-sm leading-relaxed text-slate-700'>
									Якщо у вас виникли додаткові питання, ми завжди готові
									відповісти на них!
								</p>
							</div>
						</div>
					</article>

					{/* Right card – FAQ accordion */}
					<article
						className='rounded-card-xl bg-white p-6 shadow-card-soft'
						style={{ borderRadius: '20px' }}
					>
						<div className='space-y-3 rounded-2xl bg-slate-50 p-4'>
							{[
								{
									q: 'Адаптація кемперів – як це відбувається?',
									a: 'У перший день знайомимось, формуємо команди, проводимо легкі активності та ігри, щоб діти швидко відчули себе “своїми”. Вожаті підтримують кожного та стежать за комфортом.',
								},
								{
									q: 'Як батьки можуть стимулювати комфортну адаптацію?',
									a: 'Порадьте дитині бути відкритою до знайомств, налаштуйте на нові враження та підтримайте самостійність. Важливо: не лякати табором і не підсилювати тривожність.',
								},
								{
									q: 'Що взяти з собою в табір?',
									a: 'Зручний одяг по погоді, спортивний комплект, купальник/плавки, змінне взуття, особисту гігієну, кепку/панаму, сонцезахист. Детальний список можна надіслати в месенджер.',
								},
								{
									q: 'Що не треба брати з собою в табір?',
									a: 'Дорогоцінні речі, великі суми готівки, небезпечні предмети. Також просимо не брати енергетики та швидкопсувні продукти.',
								},
								{
									q: 'Якщо є алергії або медичні потреби, що потрібно знати?',
									a: 'Обов’язково повідомте нас завчасно. Ми врахуємо особливості харчування та навантаження, а також узгодимо необхідні препарати/процедури з батьками.',
								},
								{
									q: 'Чи надає табір PolianskiCamp · To BE(e) Camp послугу трансферу дітей?',
									a: 'Так, за потреби організовуємо трансфер. Деталі (місто, час, вартість) узгоджуються індивідуально.',
								},
							].map(item => (
								<details
									key={item.q}
									className='group rounded-2xl bg-white px-4 py-3 shadow-sm'
								>
									<summary className='flex cursor-pointer list-none items-center justify-between gap-4'>
										<span className='text-sm font-semibold text-slate-800'>
											{item.q}
										</span>
										<span className='inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-sm text-slate-700 transition group-open:rotate-45'>
											+
										</span>
									</summary>
									<div className='pt-3 text-sm leading-relaxed text-slate-700'>
										{item.a}
									</div>
								</details>
							))}
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default Reviews
