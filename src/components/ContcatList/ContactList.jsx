
export const ContactList = ({ phoneContact, onDeleteContact}) => (
	
		<ul>
		{phoneContact.map(item => (
				<li key={item.id}>
				<p>{item.name}:<span>{item.number}</span></p>
				<button onClick={() => onDeleteContact(item.id)}>Delete</button>
				</li>
				))}
		</ul>
	
)