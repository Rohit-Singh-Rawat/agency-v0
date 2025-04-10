
const steps = [
	{
		number: '01',
		title: 'AI Discovery',
		description:
			'We understand your business goals and use AI to identify optimal features for your target users.',
	},
	{
		number: '02',
		title: 'Smart Blueprint',
		description:
			'Our AI creates a strategic plan focusing only on the core features needed for your MVP.',
	},
	{
		number: '03',
		title: 'Accelerated Build',
		description:
			'Our AI-powered team designs and develops your MVP with unprecedented speed and quality.',
	},
	{
		number: '04',
		title: 'Intelligent Launch',
		description:
			'We help you release your product with AI-driven insights to gather user feedback effectively.',
	},
];

const HowItWorks = () => {
	return (
		<section
			id='our-process'
			className='py-20 md:py-28 bg-background relative overflow-hidden container mx-auto max'
		>
			<div className='noise'>
				
				<div className='container px-4 md:px-6 relative z-10'>
					{' '}
					<div className='mb-16'>
						<h2 className='text-4xl font-bold mb-4 text-white'>
							<span className=' text-4xl font-semibold transition-all duration-300 text-white/90 before:content-["."] before:text-foreground before:text-4xl before:mr-[0.5]'>
								Our AI-Powered Process
							</span>
						</h2>
						<p className='text-gray-300 max-w-2xl'>
							{' '}
							A streamlined approach that takes your idea from concept to market in weeks, not
							months.
						</p>
					</div>
					<div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
						{steps.map((step, index) => (
							<div
								key={index}
								className='relative animate-fade-in glass-card p-8  shadow-lg border-2 border-blue-200/10'
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className='absolute -top-4 -left-4 text-5xl  font-black text-blue-200/20 bg-black'>
									{step.number}
								</div>
								<div className='relative z-10'>
									<h3 className='text-xl font-semibold mb-3 text-primary'>{step.title}</h3>
									<p className='text-foreground/60'>{step.description}</p>
								</div>
								{index < steps.length - 1 && (
									<div className='hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-accent'></div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
