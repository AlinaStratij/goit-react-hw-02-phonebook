const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            <p>{name}</p>
            <span>{number}</span>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactsList;
