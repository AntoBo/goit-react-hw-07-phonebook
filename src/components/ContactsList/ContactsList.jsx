import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, removeContact } from 'redux/contacts/contactsOperation';
import { getFilteredContacts } from 'redux/contacts/contactsSelectors';
import ContactsItem from '../ContactsItem/ContactsItem';
const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  // const { contacts, filter } = useSelector(state => state);

  // const filterContacts = () => {
  //   if (filter)
  //     return contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     );

  //   return contacts;
  // };

  useEffect(() => {
    dispatch(getContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <ContactsItem
            name={name}
            number={number}
            key={id}
            id={id}
            removeContact={() => dispatch(removeContact(id))}
          />
        );
      })}
    </ul>
  );
};

export default ContactsList;
