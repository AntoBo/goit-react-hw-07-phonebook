const ContactsList = ({ contacts, searchValue }) => {
  let filteredContacts = [];
  if (!searchValue) {
    //do nothing
    filteredContacts = [...contacts];
  } else {
    //filter with searchValue
    filteredContacts = [
      ...contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchValue.toLowerCase())
      ),
    ];
  }

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            {name}: {number}
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
