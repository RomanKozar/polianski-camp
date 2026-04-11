import Link from 'next/link'
import Image from 'next/image'
import Seasons from '../components/Seasons'
import About from '../components/About'
import Accommodations from '../components/Accommodations'
import Reviews from '../components/Reviews'
import Gallery from '../components/Gallery'
import Contacts from '../components/Contacts'
import FloatingWidget from '../components/FloatingWidget'

export default function HomePage() {
	return (
		<div className='space-y-16'>
			{/* Плаваюча кнопка дзвінка (видима поверх усіх блоків) */}
			<FloatingWidget />

			{/* Головний екран (Hero section) */}
			<section className='-mx-4 mb-10 rounded-[20px] bg-[#F0F2D6] pt-4 pb-12 md:-mx-6 md:pt-6'>
				<div className='mx-auto max-w-6xl px-4 md:px-6'>
					<div
						className='rounded-card-xl bg-white/95 p-6 shadow-card-soft lg:flex lg:items-center lg:justify-between lg:p-10'
						style={{ borderRadius: '20px' }}
					>
						{/* Ліва частина: Текст та кнопки */}
						<div className='max-w-xl space-y-4'>
							<p className='text-xs font-semibold uppercase tracking-[0.22em] text-polian-red'>
								PolianskiCamp · To BE(e) Camp
							</p>
							<h1 className='text-3xl font-extrabold tracking-tight text-polian-dark-blue md:text-4xl'>
								Зміни 2026 – нові можливості для дітей
							</h1>
							<p className='text-sm leading-relaxed text-slate-700 md:text-base'>
								Приєднуйтесь до PolianskiCamp — світу, що дарує дітям
								найяскравіші враження та незабутні емоції! Готові подарувати
								вашій дитині незабутні пригоди? Записуйтесь зараз!
							</p>
							<div className='flex flex-wrap gap-3 pt-2'>
								<Link
									href='#gallery'
									className='inline-flex rounded-full border border-black bg-polian-red px-5 py-2 text-xs font-semibold uppercase tracking-wide text-polian-dark-blue shadow-card-soft transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-[#006980] hover:text-white'
								>
									Ознайомче відео
								</Link>
								<Link
									href='#contacts'
									className='inline-flex rounded-full border border-black bg-[#006980] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-card-soft transition-all duration-300 hover:-translate-y-0.5 hover:scale-105'
								>
									Приєднатись
								</Link>
							</div>
						</div>

						{/* Права частина: Фотографія */}
						<div className='mt-8 w-full max-w-xl lg:mt-0 lg:max-w-95'>
							<div className='relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm'>
								<div className='relative aspect-4/3 w-full'>
									<Image
										src='/images/summer-holovna.avif'
										alt='Діти в таборі PolianskiCamp · To BE(e) Camp'
										fill
										className='object-cover'
										sizes='(max-width: 1024px) 100vw, 560px'
										priority
									/>
								</div>
								<div className='pointer-events-none absolute inset-x-0 bottom-0 p-4'>
									<div className='inline-flex items-center rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold text-slate-700 shadow-sm backdrop-blur'>
										PolianskiCamp · To BE(e) Camp
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Підключення всіх інших блоків сторінки */}
			<Seasons />
			<About />
			<Accommodations />
			<Reviews />
			<Gallery />
			<Contacts />
		</div>
	)
}
