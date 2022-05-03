import { Component } from 'react';
import FormNewContact from './FormNewContact/FormNewContact';
import Section from './Section/Section';

export class App extends Component {
  state = { contacts: [], name: '', number: '' };

  render() {
    return (
      <>
        <Section title={'Phonebook'}>
          <FormNewContact name={this.state.name} />
        </Section>
        <Section title={'Contacts'}></Section>
      </>
    );
  }
}
