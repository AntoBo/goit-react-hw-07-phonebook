import { Component } from 'react';
import { nanoid } from 'nanoid';
import FormNewContact from './FormNewContact/FormNewContact';
import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';

export class App extends Component {
  state = { contacts: [], name: '', number: '' };

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
    console.dir(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, number, contacts } = this.state;
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
          <ContactsList contacts={contacts} />
        </Section>
      </>
    );
  }
}
