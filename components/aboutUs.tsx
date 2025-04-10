'use client';

import { IconBulb, IconCode, IconRocket, IconUsers } from '@tabler/icons-react';
import React from 'react';

export default function AboutUs() {
	return (
		<section
			id='about'
			className='relative py-24 sm:py-32 overflow-hidden container mx-auto'
		>
			
			{/* Grid Background Pattern */}
			<div className='absolute inset-0 bg-black'>
				<div
					className='absolute inset-0 opacity-20'
					style={{
						backgroundImage:
							'linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)',
						backgroundSize: '40px 40px',
					}}
				/>

				{/* Gradient Orbs */}
				<div className='absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]' />
				<div className='absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]' />
			</div>

			<div className='relative z-10'>
				<div className='mb-16'>
					<h2 className='text-4xl font-semibold transition-all duration-300 text-white/90 before:content-["."] before:text-foreground before:text-4xl before:mr-[0.5] mb-4'>
						About{' '}
						<span className='bg-gradient-to-r from-[#047e9f] to-[#6366F1] text-transparent bg-clip-text'>
							Us
						</span>
					</h2>
					<p className='text-lg leading-7 text-gray-300 max-w-2xl'>
						We&apos;re a team of passionate developers and designers dedicated to turning your ideas into reality.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl'>
					<div className='bg-[#111111] border border-[#222222] rounded-xl p-8 shadow-lg'>
						<h3 className='text-2xl font-semibold text-white mb-4'>Our Mission</h3>
						<p className='text-gray-300 mb-6'>
							To empower entrepreneurs and businesses with cutting-edge technology solutions that drive growth and innovation.
						</p>
						<div className='grid grid-cols-2 gap-6'>
							<ValueCard
								icon={<IconBulb className='w-6 h-6 text-yellow-400' />}
								title='Innovation'
								description='We embrace new technologies and creative approaches to solve complex problems.'
							/>
							<ValueCard
								icon={<IconCode className='w-6 h-6 text-blue-400' />}
								title='Quality'
								description='We&apos;re committed to delivering high-quality, maintainable code that stands the test of time.'
							/>
						</div>
					</div>

					<div className='bg-[#111111] border border-[#222222] rounded-xl p-8 shadow-lg'>
						<h3 className='text-2xl font-semibold text-white mb-4'>Our Approach</h3>
						<p className='text-gray-300 mb-6'>
							We combine technical expertise with a deep understanding of business needs to create solutions that deliver real value.
						</p>
						<div className='grid grid-cols-2 gap-6'>
							<ValueCard
								icon={<IconUsers className='w-6 h-6 text-green-400' />}
								title='Collaboration'
								description='We work closely with our clients, treating their vision as our own.'
							/>
							<ValueCard
								icon={<IconRocket className='w-6 h-6 text-purple-400' />}
								title='Speed'
								description='We deliver quickly without compromising on quality or attention to detail.'
							/>
						</div>
					</div>
				</div>

				<div className='mt-16 bg-[#111111] border border-[#222222] rounded-xl p-8 shadow-lg max-w-5xl'>
					<h3 className='text-2xl font-semibold text-white mb-6'>Why Choose Us</h3>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<FeatureCard
							number='01'
							title='Technical Excellence'
							description='Our team brings years of experience in modern web and mobile development technologies.'
						/>
						<FeatureCard
							number='02'
							title='Business Focus'
							description='We understand that technology is a means to achieve your business goals, not an end in itself.'
						/>
						<FeatureCard
							number='03'
							title='Long-term Partnership'
							description='We&apos;re committed to your success beyond the initial project, providing ongoing support and growth.'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
	return (
		<div className='flex flex-col'>
			<div className='inline-flex items-center justify-center bg-[#1e1e1e] w-12 h-12 rounded-lg mb-4 border border-white/10'>
				{icon}
			</div>
			<h4 className='text-white font-medium mb-2'>{title}</h4>
			<p className='text-gray-400 text-sm'>{description}</p>
		</div>
	);
}

function FeatureCard({ number, title, description }: { number: string; title: string; description: string }) {
	return (
		<div className='flex flex-col'>
			<div className='text-3xl font-bold text-white/20 mb-2'>{number}</div>
			<h4 className='text-white font-medium mb-3'>{title}</h4>
			<p className='text-gray-400 text-sm'>{description}</p>
		</div>
	);
}
