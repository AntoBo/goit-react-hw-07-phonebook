import Loading from 'components/Loading/Loading';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperation';

const FormNewContact = () => {
  const { contacts, isLoading } = useSelector(state => state);
  const [showLoader, setShowLoader] = useState(false);

  const dispath = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const hasName = name => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('This contact name already exists!');
      return true;
    }
    return false;
  };

  const handleSubmit = e => {
    setShowLoader(true);
    const name = e.target.name.value;
    const number = e.target.number.value;
    e.preventDefault();
    //check if name alrady exists
    if (hasName(name)) return;
    dispath(addContact({ name, number }));
    resetForm();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Phone
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
      {/* <Loading /> */}
      {isLoading && showLoader && <Loading />}
    </form>
  );
};

export default FormNewContact;
