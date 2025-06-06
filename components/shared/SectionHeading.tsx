import { cn } from '@/lib/utils';
import React from 'react';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	subtitle?: string;
	gradientText?: string;
	className?: string;
}

export function SectionHeading({
	title,
	subtitle,
	gradientText,
	className,
	...props
}: SectionHeadingProps) {
	return (
		<div
			className={cn('mb-10 sm:mb-16 text-left', className)}
			{...props}
		>
			<h2 className='text-3xl sm:text-5xl font-semibold transition-all duration-300 text-white/90  before:text-foreground before:text-3xl sm:before:text-4xl md:before:text-5xl before:mr-[0.5] mb-3 sm:mb-4'>
				{title}
				{gradientText && (
					<span className='bg-gradient-to-r from-[#047e9f] to-[#6366F1] text-transparent bg-clip-text'>
						{' '}
						{gradientText}
					</span>
				)}
			</h2>
			{subtitle && (
				<p className='text-lg sm:text-xl leading-7 text-gray-300 max-w-2xl mx-auto sm:mx-0'>
					{subtitle}
				</p>
			)}
		</div>
	);
}
