import Link from 'next/link';

interface IButtonLinkProps {
	href: string;
	children?: React.ReactNode;
}

export const ButtonLink: React.FC<IButtonLinkProps> = ({ href, children }) => {
	return (
		<Link
			href={href}
			className="flex items-center justify-center mt-4 bg-blue-500 text-white font-bold text-base w-full rounded py-1"
		>
			{children}
		</Link>
	);
};
