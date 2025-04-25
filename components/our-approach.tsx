'use client';

import {
	IconCheck,
	IconClock,
	IconUsers,
	IconLayoutBoard,
	IconCoin,
	IconTools,
	IconTargetArrow,
	IconBulb,
	IconChartLine,
} from '@tabler/icons-react';
import { cn } from '@/lib/utils';
import { GridPattern } from './grid';
// Comparison item component for both traditional and LaunchPad approaches
function ComparisonItem({
	icon,
	title,
	description,
	negative = false,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
	negative?: boolean;
}) {
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

// Traditional approach column component
function TraditionalApproach() {
	return (
		<div className='flex-1 backdrop-blur-sm bg-black/30 border border-red-900/20 rounded-2xl p-8 shadow-xl'>
			<div className='inline-block px-4 py-1 mb-6 rounded-full bg-red-500/10 text-red-300 border border-red-500/30'>
				Traditional Development
			</div>

			<ul className='space-y-8'>
				<ComparisonItem
					icon={
						<IconClock
							size={24}
							className='text-red-400'
						/>
					}
					title='Slow Timelines'
					description='Months of planning, approvals, and design cycles before any code is written.'
					negative
				/>
				<ComparisonItem
					icon={
						<IconUsers
							size={24}
							className='text-red-400'
						/>
					}
					title='Overloaded Teams'
					description='Large teams and layers of management lead to delays and communication gaps.'
					negative
				/>
				<ComparisonItem
					icon={
						<IconLayoutBoard
							size={24}
							className='text-red-400'
						/>
					}
					title='Prolonged Design Phases'
					description='Time-consuming wireframes and mockups slow down real progress.'
					negative
				/>
				<ComparisonItem
					icon={
						<IconCoin
							size={24}
							className='text-red-400'
						/>
					}
					title='High Upfront Costs'
					description='Huge budgets are spent before you even know if the product fits the market.'
					negative
				/>
				<ComparisonItem
					icon={
						<IconTools
							size={24}
							className='text-red-400'
						/>
					}
					title='Complicated Tech Setup'
					description='Dealing with server management, deployment, and maintenance eats up valuable time.'
					negative
				/>
			</ul>
		</div>
	);
}

// LaunchPad approach column component
function LaunchPadApproach() {
	return (
		<div className='flex-1 backdrop-blur-sm bg-black/30 border border-indigo-500/30 rounded-2xl p-8 shadow-xl'>
			<div className='inline-block px-4 py-1 mb-6 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30'>
				LaunchPad Labs Approach
			</div>

			<ul className='space-y-8'>
				<ComparisonItem
					icon={
						<IconClock
							size={24}
							className='text-green-400'
						/>
					}
					title='Fast MVP Delivery'
					description='Get a fully functional MVP in just 5 weeks — designed to test, learn, and grow quickly.'
				/>
				<ComparisonItem
					icon={
						<IconTargetArrow
							size={24}
							className='text-green-400'
						/>
					}
					title='Efficient Teams'
					description='Work with a focused, expert team that prioritizes execution and outcomes.'
				/>
				<ComparisonItem
					icon={
						<IconBulb
							size={24}
							className='text-green-400'
						/>
					}
					title='Real-Time Prototyping'
					description='Skip endless mockups. See working features and UI from day one.'
				/>
				<ComparisonItem
					icon={
						<IconCheck
							size={24}
							className='text-green-400'
						/>
					}
					title='Smarter Investment'
					description='Launch and validate before making large investments — lower risk, faster feedback.'
				/>
				<ComparisonItem
					icon={
						<IconChartLine
							size={24}
							className='text-green-400'
						/>
					}
					title='Built to Scale'
					description='Using modern, cloud-based infrastructure for reliable performance and future growth.'
				/>
			</ul>
		</div>
	);
}

export default function OurApproach() {
	return (
		<section
			id='approach'
			className='relative py-16 sm:py-24 md:py-32 overflow-hidden container mx-auto sm:px-6'
		>
			{/* Background with grid pattern */}
			<div className='absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black'>
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
					patternOpacity={0.1}
				/>

				{/* Subtle glow effects */}
				<div className='absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-[120px]' />
				<div className='absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-[150px]' />
			</div>

			<div className='relative z-10'>
				<div className='mb-16 text-center sm:text-left'>
					<h2 className='text-4xl font-semibold transition-all duration-300 text-white/90 before:content-["."] before:text-foreground before:text-4xl before:mr-[0.5] mb-4'>
						Our{' '}
						<span className='bg-gradient-to-r from-[#047e9f] to-[#6366F1] text-transparent bg-clip-text'>
							Approach
						</span>
					</h2>
					<p className='text-lg leading-7 text-gray-300 max-w-2xl'>
						See how LaunchPad Labs delivers faster, smarter MVPs compared to traditional agencies.
					</p>
				</div>

				<div className='flex flex-col md:flex-row gap-10 max-w-6xl mx-auto'>
					{/* Traditional Development Column */}
					<TraditionalApproach />

					{/* LaunchPad Approach Column */}
					<LaunchPadApproach />
				</div>

				<div className='mt-12 text-center'>
					<button className='  shadow-[2px_-2px_15px_rgba(0,0,0,0.2)] cursor-pointer relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent  overflow-hidden px-8  hover:shadow-[4px_-4px_20px_rgba(0,0,0,0.3)]  border border-white/10  py-2 rounded-full hover:scale-105 transition-all duration-300 bg-black text-blue-400  z-[10]'>
						<a href='/contact'>Book a Call → </a>
					</button>
				</div>
			</div>
		</section>
	);
}
