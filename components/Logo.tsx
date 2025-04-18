import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="w-8 h-8">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          xmlSpace="preserve" 
          width="32" 
          height="32" 
          viewBox="0 0 512 512"
          className="fill-current"
        >
          <path 
            className="text-[#6366F1]" 
            d="M368.5 160H320s26 17 31.6 48h16.9c17.6 0 31.5 13.9 31.5 31.5v32c0 17.6-13.9 32.5-31.5 32.5h-112c-17.6 0-32.5-14.9-32.5-32.5V240h-48v31.5c0 11.5 2.5 22.5 6.9 32.5 12.6 28.2 40.9 48 73.6 48h112c44.2 0 79.5-36.3 79.5-80.5v-32c0-44.2-35.3-79.5-79.5-79.5z"
            fill="currentColor"
          />
          <path 
            className="text-white" 
            d="M329.6 208c-12.1-28.3-40.1-48-73.1-48h-112c-44.2 0-80.5 35.3-80.5 79.5v32c0 44.2 36.3 80.5 80.5 80.5H192s-25.8-17-32.1-48h-15.4c-17.6 0-32.5-14.9-32.5-32.5v-32c0-17.6 14.9-31.5 32.5-31.5h112c17.6 0 31.5 13.9 31.5 31.5V272h48v-32.5c0-11.2-2.3-21.9-6.4-31.5z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="font-bold text-xl">
        <span className="bg-gradient-to-r from-[#047e9f] via-white to-[#6366F1] text-transparent bg-clip-text">Link</span>
        <span className="font-sans tracking-tight">Verse</span>
      </div>
    </Link>
  );
};

export default Logo;
