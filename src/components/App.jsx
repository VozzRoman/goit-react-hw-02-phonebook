import React from "react";
import { Component } from "react";
import shortid from "shortid";
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
		name: '',
		number: '',
		filter: '',
	}
	
	iputNameId = shortid.generate()
	inputNumberId = shortid.generate()

	deleteContact = contactId => {
		this.setState(prevState => ({
			contacts: prevState.contacts.filter( item => item.id !== contactId)
		}))
	}

	handleChange = (e) => {
		console.log(e.currentTarget)
		console.log(e.currentTarget.name)
		console.log(e.currentTarget.value)
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
	hendleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		const addContact = {
			id: shortid.generate(),
			name: this.state.name,
			number: this.state.number
		};
		  this.state.contacts.find(item => {
			if (item.name === addContact.name) {
				alert(`${item.name}`)
			} else {
			this.setState(prevState => ({
			contacts: [addContact, ...prevState.contacts],
		}))
			}
		})
	
		
	
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
			<>
			<section>
			<h2>Phonebook</h2>
			<form onSubmit={this.hendleSubmit}>
			<label htmlFor={this.iputNameId}>
				Name
				<input
				value={this.state.name}
				onChange={this.handleChange}
				id={this.iputNameId}
  				type="text"
  				name="name"
  				pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  				title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  				required
				/>
			</label>
			<label htmlFor={this.inputNumberId}>
				Number
				<input
				value={this.state.number}
				onChange={this.handleChange}
				id={this.inputNumberId}
  				type="tel"
  				name="number"
  				pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  				title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  				required
				/>				

			</label>
				<button type="submit">Add contact</button>
			</form>
				</section>
				
			<section>
					<h2>Contacts</h2>
					<Filter onChange={this.onchangeFilter} value={this.state.filter}  />
					
					<ContactList phoneContact={filteredContacts} onDeleteContact={this.deleteContact} />	
			</section>
			
			</>
	
		)
		
	}
	
}
