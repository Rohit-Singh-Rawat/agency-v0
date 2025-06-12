'use client';
import React from 'react';
import SectionHeading from './shared/SectionHeading';
import AnimatedDiv from './shared/AnimatedDiv';
import { GridPattern } from './grid';
import { cn } from '@/lib/utils';
import { NumberTicker } from './magicui/number-ticker';
import { GlowingEffect } from './ui/glowing-effect';

const stats = [
	{
		label: 'Products Built',
		value: 40
	},
	{
		label: 'Client Funding',
		value: 12
	},
	{
		label: 'Acquisitions',
		value: 2
	},
];

const NumbersSection = () => (
	<section className='w-full py-16 relative'>
		<SectionHeading
			title='Our'
			gradientText='Achievements'
			subtitle="These achievements didn't happen overnight - they're the result of 3+ years of working with startups."
		/>
		<div className='flex flex-col md:flex-row gap-6 justify-center items-center mt-10 relative z-10'>
			{stats.map((stat, index) => (
				<AnimatedDiv
					key={stat.label}
					className='flex-1 min-w-[280px] max-w-[350px] from-zinc-900/40 via-75% via-zinc-900/50  to-blue-700/40 bg-gradient-to-br backdrop-blur-sm border border-zinc-900/50 rounded-xl p-1 transition-all duration-300 h-full group hover:translate-y-[-10px] '
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: index * 0.1 }}
				>
					<GlowingEffect
						blur={0}
						borderWidth={2}
						spread={80}
						glow={true}
						disabled={false}
						proximity={64}
						inactiveZone={0.01}
					/>
					<div className='flex flex-col p-6 border border-zinc-900/50 rounded-lg bg-black/80 h-full shadow-inner shadow-black relative overflow-hidden group-hover:bg-gradient-to-br group-hover:from-black/80 group-hover:via-blue-950/10 group-hover:to-black/80 transition-all duration-300'>
						<GridPattern
							className={cn(
								'[mask-image:radial-gradient(180px_circle_at_top_right,white,transparent)]',
								'inset-x-0 inset-y-[-30%] h-[200%] stroke-white/20 group-hover:stroke-blue-400/30 transition-all duration-300'
							)}
							strokeDasharray='3'
							patternOpacity={0.03}
						/>
						<div className='text-lg text-gray-400 mb-4 font-medium relative z-10 group-hover:text-blue-300/80 transition-colors duration-300'>
							{stat.label}
						</div>
						<div className='text-5xl md:text-6xl font-bold text-white tracking-tight relative z-10 group-hover:text-blue-50 transition-colors duration-300'>
							{stat.label === 'Client Funding' && '$'}
							<NumberTicker
								className='text-white text-shadow-lg '
								value={stat.value}
							/>
							{stat.label === 'Products Built' && '+'}
							{stat.label === 'Client Funding' && 'M+'}
						</div>
					</div>
				</AnimatedDiv>
			))}
		</div>
	</section>
);

export default NumbersSection;
