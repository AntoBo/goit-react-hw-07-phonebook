const FormNewContact = ({ name, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label>
        Input name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => handleChange(e)}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default FormNewContact;
