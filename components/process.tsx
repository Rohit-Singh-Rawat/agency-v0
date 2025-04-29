import {
	IconPhone,
	IconClipboardList,
	IconCode,
	IconPackage,
	IconLifebuoy,
} from '@tabler/icons-react';

const steps = [
	{
		icon: <IconPhone size={24} />,
		title: 'Launch Call',
		description:
			"Kick things off with a direct consultation with our founder. We'll understand your vision, business goals, and product expectations in depth.",
	},
	{
		icon: <IconClipboardList size={24} />,
		title: 'Launch Plan',
		description:
			'We craft a clear MVP development plan and deliver a detailed Product Requirement Document (PRD), outlining features, flows, and the tech approach — no surprises, just clarity.',
	},
	{
		icon: <IconCode size={24} />,
		title: 'Launch Sprint',
		description:
			'With the plan locked in, development begins. Our agile team builds fast, shares weekly updates, and keeps you involved every step of the way.',
	},
	{
		icon: <IconPackage size={24} />,
		title: 'Launch Delivery',
		description:
			'Your MVP is ready — a functional, user-ready product built for real-world testing, investor demos, and early traction.',
	},
	{
		icon: <IconLifebuoy size={24} />,
		title: 'Launch Support',
		description:
			"Post-launch, we've got your back. You'll receive 4 weeks of maintenance and support, covering any critical fixes and performance tuning.",
	},
];

// Reusable process card component
const ProcessCard = ({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) => {
	return (
		<div className='relative animate-fade-in glass-card p-6 shadow-lg border-2 border-blue-300/20 bg-black group transition-all duration-300 hover:border-blue-400/40 hover:shadow-blue-500/5'>
			<div className='relative z-10 text-center'>
				<div className='flex justify-center mb-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300'>
					{icon}
				</div>
				<div className='absolute rotate-180 top-10 rotate-y-180 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity duration-300'>
					<div className='text-blue-300 text-[80px]'>{icon}</div>
				</div>
				<h3 className='text-xl font-semibold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors duration-300'>
					{title}
				</h3>
				<p className='text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300'>
					{description}
				</p>
			</div>
			<div className='absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg'></div>
			<div className='absolute inset-0 shadow-inner shadow-blue-400/0 group-hover:shadow-blue-400/10 transition-all duration-300 rounded-lg'></div>
		</div>
	);
};

const Process = () => {
	return (
		<section
			id='our-process'
			className='py-20 md:py-28 bg-background relative overflow-hidden container mx-auto'
		>
			<div className='noise'>
				<div className='container px-4 md:px-6 relative z-10'>
					<div className='mb-16'>
						<h2 className='text-4xl font-bold mb-4 text-white'>
							<span className='text-5xl font-semibold transition-all duration-300 text-white/90 before:content-["."] before:text-foreground before:text-4xl before:mr-[0.5]'>
								The{' '}
								<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#047e9f] to-[#6366F1]'>
									LauchPad
								</span>{' '}
								Process
							</span>
						</h2>
						<p className='text-gray-300 max-w-3xl'>
							A transparent, efficient journey from first idea to full MVP — ready to launch in just
							5 weeks.
						</p>
					</div>
					<div className='grid grid-cols-1 auto-rows-auto gap-4 w-full'>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-4 h-full'>
							{/* First row - 3 cards */}
							{steps.slice(0, 3).map((step, index) => (
								<ProcessCard
									key={index}
									icon={step.icon}
									title={step.title}
									description={step.description}
								/>
							))}
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-full'>
							{/* Second row - 2 cards */}
							{steps.slice(3, 5).map((step, index) => (
								<ProcessCard
									key={index + 3}
									icon={step.icon}
									title={step.title}
									description={step.description}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process;
