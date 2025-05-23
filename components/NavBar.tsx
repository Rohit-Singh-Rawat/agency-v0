'use client';
import Link from 'next/link';
import Logo from './Logo';
import { IconMenu } from '@tabler/icons-react';
import { useState } from 'react';

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navLinks = [
		{ href: '/#how-it-works', label: 'How It Works' },
		{ href: '/#approach', label: 'Our Approach' },
		{ href: '/#our-process', label: 'Our Process' },
		{ href: '/#meet-founder', label: 'Our Founder' },
		{ href: '/#pricing', label: 'Pricing' },
	];

	return (
		<header className='bg-background/10 backdrop-blur-sm border-b border-border p-4 z-50 fixed w-full top-0 '>
			<div className='container mx-auto max-w-7xl flex justify-between items-center'>
				<Logo />
				<nav className='hidden md:flex space-x-8 items-center'>
					{navLinks.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							className='hover:text-white text-sm font-semibold transition-all duration-300 text-[rgb(126,126,126)] before:text-foreground before:text-base before:mr-[0.5]'
						>
							{label}
						</Link>
					))}
					<Link
						href='/#contact'
						className='bg-white px-5 py-2 rounded-full text-sm hover:scale-105 font-semibold hover:bg-foreground text-black transition-all duration-300 shadow-md flex items-center justify-center'
					>
						Contact Us
					</Link>
				</nav>
				{/* Mobile menu button */}
				<button
					className='md:hidden p-2 text-foreground rounded-md border border-white/10 bg-white/5'
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<IconMenu size={24} />
				</button>
			</div>

			{/* Mobile navigation */}
			{isMenuOpen && (
				<div className='container mx-auto px-4 md:hidden py-4 space-y-4 flex flex-col items-center bg-background/95 backdrop-blur-xl mt-4 rounded-lg border border-white/10'>
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
						href='/#contact'
						onClick={() => setIsMenuOpen(false)}
						className='w-full rounded-full bg-[#3DD6B5] text-black hover:bg-[#3DD6B5]/90 text-center py-2'
					>
						Contact Us
					</Link>
				</div>
			)}
		</header>
	);
};

export default NavBar;
