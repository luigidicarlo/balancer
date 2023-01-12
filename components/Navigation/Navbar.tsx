import Link from 'next/link';
import { Branding } from './Branding';
import { NavbarSeparator } from '../Separator';
import { Links } from './Links';

export const Navbar = () => {
	return (
		<nav className="Navbar shadow px-4 py-2 flex flex-col items-center justify-center md:flex-row md:justify-start">
			<Branding />
			<NavbarSeparator isHorizontal />
			<Links />
		</nav>
	);
};
