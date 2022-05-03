const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return <li>{contact.name}</li>;
      })}
    </ul>
  );
};

export default ContactsList;
