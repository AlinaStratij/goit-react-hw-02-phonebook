import { ContactItem } from 'components/ContactsListItem/ContactsListItem';

export const ContactsList = ({ name, number }) => {
  return (
    <div>
      <ul>
        <ContactItem name={name} number={number} />
      </ul>
    </div>
  );
};
