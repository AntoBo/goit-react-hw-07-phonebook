import ContactsItem from '../ContactsItem/ContactsItem';
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
        return <ContactsItem name={name} number={number} key={id} />;
      })}
    </ul>
  );
};

export default ContactsList;
