import { useState } from 'react';

const FormNewContact = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // state = { name: '', number: '' };

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }

    // this.setState({ [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setName('');
    setNumber('');
    // this.setState({ name: '', number: '' });
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
    const name = e.target.name.value;
    const number = e.target.number.value;
    e.preventDefault();
    //check if name alrady exists
    if (hasName(name)) return;
    //use App method as prop
    addContact({ name, number });
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  );
};

export default FormNewContact;
