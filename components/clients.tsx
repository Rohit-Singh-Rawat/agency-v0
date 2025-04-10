'use client';
import { useState } from 'react';
import Image from 'next/image';
import { IconUser } from '@tabler/icons-react';
import { GridPattern } from './grid';
import { cn } from '@/lib/utils';

const Clients = () => {
	const clientAvatars = [
		// First row
		{
			img: '/dummyMan.png',
			name: 'Sarah Johnson',
			role: 'Product Manager',
			company: 'Google',
			testimonial:
				'The MVP exceeded our expectations. High-quality product delivered in record time.',
		},
		{
			img: '/dummyMan.png',
			name: 'Michael Chen',
			role: 'Operations Director',
			company: 'Amazon',
			testimonial: 'Rapid development helped validate our concept quickly with stakeholders.',
		},
		{
			img: '/dummyMan.png',
			name: 'Alex Rivera',
			role: 'Communications Lead',
			company: 'Meta',
			testimonial: 'Impressive translation of vision into working platform with core features.',
		},
		{
			img: '/dummyMan.png',
			name: 'Emma Wilson',
			role: 'Technology Director',
			company: 'Netflix',
			testimonial: 'Quick turnaround gave us a competitive advantage in our market.',
		},
		{
			img: '/dummyMan.png',
			name: 'David Park',
			role: 'Startup Founder',
			company: 'Fintech Startup',
			testimonial: 'Working with this team was transformative for our MVP launch.',
		},
		// Second row
		{
			img: '/dummyMan.png',
			name: 'Jessica Lee',
			role: 'CEO',
			company: 'TechStart',
			testimonial: 'Their expertise in rapid development was crucial for our time-to-market.',
		},
		{
			img: '/dummyMan.png',
			name: 'Marcus Johnson',
			role: 'CTO',
			company: 'HealthTech Inc',
			testimonial:
				'Exceptional technical guidance and implementation throughout the entire process.',
		},
		{
			img: '/dummyMan.png',
			name: 'Sophia Garcia',
			role: 'Product Owner',
			company: 'EdTech Solutions',
			testimonial: "Our MVP's quality surprised our investors and secured our next funding round.",
		},
		{
			img: '/dummyMan.png',
			name: 'Ryan Taylor',
			role: 'Marketing Director',
			company: 'E-commerce Platform',
			testimonial: 'The quick turnaround allowed us to test market fit sooner than anticipated.',
		},
		{
			img: '/dummyMan.png',
			name: 'Ava Mitchell',
			role: 'UX Designer',
			company: 'Design Studio',
			testimonial:
				'They balanced speed with quality, delivering an MVP that actually felt premium.',
		},
		// Third row
		{
			img: '/dummyMan.png',
			name: 'James Wilson',
			role: 'Product Lead',
			company: 'SaaS Platform',
			testimonial: 'The MVP had just the right features to validate our core value proposition.',
		},
		{
			img: '/dummyMan.png',
			name: 'Olivia Martinez',
			role: 'Founder',
			company: 'Health App',
			testimonial: 'From concept to working MVP in half the time we expected. Impressive!',
		},
		{
			img: '/dummyMan.png',
			name: 'Ethan Brown',
			role: 'Engineering Manager',
			company: 'IoT Solutions',
			testimonial:
				'Technical excellence and clear communication throughout the development process.',
		},
		{
			img: '/dummyMan.png',
			name: 'Zoe Thompson',
			role: 'Innovation Director',
			company: 'Retail Tech',
			testimonial:
				'The team understood our vision and built exactly what we needed to test our concept.',
		},
	];

	return (
		<section
			id='clients'
			className='py-24 sm:py-32 relative overflow-hidden container mx-auto'
		>
			{/* Grid Background Pattern */}
			<GridPattern
				className={cn(
					'[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
					'inset-x-0 inset-y-[-30%] h-[200%] stroke-white/20 '
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

			<div className='relative z-10'>
				<div className='mb-16'>
					<h2 className='text-4xl font-semibold transition-all duration-300 text-white/90 before:content-["."] before:text-foreground before:text-4xl before:mr-[0.5] mb-4'>
						Trusted by{' '}
						<span className='bg-gradient-to-r from-[#1a1a1a] to-[#333333] text-transparent bg-clip-text'>
							Leaders & Innovators
						</span>
					</h2>
					<p className='text-lg leading-7 text-gray-300 max-w-2xl'>
						Hear from the people who have transformed their ideas into successful products with our
						MVP development approach
					</p>
				</div>

				<div className='flex flex-col gap-4 py-16'>
					{/* Avatar Circles - First two rows */}
					<div className='flex flex-wrap justify-center gap-6 mb-6 px-4'>
					{clientAvatars.slice(0, 8).map((client, index) => (
						<AvatarWithTooltip
							key={index}
							client={client}
						/>
					))}
				</div>

				{/* Avatar Circles - Third row */}
				<div className='flex flex-wrap justify-center gap-6 px-4'>
					{clientAvatars.slice(8, 20).map((client, index) => (
						<AvatarWithTooltip
							key={index + 8}
							client={client}
						/>
					))}
					</div>
				</div>
			</div>
		</section>
	);
};

interface AvatarWithTooltipProps {
	client: {
		img: string;
		name: string;
		role: string;
		company: string;
		testimonial: string;
	};
}

const AvatarWithTooltip = ({ client }: AvatarWithTooltipProps) => {
	const [showTooltip, setShowTooltip] = useState(false);

	return (
		<div
			className='relative group'
			onMouseEnter={() => setShowTooltip(true)}
			onMouseLeave={() => setShowTooltip(false)}
		>
			{/* Avatar Circle */}
			<div className='w-14 h-14 rounded-xl  overflow-hidden border border-white/30 hover:border-gray-500/40 transition-all duration-300 cursor-pointer relative'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-700/20 to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10' />
				{client.img ? (
					<Image
						src={client.img}
						alt={client.name}
						width={56}
						height={56}
						className='object-cover w-full h-full '
					/>
				) : (
					<div className='w-full h-full bg-gray-800 flex items-center justify-center'>
						<IconUser className='w-6 h-6 text-gray-400' />
					</div>
				)}
			</div>

			{/* Tooltip */}
			<div
				className={cn(
					'absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-64 bg-white/5 shadow-inner shadow-black/20 backdrop-blur-sm rounded-lg p-4 border-2 border-border z-50 text-left',
					'transition-all duration-200',
					showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
				)}
			>
				{/* Tooltip content */}
				<div className='text-gray-300 mb-3 text-sm leading-5 italic'>
					&ldquo;{client.testimonial}&rdquo;
				</div>
				<div className='flex items-center'>
					<div className='w-8 h-8 rounded-xl  overflow-hidden mr-2 bg-gray-800 flex items-center justify-center'>
						{client.img ? (
							<Image
								src={client.img}
								alt={client.name}
								width={32}
								height={32}
								className='object-cover w-full h-full'
							/>
						) : (
							<IconUser className='w-4 h-4 text-gray-400' />
						)}
					</div>
					<div>
						<p className='text-white text-sm font-medium'>{client.name}</p>
						<p className='text-gray-400 text-xs'>
							{client.role}, {client.company}
						</p>
					</div>
				</div>
				{/* Arrow */}
				<div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-transparent border-t-white/10'></div>
			</div>
		</div>
	);
};

export default Clients;
