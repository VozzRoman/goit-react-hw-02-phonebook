import { ItemList, ListContacts, ButtonContact, DialeName } from "./ContactListStyle";

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