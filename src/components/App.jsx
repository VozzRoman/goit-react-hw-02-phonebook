import React from 'react';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Background } from './Container/Background';
import { Box } from './Container/Box';
import { ContactList } from './ContcatList/ContactList';

import { Filter } from './Filter/Filter';

export class App extends Component {
  static LOCAL__KEY = 'contacts';

  state = {
    contacts: [],

    filter: '',
  };

  //-----------------------------LocalStorage------------------------------//

  componentDidMount() {
    console.log('didAmount');
    const contact = localStorage.getItem(this.LOCAL__KEY);
    const parsedContacts = JSON.parse(contact);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
    console.log(parsedContacts);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('didUpdate');
    if (this.state.contacts !== prevState.contacts) {
      console.log('добавил контакт');
      localStorage.setItem(
        this.LOCAL__KEY,
        JSON.stringify(this.state.contacts)
      );
    }
  }
  //----------------------------------------------------------------------//
  hendlerFormData = ({ name, number }, numberId) => {
    console.log({ name, number }); // data
    const addContact = {
      id: numberId,
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [addContact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== contactId),
    }));
  };

  onchangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const normaLized = this.state.filter.toLocaleLowerCase();
    const sameName = this.state.contacts.filter(item =>
      item.name.toLocaleLowerCase().includes(normaLized)
    );
    return sameName;
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <Background>
        <Box
          m="0 auto"
          maxWidth="500px"
          background="orange"
          borderRadius="12px"
          p="20px"
          boxShadow="3px 4px 6px #888888"
        >
          <h1>Phonebook</h1>
          <ContactForm
            onSubmit={this.hendlerFormData}
            contacts={this.state.contacts}
          />
          {this.state.contacts.length === 0 ? (
            <h2>The phonebook is empty</h2>
          ) : (
            <>
              <h2>Contacts</h2>
              <Filter
                onChange={this.onchangeFilter}
                value={this.state.filter}
              />
              <ContactList
                phoneContact={filteredContacts}
                onDeleteContact={this.deleteContact}
              />
            </>
          )}
        </Box>
      </Background>
    );
  }
}
