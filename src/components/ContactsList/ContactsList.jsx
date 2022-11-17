import {
  ListWrapper,
  ListItem,
  ContactList,
  DeleteBtn,
  Name,
} from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ListWrapper>
      <ContactList>
        {contacts.map(({ name, number, id }) => (
          <ListItem key={id}>
            <Name>{name}</Name>
            <span>{number}</span>
            <DeleteBtn onClick={() => onDeleteContact(id)}>Delete</DeleteBtn>
          </ListItem>
        ))}
      </ContactList>
    </ListWrapper>
  );
};
export default ContactsList;
