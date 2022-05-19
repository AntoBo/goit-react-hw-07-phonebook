import { createReducer } from '@reduxjs/toolkit';
import { removeContact, getContacts, addContact } from './contactsOperation';

const contactsReducer = createReducer([], {
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [removeContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export default contactsReducer;
