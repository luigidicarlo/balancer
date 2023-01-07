import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { Input } from '../../components/Forms/Input';
import { SelectInput } from '../../components/Forms/SelectInput';
import { SubmitButton } from '../../components/Forms/SubmitButton';
import { styles } from '../../constants';
import { IOptions } from '../../interfaces/forms';
import { ListType } from '../../interfaces/lists';
import { createList, saveList } from '../../utils';

const CreateLists: NextPage = () => {
	const [showErrors, setShowErrors] = useState({
		name: false,
		type: false,
	});
	const formRef = useRef<HTMLFormElement>(null);
	const router = useRouter();

	const options: IOptions[] = [
		{ value: '', label: 'Select a list type' },
		{ value: 'shopping', label: 'Shopping List' },
		{ value: 'balance', label: 'Balance List' },
	];

	const onSubmit: React.FormEventHandler = async e => {
		e.preventDefault();
		setShowErrors({ name: false, type: false });

		const form = formRef.current;

		if (!form) {
			return;
		}

		const nameInput = form.querySelector<HTMLInputElement>('[name=name]');
		const typeInput = form.querySelector<HTMLSelectElement>('[name=type]');

		if (!nameInput?.value) {
			setShowErrors(errors => ({ ...errors, name: true }));
			return;
		}

		if (!typeInput?.value) {
			setShowErrors(errors => ({ ...errors, type: true }));
			return;
		}

		saveList(
			createList({ name: nameInput.value, type: typeInput.value as ListType })
		);
		router.push('/');
	};

	return (
		<section className="CreateLists">
			<h2 className={styles.sectionTitle}>Create List</h2>
			<p className={styles.sectionSubtitle}>
				Please, provide a name for the new list
			</p>
			<form className="mt-4 max-w-xs mx-auto" onSubmit={onSubmit} ref={formRef}>
				<Input
					className={showErrors.name ? ' border-red-500' : ''}
					name="name"
					label="Name"
					error={
						showErrors.name ? 'You must provide a name for the new list' : ''
					}
				/>
				<SelectInput
					name="type"
					options={options}
					error={
						showErrors.type ? 'Please, select a type for the new list' : ''
					}
				/>
				<SubmitButton>Create List</SubmitButton>
			</form>
		</section>
	);
};

export default CreateLists;
