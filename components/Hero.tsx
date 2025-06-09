'use client';
import { IconArrowDown } from '@tabler/icons-react';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { AuroraText } from './magicui/aurora-text';
import { motion, useInView } from 'framer-motion';
import AnimatedDiv from './shared/AnimatedDiv';
import AnimatedHeading from './shared/AnimatedHeading';
import AnimatedParagraph from './shared/AnimatedParagraph';

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

const HeroSection = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
		<div className='relative w-full h-[80vh] xs:h-[85vh] sm:h-[90vh] md:h-screen overflow-hidden flex flex-col justify-center'>
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
						className='mx-auto py-6 xs:py-8 sm:py-12 md:py-16 z-50 w-full'
					>
						<div className='space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 max-w-5xl leading-0 lg:leading-5 mx-auto text-center w-full'>
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
									<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75'></span>
									<span className='relative inline-flex size-1.5 xs:size-2 sm:size-3 rounded-full bg-green-500'></span>
								</span>
								Available for new projects
							</AnimatedHeading>
							<AnimatedHeading
								as='h2'
								initial={{ opacity: 0, y: 20 }}
								animate={
									isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.5, delay: 0.4 }}
								className='text-2xl sm:text-5xl lg:text-7xl 2xl:text-[80px] tracking-tighter font-geist text-white mx-auto'
							>
								<span className='inline'>Build and launch </span>
								<AuroraText
									className='inline-block '
									colors={['#FF0080', '#7928CA', '#0070F3', '#FF8C00']}
									speed={1}
								>
									Fortune 500
								</AuroraText>
								<span className='block sm:inline'>
									{' '}
									level MVPs in{' '}
									{/* <span className='relative before:absolute before:inset-0 before:scale-110 before:border-b-4 before:border-b-amber-300 before:animate-[strike_0.5s_ease-in-out_forwards] before:rotate-[8deg] before:-translate-y-10'>
										months
									</span>{'  '} */}
									2 weeks
								</span>
							</AnimatedHeading>
							<AnimatedParagraph
								initial={{ opacity: 0, y: 20 }}
								animate={
									isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.5, delay: 0.6 }}
								className='sm:max-w-md md:max-w-xl lg:max-w-xl mx-auto text-xs xs:text-sm sm:text-xl text-gray-300'
							>
								Build Your MVP, Fast, Affordable, and Stress-Free. Trusted by 
								<span className='text-white'> 40+ startups</span> to build & launch software products.{' '}
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
									href='https://calendly.com/vishnoiabhishek29/30min'
									target='_blank'
									rel='noopener noreferrer'
									className='px-8 py-3 rounded-full border ring ring-border/50 border-blue-500/70 bg-[radial-gradient(35%_63%_at_50%_50%,_#60a5fa_0%,_#3b82f6_100%)] shadow-[inset_0_1px_3px_rgba(255,255,255,0.3),_0_4px_10px_rgba(96,165,250,0.3)] transition-all duration-300 hover:shadow-[inset_0_1px_5px_rgba(255,255,255,0.4),_0_6px_15px_rgba(96,165,250,0.4)] hover:brightness-110 active:scale-[0.98] hidden md:inline-flex items-center'
								>
									<span className='text-center font-bold text-[16px] tracking-[-0.02em] text-white font-[Manrope,sans-serif]'>Book a Call</span>
								</a>
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
