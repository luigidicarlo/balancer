import { Html, Head, Main, NextScript } from 'next/document';
import { Navbar } from '../components/Navigation/Navbar';

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Navbar />
				<main className="container mx-auto p-4 md:px-0">
					<Main />
				</main>
				<NextScript />
			</body>
		</Html>
	);
}
