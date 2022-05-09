import React from 'react';
import { useState } from 'react';
// import { Component } from 'react';
import { nanoid } from 'nanoid';
import '../styles/styles.scss';
import FormNewContact from './FormNewContact/FormNewContact';
import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';
import Notification from './Notification/Notification';
import SearchContact from './SearchContact/SearchContact';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-0', name: 'wer', number: '232459-12-56' },
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const filterContacts = () => {
    if (filter)
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );

    return contacts;
  };

  const addContact = ({ name, number }) => {
    setContacts(prev => [
      ...prev,
      {
        name,
        number,
        id: nanoid(),
      },
    ]);
  };

  const removeContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  return (
    <>
      <Section title={'Phonebook'}>
        <FormNewContact contacts={contacts} addContact={addContact} />
      </Section>
      <Section title={'Contacts'}>
        {contacts.length ? (
          <>
            <SearchContact searchValue={filter} handleChange={handleChange} />
            <ContactsList
              searchValue={filter}
              contacts={filterContacts()} //how it fires???
              removeContact={removeContact}
            />
          </>
        ) : (
          <Notification message={'Phonebook is empty, add someone'} />
        )}
      </Section>
    </>
  );
};

export default App;
