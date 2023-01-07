interface IProps {
	children?: React.ReactNode;
}

export const SubmitButton: React.FC<IProps> = ({ children }) => {
	return (
		<div className="w-full flex items-center justify-center">
			<button
				type="submit"
				className="flex items-center justify-center mt-4 bg-blue-500 text-white font-bold text-base w-full rounded-full py-1"
			>
				{children ? children : <span>Submit</span>}
			</button>
		</div>
	);
};
