
export const Filter = ({onChange, value}) => {
	return (
			<label>
			Find contacts
			<input
				type="text"
				value={value}
				onChange={onChange} />
			</label>
	
	)
}