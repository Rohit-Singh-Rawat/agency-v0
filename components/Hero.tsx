'use client';
import {
	IconArrowDown,
	IconRocket,
	IconCode,
	IconBrandReact,
	IconDatabase,
	IconCloudComputing,
	IconBrain,
} from '@tabler/icons-react';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { AuroraText } from './magicui/aurora-text';
import { motion, useInView } from 'framer-motion';
import AnimatedDiv from './shared/AnimatedDiv';
import AnimatedHeading from './shared/AnimatedHeading';
import AnimatedParagraph from './shared/AnimatedParagraph';
import Link from 'next/link';

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
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: isVisible ? 1 : 0 }}
			transition={{ duration: 0.3 }}
			className='absolute bottom-2 xs:bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50'
		>
			<button
				onClick={scrollToNextSection}
				className='flex flex-col items-center text-white/50 hover:text-white/100 transition-colors cursor-pointer'
				aria-label='Scroll down'
			>
				<span className='text-[10px] xs:text-xs sm:text-sm mb-0.5 xs:mb-1 sm:mb-2'>
					Scroll down
				</span>
				<IconArrowDown className='w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 animate-bounce' />
			</button>
		</motion.div>
	);
};

interface FloatingIconProps {
	icon: React.ComponentType<{ className?: string }>;
	className?: string;
	delay?: number;
	duration?: number;
	isInView?: boolean;
}
const FloatingIcon = ({
	icon: Icon,
	className = '',
	delay = 0,
	duration = 5,
	isInView = false,
}: FloatingIconProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={
				isInView
					? {
							opacity: 1,
							y: [0, -8, 0, -5, 0],
					  }
					: { opacity: 0, y: 20 }
			}
			transition={{
				opacity: {
					duration: duration,
					delay: delay + 1.2,
					repeat: isInView ? Infinity : 0,
					repeatType: 'reverse',
					ease: 'easeInOut',
				},
				y: {
					duration: isInView ? duration : 0.6,
					delay: delay + 1.2,
					repeat: isInView ? Infinity : 0,
					repeatType: 'reverse',
					ease: 'easeInOut',
				},
			}}
			className={`absolute p-2 xs:p-3 sm:p-4  rounded-lg bg-gradient-to-br from-black/65 to-black/50 border border-white/5 backdrop-blur-sm shadow-inner shadow-white/10 ${className}`}
		>
			<Icon className='w-5 h-5  stroke-inherit' />
		</motion.div>
	);
};
const FloatingIcons = ({ isInView = false }: { isInView: boolean }) => {
	const leftIcons = [
		{
			icon: IconRocket,
			className:
				'top-[-50%] lg:top-[-5%] left-[5%] xs:left-[8%] sm:left-[12%] md:left-[25%] z-[5] stroke-orange-400 bg-gradient-to-br from-orange-500/10 to-orange-600/5 rotate-[12deg]',
		},
		{
			icon: IconCode,
			className:
				'top-[100%] md:top-[75%] left-[2%] xs:left-[5%] sm:left-[8%] md:left-[10%] z-[25] stroke-green-400 bg-gradient-to-br from-green-500/10 to-green-600/5 rotate-[-8deg]',
		},
		{
			icon: IconBrandReact,
			className:
				'top-[2%] md:top-[-20%] left-[1%] xs:left-[3%] sm:left-[5%] md:left-[-1%] z-[15] rotate-[-25deg] stroke-blue-500 backdrop-blur-sm bg-gradient-to-br from-blue-500/10 to-blue-600/5',
		},
	];

	const rightIcons = [
		{
			icon: IconDatabase,
			className:
				'top-[0%] md:top-[-10%] right-[1%] xs:right-[3%] sm:right-[5%] md:right-[-2%] z-[5] stroke-purple-400 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rotate-[25deg]',
		},
		{
			icon: IconCloudComputing,
			className:
				'top-[100%] md:top-[55%] right-[2%] xs:right-[5%] sm:right-[8%] md:right-[10%] z-[25] stroke-cyan-400 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 rotate-[20deg]',
		},
		{
			icon: IconBrain,
			className:
				'top-[-50%] lg:top-[-10%] right-[5%] xs:right-[8%] sm:right-[12%] md:right-[28%] z-[15] rotate-[35deg] stroke-violet-400 bg-gradient-to-br from-violet-500/10 to-violet-600/5',
		},
	];

	return (
		<>
			{/* Left side icons */}
			{leftIcons.map((item, index) => (
				<FloatingIcon
					key={`left-${index}`}
					icon={item.icon}
					className={item.className}
					delay={index * 0.8}
					duration={8 + index * 1}
					isInView={isInView}
				/>
			))}

			{/* Right side icons */}
			{rightIcons.map((item, index) => (
				<FloatingIcon
					key={`right-${index}`}
					icon={item.icon}
					className={item.className}
					delay={index * 1 + 2}
					duration={9 + index * 0.5}
					isInView={isInView}
				/>
			))}
		</>
	);
};

const HeroSection = () => {
	const sectionRef = React.useRef<HTMLDivElement>(null);
	const isInView = useInView(sectionRef, { once: true });

	return (
		<div className='relative w-full h-[90dvh] md:h-screen overflow-hidden flex flex-col justify-center'>
			<div className='relative w-full h-full flex flex-col justify-center'>
				<section className='relative max-w-full mx-auto z-[20] w-full h-full flex flex-col justify-center px-3 xs:px-4 sm:px-6 lg:px-8'>
					<AnimatedDiv
						ref={sectionRef}
						initial={{ opacity: 0, filter: 'blur(10px)' }}
						animate={
							isInView
								? { opacity: 1, filter: 'blur(0px)' }
								: { opacity: 0, filter: 'blur(10px)' }
						}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='mx-auto py-6 xs:py-8 sm:py-12 md:py-16 z-50 w-full'
					>
						<div className='space-y-8 md:space-y-8 lg:space-y-10 max-w-5xl leading-0 lg:leading-5 mx-auto text-center w-full '>
							<AnimatedHeading
								as='h1'
								initial={{ opacity: 0, y: 20 }}
								animate={
									isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.5, delay: 0.2 }}
								className='text-sm text-balance text-gray-400 bg-neutral-900/40 shadow-inner shadow-white/10 font-geist mx-auto px-3 h-7 md:px-5 py-0.5 xs:py-1 sm:py-1.5 md:py-2 rounded-3xl w-fit flex items-center gap-x-2 sm:gap-x-3'
							>
								<span className='relative flex size-1.5 xs:size-2 sm:size-3'>
									<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75'></span>
									<span className='relative inline-flex size-1.5 xs:size-2 sm:size-3 rounded-full bg-green-500'></span>
								</span>
								2 slots available for June
							</AnimatedHeading>
							<div className='relative'>
								<FloatingIcons isInView={isInView} />
								<AnimatedHeading
									as='h2'
									initial={{ opacity: 0, y: 20 }}
									animate={
										isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
									}
									transition={{ duration: 0.5, delay: 0.4 }}
									className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-[80px] tracking-tighter font-geist text-white mx-aruto w-full'
								>
									Build and launch{' '}
									<AuroraText
										colors={['#FF0080', '#7928CA', '#0070F3', '#FF8C00']}
										speed={1}
									>
										Fortune 500
									</AuroraText>{' '}
									level MVPs in 2 weeks
								</AnimatedHeading>
							</div>
							<AnimatedParagraph
								initial={{ opacity: 0, y: 20 }}
								animate={
									isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.5, delay: 0.6 }}
								className='px-5 md:px-0 md:max-w-xl lg:max-w-xl mx-auto text-sm sm:text-xl text-gray-300 '
							>
								Build Your MVP, Fast, Affordable, and Stress-Free. Trusted by
								<span className='text-white'> 40+ startups</span> to build &
								launch software products.{' '}
							</AnimatedParagraph>
							<AnimatedDiv
								initial={{ opacity: 0, y: 20 }}
								animate={
									isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.5, delay: 0.8 }}
								className='flex justify-center'
							>
								<Link
									href='https://cal.com/launchpad-labs'
									target='_blank'
									rel='noopener noreferrer'
									className='px-8 py-3 w-1/2 h-12 rounded-full border ring ring-border/50 border-blue-500/70 bg-[radial-gradient(35%_63%_at_50%_50%,_#60a5fa_0%,_#3b82f6_100%)] shadow-[inset_0_1px_3px_rgba(255,255,255,0.3),_0_4px_10px_rgba(96,165,250,0.3)] transition-all duration-300 hover:shadow-[inset_0_1px_5px_rgba(255,255,255,0.4),_0_6px_15px_rgba(96,165,250,0.4)] hover:brightness-110 active:scale-[0.98] md:w-fit flex text-center items-center justify-center'
								>
									<span className='text-center font-bold  tracking-[-0.02em] text-white font-[Manrope,sans-serif] '>
										Book a Call
									</span>
								</Link>
							</AnimatedDiv>
						</div>
					</AnimatedDiv>
				</section>
			</div>
			<ScrollDownArrow />
		</div>
	);
};

export default HeroSection;
