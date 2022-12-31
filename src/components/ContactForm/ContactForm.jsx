import React, { Component } from "react";
import shortid from "shortid";

export class ContactForm extends Component {

	state = {
		name: '',
		number: '',
	}

	iputNameId = shortid.generate()
	inputNumberId = shortid.generate()

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
		// const addContact = {
		// 	id: shortid.generate(),
		// 	name: this.state.name,
		// 	number: this.state.number
		// };
			this.props.onSubmit(this.state, shortid.generate())
	}

	render() {
		return (
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
		)
	}
}