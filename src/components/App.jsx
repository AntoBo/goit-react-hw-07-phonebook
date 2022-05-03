import { Component } from 'react';
import { nanoid } from 'nanoid';
import '../styles/styles.scss';
import FormNewContact from './FormNewContact/FormNewContact';
import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';
import Notification from './Notification/Notification';
import SearchContact from './SearchContact/SearchContact';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit!');
    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        {
          name: e.target.name.value,
          number: e.target.number.value,
          id: nanoid(),
        },
      ],
    }));
    //reset form
    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, number, filter, contacts } = this.state;
    return (
      <>
        <Section title={'Phonebook'}>
          <FormNewContact
            name={name}
            number={number}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </Section>
        <Section title={'Contacts'}>
          {contacts.length ? (
            <>
              <SearchContact
                searchValue={filter}
                handleChange={this.handleChange}
              />
              <ContactsList searchValue={filter} contacts={contacts} />
            </>
          ) : (
            <Notification message={'Phonebook is empty, add someone'} />
          )}
        </Section>
      </>
    );
  }
}
