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
	title: 'Dark Agency',
	description: 'Professional digital agency services',
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
