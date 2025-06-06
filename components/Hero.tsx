'use client';
import { cn } from '@/lib/utils';
import { IconArrowDown } from '@tabler/icons-react';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { AuroraText } from './magicui/aurora-text';
import { motion, useInView } from 'framer-motion';
import AnimatedDiv from './shared/AnimatedDiv';
import AnimatedHeading from './shared/AnimatedHeading';
import AnimatedParagraph from './shared/AnimatedParagraph';

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
	avaliable?: boolean;
	subtitle?: {
		regular: string;
		gradient: string;
		regular2: string;
	};
	description?: string;
	ctaText?: string;
	ctaHref?: string;
}

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

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
	(
		{
			className,
			avaliable = true,
			title = 'Available for new projects',
			subtitle = {
				regular: 'We build ',
				gradient: 'Fortune 500',
				regular2: ' level MVPs from your ideas',
			},
			description = 'We turn startup ideas into fully functional web and mobile apps — fast, affordable, and stress-free. At LaunchPad Labs, your product is live before others finish planning.',
			ctaText = 'Book a call',
			ctaHref = '#',
			...props
		},
		forwardedRef
	) => {
		const sectionRef = React.useRef<HTMLDivElement>(null);
		const isInView = useInView(sectionRef, { once: true });

		return (
			<div
				className={cn(
					'relative w-full h-[80vh] xs:h-[85vh] sm:h-[90vh] md:h-screen overflow-hidden flex flex-col justify-center',
					className
				)}
				ref={forwardedRef}
				{...props}
			>
				<div className='w-full overflow-hidden relative h-full'>
					<section className='relative max-w-full mx-auto z-[20] h-full flex flex-col justify-center px-3 xs:px-4 sm:px-6 lg:px-8'>
						<AnimatedDiv
							ref={sectionRef}
							initial={{ opacity: 0, filter: 'blur(10px)' }}
							animate={
								isInView
									? { opacity: 1, filter: 'blur(0px)' }
									: { opacity: 0, filter: 'blur(10px)' }
							}
							transition={{ duration: 0.8, ease: 'easeOut' }}
							className='mx-auto py-6 xs:py-8 sm:py-12 md:py-16 z-50'
						>
							<div className='space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 max-w-4xl leading-0 lg:leading-5 mx-auto text-center'>
								<AnimatedHeading
									as='h1'
									initial={{ opacity: 0, y: 20 }}
									animate={
										isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
									}
									transition={{ duration: 0.5, delay: 0.2 }}
									className='text-[8px] xs:text-[10px] sm:text-sm text-gray-400 bg-neutral-900/40 shadow-inner shadow-white/10 font-geist mx-auto px-1.5 xs:px-2 sm:px-3 md:px-5 py-0.5 xs:py-1 sm:py-1.5 md:py-2 rounded-3xl w-fit flex items-center gap-x-1.5 xs:gap-x-2 sm:gap-x-3'
								>
									<span className='relative flex size-1.5 xs:size-2 sm:size-3'>
										<span
											className={`absolute inline-flex h-full w-full animate-ping rounded-full ${
												avaliable ? 'bg-green-400' : 'bg-red-400'
											} opacity-75`}
										></span>
										<span
											className={`relative inline-flex size-1.5 xs:size-2 sm:size-3 rounded-full ${
												avaliable ? 'bg-green-500' : 'bg-red-500'
											}`}
										></span>
									</span>
									{title}
								</AnimatedHeading>
								<AnimatedHeading
									as='h2'
									initial={{ opacity: 0, y: 20 }}
									animate={
										isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
									}
									transition={{ duration: 0.5, delay: 0.4 }}
									className='text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-tighter font-geist text-white mx-auto'
								>
									<span className='inline'>{subtitle.regular}</span>
									<AuroraText
										className='inline-block'
										colors={['#FF0080', '#7928CA', '#0070F3', '#FF8C00']}
										speed={1}
									>
										{subtitle.gradient}
									</AuroraText>
									<span className='block sm:inline'>{subtitle.regular2}</span>
								</AnimatedHeading>
								<AnimatedParagraph
									initial={{ opacity: 0, y: 20 }}
									animate={
										isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
									}
									transition={{ duration: 0.5, delay: 0.6 }}
									className=' sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto text-xs xs:text-sm sm:text-base text-gray-300 '
								>
									{description}
								</AnimatedParagraph>
								<AnimatedDiv
									initial={{ opacity: 0, y: 20 }}
									animate={
										isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
									}
									transition={{ duration: 0.5, delay: 0.8 }}
									className='flex flex-col sm:flex-row items-center justify-center gap-y-2 xs:gap-y-3 sm:gap-x-3'
								>
									<a
										href={ctaHref}
										className='inline-flex rounded-full text-center items-center justify-center bg-purple-600/80 shadow-inner shadow-purple-500 text-white hover:bg-purple-700 transition-all w-full sm:w-auto py-2 xs:py-3 sm:py-3 px-4 xs:px-6 sm:px-10 text-xs xs:text-sm sm:text-base hover:shadow-[inset_0_0_15px_rgba(168,85,247,0.4)] duration-300'
									>
										{ctaText}
									</a>
								</AnimatedDiv>
							</div>
						</AnimatedDiv>
					</section>
				</div>
				<ScrollDownArrow />
			</div>
		);
	}
);
HeroSection.displayName = 'HeroSection';

export default HeroSection;
