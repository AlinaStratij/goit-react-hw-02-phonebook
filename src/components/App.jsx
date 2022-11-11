import { AddContact } from 'components/AddContacts/AddContacts';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/SearchFilter/SearchFilter';

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <AddContact />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
