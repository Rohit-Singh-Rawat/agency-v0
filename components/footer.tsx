'use client';

import React from 'react';
import Link from 'next/link';
import { IconBrandTwitter, IconBrandLinkedin } from '@tabler/icons-react';
import Logo from './Logo';

const Footer = () => {
	return (
		<div className='relative border-t border-white/[0.1] px-8 bg-black w-full overflow-hidden mx-auto max-w-7xl'>
			<div className='absolute bottom-full left-1/2 -translate-x-1/2 -mb-px flex h-8 items-end overflow-hidden'>
				<div className='flex -mb-px h-[2px] w-56'>
					<div className='w-full flex-none [background-image:linear-gradient(90deg,rgba(255,255,255,0)_0%,#FFFFFF_32.29%,rgba(255,255,255,0.3)_67.19%,rgba(255,255,255,0)_100%)] '></div>
				</div>
			</div>
			<div className='max-w-7xl my-28 mx-auto text-sm text-neutral-400 flex flex-col justify-between md:px-8'>
				<div className='flex flex-col md:flex-row justify-between'>
					<div className='mb-10 md:mb-0'>
						<Link
							className='font-normal flex gap-2 items-center text-sm text-black  py-1 shrink-0 relative z-20'
							href='/'
						>
							<Logo />
						</Link>
						<p className='mt-4 text-neutral-400 max-w-xs'>
							We build high-quality MVPs to transform your ideas into reality.
						</p>
						<div className='flex gap-3 mt-6'>
							<a
								className='w-10 h-10 bg-transparent rounded flex items-center justify-center hover:bg-neutral-700/20 transition-all border border-neutral-700/50 shadow-[2px_-2px_15px_rgba(0,0,0,0.2)] hover:shadow-[4px_-4px_20px_rgba(0,0,0,0.3)] relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:rounded'
								href='https://x.com/MVP_Builder'
								target='_blank'
							>
								<div className='w-5 h-5 text-neutral-400 hover:text-white transition-colors flex justify-center items-center'>
									<IconBrandTwitter
										size={15}
										stroke={1.5}
									/>
								</div>
							</a>
							<a
								className='w-10 h-10 bg-transparent rounded flex items-center justify-center hover:bg-neutral-700/20 transition-all border border-neutral-700/50 shadow-[2px_-2px_15px_rgba(0,0,0,0.2)] hover:shadow-[4px_-4px_20px_rgba(0,0,0,0.3)] relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:rounded'
								href='https://www.linkedin.com/in/harshdeep5inh/'
								target='_blank'
							>
								<div className='w-5 h-5 text-neutral-400 hover:text-white transition-colors flex justify-center items-center'>
									<IconBrandLinkedin
										size={15}
										stroke={1.5}
									/>
								</div>
							</a>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-10 lg:gap-20'>
						<div className='flex flex-col space-y-4'>
							<p className='text-white font-semibold'>Services</p>
							<ul className='space-y-3'>
								<li>
									<a
										className='hover:text-white transition-colors'
										href='#services'
									>
										MVP Development
									</a>
								</li>
								<li>
									<a
										className='hover:text-white transition-colors'
										href='#pricing'
									>
										Pricing
									</a>
								</li>
							</ul>
						</div>
						<div className='flex flex-col space-y-4'>
							<p className='text-white font-semibold'>Contact</p>
							<ul className='space-y-3'>
								<li>
									<a
										className='hover:text-white transition-colors'
										href='https://cal.com/launchpad-labs'
										target='_blank'
									>
										Book a Call
									</a>
								</li>
								<li>
									<a
										className='hover:text-white transition-colors'
										href='mailto:harsh@thelaunchpadlabs.com'
									>
										Email Us
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='mt-16 pt-8 border-t border-neutral-800 text-center text-neutral-500'>
					<p>© {new Date().getFullYear()} LaunchPad Labs. All rights reserved.</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
