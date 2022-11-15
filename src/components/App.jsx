import React from 'react';

import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import Filter from './Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  ondeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler(data) {
    console.log(data);
  }
  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter />
        <ContactsList
          contacts={contacts}
          onDeleteContact={this.ondeleteContact}
        />
      </div>
    );
  }
}
