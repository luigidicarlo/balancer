import { NavLink } from './NavLink';

export const Links: React.FC = () => {
	return (
		<>
			<div className="hidden md:block px-2" />
			<div className="flex flex-col items-center justify-center w-full md:w-auto md:flex-row md:justify-start">
				<NavLink href="/">Lists</NavLink>
			</div>
		</>
	);
};
