'use client';

import {
	IconCheck,
	IconStar,
	IconRocket,
	IconBolt,
	IconShield,
	IconHeartHandshake,
	IconChartBar,
} from '@tabler/icons-react';

export default function Pricing() {
	return (
		<section
			id='pricing'
			className='relative py-16 sm:py-24 md:py-32 overflow-hidden container mx-auto  sm:px-6'
		>
			{/* Grid Background Pattern */}
			<div className='absolute inset-0 bg-black'>
				<div
					className='absolute inset-0 opacity-20'
					style={{
						backgroundImage:
							'linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)',
						backgroundSize: '40px 40px',
					}}
				/>

				{/* Gradient Orbs */}
				<div className='absolute top-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-[100px]' />
				<div className='absolute bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-[100px]' />
				<div className='absolute top-40 right-10 sm:right-40 w-56 sm:w-80 h-56 sm:h-80 bg-emerald-500/10 rounded-full blur-[80px]' />
				<div className='absolute bottom-40 left-10 sm:left-40 w-56 sm:w-72 h-56 sm:h-72 bg-amber-500/10 rounded-full blur-[90px]' />
			</div>

			<div className='relative z-10'>
				<div className='mb-10 sm:mb-16 text-center sm:text-left'>
					<h2 className='text-3xl sm:text-4xl font-semibold transition-all duration-300 text-white/90 before:content-["."] before:text-foreground before:text-3xl sm:before:text-4xl md:before:text-5xl before:mr-[0.5] mb-3 sm:mb-4'>
						Accelerate Your{' '}
						<span className='bg-gradient-to-r from-[#047e9f] to-[#6366F1] text-transparent bg-clip-text'>
							Vision
						</span>
					</h2>
					<p className='text-lg sm:text-xl leading-7 text-gray-300 max-w-2xl mx-auto sm:mx-0'>
						Choose the package that fits your stage. From rapid MVPs to ongoing growth.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 max-w-5xl mx-auto  sm:px-10'>
					{pricingCards.map((card, index) => (
						<PricingCard
							key={index}
							{...card}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

type PricingCardProps = {
	popular?: boolean;
	badge: {
		text: string;
		className: string;
	};
	icon: React.ReactNode;
	tagline: {
		text: string;
		className: string;
	};
	title: string;
	price: string;
	subtitle: {
		text: string;
		className: string;
	};
	cta: {
		text: string;
		className: string;
	};
	featuresTitle: string;
	features: Array<{
		text: string;
		icon?: React.ReactNode;
	}>;
};

const pricingCards: PricingCardProps[] = [
	{
		popular: true,
		badge: {
			text: 'Most Popular',
			className: 'bg-blue-600 text-white',
		},
		icon: <></>,
		tagline: {
			text: 'One-time Package',
			className: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
		},
		title: 'MVP Development Package',
		price: '$3497',
		subtitle: {
			text: 'Fast, functional MVP to kickstart your product journey with confidence',
			className: 'text-indigo-300',
		},
		cta: {
			text: 'Book a Call →',
			className:
				'bg-black border border-white/10 shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-black/50 text-white',
		},
		featuresTitle: "What's Included:",
		features: [
			{
				text: 'Complete MVP in 4-5 weeks',
				icon: (
					<IconRocket
						size={20}
						stroke={2}
						className='text-indigo-400'
					/>
				),
			},
			{
				text: 'Web or Mobile App development',
				icon: (
					<IconBolt
						size={20}
						stroke={2}
						className='text-indigo-300'
					/>
				),
			},
			{
				text: 'Modern, scalable tech stack',
				icon: (
					<IconStar
						size={20}
						stroke={2}
						className='text-indigo-400'
					/>
				),
			},
			{
				text: 'Third-party integrations',
				icon: (
					<IconCheck
						size={20}
						stroke={2}
						className='text-indigo-300'
					/>
				),
			},
			{
				text: '30 days maintenance & bug fixes',
				icon: (
					<IconShield
						size={20}
						stroke={2}
						className='text-indigo-400'
					/>
				),
			},
			{
				text: 'Founder-led development',
				icon: (
					<IconHeartHandshake
						size={20}
						stroke={2}
						className='text-indigo-300'
					/>
				),
			},
			{
				text: 'Regular progress updates',
				icon: (
					<IconChartBar
						size={20}
						stroke={2}
						className='text-indigo-400'
					/>
				),
			},
		],
	},
	{
		badge: {
			text: 'Growth Plan',
			className:
				'bg-white text-black text-shadow-md shadow-md border-l border-t border-purple-400/30',
		},
		icon: <></>,
		tagline: {
			text: 'Monthly Retainer',
			className: 'bg-teal-500/20 text-teal-300 border border-teal-500/30',
		},
		title: 'Continuous Growth Package',
		price: '$3997',
		subtitle: {
			text: 'Iterative development for a polished, feature-rich product',
			className: 'text-teal-300',
		},
		cta: {
			text: 'Book a Call →',
			className:
				'bg-white hover:bg-gray-100 text-black text-shadow-md shadow-md border border-black shadow-white/10',
		},
		featuresTitle: 'Monthly Services:',
		features: [
			{
				text: '60 hours development time',
				icon: (
					<IconBolt
						size={20}
						stroke={2}
						className='text-teal-400'
					/>
				),
			},
			{
				text: 'Flexible feature allocation',
				icon: (
					<IconCheck
						size={20}
						stroke={2}
						className='text-teal-300'
					/>
				),
			},
			{
				text: 'Weekly strategy calls',
				icon: (
					<IconHeartHandshake
						size={20}
						stroke={2}
						className='text-teal-400'
					/>
				),
			},
			{
				text: 'Priority feature development',
				icon: (
					<IconRocket
						size={20}
						stroke={2}
						className='text-teal-300'
					/>
				),
			},
			{
				text: 'Continuous optimization',
				icon: (
					<IconStar
						size={20}
						stroke={2}
						className='text-teal-400'
					/>
				),
			},
			{
				text: 'Same-day emergency support',
				icon: (
					<IconShield
						size={20}
						stroke={2}
						className='text-teal-300'
					/>
				),
			},
		],
	},
];

function PricingCard({
	badge,
	title,
	price,
	subtitle,
	cta,
	featuresTitle,
	features,
	tagline,
	popular,
}: PricingCardProps) {
	return (
		<div
			className={`bg-[#111111] border-2 shadow-inner shadow-black/20 border-[#222222] ${
				popular ? 'border-indigo-500/30' : ''
			} rounded-xl overflow-hidden relative flex flex-col h-full`}
		>
			{/* Label Badge */}
			<div
				className={`${badge.className} text-xs font-medium py-1 px-3 rounded-br-lg absolute left-0 top-0`}
			>
				{badge.text}
			</div>

			{/* Card Header with Title */}
			<div className='p-4 sm:p-6 text-left py-8 sm:py-10 pb-4 sm:pb-5 space-y-2'>
				<span
					className={`${tagline.className} text-xs sm:text-sm py-1 px-2 rounded-md inline-block`}
				>
					{tagline.text}
				</span>
				<div className='flex items-center gap-4 mb-3 sm:mb-4'>
					<div>
						<h3 className='text-xl sm:text-2xl font-semibold text-white'>{title}</h3>
					</div>
				</div>

				{/* Price and Tagline */}
				<div className='mb-3 sm:mb-4'>
					<div className='flex items-center mb-2'>
						<span className='text-3xl sm:text-4xl font-bold text-white'>{price}</span>
						{title === 'Continuous Growth Package' && (
							<span className='text-white/70 ml-1 text-sm sm:text-base'>/month</span>
						)}
					</div>
					<div className='text-xs sm:text-sm text-gray-300'>{subtitle.text}</div>
				</div>
			</div>

			{/* Features List */}
			<div className='px-4 sm:px-6 pb-4 sm:pb-6 flex-grow'>
				<h4 className='text-gray-300 font-medium mb-3 sm:mb-4 text-base sm:text-lg'>
					{featuresTitle}
				</h4>
				<ul className='space-y-2 sm:space-y-3'>
					{features.map((feature, index) => (
						<FeatureItem
							key={index}
							text={feature.text}
							icon={feature.icon}
						/>
					))}
				</ul>
			</div>

			{/* CTA Button at bottom */}
			<div className='px-4 sm:px-6 pb-4 sm:pb-6 mt-auto'>
				<a
					href='/contact'
					className={`block w-full ${cta.className} py-2 sm:py-3 rounded-lg font-medium text-center transition-colors text-sm sm:text-base`}
				>
					{cta.text}
				</a>
			</div>
		</div>
	);
}

function FeatureItem({ text, icon }: { text: string; icon?: React.ReactNode }) {
	return (
		<li className='flex items-center gap-2 sm:gap-3 text-sm sm:text-base'>
			<div className='flex-shrink-0'>
				<div
					className={`rounded-lg border flex items-center justify-center border-white/30 p-1 relative overflow-hidden`}
				>
					<div className='absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none'></div>
					<span className='w-4 h-4 sm:w-5 sm:h-5 relative z-10 flex items-center justify-center'>
						{icon || (
							<IconCheck
								size={18}
								stroke={2}
								className='text-blue-400'
							/>
						)}
					</span>
				</div>
			</div>
			<span className='text-gray-300'>{text}</span>
		</li>
	);
}
