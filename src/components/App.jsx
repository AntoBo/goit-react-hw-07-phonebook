import '../styles/styles.scss';
import FormNewContact from './FormNewContact/FormNewContact';
import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';
import Notification from './Notification/Notification';
import SearchContact from './SearchContact/SearchContact';
import { useSelector } from 'react-redux';
import Loading from './Loading/Loading';

const App = () => {
  const { contacts, isLoading } = useSelector(state => state);

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
        ) : isLoading ? (
          <Loading />
        ) : (
          <Notification message={'Phonebook is empty, add someone'} />
        )}
        <ContactsList />
      </Section>
    </>
  );
};

export default App;
