'use client';

import { cn } from '@/lib/utils';
import { GridPattern } from './grid';
import { IconPlugConnected, IconDeviceDesktop, IconPackage } from '@tabler/icons-react';
import { Section } from './shared/Section';
import { SectionHeading } from './shared/SectionHeading';

const features = [
	{
		icon: (
			<IconPackage
				size={44}
				stroke={1}
			/>
		),
		title: ' MVP Package',
		description:
			'Everything you need — web app, landing page, and SEO-ready content — built to launch fast.',
	},
	{
		icon: (
			<IconPlugConnected
				size={44}
				stroke={1}
			/>
		),
		title: ' Integrations',
		description:
			"We connect payments, logins, emails & more — so you're launch-ready from day one.",
	},
	{
		icon: (
			<IconDeviceDesktop
				size={44}
				stroke={1}
			/>
		),
		title: ' Modern Stack',
		description: 'Powered by the latest tech and AI to ensure speed, stability, and scalability.',
	},
];

const HowItWorks = () => {
	return (
		<Section id='how-it-works'>
			<div className='relative z-10'>
				<GridPattern
					className={cn(
						'[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
						'inset-x-0 inset-y-[-30%] h-[200%] stroke-white/20 absolute'
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

				<SectionHeading
					title='How It Works'
					gradientText='For Your Success'
					subtitle="At LaunchPad Labs, we light up your ideas with lightning-fast MVP development. We take your concept and transform it into a market-ready web or mobile product in just five weeks — so you can shine brighter than competitors in today's fast-moving tech world."
			
				/>

				<div className='flex flex-col md:flex-row gap-8 mt-24 justify-center items-center'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='text-center max-w-sm'
						>
							<div className='mb-5 p-3 rounded-lg bg-gray-800/30 w-fit mx-auto'>{feature.icon}</div>
							<h3 className='text-xl font-semibold mb-3'>{feature.title}</h3>
							<p className='text-gray-300'>{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
};

export default HowItWorks;
