import Link from 'next/link';
import { globals } from '../../constants';

export const Branding = () => {
	return (
		<div className="text-center md:text-left md:pr-8">
			<Link href="/">
				<h1 className="font-serif font-bold text-lg text-gray-700">{globals.app.name}</h1>
			</Link>
			<p className="text-sm text-gray-500 font-thin">
				by{' '}
				<a
					href={`emailto:${globals.creator.email}`}
					title={globals.creator.email}
				>
					{globals.creator.name}
				</a>
			</p>
		</div>
	);
};
