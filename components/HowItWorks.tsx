import { cn } from '@/lib/utils';
import { GridPattern } from './grid';
import { IconRocket, IconPlug, IconCpu } from '@tabler/icons-react';

const features = [
	{
		icon: (
			<IconRocket
				size={44}
				stroke={1.5}
			/>
		),
		title: '💼 MVP Package',
		description:
			'Everything you need — web app, landing page, and SEO-ready content — built to launch fast.',
	},
	{
		icon: (
			<IconPlug
				size={44}
				stroke={1.5}
			/>
		),
		title: '🔌 Integrations',
		description:
			"We connect payments, logins, emails & more — so you're launch-ready from day one.",
	},
	{
		icon: (
			<IconCpu
				size={44}
				stroke={1.5}
			/>
		),
		title: '🧠 Modern Stack',
		description: 'Powered by the latest tech and AI to ensure speed, stability, and scalability.',
	},
];

const HowItWorks = () => {
	return (
		<section
			id='how-it-works'
			className='py-20 md:py-28 bg-background relative overflow-hidden container mx-auto text-center'
		>
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

			<div className='mb-16 text-left'>
				<h2 className='text-4xl font-semibold transition-all duration-300 text-white/90 before:content-["."] before:text-foreground before:text-4xl before:mr-[0.5] mb-4'>
					How It Works{' '}
					<span className='bg-gradient-to-r from-[#1a1a1a] to-[#333333] text-transparent bg-clip-text'>
						For Your Success
					</span>
				</h2>
				<p className='text-lg leading-7 text-gray-300 '>
					We supercharge your idea with lightning-fast MVP development. From concept to market-ready 
					product in just five weeks — helping you outpace competitors in today&apos;s fast-moving tech landscape.
				</p>
			</div>

			<div className='flex flex-col md:flex-row gap-8 mt-24 justify-center items-center'>
				{features.map((feature, index) => (
					<div
						key={index}
						className='text-center max-w-sm'
					>
						<div className='mb-5 p-3 rounded-lg bg-gray-100 dark:bg-gray-800/30 w-fit mx-auto'>
							{feature.icon}
						</div>
						<h3 className='text-xl font-semibold mb-3'>{feature.title}</h3>
						<p className='text-gray-600 dark:text-gray-300'>{feature.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default HowItWorks;
