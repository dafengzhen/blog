import type { Metadata } from 'next';
import { JetBrains_Mono, Raleway } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';
import type { ReactNode } from 'react';

const raleway = Raleway({
	style: ['normal', 'italic'],
	subsets: ['latin', 'latin-ext'],
	variable: '--font-raleway',
});

const jetBrainsMono = JetBrains_Mono({
	style: ['normal', 'italic'],
	subsets: ['latin', 'latin-ext'],
	variable: '--font-jetBrains-mono',
});

export const metadata: Metadata = {
	description: 'My Blog',
	robots: {
		follow: true,
		index: true,
	},
	title: {
		default: 'cnff',
		template: `%s | cnff`,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html data-bs-theme="auto" lang="en">
			<body
				className={clsx(
					raleway.className,
					raleway.variable,
					jetBrainsMono.variable,
				)}
			>
				{children}
			</body>
		</html>
	);
}
