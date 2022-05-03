import { Component } from 'react';
import FormNewContact from './FormNewContact/FormNewContact';
import Section from './Section/Section';

export class App extends Component {
  state = { contacts: [], name: '', number: '' };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  handleChange = e => {
    console.log(e);

    this.setState({ name: e.target.value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Section title={'Phonebook'}>
          <FormNewContact
            name={name}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </Section>
        <Section title={'Contacts'}></Section>
      </>
    );
  }
}
