import React from 'react';
import { IconRocket, IconPackage, IconPlugConnected, IconCode } from '@tabler/icons-react';

const Services = () => {
	const services = [
		{
			icon: <IconRocket className='size-8 text-blue-500/70' />,
			title: 'From Concept to Launch in Weeks, Not Months',
			description:
				"Ignyt your idea with my lightning-fast MVP development. I turn your vision into a market-ready product in just 5 weeks, giving you the edge in today's fast-paced tech landscape.",
		},
		{
			icon: <IconPackage className='size-8 text-blue-500/70' />,
			title: 'Complete Package',
			description:
				'Your MVP includes a sleek web application, a high-converting landing page, and SEO-ready content. Everything is built to launch fast and scale effortlessly.',
		},
		{
			icon: <IconPlugConnected className='size-8 text-blue-500/70' />,
			title: 'Seamless Integrations',
			description:
				'We set up all necessary integrations for you, including payment gateways, user authentication, and email marketing platforms.',
		},
		{
			icon: <IconCode className='size-8 text-blue-500/70 ' />,
			title: 'Modern, Scalable Tech',
			description:
				'We use the latest technologies combined with AI to ensure your MVP is fast, stable, and built to scale.',
		},
	];

	return (
		<section
			id='services'
			className='py-24 relative overflow-hidden bg-black'
		>
			<div className='container mx-auto px-4 relative z-10 text-left'>
				<div className='mb-16'>
					<h2 className='text-4xl font-bold mb-4 text-white'>
						<span className=' text-4xl font-semibold transition-all duration-300 text-white/90 before:content-["."] before:text-foreground before:text-4xl before:mr-[0.5]'>
							Services
						</span>
					</h2>
					<p className='text-gray-300 max-w-2xl'>
						Everything you need to transform your idea into a market-ready product.
					</p>
				</div>

				<div className='grid grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-8'>
					{services.map((service, index) => (
						<div
							key={index}
							className='bg-white/5 border-2 shadow-inner shadow-black/20 border-white/10 rounded-lg p-6 hover:border-blue-200/10 transition-all duration-300 grid grid-rows-[auto_auto_1fr] gap-4'
						>
							<div className='row-start-1'>{service.icon}</div>
							<h3 className='text-xl font-semibold text-white row-start-2'>{service.title}</h3>
							<p className='text-gray-400 text-sm row-start-3'>{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
