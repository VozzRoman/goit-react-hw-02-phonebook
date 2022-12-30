import React from "react";
import { Component } from "react";

export class App extends Component {

	state = {
  	contacts: [],
		name: '',
		number: '',
	}
	
	handleChange = (e) => {
		console.log(e.currentTarget)
		console.log(e.currentTarget.name)
		console.log(e.currentTarget.value)
	
	
	}

	render() {
		return (
			<>
			<section>
			<h2>Phonebook</h2>
			<form>
			<label>
			Name
			<input
			onChange={this.handleChange}					
  			type="text"
 	 		name="name"
			value={this.state.name}
  			pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  			title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  			required
				/>
			<button type="submit">Add contact</button>
						</label>
			<label>
			Number
				<input
				onChange={this.handleChange}
  				type="tel"
				name="number"
				value={this.state.number}
  				pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  				title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  				required
				/>				

			</label>
			</form>
				</section>
				
			<section>
			<h2>Contacts</h2>
			<ul></ul>		
			</section>
			
			</>
	
		)
	}
}
