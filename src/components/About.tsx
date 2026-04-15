'use client'

import Image from 'next/image'

const About = () => {
	return (
		<section
			id='about'
			className='-mx-4 rounded-[20px] bg-[#F0F2D6] py-10 md:-mx-6'
		>
			<div className='mx-auto max-w-6xl px-4 md:px-6'>
				<section id='about-program' className='space-y-6'>
					<h2 className='text-2xl font-bold tracking-tight text-polian-dark-blue'>
						Про нас · To BE(e) Camp
					</h2>
					<div className='grid gap-6 md:grid-cols-2'>
						{/* Left column – visual / logo + highlight */}
						<article
							className='flex flex-col justify-between rounded-card-xl bg-white shadow-card-soft'
							style={{ borderRadius: '20px' }}
						>
							<div className='space-y-4 p-5'>
								<div className='inline-flex items-center gap-3 rounded-full bg-polian-yellow/70 px-4 py-2'>
									<span className='text-sm font-semibold uppercase tracking-[0.22em] text-polian-dark-blue'>
										To BE(e) Camp
									</span>
								</div>
								<p className='text-sm leading-relaxed text-slate-800'>
									Творчі театральні кемпи, які проводять актори та педагоги
									відомої театральної дитячої студії. Тут діти пробують себе в
									акторстві, імпровізації та командних проєктах.
								</p>
								<p className='text-sm leading-relaxed text-slate-800'>
									Окрім походів у гори, екскурсій і квестів, є купання в
									басейні, посиденьки біля вогнища та багато живого спілкування.
								</p>
							</div>
							{/* Placeholder for future image – you can replace src пізніше */}
							<div className='border-t border-polian-dark-blue/10 bg-polian-blue/5 p-5'>
								<div className='relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-200'>
									<Image
										src='/images/summer/summer-33.avif'
										alt='Діти в таборі To BE(e) Camp'
										fill
										className='object-cover'
										sizes='(max-width: 768px) 100vw, 50vw'
									/>
								</div>
							</div>
						</article>

						{/* Right column – detailed description blocks */}
						<article
							className='flex flex-col justify-between rounded-card-xl bg-white shadow-card-soft'
							style={{
								borderTopLeftRadius: '20px',
								borderTopRightRadius: '20px',
								borderBottomRightRadius: '20px',
								borderBottomLeftRadius: '20px',
							}}
						>
							<div className='space-y-4 p-5 text-sm text-slate-800'>
								<h3 className='text-lg font-semibold text-foreground'>
									Що по програмі?
								</h3>
								<p>
									Щоденні тренажі, ігри та акторські етюди, спрямовані на те,
									щоб діти стали більш відкритими, креативними та впевненими в
									собі, навчилися не боятися публічних виступів.
								</p>
								<p className='font-semibold text-polian-dark-blue'>
									Ми будемо знімати кліпи, ставити танці та навіть невеличку
									виставу!
								</p>
								<p>
									У програмі є час і для творчості, і для відпочинку: ранкові
									руханки, майстерки, командні ігри, вільний час та вечірні шоу.
								</p>
							</div>
							{/* Placeholder for second future image */}
							<div className='border-t border-polian-dark-blue/10 bg-polian-yellow/10 p-5'>
								<div
									className='relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-200'
									style={{ borderRadius: '20px' }}
								>
									<Image
										src='/images/summer/summer-53.avif'
										alt='Акторські заняття To BE(e) Camp'
										fill
										className='object-cover'
										sizes='(max-width: 768px) 100vw, 50vw'
									/>
								</div>
							</div>
						</article>
					</div>

					<div className='grid gap-6 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)]'>
						<article
							className='rounded-card-xl bg-white p-6 shadow-card-soft'
							style={{ borderRadius: '20px' }}
						>
							<h3 className='text-2xl font-extrabold tracking-tight text-polian-dark-blue'>
								Чому PolianskiCamp особливий?
							</h3>
							<p className='mt-4 text-sm leading-relaxed text-slate-700'>
								Тому що відпочинок для дітей організовує особлива команда
								професіоналів! Ми точно знаємо, які активності припадають до
								душі нашим кемперам і як зацікавити кожну дитину, враховуючи її
								інтереси, таланти та вподобання. Наша програма насичена
								різноманітними заходами, які роблять відпочинок не тільки
								веселим, але й корисним для розвитку.
							</p>
							<div className='mt-5 flex items-center gap-2 text-2xl'>
								<span aria-hidden>🎭</span>
								<span aria-hidden>🐝</span>
								<span aria-hidden>🎬</span>
								<span aria-hidden>💃</span>
								<span aria-hidden>🏔️</span>
							</div>
						</article>

						<article
							className='rounded-card-xl bg-white p-6 shadow-card-soft'
							style={{ borderRadius: '20px' }}
						>
							<div className='rounded-2xl border border-violet-200/70 bg-white p-5 max-h-64 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#006980]'>
								<ul className='divide-y divide-violet-100/70'>
									<li className='flex gap-4 py-4 first:pt-0 last:pb-0'>
										<span className='mt-0.5 text-violet-500'>＋</span>
										<p className='text-sm leading-relaxed text-slate-700'>
											Спортивні естафети та змагання, що розвивають спритність,
											силу та командний дух.
										</p>
									</li>
									<li className='flex gap-4 py-4 first:pt-0 last:pb-0'>
										<span className='mt-0.5 text-violet-500'>＋</span>
										<p className='text-sm leading-relaxed text-slate-700'>
											Різноманітні командні ігри, де діти вчаться ефективно
											спілкуватися, працювати в новоствореному колективі та
											досягати спільних цілей.
										</p>
									</li>
									<li className='flex gap-4 py-4 first:pt-0 last:pb-0'>
										<span className='mt-0.5 text-violet-500'>＋</span>
										<p className='text-sm leading-relaxed text-slate-700'>
											Творчі майстер-класи, на яких кемпери власноруч створюють
											справжні витвори мистецтва.
										</p>
									</li>
									<li className='flex gap-4 py-4 first:pt-0 last:pb-0'>
										<span className='mt-0.5 text-violet-500'>＋</span>
										<p className='text-sm leading-relaxed text-slate-700'>
											Вечірня програма, де кожен може відчути себе справжньою
											зіркою, виступаючи на табірній сцені.
										</p>
									</li>
									<li className='flex gap-4 py-4 first:pt-0 last:pb-0'>
										<span className='mt-0.5 text-violet-500'>＋</span>
										<p className='text-sm leading-relaxed text-slate-700'>
											Затишні вечірні посиденьки біля вогнища в компанії друзів,
											де панує магічна атмосфера єдності та дружби.
										</p>
									</li>
									<li className='flex gap-4 py-4 first:pt-0 last:pb-0'>
										<span className='mt-0.5 text-violet-500'>＋</span>
										<p className='text-sm leading-relaxed text-slate-700'>
											Цікаві екскурсії, що дозволяють зануритися в атмосферу
											Прикарпаття та насолодитися культурою нашого краю.
										</p>
									</li>
									<li className='flex gap-4 py-4 first:pt-0 last:pb-0'>
										<span className='mt-0.5 text-violet-500'>＋</span>
										<p className='text-sm leading-relaxed text-slate-700'>
											З нами круто, весело, драйвово і, найголовніше, абсолютно
											безпечно!
										</p>
									</li>
								</ul>
							</div>
						</article>
					</div>
				</section>
			</div>
		</section>
	)
}

export default About
