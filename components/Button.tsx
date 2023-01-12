import Link from 'next/link';

interface IButtonLinkProps {
	href: string;
	children?: React.ReactNode;
}

interface IButtonProps {
	onClick?: React.MouseEventHandler;
	children?: React.ReactNode;
	type?: 'primary' | 'danger';
	fullWidth?: boolean;
	isSquare?: boolean;
	className?: string;
}

export const ButtonLink: React.FC<IButtonLinkProps> = ({ href, children }) => {
	return (
		<Link
			href={href}
			className="flex items-center justify-center mt-4 bg-blue-500 text-white font-bold text-base w-full rounded-full py-1"
		>
			{children}
		</Link>
	);
};

export const Button: React.FC<IButtonProps> = ({
	type = 'primary',
	onClick,
	children,
	fullWidth = false,
	isSquare = false,
	className = '',
}) => {
	const baseClasses =
		'flex items-center justify-center text-white font-bold text-base rounded-full focus:outline-none';
	const color = type === 'primary' ? 'bg-blue-500' : 'bg-red-500';
	const width = (fullWidth && 'w-full') || 'w-auto';
	const squareClasses = isSquare ? ' w-6 h-6' : '';

	return (
		<button
			type="button"
			className={`${baseClasses} ${color} ${width} ${squareClasses}${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
