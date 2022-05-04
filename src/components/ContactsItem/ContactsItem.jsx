const ContactsItem = ({ id, name, number, removeContact }) => {
  return (
    <li>
      {name}: {number}
      <button onClick={() => removeContact(id)} type="button">
        Delete
      </button>
    </li>
  );
};

export default ContactsItem;
