export type ListType = 'shopping' | 'balance';

export interface ICreateList {
	name: string;
	type: ListType;
}

export interface IList {
	id: string;
	name: string;
	type: ListType;
	createdAt: Date;
	updatedAt: Date;
}