'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Section } from './shared/Section';
import { SectionHeading } from './shared/SectionHeading';

const OurFounder = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Section id='meet-founder'>
			<div className='relative z-10'>
				<SectionHeading
					title='Meet Harshdeep'
					gradientText='Founder of LaunchPad Labs'
					subtitle='Your Strategic Tech Partner for Building MVPs That Scale'
				/>

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
						<div className='glass-card p-6 shadow-lg border-2 border-blue-300/20 bg-black group transition-all duration-300 hover:border-blue-400/40 hover:shadow-blue-500/5'>
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
		</Section>
	);
};

export default OurFounder;
