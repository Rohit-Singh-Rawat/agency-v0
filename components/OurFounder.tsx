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
				<div className='container px-4 relative z-10'>
					<div className='mb-12'>
						<h2 className='text-4xl font-semibold transition-all duration-300 text-white/90 before:content-["."] before:text-foreground before:text-4xl before:mr-[0.5] mb-4'>
							Meet Harshdeep{' '}
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#047e9f] to-[#6366F1]'>
								Founder of LaunchPad Labs
							</span>
						</h2>
						<p className='text-lg leading-7 text-gray-300'>
							Your Strategic Tech Partner for Building MVPs That Scale{' '}
						</p>
					</div>

					<div className='flex flex-col lg:flex-row gap-8 items-center'>
						<div
							className='lg:w-1/5 relative'
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							<div
								className={`relative w-full rounded-xl overflow-hidden transition-all duration-500 ${
									isHovered ? 'transform scale-105 shadow-2xl shadow-blue-400/20' : ''
								}`}
							>
								<div className='aspect-w-3 aspect-h-4 w-full max-w-[300px] mx-auto relative'>
									<Image
										src='/images/founder.jpg'
										alt='Harshdeep - Founder of LaunchPad Labs'
										width={200}
										height={300}
										className='object-cover rounded-xl z-20'
									/>
									<div
										className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-30 transition-opacity duration-500 ${
											isHovered ? 'opacity-60' : 'opacity-80'
										}`}
									></div>
								</div>
							</div>
						
						</div>

						<div className='w-4/5'>
							<div className='glass-card p-6 shadow-lg '>
								<p className='text-gray-300 mb-4'>
									I&apos;m Harshdeep, founder of LaunchPad Labs — a{' '}
									<span className='text-purple-300 font-medium'>
										future-focused development agency
									</span>{' '}
									dedicated to turning bold ideas into results-driven digital products. With
									experience delivering{' '}
									<span className='text-purple-300 font-medium'>scalable solutions</span> for{' '}
									<span className='text-purple-300 font-medium'>Fortune 500 companies</span> and{' '}
									<span className='text-purple-300 font-medium'>Shark Tank-backed startups</span>, I
									know what it takes to build products that lead and last.
								</p>
								<p className='text-gray-300 mb-6'>
									To maintain the highest quality, we work with{' '}
									<span className='text-purple-300 font-medium'>limited clients a month</span> —
									giving each project the focus it deserves. If you&apos;re ready to bring your
									vision to life with clarity, speed, and impact, let&apos;s{' '}
									<span className='text-purple-300 font-medium'>connect</span>.
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
