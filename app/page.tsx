import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Services from '@/components/services';
import Clients from '@/components/clients';
import Pricing from '@/components/pricing';
import AboutUs from '@/components/aboutUs';
import Cta from '@/components/cta';

const Home = () => {
	return (
		<main className='bg-background w-full'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-full lg:max-w-5xl'>
				<Hero />
				<Services />
				<Clients />
				<HowItWorks />
				<Pricing />
				<AboutUs />
				<Cta />
				<div className='fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10' />
			</div>
		</main>
	);
};

export default Home;
