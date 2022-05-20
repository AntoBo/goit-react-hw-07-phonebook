import '../styles/styles.scss';
import FormNewContact from './FormNewContact/FormNewContact';
import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';
import Notification from './Notification/Notification';
import SearchContact from './SearchContact/SearchContact';
import { useSelector } from 'react-redux';
import Loading from './Loading/Loading';
import Error from './Error/Error';

const App = () => {
  const { contacts, isLoading, error } = useSelector(state => state);
  return (
    <>
      {error ? (
        <Error error={error} />
      ) : (
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
      )}
    </>

    // <>
    //   <Section title={'Phonebook'}>
    //     <FormNewContact />
    //   </Section>
    //   <Section title={'Contacts'}>
    //     {contacts.length > 0 ? (
    //       <>
    //         <SearchContact />
    //       </>
    //     ) : isLoading ? (
    //       <Loading />
    //     ) : (
    //       <Notification message={'Phonebook is empty, add someone'} />
    //     )}
    //     <ContactsList />
    //   </Section>
    // </>
  );
};

export default App;
