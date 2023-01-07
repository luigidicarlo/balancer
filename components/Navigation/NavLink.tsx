import Link from 'next/link';

interface IProps {
	href: string;
	children?: React.ReactNode;
}

export const NavLink: React.FC<IProps> = ({ href, children }) => {
	return (
		<Link
			href={href}
			className="block text-sm p-2 w-full text-center text-gray-500 hover:text-gray-700 transition md:w-auto md:text-left"
		>
			{children}
		</Link>
	);
};
