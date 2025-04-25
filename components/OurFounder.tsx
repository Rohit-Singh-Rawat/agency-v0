'use client';
import Image from 'next/image';
import { useState } from 'react';

const OurFounder = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<section
			id='meet-founder'
			className='py-20 md:py-28 bg-background relative overflow-hidden container mx-auto'
		>
			<div className='noise'>
				<div className='container px-4 md:px-6 relative z-10'>
					<div className='mb-12'>
						<h2 className='text-4xl font-semibold transition-all duration-300 text-white/90 before:content-["."] before:text-foreground before:text-4xl before:mr-[0.5] mb-4'>
							Meet Harshdeep{' '}
							<span className='bg-gradient-to-r from-[#1a1a1a] to-[#333333] text-transparent bg-clip-text'>
								Founder of LaunchPad Labs
							</span>
						</h2>
						<p className='text-lg leading-7 text-gray-300'>
							Your Strategic Tech Partner for Building MVPs That Scale — helping you transform ideas into market-ready products in record time.
						</p>
					</div>
					
					<div className='flex flex-col lg:flex-row gap-8 items-center'>
						<div
							className='lg:w-2/5 relative'
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							<div
								className={`relative rounded-xl overflow-hidden transition-all duration-500 ${
									isHovered ? 'transform scale-105 shadow-2xl shadow-blue-400/20' : ''
								}`}
							>
								<div className='aspect-w-3 aspect-h-4 w-full max-w-[400px] mx-auto relative'>
									<div className='absolute inset-0 rounded-xl border-2 border-blue-400/30 transform rotate-3 z-0'></div>
									<div className='absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent z-10 mix-blend-overlay'></div>
									<Image
										src='/images/founder.jpg'
										alt='Harshdeep - Founder of LaunchPad Labs'
										width={400}
										height={500}
										className='object-cover rounded-xl z-20'
									/>
									<div
										className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-30 transition-opacity duration-500 ${
											isHovered ? 'opacity-60' : 'opacity-80'
										}`}
									></div>
								</div>
								<div className='absolute bottom-6 left-0 right-0 text-center px-4 z-40'>
									<h3 className='text-white font-bold text-2xl'>Harshdeep</h3>
									<p className='text-blue-300'>Founder, LaunchPad Labs</p>
								</div>
							</div>
						</div>

						<div className='lg:w-3/5'>
							<div className='glass-card p-6 shadow-lg '>
								<p className='text-gray-300 mb-4'>
									With over a <span className='text-blue-400 font-medium'>decade of experience</span> in software development and product strategy, Harshdeep has helped dozens of startups transform their ideas into successful digital products.
								</p>
								<p className='text-gray-300 mb-4'>
									His expertise spans across web and mobile development, <span className='text-blue-400 font-medium'>cloud architecture</span>, and <span className='text-blue-400 font-medium'>AI integration</span> - ensuring your MVP is built with scalability and future growth in mind.
								</p>
								<p className='text-gray-300 mb-6'>
									Harshdeep founded LaunchPad Labs with a mission to make quality tech development accessible to early-stage founders and businesses who need to <span className='text-blue-400 font-medium'>move fast</span> without compromising on quality.
								</p>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurFounder;