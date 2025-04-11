import Link from 'next/link';
import Arrow8 from './arrow';
import { cn } from '@/lib/utils';
import { IconChevronDown } from '@tabler/icons-react';

const Hero = () => {
	return (
		<section className='relative py-28 md:py-44 overflow-hidden min-h-screen container mx-auto text-center'>
			<div
				className={cn(
					'absolute inset-0 z-0',
					'[background-size:20px_20px]',
					'dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]'
				)}
			/>{' '}
			<div
				className='absolute inset-0 z-0 bg-radial-gradient from-blue-500/10 via-blue-400/5 to-transparent blur-sm'
				style={{
					backgroundImage:
						'radial-gradient(circle at 70% 10%, rgba(234, 88, 12, 0.3), rgba(59, 130, 246, 0.3), rgba(249, 115, 22, 0.2), rgba(96, 165, 250, 0.2), transparent 70%)',
				}}
			></div>
			<div className='pointer-events-none absolute inset-0 flex items-center justify-center   bg-radial-[at_50%_45%]  from-transparent via-black to-black  z-0'></div>
			<div className='container mx-auto px-4 sm:px-4 relative z-10  bg-cover bg-center'>
				<div className='max-w-3xl mx-auto text-center'>
					<h1 className='text-3xl md:text-6xl font-bold mb-6 leading-tight text-white'>
						Fast MVPs That Launch Your Vision
					</h1>

					<p className='text-base md:text-lg mb-10 text-gray-100 font-normal max-w-3xl mx-auto'>
						We build rapid MVPs, delivering functional prototypes in weeks, not months. Launch
						quickly, validate your ideas, and iterate based on real feedback.
					</p>
					<div className='flex justify-center'>
						<div className='relative flex justify-center  w-fit'>
							<Link
								href='/'
								className='inline-flex items-center border border-white/50 hover:bg-white hover:text-black hover:text-shadow-2xs text-base text-white px-10 py-3 rounded-lg font-semibold hover:opacity-90 active:scale-95 active:bg-white/10 transition-all duration-300 shadow-lg bg-black'
							>
								Book a Call
							</Link>

							{/* Curved arrow */}
							<Arrow8 className='absolute right-[0%] bottom-[-150%]  md:right-[-43%] md:bottom-[-100%] origin-bottom-right  w-24 h-24 text-white/70 transform rotate-90 md:rotate-40' />
							<span className='absolute right-[-50%] sm:right-[-100%] rotate-10 bottom-[-360%]  md:right-[-160%] md:rotate-10 md:bottom-[-150%] origin-bottom-right  w-40 h-24 text-white/70 transform font-caveat text-xl'>
								Get your MVP in 2 weeks
							</span>
						</div>
					</div>
				</div>
			</div>
			{/* Scroll down arrow */}
			<Link
				href={'/#services'}
				className='absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/20  cursor-pointer z-10'
			>
				<span className='text-sm mb-2 font-medium text-white/10'>Scroll to explore</span>
				<IconChevronDown
					size={24}
					stroke={2}
					className='animate-bounce'
				/>
			</Link>
		</section>
	);
};

export default Hero;
