'use client';
import React from 'react';
import SectionHeading from './shared/SectionHeading';
import AnimatedDiv from './shared/AnimatedDiv';
import { GridPattern } from './grid';
import { cn } from '@/lib/utils';

const stats = [
	{
		label: 'Products Built',
		value: '200+'
	},
	{
		label: 'Client Funding',
		value: '$25M+'
	},
	{
		label: 'Acquisitions',
		value: '5+'
	},
];

const NumbersSection = () => (
	<section className='w-full py-16 relative'>
		<SectionHeading
			title='Numbers that speak for themselves'
      
			subtitle="We'll let the numbers do the talking for us. This didn't happen overnight, this is from 5+ years of working with startups."
		/>
		<div className='flex flex-col md:flex-row gap-6 justify-center items-center mt-10 relative z-10'>
			{stats.map((stat, index) => (
				<AnimatedDiv
					key={stat.label}
					className='flex-1 min-w-[280px] max-w-[350px] from-zinc-900/40 via-30% via-zinc-900/50 to-zinc-900/40 bg-gradient-to-r backdrop-blur-sm border border-zinc-900/50 rounded-xl p-1 transition-all duration-300 h-full group'
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: index * 0.1 }}
				>
					<div className='flex flex-col p-6 border border-zinc-900/50 rounded-lg bg-black/80 h-full shadow-inner shadow-black relative overflow-hidden'>
						<GridPattern
							className={cn(
								'[mask-image:radial-gradient(180px_circle_at_top_right,white,transparent)]',
								'inset-x-0 inset-y-[-30%] h-[200%] stroke-white/20'
							)}
						
							strokeDasharray='3'
							patternOpacity={0.03}
						/>
						<div className='text-lg text-gray-400 mb-4 font-medium relative z-10'>
							{stat.label}
						</div>
						<div className='text-5xl md:text-6xl font-bold text-white tracking-tight relative z-10'>
							{stat.value}
						</div>
					</div>
				</AnimatedDiv>
			))}
		</div>
	</section>
);

export default NumbersSection;
