'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const campPhoneNumber = '+380996384686'

export default function FloatingWidget() {
	const [isOpen, setIsOpen] = useState(false)
	const [showHint, setShowHint] = useState(false)

	useEffect(() => {
		let intervalId: number | undefined
		let timeoutId: number | undefined

		const tick = () => {
			setShowHint(true)
			timeoutId = window.setTimeout(() => setShowHint(false), 3000)
		}

		// First appearance after 3 seconds, then repeat
		timeoutId = window.setTimeout(() => {
			tick()
			intervalId = window.setInterval(tick, 8000)
		}, 3000)

		return () => {
			if (intervalId) window.clearInterval(intervalId)
			if (timeoutId) window.clearTimeout(timeoutId)
		}
	}, [])

	// TODO: Заміни посилання на свої реальні соцмережі
	const links = [
		{
			name: 'Facebook Messenger',
			href: 'https://www.facebook.com/share/17B3KCp8k4/?mibextid=wwXIfr',
			icon: (
				<svg
					className='h-6 w-6 text-[#0084FF]'
					fill='currentColor'
					viewBox='0 0 24 24'
				>
					<path d='M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13' />
				</svg>
			),
		},
		// {
		// 	name: 'Viber',
		// 	href: `viber://chat?number=%2B380969112222`,
		// 	icon: (
		// 		<svg
		// 			className='h-6 w-6 text-[#7360F2]'
		// 			fill='currentColor'
		// 			viewBox='0 0 24 24'
		// 			aria-hidden='true'
		// 		>
		// 			<path d='M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602c-.167 0-.303.135-.304.302 0 .167.133.303.3.305 1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3.166-.002.3-.138.3-.304-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695c-.19-.032-.4.005-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948-.008.046-.01.093-.007.14 0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87.686.543 1.418 1.027 2.186 1.447 1.328.733 2.126 1.07 2.604 1.206l.01.014c.13.042.265.064.402.063.046.002.092 0 .138-.008.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248-.217-.383-.454-.756-.71-1.115-.25-.34-.826-1.033-.83-1.035-.137-.165-.31-.265-.502-.297zm4.49.88c-.158.002-.29.124-.3.282-.01.167.115.312.282.324 1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57-.002.168.13.306.3.31.166.003.305-.13.31-.297.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63c-.16.002-.29.127-.3.287-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164.01.167.15.295.318.287.167-.008.295-.15.287-.317-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z' />
		// 		</svg>
		// 	),
		// },
		{
			name: 'Telegram',
			href: 'https://t.me/iyalynao',
			icon: (
				<svg
					className='h-6 w-6 text-[#0088CC]'
					fill='currentColor'
					viewBox='0 0 24 24'
				>
					<path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
				</svg>
			),
		},
		{
			name: 'Instagram',
			href: 'https://www.instagram.com/polianski.ua?igsh=MW04Z2tyb2k3cGtoag==',
			icon: (
				<svg
					className='h-6 w-6 text-[#E1306C]'
					fill='currentColor'
					viewBox='0 0 24 24'
				>
					<path d='M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077' />
				</svg>
			),
		},
		{
			name: 'Забронювати путівку',
			href: '#contacts',
			icon: (
				<span className='flex h-6 w-6 items-center justify-center text-xl'>
					⛺
				</span>
			),
		},
		{
			name: 'Зателефонувати',
			href: `tel:${campPhoneNumber}`,
			icon: (
				<span className='flex h-6 w-6 items-center justify-center text-xl'>
					📞
				</span>
			),
		},
	]

	return (
		<>
			{/* 1. Плаваюча кнопка дзвінка ЗЛІВА */}
			<div className='fixed bottom-[max(1.5rem,calc(0.75rem+env(safe-area-inset-bottom)))] left-2 z-50 md:bottom-1 md:left-6'>
				<div className='group relative flex items-center'>
					<Link
						href={`tel:${campPhoneNumber}`}
						className='flex h-14 w-14 items-center justify-center rounded-full bg-[#006980] text-2xl text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#F9E267] hover:text-[#006980]'
						aria-label='Зателефонувати'
					>
						📞
					</Link>
				</div>
			</div>

			{/* 2. Віджет з випадаючим меню СПРАВА */}
			<div className='fixed bottom-[max(1.5rem,calc(0.75rem+env(safe-area-inset-bottom)))] right-2 z-50 md:bottom-1 md:right-6'>
				{/* Випадаюче меню */}
				<div
					className={`absolute bottom-full right-0 mb-4 w-72 origin-bottom-right overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 ${
						isOpen
							? 'scale-100 opacity-100'
							: 'scale-0 opacity-0 pointer-events-none'
					}`}
				>
					{/* Шапка меню (Фірмові кольори PolianSki) */}
					<div className='flex items-center gap-3 bg-[#006980] p-4 text-white'>
						<span className='text-3xl'>🐝</span>
						<h3 className='font-semibold leading-tight text-[#F9E267]'>
							Як би ви хотіли з нами зв'язатися?
						</h3>
						<button
							onClick={() => setIsOpen(false)}
							className='absolute right-3 top-3 rounded-full bg-white/20 p-1 hover:bg-white/30 transition'
						>
							<svg
								className='h-4 w-4'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>
					</div>

					{/* Список контактів */}
					<div className='flex flex-col gap-2 bg-[#F0F2D6] p-3'>
						{links.map(link => (
							<Link
								key={link.name}
								href={link.href}
								className='flex items-center gap-3 rounded-xl bg-white p-3 text-sm font-medium text-[#006980] shadow-sm transition hover:bg-white/80'
								onClick={() => setIsOpen(false)}
							>
								<div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F0F2D6]'>
									{link.icon}
								</div>
								{link.name}
							</Link>
						))}
					</div>
				</div>

				{/* Підказка "Якщо є питання..." (Вирівняна по правому краю) */}
				<div
					className={`pointer-events-none absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-2xl bg-white px-4 py-3 text-sm font-medium text-[#006980] shadow-lg transition-opacity duration-300 after:absolute after:right-6 after:top-full after:border-8 after:border-transparent after:border-t-white ${
						isOpen || !showHint ? 'opacity-0' : 'opacity-100'
					}`}
				>
					Якщо є питання, я тут 😉
				</div>

				{/* Головна кнопка */}
				<button
					type='button'
					onClick={() => setIsOpen(!isOpen)}
					className='group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#006980] text-[#F9E267] shadow-xl transition-transform duration-300 hover:scale-105 hover:bg-[#005566]'
					aria-label='Відкрити контакти'
				>
					{/* Зелена крапка "онлайн" */}
					<span className='absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-green-500'></span>

					{isOpen ? (
						// Хрестик для закриття (білий)
						<svg
							className='h-8 w-8 text-white transition-transform rotate-0'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					) : (
						// Іконка бджілки / текст закритої кнопки
						<div className='flex flex-col items-center leading-none'>
							<span className='text-2xl text-white'>🐝</span>
							<span className='mt-1 text-[7px] font-bold uppercase tracking-widest text-[#F9E267]'>
								Путівка
							</span>
						</div>
					)}
				</button>
			</div>
		</>
	)
}
