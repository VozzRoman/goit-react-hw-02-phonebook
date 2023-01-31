import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Button, EnterName, FildName, Forms } from './ContactFormStyle';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  iputNameId = shortid.generate();
  inputNumberId = shortid.generate();

  handleChange = e => {
    console.log(e.currentTarget);
    console.log(e.currentTarget.name);
    console.log(e.currentTarget.value);
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  hendleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    const { name, number } = this.state;
    const { contacts } = this.props;
    if (contacts.find(item => item.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    } else if (contacts.find(item => item.number === number)) {
      alert(`${number} is already in contacts.`);
      return;
    } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
      alert('Enter the correct number phone!');
      return;
    }

    this.props.onSubmit({ name, number }, shortid.generate());
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Forms onSubmit={this.hendleSubmit}>
        <FildName htmlFor={this.iputNameId}>
          Name
          <EnterName
            value={name}
            onChange={this.handleChange}
            id={this.iputNameId}
            type="text"
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FildName>
        <FildName htmlFor={this.inputNumberId}>
          Number
          <EnterName
            value={number}
            onChange={this.handleChange}
            id={this.inputNumberId}
            type="tel"
            name="number"
            placeholder="Enter number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FildName>
        <Button type="submit">Add contact</Button>
      </Forms>
    );
  }
}
