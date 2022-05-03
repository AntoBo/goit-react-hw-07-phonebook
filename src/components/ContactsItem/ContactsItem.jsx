const ContactsItem = ({ id, name, number }) => {
  return (
    <li key={id}>
      {name}: {number}
    </li>
  );
};

export default ContactsItem;
