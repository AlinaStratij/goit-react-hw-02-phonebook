import React from 'react';

import { AddContact } from 'components/AddContacts/AddContacts';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/SearchFilter/SearchFilter';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };
  formSubmitHandler(data) {
    console.log(data);
  }
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <AddContact onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter />
        <ContactsList name={`alina`} number={`+380988926433`} />
      </div>
    );
  }
}
