'use client';

import { IconBulb, IconCode, IconRocket, IconUsers } from '@tabler/icons-react';
import React from 'react';
import { Section } from './shared/Section';
import { SectionHeading } from './shared/SectionHeading';

export default function AboutUs() {
	return (
		<Section id='about'>
			<div className='relative z-10'>
				<SectionHeading
					title='About'
					gradientText='Us'
					subtitle="We're a team of passionate developers and designers dedicated to turning your ideas into reality."
				/>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-5xl'>
					<div className='bg-[#111111] border border-[#222222] rounded-xl p-4 sm:p-6 md:p-8 shadow-lg'>
						<h3 className='text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-4'>
							Our Mission
						</h3>
						<p className='text-sm sm:text-base text-gray-300 mb-4 sm:mb-6'>
							To empower entrepreneurs and businesses with cutting-edge technology solutions that
							drive growth and innovation.
						</p>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
							<ValueCard
								icon={<IconBulb className='w-5 h-5 sm:w-6 sm:h-6 text-yellow-400' />}
								title='Innovation'
								description='We embrace new technologies and creative approaches to solve complex problems.'
							/>
							<ValueCard
								icon={<IconCode className='w-5 h-5 sm:w-6 sm:h-6 text-blue-400' />}
								title='Quality'
								description="We're committed to delivering high-quality, maintainable code that stands the test of time."
							/>
						</div>
					</div>

					<div className='bg-[#111111] border border-[#222222] rounded-xl p-4 sm:p-6 md:p-8 shadow-lg'>
						<h3 className='text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-4'>
							Our Approach
						</h3>
						<p className='text-sm sm:text-base text-gray-300 mb-4 sm:mb-6'>
							We combine technical expertise with a deep understanding of business needs to create
							solutions that deliver real value.
						</p>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
							<ValueCard
								icon={<IconUsers className='w-5 h-5 sm:w-6 sm:h-6 text-green-400' />}
								title='Collaboration'
								description='We work closely with our clients, treating their vision as our own.'
							/>
							<ValueCard
								icon={<IconRocket className='w-5 h-5 sm:w-6 sm:h-6 text-purple-400' />}
								title='Speed'
								description='We deliver quickly without compromising on quality or attention to detail.'
							/>
						</div>
					</div>
				</div>

				<div className='mt-8 sm:mt-12 md:mt-16 bg-[#111111] border border-[#222222] rounded-xl p-4 sm:p-6 md:p-8 shadow-lg max-w-5xl'>
					<h3 className='text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6'>
						Why Choose Us
					</h3>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8'>
						<FeatureCard
							number='01'
							title='Technical Excellence'
							description='Our team brings years of experience in modern web and mobile development technologies.'
						/>
						<FeatureCard
							number='02'
							title='Business Focus'
							description='We understand that technology is a means to an end, not the end itself.'
						/>
						<FeatureCard
							number='03'
							title='Client Success'
							description='Your success is our success. We measure our performance by your results.'
						/>
					</div>
				</div>
			</div>
		</Section>
	);
}

function ValueCard({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<div className='flex flex-col'>
			<div className='inline-flex items-center justify-center bg-[#1e1e1e] w-10 h-10 sm:w-12 sm:h-12 rounded-lg mb-3 sm:mb-4 border border-white/10'>
				{icon}
			</div>
			<h4 className='text-white text-sm sm:text-base font-medium mb-1 sm:mb-2'>{title}</h4>
			<p className='text-gray-400 text-xs sm:text-sm'>{description}</p>
		</div>
	);
}

function FeatureCard({
	number,
	title,
	description,
}: {
	number: string;
	title: string;
	description: string;
}) {
	return (
		<div className='flex flex-col'>
			<div className='text-2xl sm:text-3xl font-bold text-white/20 mb-1 sm:mb-2'>{number}</div>
			<h4 className='text-white text-sm sm:text-base font-medium mb-2 sm:mb-3'>{title}</h4>
			<p className='text-gray-400 text-xs sm:text-sm'>{description}</p>
		</div>
	);
}
