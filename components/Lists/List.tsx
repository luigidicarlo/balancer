import { useState } from 'react';
import { styles } from '../../constants';
import { IList } from '../../interfaces/lists';
import { formatDate } from '../../utils';
import { Button } from '../Button';
import { HorizontalSeparator } from '../Separator';

interface IProps {
	list: IList;
}

export const List: React.FC<IProps> = ({ list }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const detailsClassNames = styles.sectionSubtitle
		.replace('text-center ', 'text-left ')
		.replace('text-sm ', 'text-xs ')
		.replace('font-thin', 'font-light');

	const toggleDetails = () => setIsExpanded(expanded => !expanded);

	return (
		<div className="List block w-full flex flex-col items-start justify-start px-4 py-2 border border-gray-300 rounded shadow-sm">
			<div className="flex items-center justify-between w-full">
				<div>
					<h3 className="text-lg font-bold">{list.name}</h3>
					<p className="text-sm text-gray-500">
						{list.type === 'balance' ? 'Balance' : 'Shopping List'}
					</p>
				</div>
				<Button
					type="primary"
					isSquare
					onClick={toggleDetails}
					className="text-lg"
				>
					{isExpanded ? '-' : '+'}
				</Button>
			</div>
			{isExpanded && (
				<>
					<HorizontalSeparator />
					<div>
						<p className={detailsClassNames}>
							<span className="font-medium">Created:</span>{' '}
							{formatDate(new Date(list.createdAt))}
						</p>
						<p className={detailsClassNames}>
							<span className="font-medium">Updated:</span>{' '}
							{formatDate(new Date(list.updatedAt))}
						</p>
					</div>
				</>
			)}
		</div>
	);
};
