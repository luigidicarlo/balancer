interface IProps {
	isHorizontal?: boolean;
	className?: string;
}

export const NavbarSeparator: React.FC<IProps> = ({
	isHorizontal = false,
	className = '',
}) => {
	const sizeClass = isHorizontal
		? 'w-full border-t my-2 md:w-auto md:border-t-0 md:my-0 md:h-8 md:border-l '
		: 'h-8 border-l ';
	const extraClassNames = className.length > 0 ? ` ${className}` : '';
	const combinedClassNames = `border-gray-300 ${sizeClass}${extraClassNames}`;

	return <div className={combinedClassNames} />;
};

export const HorizontalSeparator = () => {
	return <div className="w-full border-t my-2 border-gray-300" />;
};
