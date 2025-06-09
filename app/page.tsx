import Hero from '@/components/Hero';
import Pricing from '@/components/pricing';
import Cta from '@/components/cta';
// import HowItWorks from '@/components/HowItWorks';
import OurApproach from '@/components/our-approach';
import Process from '@/components/process';
import OurFounder from '@/components/OurFounder';
import { Spotlight } from '@/components/magicui/spotlight';
import OurWork from '@/components/OurWork';
import NumbersSection from '@/components/NumbersSection';

const Home = () => {
	return (
		<main className='bg-background overflow-x-hidden w-full relative'>
			<Spotlight /> <Hero />
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-full lg:max-w-5xl'>
				<NumbersSection />
				{/* <HowItWorks /> */}
				<OurWork />
				<OurApproach />
				<Process />
				{/* <Services /> */}
				{/* <Clients /> */}
				<OurFounder />
				<Pricing />
				{/* <AboutUs />	 */}
				<Cta />
				<div className='fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10' />
			</div>
		</main>
	);
};

export default Home;
