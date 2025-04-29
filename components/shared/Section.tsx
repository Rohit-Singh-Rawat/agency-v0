import { cn } from '@/lib/utils';
import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
	id?: string;
	className?: string;
	children: React.ReactNode;
	withGrid?: boolean;
	withGradientOrbs?: boolean;
}

export function Section({
	id,
	className,
	children,
	withGrid = false,
	withGradientOrbs = false,
	...props
}: SectionProps) {
	return (
		<section
			id={id}
			className={cn(
				'relative py-16 sm:py-24 md:py-32 overflow-hidden container mx-auto sm:px-6',
				className
			)}
			{...props}
		>
			{withGrid && (
				<div className='absolute inset-0 bg-black'>
					<div
						className='absolute inset-0 opacity-20'
						style={{
							backgroundImage:
								'linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)',
							backgroundSize: '40px 40px',
						}}
					/>
				</div>
			)}

			{withGradientOrbs && (
				<>
					<div className='absolute top-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-[100px]' />
					<div className='absolute bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-[100px]' />
					<div className='absolute top-40 right-10 sm:right-40 w-56 sm:w-80 h-56 sm:h-80 bg-emerald-500/10 rounded-full blur-[80px]' />
					<div className='absolute bottom-40 left-10 sm:left-40 w-56 sm:w-72 h-56 sm:h-72 bg-amber-500/10 rounded-full blur-[90px]' />
				</>
			)}

			<div className='relative z-10'>{children}</div>
		</section>
	);
}
