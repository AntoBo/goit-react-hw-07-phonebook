import '../styles/styles.scss';
import FormNewContact from './FormNewContact/FormNewContact';
import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';
import Notification from './Notification/Notification';
import SearchContact from './SearchContact/SearchContact';
import { useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <>
      <Section title={'Phonebook'}>
        <FormNewContact />
      </Section>
      <Section title={'Contacts'}>
        {contacts.length > 0 ? (
          <>
            <SearchContact />
          </>
        ) : (
          <Notification message={'Phonebook is empty, add someone'} />
        )}
        <ContactsList />
      </Section>
    </>
  );
};

export default App;
