import React from 'react';

const FixedBottomRightButton = () => {
	return (
		<div className='fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[1000] flex items-center'>
			<a
				href="https://x.com/MVP_Builder"
				target="_blank"
				rel="noopener noreferrer"
				className={`
          flex items-center gap-4
          bg-white/5 backdrop-blur-md
          border border-white/10
          text-white
          rounded-full
          px-3.5 md:px-7 py-3.5
          text-[1.05rem] font-bold
          shadow-[inset_1px_-3px_3px_0px_rgba(0,0,0,0.5)]
          cursor-pointer
          tracking-wide
          transition
          duration-200
          ease-in-out
          
          
          focus:outline-none
        `}
			>
				<span className='flex items-center'>
					<svg
						className='w-4 h-4 text-gray-400  pointer-events-none'
						fill='currentColor'
						viewBox='0 0 24 24'
						aria-hidden='true'
					>
						<path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'></path>
					</svg>
				</span>
				<span className='text-sm font-light hidden md:block'>@MVP_Builder</span>
			</a>
		</div>
	);
};

export default FixedBottomRightButton;
