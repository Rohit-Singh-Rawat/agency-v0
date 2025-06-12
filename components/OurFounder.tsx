'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Section } from './shared/Section';
import { SectionHeading } from './shared/SectionHeading';
import harsh from '@/public/images/harsh.jpg';
const OurFounder = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Section id='meet-founder'>
			<div className='relative z-10'>
				<SectionHeading
					title='Meet the '
					gradientText='Founder'
				/>

				<div className='flex flex-col lg:flex-row gap-8 items-center justify-center'>
					<div
						className=' relative h-auto'
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						<div
							className={`relative  w-full rounded-xl overflow-hidden transition-all duration-500 ${
								isHovered
									? 'transform scale-105 shadow-2xl shadow-blue-400/20'
									: ''
							}`}
						>
							<div className='aspect-w-3 aspect-h-4 w-full max-w-[300px] mx-auto relative'>
								<Image
									src={harsh}
									alt='Harshdeep - Founder of LaunchPad Labs'
									width={200}
									height={300}
									className='object-cover rounded-xl z-20 '
								/>
								<div
									className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-30 transition-opacity duration-500 ${
										isHovered ? 'opacity-60' : 'opacity-80'
									}`}
								></div>
							</div>
						</div>
					</div>

					<div className='w-full max-w-2xl'>
						<div className='glass-card px-2 md:px-6 shadow-lg  bg-black group '>
							<p className='text-gray-300 mb-4'>
								I&apos;m Harshdeep, founder of LaunchPad Labs — a{' '}
								<span className='text-blue-400 font-medium'>
									future-forward development agency
								</span>
								. I&apos;ve built{' '}
								<span className='text-blue-400 font-medium'>
									40+ products
								</span>{' '}
								that scaled from MVPs to full-fledged platforms, collectively raising over{' '}
								<span className='text-blue-400 font-medium'>
									$12 million
								</span>
								. From{' '}
								<span className='text-blue-400 font-medium'>
									Fortune 500 companies
								</span>{' '}
								to{' '}
								<span className='text-blue-400 font-medium'>
									Shark Tank-backed startups
								</span>
								, I&apos;ve delivered solutions that are built to scale, last, and lead.
							</p>
							<p className='text-gray-300 mb-6'>
								To ensure top-tier quality, we work with a{' '}
								<span className='text-blue-400 font-medium'>
									limited number of clients
								</span>{' '}
								each month giving every project the attention it deserves. If you&apos;re
								ready to bring your vision to life with clarity, speed, and
								impact, let&apos;s{' '}
								<span className='text-blue-400 font-medium'>connect</span>.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default OurFounder;
