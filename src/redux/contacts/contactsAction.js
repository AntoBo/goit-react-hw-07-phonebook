const { createAction } = require('@reduxjs/toolkit');

const addContact = createAction('contacts/addContact');
const removeContact = createAction('contacts/removeContact');
const setContacts = createAction('contacts/setContacts');

export { addContact, removeContact, setContacts };
