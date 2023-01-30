import React from 'react';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Background } from './Container/Background';
import { Box } from './Container/Box';
import { ContactList } from './ContcatList/ContactList';

import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  hendlerFormData = ({ name, number }, numberId) => {
    console.log({ name, number }); // data
    const { contacts } = this.state;
    const addContact = {
      id: numberId,
      name,
      number,
    };

    if (contacts.find(item => item.name === name)) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.find(item => item.number === number)) {
      alert(`${number} is already in contacts.`);
    } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
      alert('Enter the correct number phone!');
    } else {
      this.setState(prevState => ({
        contacts: [addContact, ...prevState.contacts],
      }));
    }
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
          <ContactForm onSubmit={this.hendlerFormData} />
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
