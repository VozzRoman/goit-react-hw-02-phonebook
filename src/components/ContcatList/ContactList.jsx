import { ItemList, ListContacts, ButtonContact, DialeName } from "./ContactListStyle";
import PropTypes from 'prop-types';
export const ContactList = ({ phoneContact, onDeleteContact}) => (
	
		<ListContacts>
		{phoneContact.map(item => (
				<ItemList key={item.id}>
				<DialeName>{item.name}: <span>{item.number}</span></DialeName>
				<ButtonContact onClick={() => onDeleteContact(item.id)}>Delete</ButtonContact>
				</ItemList>
				
				))}
		</ListContacts>
	
)


ContactList.propTypes = {
	onDeleteContact: PropTypes.func.isRequired,
	phoneContact: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		})
	)
}

