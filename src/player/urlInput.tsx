type UrlInputProps = {
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onAddUrl: () => void;
};
const UrlInput = ({ value, onChange, onAddUrl }: UrlInputProps) => {
	return (
		<>
			<input
				type="text"
				value={value}
				onChange={(e) => onChange(e)}
				onKeyDown={(event) => {
					if (event.key === "Enter") {
						onAddUrl();
					}
				}}
				style={{ width: "500px", height: "30px", marginBottom: "10px" }}
			/>
			<button onClick={onAddUrl}>Add url</button>
		</>
	);
};

export default UrlInput;
