import { useEffect, useState } from 'react';
import { IList } from '../../interfaces/lists';
import { loadLists } from '../../utils';
import { ButtonLink } from '../Button';
import { ListsLoop } from './ListsLoop';
import { NoLists } from './NoLists';

export const ListsContainer: React.FC = () => {
	const [lists, setLists] = useState<IList[]>([]);

	useEffect(() => {
		setLists(loadLists());
	}, []);

	return (
		<section className="ListsContainer max-w-md mx-auto">
			{lists.length > 0 && (
				<ButtonLink href="/lists/create">Create List</ButtonLink>
			)}
			<div className="mt-8" />
			<NoLists lists={lists} />
			<ListsLoop lists={lists} />
		</section>
	);
};
