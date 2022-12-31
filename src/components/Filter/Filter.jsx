import { FildName, EnterName } from "components/ContactForm/ContactFormStyle"
export const Filter = ({onChange, value}) => {
	return (
			<FildName>
			Find contacts
			<EnterName
				type="text"
				value={value}
				onChange={onChange} />
			</FildName>
	
	)
}