import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact, setContacts } from 'redux/contacts/contactsAction';
import ContactsItem from '../ContactsItem/ContactsItem';
const ContactsList = () => {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const filterContacts = () => {
    if (filter)
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );

    return contacts;
  };

  //upd store from LS on mount
  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts && localContacts.length > 0) {
      dispatch(setContacts(localContacts));
    }
  }, []);

  //upd LS on render
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <ul>
      {filterContacts().map(({ name, number, id }) => {
        return (
          <ContactsItem
            name={name}
            number={number}
            key={id}
            id={id}
            // removeContact={removeContact}
            removeContact={() => dispatch(removeContact(id))}
          />
        );
      })}
    </ul>
  );
};

export default ContactsList;
