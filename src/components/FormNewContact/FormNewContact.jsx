import { Component } from 'react';

export class FormNewContact extends Component {
  state = { name: '', number: '' };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  resetForm() {
    this.setState({ name: '', number: '' });
  }

  handleSubmit = e => {
    e.preventDefault();
    //use App method as prop
    this.props.addContact(e.target.name.value, e.target.number.value);
    this.resetForm();
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default FormNewContact;
// const FormNewContact = ({ name, number, handleSubmit, handleChange }) => {
//   return (
//     <form onSubmit={e => handleSubmit(e)}>
//       <label>
//         Name
//         <input
//           type="text"
//           name="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={e => handleChange(e)}
//         />
//       </label>
//       <label>
//         Phone
//         <input
//           type="tel"
//           name="number"
//           value={number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           onChange={e => handleChange(e)}
//         />
//       </label>
//       <button type="submit">Add contact</button>
//     </form>
//   );
// };

// export default FormNewContact;
