import { ItemList, ListContacts } from "./ContactListStyle";

export const ContactList = ({ phoneContact, onDeleteContact}) => (
	
		<ListContacts>
		{phoneContact.map(item => (
				<ItemList key={item.id}>
				<p>{item.name}: <span>{item.number}</span></p>
				<button onClick={() => onDeleteContact(item.id)}>Delete</button>
				</ItemList>
				))}
		</ListContacts>
	
)