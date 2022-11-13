import React from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/AddContacts/AddContacts.styled';

export class AddContact extends React.Component {
  state = {
    name: ``,
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  onFormChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: ``, number: '' });
  };

  render() {
    return (
      <ContactForm onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onFormChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={this.nameInputId}
            required
          />
        </div>
        <div>
          <label htmlFor={this.numberInputId}>Number</label>
          <input
            type="tel"
            value={this.state.number}
            onChange={this.onFormChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={this.numberInputId}
            required
          />
        </div>
      </ContactForm>
    );
  }
}
