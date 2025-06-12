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
import { Section } from './shared/Section';
import { SectionHeading } from './shared/SectionHeading';

export default function Pricing() {
	return (
		<Section
			id='pricing'
			withGradientOrbs
		>
			<div className='relative z-10'>
				<SectionHeading
					title='Ready to Launch Your'
					gradientText='Idea?'
					subtitle='Choose the perfect package and start building today.'
				/>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 max-w-5xl mx-auto sm:px-10'>
					{pricingCards.map((card, index) => (
						<PricingCard
							key={index}
							{...card}
						/>
					))}
				</div>
			</div>
		</Section>
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
	limitedAvailability?: string;
};

const pricingCards: PricingCardProps[] = [
	{
		popular: true,
		badge: {
			text: '⭐ Most Popular',
			className: 'bg-blue-600 text-white',
		},
		icon: <></>,
		tagline: {
			text: 'One-Time MVP Development',
			className: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
		},
		title: 'MVP Development Package',
		price: 'Starting at $4999',
		subtitle: {
			text: 'Complete MVP delivered in just 2 weeks',
			className: 'text-indigo-300',
		},
		cta: {
			text: 'Book Now',
			className:
				'bg-black border border-white/10 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-black/50 text-white  cursor-pointer relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 overflow-hidden',
		},
		featuresTitle: "What's Included:",
		features: [
			{
				text: 'Web application or mobile app — built to scale',
				icon: (
					<IconRocket
						size={20}
						stroke={2}
						className='text-indigo-400'
					/>
				),
			},
			{
				text: 'Modern, fast, and reliable tech stack',
				icon: (
					<IconBolt
						size={20}
						stroke={2}
						className='text-indigo-300'
					/>
				),
			},
			{
				text: 'Seamless integrations (payments, authentication, email, and more)',
				icon: (
					<IconStar
						size={20}
						stroke={2}
						className='text-indigo-400'
					/>
				),
			},
			{
				text: '30 days of free maintenance and support',
				icon: (
					<IconShield
						size={20}
						stroke={2}
						className='text-indigo-400'
					/>
				),
			},
			{
				text: 'Founder-led development for personal attention',
				icon: (
					<IconHeartHandshake
						size={20}
						stroke={2}
						className='text-indigo-300'
					/>
				),
			},
			{
				text: 'Regular progress updates with full transparency',
				icon: (
					<IconChartBar
						size={20}
						stroke={2}
						className='text-indigo-400'
					/>
				),
			},
		],
		limitedAvailability:
			'Limited Availability: We only take 5 clients per month — secure your spot today!',
	},
	{
		badge: {
			text: '🔥 Ongoing Growth Support',
			className:
				'bg-black text-white text-shadow-md shadow-md border border-gray-400/30',
		},
		icon: <></>,
		tagline: {
			text: 'Growth Retainer Package',
			className: 'bg-gray-500/20 text-gray-700 border border-gray-500/30',
		},
		title: 'Continuous Growth Package',
		price: '$3999/month',
		subtitle: {
			text: 'No long-term commitment',
			className: 'text-gray-700',
		},
		cta: {
			text: 'Book Now',
			className:
				'bg-black hover:bg-neutral-800 text-white text-shadow-md shadow-md border border-neutral-800 transition-all duration-300 hover:shadow-lg hover:brightness-110 active:scale-95',
		},
		featuresTitle: 'Monthly Services:',
		features: [
			{
				text: '60 hours of flexible development time per month',
				icon: (
					<IconBolt
						size={20}
						stroke={2}
						className='text-gray-600'
					/>
				),
			},
			{
				text: 'Priority on new features and updates',
				icon: (
					<IconRocket
						size={20}
						stroke={2}
						className='text-gray-700'
					/>
				),
			},
			{
				text: 'Weekly strategy and progress calls',
				icon: (
					<IconHeartHandshake
						size={20}
						stroke={2}
						className='text-gray-600'
					/>
				),
			},
			{
				text: 'Continuous performance optimization',
				icon: (
					<IconStar
						size={20}
						stroke={2}
						className='text-gray-600'
					/>
				),
			},
			{
				text: 'Same-day emergency support for urgent needs',
				icon: (
					<IconShield
						size={20}
						stroke={2}
						className='text-gray-700'
					/>
				),
			},
			{
				text: 'Cancel anytime, zero hassle',
				icon: (
					<IconCheck
						size={20}
						stroke={2}
						className='text-gray-700'
					/>
				),
			},
		],
		limitedAvailability:
			'Perfect for scaling startups needing continuous development and quick iterations.',
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
	limitedAvailability,
}: PricingCardProps) {
	return (
		<div
			className={`${
				popular ? 'bg-[#111111]' : 'bg-white'
			} hover:scale-105 transition-all duration-500 border-2 shadow-inner ${
				popular
					? 'shadow-black/20 border-[#222222] '
					: 'shadow-gray-100/20 border-neutral-300'
			} rounded-xl overflow-hidden relative h-full grid grid-rows-[auto_auto_1fr_auto]`}
		>
			{/* Label Badge */}
			<div
				className={`${badge.className} text-xs font-medium py-1 px-3 rounded-br-lg absolute left-0 top-0`}
			>
				{badge.text}
			</div>

			{/* Card Header with Title - Row 1 */}
			<div className='p-4 sm:p-6 text-left py-8 sm:py-10 pb-4 sm:pb-5 space-y-2'>
				<span
					className={`${tagline.className} text-xs sm:text-sm py-1 px-2 rounded-md inline-block`}
				>
					{tagline.text}
				</span>
				<div className='flex items-center gap-4 mb-3 sm:mb-4'>
					<div>
						<h3
							className={`text-xl sm:text-2xl font-semibold ${
								popular ? 'text-white' : 'text-black'
							}`}
						>
							{title}
						</h3>
					</div>
				</div>

				{/* Price and Tagline */}
				<div className='mb-3 sm:mb-4'>
					<div className='flex items-center mb-2'>
						<span
							className={`text-3xl sm:text-4xl font-bold ${
								popular ? 'text-white' : 'text-black'
							}`}
						>
							{price}
						</span>
					</div>
					<div
						className={`text-xs sm:text-sm ${
							popular ? 'text-gray-300' : 'text-gray-600'
						}`}
					>
						{subtitle.text}
					</div>
				</div>
			</div>

			{/* Features Title - Row 2 */}
			<div className='px-4 sm:px-6'>
				<h4
					className={`${
						popular ? 'text-gray-300' : 'text-gray-800'
					} font-medium mb-3 sm:mb-4 text-base sm:text-lg`}
				>
					{featuresTitle}
				</h4>
			</div>

			{/* Features List - Row 3 (flexible height) */}
			<div className='px-4 sm:px-6 pb-4 sm:pb-6 flex flex-col'>
				<ul className='space-y-2 sm:space-y-3'>
					{features.map((feature, index) => (
						<FeatureItem
							key={index}
							text={feature.text}
							icon={feature.icon}
							isWhiteCard={!popular}
						/>
					))}
				</ul>

				<div className='mt-auto pt-4'>
					{limitedAvailability && (
						<div
							className={`text-sm ${
								popular ? 'text-amber-400' : 'text-amber-600'
							} font-medium`}
						>
							⚡ {limitedAvailability}
						</div>
					)}
				</div>
			</div>

			{/* CTA Button - Row 4 */}
			<div className='px-4 sm:px-6 pb-4 sm:pb-6 mt-auto'>
				<a
					href='https://cal.com/launchpad-labs'
					target='_blank'
					className={`block w-full ${cta.className} py-2 sm:py-3 rounded-lg font-medium text-center transition-colors text-sm sm:text-base`}
				>
					{cta.text}
				</a>
			</div>
		</div>
	);
}

function FeatureItem({
	text,
	icon,
	isWhiteCard,
}: {
	text: string;
	icon?: React.ReactNode;
	isWhiteCard?: boolean;
}) {
	return (
		<li className='flex items-center gap-2 sm:gap-3 text-sm sm:text-base'>
			<div className='flex-shrink-0'>
				<div
					className={`rounded-lg border flex items-center justify-center ${
						isWhiteCard ? 'border-gray-300' : 'border-white/30'
					} p-1 relative overflow-hidden`}
				>
					<div
						className={`absolute inset-0 ${
							isWhiteCard
								? 'bg-gradient-to-br from-gray-100/50 to-transparent'
								: 'bg-gradient-to-br from-white/10 to-transparent'
						} pointer-events-none`}
					></div>
					<span className='w-4 h-4 sm:w-5 sm:h-5 relative z-10 flex items-center justify-center'>
						{icon || (
							<IconCheck
								size={18}
								stroke={2}
								className={isWhiteCard ? 'text-gray-600' : 'text-blue-400'}
							/>
						)}
					</span>
				</div>
			</div>
			<span
				className={`${isWhiteCard ? 'text-gray-700' : 'text-gray-300'} text-sm`}
			>
				{text}
			</span>
		</li>
	);
}
