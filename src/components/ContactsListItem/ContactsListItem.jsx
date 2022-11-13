export const ContactItem = ({ name, number }) => {
  return (
    <li>
      <p>{name}:</p>
      <span>{number}</span>
    </li>
  );
};
