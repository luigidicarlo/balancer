import { IOptions } from '../../interfaces/forms';

interface IProps {
	name: string;
	options?: IOptions[];
	className?: string;
	defaultValue?: string;
	label?: string;
	error?: string;
}

export const SelectInput: React.FC<IProps> = ({
	name,
	className = '',
	options = [],
	defaultValue = '',
	label = '',
	error = '',
}) => {
	const extraClassNames = className.length > 0 ? `${className} ` : '';
	const extraProps: Record<string, string> = {};

	if (defaultValue.length > 0) {
		extraProps.value = defaultValue;
	}

	return (
		<div className="w-full pb-4">
			<label htmlFor={name} className="hidden">
				{label}
			</label>
			<select
				name={name}
				className={`${extraClassNames}block w-full border-b border-gray-500 py-2 bg-white focus:outline-none`}
			>
				{options.map(option => (
					<option key={option.value} value={option.value} {...extraProps}>
						{option.label}
					</option>
				))}
			</select>
			{error.length > 0 && <p className="text-red-500 text-sm">{error}</p>}
		</div>
	);
};
