import Link from 'next/link';
import { styles } from '../../constants';
import { IList } from '../../interfaces/lists';

interface IProps {
	lists: IList[];
}

export const NoLists: React.FC<IProps> = ({ lists }) => {
	return (
		<>
			{!lists?.length && (
				<div className="flex flex-col items-center justify-center">
					<h2 className={styles.sectionTitle}>No lists have been created</h2>
					<p className={styles.sectionSubtitle}>
						Create a list to start managing your balances
					</p>
					<Link
						href="/lists/create"
						className="flex items-center justify-center mt-4 bg-blue-500 text-white font-bold text-base w-full rounded-full py-1"
					>
						Create List
					</Link>
				</div>
			)}
		</>
	);
};
