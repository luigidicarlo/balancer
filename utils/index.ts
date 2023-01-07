import { ICreateList, IList } from '../interfaces/lists';

export function createList({ name, type }: ICreateList): IList {
	return {
		id: crypto.randomUUID(),
		name,
		type,
		createdAt: new Date(),
		updatedAt: new Date(),
	};
}

export function loadLists(): IList[] {
	const listsAsString = localStorage.getItem('lists');
	return listsAsString ? (JSON.parse(listsAsString) as IList[]) : [];
}

export function saveList(list: IList) {
	const lists = loadLists();
	localStorage.setItem('lists', JSON.stringify([...lists, list]));
}

export function formatDate(date: Date) {
	const day = padZero(date.getDate());
	const month = padZero(date.getMonth() + 1);
	const year = date.getFullYear();
	const hour = padZero(date.getHours());
	const minute = padZero(date.getMinutes());
	const seconds = padZero(date.getSeconds());
	return `${month}/${day}/${year} ${hour}:${minute}:${seconds}`;
}

export function padZero(value: number) {
	return value < 10 && value > -1 ? `0${value}` : value;
}
