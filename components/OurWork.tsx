'use client';
import React from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Section } from './shared/Section';
import { SectionHeading } from './shared/SectionHeading';
import Image from 'next/image';

const projects = [
	{
		name: 'Konnect Up',
		description: 'Job Portal for the future',
		image: '/images/projects/konnectup.png',
	},
];

const SLIDE_SPEED = 20; // px per second

function InfiniteSlider() {
	const [width, setWidth] = React.useState(0);
	const containerRef = React.useRef<HTMLDivElement>(null);
	const [x, setX] = React.useState(0);

	React.useEffect(() => {
		if (containerRef.current) {
			setWidth(containerRef.current.scrollWidth / 2);
		}
	}, []);

	useAnimationFrame((t, delta) => {
		setX((prev) => {
			let next = prev - (SLIDE_SPEED * delta) / 1000;
			if (Math.abs(next) >= width) {
				next = 0;
			}
			return next;
		});
	});

	return (
		<div className='overflow-hidden w-full relative'>
			<motion.div
				ref={containerRef}
				className='flex whitespace-nowrap'
				style={{ x }}
			>
				{[...projects, ...projects].map((project, idx) => (
					<div
						key={idx}
						className={cn(
							'w-auto px-2 sm:px-4 py-4 sm:py-6 mx-1 sm:mx-2',
						)}
					>
						<div className='flex flex-col sm:flex-row items-start sm:items-center w-full gap-2 sm:gap-3 p-1'>
							<span className='text-base sm:text-lg md:text-xl'>
								{project.name}
							</span>
							<div className='hidden sm:block w-[1px] h-6 bg-neutral-300' />
							<span className='text-neutral-400 text-xs sm:text-sm'>
								{project.description}
							</span>
						</div>
						<div className='relative aspect-[16/9] w-[280px] sm:w-[400px] md:w-[500px] lg:w-[700px] mb-4 overflow-hidden rounded-lg'>
							<Image
								src={project.image}
								alt={project.name}
								fill
								className='object-cover'
							/>
						</div>
					</div>
				))}
			</motion.div>
		</div>
	);
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
				<InfiniteSlider />
			</div>
		</Section>
	);
};

export default OurWork;
