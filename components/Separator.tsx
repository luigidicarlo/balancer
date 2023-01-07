interface IProps {
	isHorizontal?: boolean;
	className?: string;
}

export const Separator: React.FC<IProps> = ({
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
