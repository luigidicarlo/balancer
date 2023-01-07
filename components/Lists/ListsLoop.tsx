import { IList } from '../../interfaces/lists';
import { List } from './List';

interface IProps {
	lists: IList[];
}

export const ListsLoop: React.FC<IProps> = ({ lists }) => {
	return (
		<div className="ListsLoop flex flex-col gap-y-4">
			{lists.length > 0 &&
				lists.map(list => <List key={list.id} list={list} />)}
		</div>
	);
};
