'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { Section } from './shared/Section';
import { SectionHeading } from './shared/SectionHeading';
import Image from 'next/image';
import { projects } from '@/lib/constant';

type MarqueeProps = {
	children: React.ReactNode
	gap?: string
	direction?: 'left' | 'up'
	pauseOnHover?: boolean
	reverse?: boolean
	fade?: boolean
	className?: string
}

export const Marquee = (props: MarqueeProps) => {
	const {
		children,
		gap = '1rem',
		direction = 'left',
		pauseOnHover = false,
		reverse = false,
		fade = false,
		className,
	} = props

	const mask = fade
		? `linear-gradient(${
				direction === 'left' ? 'to right' : 'to bottom'
			}, transparent 0%, rgba(0, 0, 0, 1.0) 5%, rgba(0, 0, 0, 1.0) 95%, transparent 100%)`
		: undefined

	return (
		<div
			className={cn(
				'group flex overflow-hidden relative',
				direction === 'left' ? 'flex-row' : 'flex-col',
				className
			)}
			style={{
				maskImage: mask,
				WebkitMaskImage: mask,
				gap,
			}}
		>
		
			{[0, 1].map((n) => (
				<div
					key={n}
					style={
						{
							'--gap': gap,
						} as React.CSSProperties
					}
					className={cn(
						'flex shrink-0 justify-around gap-[var(--gap)]',
						direction === 'left'
							? 'animate-marquee-left flex-row'
							: 'animate-marquee-up flex-col',
						pauseOnHover && 'group-hover:[animation-play-state:paused]',
						reverse && 'direction-reverse'
					)}
				>
					{children}
				</div>
			))}
		</div>
	)
}

const OurWork: React.FC = () => {
	return (
		<Section id='our-work'>
			<SectionHeading
				title='Our Work'
				gradientText='Recent Projects'
				subtitle="See how we've helped startups launch successful products with our rapid MVP development approach."
			/>
			<div className='mt-8 sm:mt-12 md:mt-16'>
				<Marquee  pauseOnHover className='w-full'>
					{projects.map((project, idx) => (
						<div
							key={idx}
							className='flex flex-col w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] px-2 sm:px-4 py-4 sm:py-6 mx-1 sm:mx-2'
						>
							<div className='relative aspect-[16/9] w-full mb-4 overflow-hidden rounded-lg border border-border/80'>
								<Image
									src={project.image}
									alt={project.title}
									fill
									loading='lazy'
									className='object-cover'
								/>
							</div>
							<div className='flex flex-col gap-2 p-2'>
								<h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-white'>
									{project.title}
								</h3>
								<p className='text-neutral-400 text-sm sm:text-base leading-relaxed'>
									{project.description}
								</p>
								
							</div>
						</div>
					))}
				</Marquee>
			</div>
		</Section>
	);
};

export default OurWork;
