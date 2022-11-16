import {
  ListWrapper,
  ListItem,
  ContactList,
  DeleteBtn,
} from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ListWrapper>
      <ContactList>
        {contacts.map(({ name, number, id }) => (
          <ListItem key={id}>
            <p>{name}</p>
            <span>{number}</span>
            <DeleteBtn onClick={() => onDeleteContact(id)}>Delete</DeleteBtn>
          </ListItem>
        ))}
      </ContactList>
    </ListWrapper>
  );
};
export default ContactsList;
