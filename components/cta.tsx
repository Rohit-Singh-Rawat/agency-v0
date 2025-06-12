'use client';

import React from 'react';
import { RainbowButton } from './rainbowButton';
import { GridPattern } from './grid';
import { cn } from '@/lib/utils';

export default function CTA() {
	return (
		<section className='relative py-24 overflow-hidden bg-black'>
			<div className='container mx-auto px-4 sm:px-6 relative z-10'>
				<div className='mx-auto bg-gradient-to-br overflow-hidden from-neutral-900 to-black p-6 sm:p-10 md:p-16 lg:p-20 rounded-2xl sm:rounded-3xl border-2 border-border shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] backdrop-blur-sm'>
					<GridPattern
						className={cn(
							'[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
							'inset-x-0 inset-y-[-30%] h-[200%] stroke-white/20'
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
					<div className='flex flex-col md:flex-row items-center gap-6 sm:gap-8'>
						<div className='w-full md:w-2/3 text-center md:text-left'>
							<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-white'>
								Ready to transform your
								<span className='font-handwriting text-primary'> idea </span>
								into reality?
							</h2>
							<p className='text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto md:mx-0'>
								Let&apos;s build your MVP together and bring your vision to
								life.
							</p>
						</div>
						<div className='w-full md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0'>
							<a
								href='https://cal.com/launchpad-labs'
								target='_blank'
							>
								<RainbowButton className='w-full sm:w-auto text-black text-shadow-xs text-shadow-black/30 rounded-md px-6 py-3 text-sm sm:text-base'>
									Book a Call Now
								</RainbowButton>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
