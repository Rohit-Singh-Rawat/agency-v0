import type { Metadata } from 'next';
import { Space_Grotesk, Outfit, Caveat } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/footer';

const spaceGrotesk = Space_Grotesk({
	variable: '--font-space-grotesk',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

const outfit = Outfit({
	variable: '--font-outfit',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

const caveat = Caveat({
	variable: '--font-handwriting',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Launchpad - Build & Launch Your MVP in Weeks, Not Months',
	description: 'Build & Launch Your MVP in Weeks, Not Months',
	keywords: ['MVP', 'startup', 'development', 'software', 'launch', 'product'],
	authors: [{ name: 'Launchpad Labs' }],
	creator: 'Launchpad Labs',
	publisher: 'Launchpad Labs',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://thelaunchpadlabs.com'),
	openGraph: {
		title: 'Launchpad - Build & Launch Your MVP in Weeks, Not Months',
		description: 'Build & Launch Your MVP in Weeks, Not Months',
		url: 'https://thelaunchpadlabs.com',
		siteName: 'Launchpad Labs',
		images: [
			{
				url: '/og/og.png',
				width: 1200,
				height: 630,
				alt: 'Launchpad Labs - MVP Development',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Launchpad - Build & Launch Your MVP in Weeks, Not Months',
		description: 'Build & Launch Your MVP in Weeks, Not Months',
		images: ['/og/og.png'],
		creator: '@MVP_Builder',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
	manifest: '/site.webmanifest',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${spaceGrotesk.className} ${outfit.variable} ${caveat.variable} antialiased`}
			>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
