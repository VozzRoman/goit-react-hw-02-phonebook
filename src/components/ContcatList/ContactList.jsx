import {
  ItemList,
  ListContacts,
  ButtonContact,
  DialeName,
} from './ContactListStyle';
import PropTypes from 'prop-types';
export const ContactList = ({ phoneContact, onDeleteContact }) => (
  <ListContacts>
    {phoneContact.map(({ id, name, number }) => (
      <ItemList key={id}>
        <DialeName>
          {name}: <span>{number}</span>
        </DialeName>
        <ButtonContact onClick={() => onDeleteContact(id)}>
          Delete
        </ButtonContact>
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
