'use client';

import React from 'react';
import { IconRocket, IconPackage, IconPlugConnected, IconCode } from '@tabler/icons-react';
import { Section } from './shared/Section';
import { SectionHeading } from './shared/SectionHeading';

const Services = () => {
	const services = [
		{
			icon: <IconRocket className='size-6 sm:size-7 md:size-8 text-blue-500/70' />,
			title: 'From Concept to Launch in Weeks, Not Months',
			description:
				"Ignyt your idea with my lightning-fast MVP development. I turn your vision into a market-ready product in just 5 weeks, giving you the edge in today's fast-paced tech landscape.",
		},
		{
			icon: <IconPackage className='size-6 sm:size-7 md:size-8 text-blue-500/70' />,
			title: 'Complete Package',
			description:
				'Your MVP includes a sleek web application, a high-converting landing page, and SEO-ready content. Everything is built to launch fast and scale effortlessly.',
		},
		{
			icon: <IconPlugConnected className='size-6 sm:size-7 md:size-8 text-blue-500/70' />,
			title: 'Seamless Integrations',
			description:
				'We set up all necessary integrations for you, including payment gateways, user authentication, and email marketing platforms.',
		},
		{
			icon: <IconCode className='size-6 sm:size-7 md:size-8 text-blue-500/70' />,
			title: 'Modern, Scalable Tech',
			description:
				'We use the latest technologies combined with AI to ensure your MVP is fast, stable, and built to scale.',
		},
	];

	return (
		<Section
			id='services'
			className='bg-black'
		>
			<div className='relative z-10 text-left'>
				<SectionHeading
					title='Services'
					subtitle='Everything you need to transform your idea into a market-ready product.'
				/>

				<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8'>
					{services.map((service, index) => (
						<div
							key={index}
							className='bg-white/5 border-2 shadow-inner shadow-black/20 border-white/10 rounded-lg p-4 sm:p-5 md:p-6 hover:border-blue-200/10 transition-all duration-300 grid grid-rows-[auto_auto_1fr] gap-2 sm:gap-3 md:gap-4'
						>
							<div className='row-start-1'>{service.icon}</div>
							<h3 className='text-lg sm:text-xl font-semibold text-white row-start-2'>
								{service.title}
							</h3>
							<p className='text-xs sm:text-sm text-gray-400 row-start-3'>{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
};

export default Services;
