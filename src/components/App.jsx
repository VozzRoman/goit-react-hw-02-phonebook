import React from "react";
import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Box } from "./ContactForm/Container/Box";
import { ContactList } from "./ContcatList/ContactList";
import { Filter } from "./Filter/Filter";
export class App extends Component {

	state = {
		contacts: [
		{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    	{id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    	{id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    	{id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
	],
	
		filter: '',
	}
	
	hendlerFormData = (data, numberId) => {
			const addContact = {
			id: numberId,
			name: data.name,
			number: data.number
		};
		console.log(data.name)
				this.setState(prevState => ({
			contacts: [addContact, ...prevState.contacts],
		}))
	}

	deleteContact = contactId => {
		this.setState(prevState => ({
			contacts: prevState.contacts.filter( item => item.id !== contactId)
		}))
	}




	onchangeFilter = (e) => {
		this.setState({filter: e.currentTarget.value})
	}

	getFilteredContacts = () => {
		const normaLized = this.state.filter.toLocaleLowerCase()
		const sameName = this.state.contacts.filter(item =>
			item.name.toLocaleLowerCase().includes(normaLized))
		return sameName;
	}

	render() {
		const filteredContacts = this.getFilteredContacts();

		return (
			<Box m="0 auto" maxWidth="500px" background="orange" borderRadius="12px" p="20px">
			<section>
					<h2>Phonebook</h2>
					<ContactForm onSubmit={this.hendlerFormData} />

				</section>
				
			<section>
					<h2>Contacts</h2>
					<Filter onChange={this.onchangeFilter} value={this.state.filter}  />
					
					<ContactList phoneContact={filteredContacts} onDeleteContact={this.deleteContact} />	
			</section>
			
			</Box>
	
		)
		
	}
	
}
