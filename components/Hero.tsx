'use client';
import { cn } from '@/lib/utils';
import { IconArrowDown } from '@tabler/icons-react';
import * as React from 'react';
import { useEffect, useState } from 'react';

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
	subtitle?: {
		regular: string;
		gradient: string;
	};
	description?: string;
	ctaText?: string;
	ctaHref?: string;
	gridOptions?: {
		angle?: number;
		cellSize?: number;
		opacity?: number;
		lightLineColor?: string;
		darkLineColor?: string;
	};
}

const RetroGrid = ({
	angle = 65,
	cellSize = 60,
	opacity = 0.5,
	lightLineColor = 'gray',
	darkLineColor = 'gray',
}) => {
	const gridStyles = {
		'--grid-angle': `${angle}deg`,
		'--cell-size': `${cellSize}px`,
		'--opacity': opacity,
		'--light-line': lightLineColor,
		'--dark-line': darkLineColor,
	} as React.CSSProperties;

	return (
		<div
			className={cn(
				'pointer-events-none absolute size-full overflow-hidden [perspective:200px]',
				`opacity-[var(--opacity)]`
			)}
			style={gridStyles}
		>
			<div className='absolute inset-0 bg-radial-[at_bottom] from-transparent via-transparent to-black z-[5]' />
			<div className='absolute inset-0 [transform:rotateX(var(--grid-angle))]'>
				<div className='animate-grid  [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] [background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]' />
			</div>
			<div className='absolute inset-0 bg-gradient-to-t  to-transparent to-90% from-black' />
		</div>
	);
};

const ScrollDownArrow = () => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToNextSection = () => {
		window.scrollTo({
			top: window.innerHeight,
			behavior: 'smooth',
		});
	};

	return (
		<div
			className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-300 ${
				isVisible ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<button
				onClick={scrollToNextSection}
				className='flex flex-col items-center text-white/50 hover:text-white/100 transition-colors cursor-pointer '
				aria-label='Scroll down'
			>
				<span className='text-sm mb-2'>Scroll down</span>
				<IconArrowDown className='animate-bounce' />
				{/* <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
					<div className="w-1 h-2 bg-white/70 rounded-full animate-bounce mt-1"></div>
				</div> */}
			</button>
		</div>
	);
};

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
	(
		{
			className,
			title = 'Build products for everyone',
			subtitle = {
				regular: 'LaunchPad Labs — Build & Launch Your MVP  ',
				gradient: 'in Weeks, Not Months',
			},
			description = 'We turn startup ideas into fully functional web and mobile apps — fast, affordable, and stress-free. At LaunchPad Labs, your product is live before others finish planning.',
			ctaText = 'Book a call',
			ctaHref = '#',
			gridOptions,
			...props
		},
		ref
	) => {
		return (
			<div
				className={cn(
					'relative w-full h-[90vh] md:h-screen overflow-hidden pt-20 sm:pt-8 ',
					className
				)}
				ref={ref}
				{...props}
			>
				<div className='w-full overflow-hidden relative'>
					<div className='absolute inset-0 bg-radial from-transparent to-black z-[5]' />
					<div className='absolute top-0 left-0 z-[0] inset-0 bg-purple-950/10 bg-[radial-gradient(ellipse_40%_90%_at_50%_20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					<section className='relative max-w-full mx-auto z-[20]'>
						<RetroGrid {...gridOptions} />
						<div className='mx-auto  py-12 sm:py-16 md:py-16  z-50'>
							<div className='space-y-6 sm:space-y-8 md:space-y-10 max-w-4xl leading-0 lg:leading-5 mx-auto text-center'>
								<h1 className='text-xs sm:text-sm text-gray-400 group font-geist mx-auto px-3 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-tr  to-transparent from-zinc-300/5 via-gray-400/5 border-[2px]  border-white/5 rounded-3xl w-fit'>
									{title}
								</h1>
								<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]'>
									<span className='block sm:inline '>{subtitle.regular}</span>
									<span className='text-transparent bg-clip-text bg-gradient-to-r  from-purple-300 to-orange-200'>
										{subtitle.gradient}
									</span>
								</h2>
								<p className=' sm:max-w-md md:max-w-2xl mx-auto text-base text-gray-300 px-2'>
									{description}
								</p>
								<div className='flex flex-col sm:flex-row items-center justify-center gap-y-3 sm:gap-x-3'>
									<span className='relative inline-block overflow-hidden rounded-full p-[1.5px] w-full sm:w-auto max-w-xs'>
										<span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
										<div className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-xs font-medium backdrop-blur-3xl'>
											<a
												href={ctaHref}
												className='inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-input border-[0px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-purple-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all sm:w-auto py-4 px-10'
											>
												{ctaText}
											</a>
										</div>
									</span>
								</div>
							</div>
						</div>
					</section>
				</div>
				<ScrollDownArrow />
			</div>
		);
	}
);
HeroSection.displayName = 'HeroSection';

export default HeroSection;
