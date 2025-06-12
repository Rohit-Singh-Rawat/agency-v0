'use client';
import Link from 'next/link';
import Logo from './Logo';
import { useState } from 'react';
import {
	motion,
	AnimatePresence,
	useScroll,
	useTransform,
} from 'framer-motion';
const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { scrollY } = useScroll();

	const width = useTransform(scrollY, [0, 100], ['70%', '50%']);

	const padding = useTransform(scrollY, [0, 100], ['0', '0.75rem']);

	const borderRadius = useTransform(scrollY, [0, 100], ['0', '40px']);
	const borderWidth = useTransform(scrollY, [50, 100], ['0', '1px']);

	const navLinks = [
		{ href: '/#achivements', label: 'Achivements' },
		{ href: '/#our-work', label: 'Our Work' },
		{ href: '/#our-process', label: 'Our Process' },
		{ href: '/#meet-founder', label: 'Our Founder' },
		{ href: '/#pricing', label: 'Pricing' },
	];

	return (
		<motion.div
			className='w-full flex justify-center fixed   z-50 mx-auto'
			style={{
				paddingTop: padding,
				paddingBottom: padding,
			}}
		>
			<motion.header
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5 }}
				style={{
					width,
					borderRadius,
					borderWidth,
					borderColor: 'rgba(255,255,255,0.1)',
				}}
				className='backdrop-blur-sm sm:backdrop-blur-md p-4 max-w-6xl min-w-[90%] lg:min-w-4xl'
			>
				<div className='container mx-auto  flex justify-between items-center '>
					<Logo />
					<nav className='hidden md:flex space-x-6 items-center'>
						{navLinks.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								className='hover:text-white text-sm font-semibold transition-all duration-300 text-[rgb(126,126,126)]'
							>
								{label}
							</Link>
						))}
						<Link
							href='https://cal.com/launchpad-labs'
							target='_blank'
							className='bg-white px-4 py-1.5 rounded-full text-sm hover:scale-105 font-semibold hover:bg-foreground text-black transition-all duration-300 shadow-md flex items-center justify-center'
						>
							Contact Us
						</Link>
					</nav>
					<button
						className='md:hidden p-2 text-foreground rounded-md border border-white/10 bg-white/5'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<motion.svg
							width={16}
							height={16}
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth={2}
							strokeLinecap='round'
							strokeLinejoin='round'
							animate={isMenuOpen ? 'open' : 'closed'}
							transition={{ duration: 0.2 }}
						>
							<motion.line
								x1='3'
								y1='8'
								x2='21'
								y2='8'
								variants={{
									closed: { rotate: 0 },
									open: { rotate: 45, y: 4 },
								}}
							/>
							<motion.line
								x1='3'
								y1='16'
								x2='21'
								y2='16'
								variants={{
									closed: { rotate: 0 },
									open: { rotate: -45, y: -4 },
								}}
							/>
						</motion.svg>
					</button>
				</div>

				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.2 }}
							className='container mx-auto px-4 md:hidden py-4 space-y-4 flex flex-col items-center bg-background/95 backdrop-blur-xl mt-4 rounded-2xl border border-white/10 max-w-5xl'
						>
							{navLinks.map(({ href, label }) => (
								<Link
									key={href}
									href={href}
									onClick={() => setIsMenuOpen(false)}
									className='text-foreground/70 hover:text-accent transition-colors w-full text-center py-2'
								>
									{label}
								</Link>
							))}
							<Link
								href='https://cal.com/launchpad-labs'
								target='_blank'
								onClick={() => setIsMenuOpen(false)}
								className='w-full rounded-full bg-[#3DD6B5] text-black hover:bg-[#3DD6B5]/90 text-center py-2'
							>
								Contact Us
							</Link>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.header>
		</motion.div>
	);
};

export default NavBar;
