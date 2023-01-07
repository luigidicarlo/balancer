import { styles } from '../../constants';
import { IList } from '../../interfaces/lists';
import { formatDate } from '../../utils';

interface IProps {
	list: IList;
}

export const List: React.FC<IProps> = ({ list }) => {
	return (
		<button className="List block w-full flex flex-col items-start justify-start px-4 py-2 border border-gray-300 rounded shadow-sm">
			<h3 className="text-lg font-bold">{list.name}</h3>
			<p
				className={styles.sectionSubtitle
					.replace('text-center ', 'text-left ')
					.replace('text-sm ', 'text-xs ')}
			>
				Created: {formatDate(new Date(list.createdAt))}
			</p>
			<p
				className={styles.sectionSubtitle
					.replace('text-center ', 'text-left ')
					.replace('text-sm ', 'text-xs ')}
			>
				Updated: {formatDate(new Date(list.updatedAt))}
			</p>
		</button>
	);
};
