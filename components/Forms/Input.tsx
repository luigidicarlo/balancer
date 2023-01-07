interface IProps {
	name: string;
	type?: string;
	label?: string;
	className?: string;
	error?: string;
}

export const Input: React.FC<IProps> = ({
	name,
	type = 'text',
	label = '',
	className = '',
	error = '',
}) => {
	const extraClassNames = className.length > 0 ? `${className} ` : '';

	return (
		<div className="w-full pb-4">
			<label htmlFor={name} className="hidden">
				{label}
			</label>
			<input
				className={`${extraClassNames}block w-full border-b border-gray-500 focus:outline-none`}
				type={type}
				name={name}
				placeholder={label}
			/>
			{error.length > 0 && <p className="text-red-500 text-sm">{error}</p>}
		</div>
	);
};
