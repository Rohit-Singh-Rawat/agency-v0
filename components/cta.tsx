'use client';

import React from 'react';
import { RainbowButton } from './rainbowButton';
import { GridPattern } from './grid';
import { cn } from '@/lib/utils';

export default function CTA() {
	return (
		<section className='relative py-24 overflow-hidden bg-black'>
			<div className='container mx-auto px-4 relative z-10'>
				<div className='mx-auto bg-gradient-to-br overflow-hidden from-neutral-900 to-black p-20 rounded-3xl border-2  border-border shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] backdrop-blur-sm'>
					<GridPattern
						className={cn(
							'[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
							'inset-x-0  inset-y-[-30%] h-[200%] stroke-white/20 '
						)}
						squares={[
							[1, 5],
							[3, 2],
							[4, 7],
							[6, 3],
							[7, 8],
							[8, 1],
							[9, 6],
						]}
						strokeDasharray='2'
						patternOpacity={0.05}
					/>
					<div className='flex flex-col md:flex-row items-center gap-8'>
						<div className='md:w-2/3 md:text-left text-center'>
							<h2 className='text-4xl font-bold mb-4 text-white'>
								Ready to transform your
								<span className='font-handwriting text-primary'> idea </span>
								into reality?
							</h2>
							<p className='text-lg text-neutral-400'>
								Let&apos;s build your MVP together and bring your vision to life.
							</p>
						</div>
						<div className='md:w-1/3 flex justify-center md:justify-end'>
							<RainbowButton className='text-black text-shadow-xs text-shadow-black/30 rounded-md'>
								Book a Call Now
							</RainbowButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
