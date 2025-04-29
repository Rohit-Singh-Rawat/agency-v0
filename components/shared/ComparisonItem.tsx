import React from 'react';

interface ComparisonItemProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	negative?: boolean;
}

export function ComparisonItem({
	icon,
	title,
	description,
	negative = false,
}: ComparisonItemProps) {
	return (
		<li className='flex gap-4 items-start'>
			<div
				className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
					negative ? 'bg-red-400/10' : 'bg-green-400/10'
				}`}
			>
				{icon}
			</div>
			<div>
				<h4 className='text-lg font-medium text-white mb-1'>{title}</h4>
				<p className='text-base text-gray-400'>{description}</p>
			</div>
		</li>
	);
}
