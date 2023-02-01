import { ItemList, ListContacts } from './ContactListStyle';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
export const ContactList = ({ phoneContact, onDeleteContact }) => (
  <ListContacts>
    {phoneContact.map(({ id, name, number }) => (
      <ItemList key={id}>
        <ContactItem
          name={name}
          number={number}
          id={id}
          onDeleteContact={onDeleteContact}
        />
      </ItemList>
    ))}
  </ListContacts>
);

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  phoneContact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
