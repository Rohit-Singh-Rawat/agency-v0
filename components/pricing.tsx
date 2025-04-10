'use client';

import { IconCheck, IconStar, IconChartBar } from '@tabler/icons-react';

export default function Pricing() {
	return (
		<section
			id='pricing'
			className='relative py-24 sm:py-32 overflow-hidden container mx-auto'
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
				<div className='absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]' />
				<div className='absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]' />
			</div>

			<div className='relative z-10'>
				<div className='mb-16'>
					<h2 className='text-4xl font-semibold transition-all duration-300 text-white/90 before:content-["."] before:text-foreground before:text-4xl before:mr-[0.5] mb-4'>
						Accelerate Your{' '}
						<span className='bg-gradient-to-r from-[#047e9f] to-[#6366F1] text-transparent bg-clip-text'>
							Vision
						</span>
					</h2>
					<p className='text-lg leading-7 text-gray-300 max-w-2xl'>
						Choose the package that fits your stage. From rapid MVPs to ongoing growth.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl px-20'>
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
	}>;
};

const pricingCards: PricingCardProps[] = [
	{
		popular: true,
		badge: {
			text: 'Most Popular',
			className: 'bg-blue-600 text-white',
		},
		icon: <IconStar className='w-6 h-6 text-blue-400 stroke-[1.5]' />,
		tagline: {
			text: 'One-time Package',
			className: 'bg-black/40 text-white border border-white/10',
		},
		title: 'MVP Development',
		price: '$3497',
		subtitle: {
			text: 'To deliver a fast, functional, and impactful MVP to kickstart your product journey',
			className: 'text-red-400',
		},
		cta: {
			text: 'Book a Call →',
			className: 'bg-black border border-white/10 shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-black/50 text-white',
		},
		featuresTitle: "What's Included:",
		features: [
			{ text: 'Complete MVP development in 4-5 weeks' },
			{ text: 'Web application or Mobile App development' },
			{ text: 'Modern, scalable tech stack with future-proof architecture' },
			{ text: 'Seamless third-party integrations (payments, auth, APIs)' },
			{ text: '30 days of free maintenance and bug fixes' },
			{ text: 'Personalized, founder-led development process' },
			{ text: 'Regular progress updates and transparent workflow' },
		],
	},
	{
		badge: {
			text: 'Growth Plan',
			className: 'bg-white text-black text-shadow-md shadow-md border-l border-t border-purple-400/30',
		},
		icon: <IconChartBar className='w-6 h-6 text-purple-400 stroke-[1.5]' />,
		tagline: {
			text: 'Monthly Retainer',
			className: 'bg-blue-500/10 text-blue-300 border border-blue-500/20',
		},
		title: 'Growth Retainer',
		price: '$3997',
		subtitle: {
			text: 'End-to-end product development with an iterative approach to create a polished, feature-rich product',
			className: 'text-blue-300',
		},
		cta: {
			text: 'Book a Call →',
			className: 'bg-white hover:bg-gray-100 text-black text-shadow-md shadow-md border border-black shadow-white/10',
		},
		featuresTitle: 'Monthly Services:',
		features: [
			{ text: '60 hours of dedicated development time monthly' },
			{ text: 'Flexible allocation across features and maintenance' },
			{ text: 'Weekly strategy and planning calls with team' },
			{ text: 'Priority feature development and implementation' },
			{ text: 'Continuous maintenance, optimization & performance tuning' },
			{ text: 'Same-day emergency support and critical fixes' },
		],
	},
];

function PricingCard({
	badge,
	icon,
	title,
	price,
	subtitle,
	cta,
	featuresTitle,
	features,
}: PricingCardProps) {
	return (
		<div className='bg-[#111111] border-2 shadow-inner shadow-black/20 border-[#222222] rounded-xl overflow-hidden relative'>
			{/* Label Badge */}
			<div
				className={`${badge.className} text-xs font-medium py-1 px-3 rounded-br-lg absolute left-0 top-0`}
			>
				{badge.text}
			</div>

			{/* Card Header with Icon */}
			<div className='p-6 text-left py-10 pb-5'>
				<div className='flex items-baseline justify-between mb-1'>
					<div className='inline-flex items-center justify-center bg-[#1e1e1e] w-12 h-12 rounded-lg mb-4 border-2 border-white/10  shadow-inner shadow-black/20'>
						{icon}
					</div>
					<div className='flex items-center justify-center mb-1'>
						<span className='text-3xl font-bold text-white'>{price}</span>
						<div className='flex items-center justify-center mb-1'>
							{title === 'Growth Retainer' && (
								<span className='text-white/70 ml-1 text-sm'>/month</span>
							)}
						</div>
					</div>
				</div>
				<h3 className='text-xl font-semibold text-white mb-3'>{title}</h3>

				<p className={`${subtitle.className} text-xs mb-2`}>{subtitle.text}</p>
			</div>
			{/* CTA Button */}
			<div className='px-6'>
				<a
					href='/contact'
					className={`block w-full ${cta.className} py-3 rounded-lg font-medium text-center transition-colors mb-6`}
				>
					{cta.text}
				</a>
			</div>

			{/* Features List */}
			<div className='px-6 pb-6'>
				<h4 className='text-gray-300 font-medium mb-4'>{featuresTitle}</h4>
				<ul className='space-y-3'>
					{features.map((feature, index) => (
						<FeatureItem
							key={index}
							text={feature.text}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

function FeatureItem({ text }: { text: string }) {
	return (
		<li className='flex items-center gap-2 text-sm'>
			<div className='flex-shrink-0'>
				<div className={`rounded-lg border flex items-center justify-center border-white/30 p-[3px] relative overflow-hidden`}>
					<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
					<IconCheck
						className={`w-3.5 h-3.5 relative z-10 stroke-[2]`}
					/>
				</div>
			</div>
			<span className='text-gray-300'>{text}</span>
		</li>
	);
}
