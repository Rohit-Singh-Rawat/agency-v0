import Image from 'next/image';
import { Marquee } from '@/components/OurWork';

import adobeLogo from '@/public/images/companies/adobe.svg';	
import amazonLogo from '@/public/images/companies/amazon.svg';
import deloitteLogo from '@/public/images/companies/deloitte.svg';
import googleLogo from '@/public/images/companies/google.svg';
import metaLogo from '@/public/images/companies/meta.svg';
import netflixLogo from '@/public/images/companies/netflix.svg';
import nvidiaLogo from '@/public/images/companies/nvidia.svg';
import polygonLogo from '@/public/images/companies/polygon.svg';
import qualcommLogo from '@/public/images/companies/qualcomm.svg';
import walmartLogo from '@/public/images/companies/walmart.svg';

const companies = [
	{
		name: 'Adobe',
		logo: adobeLogo,
	},
	{
		name: 'Amazon',
		logo: amazonLogo,
	},
	{
		name: 'Deloitte',
		logo: deloitteLogo,
	},
	{
		name: 'Google',
		logo: googleLogo,
	},
	{
		name: 'Meta',
		logo: metaLogo,
	},
	{
		name: 'Netflix',
		logo: netflixLogo,
	},
	{
		name: 'Nvidia',
		logo: nvidiaLogo,
	},
	{
		name: 'Polygon',
		logo: polygonLogo,
	},
	{
		name: 'Qualcomm',
		logo: qualcommLogo,
	},
	{
		name: 'Walmart',
		logo: walmartLogo,
	},
];

const TrustedFounders = () => {
	return (
		<section className='py-8 md:py-16 overflow-hidden bg-background'>
			<div className='container mx-auto px-4'>
				<h2 className='text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-foreground'>
					Trusted by Founders from
				</h2>
				<Marquee className='w-full'>
					{companies.map((company, idx) => (
						<div
							key={`${company.name}-${idx}`}
							className='flex items-center justify-center min-w-[150px] md:min-w-[200px] h-16 md:h-20 bg-muted/30 rounded-lg px-4 md:px-8 hover:bg-muted/40 transition-colors'
						>
							<Image
								src={company.logo}
								alt={company.name}
								width={120}
								height={40}
								className='h-6 md:h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale invert'
							/>
						</div>
					))}
				</Marquee>
			</div>
		</section>
	);
};

export default TrustedFounders;
