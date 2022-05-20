import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  getContacts,
  removeContact,
} from 'redux/contacts/contactsOperation';

export const errorReducer = createReducer(null, {
  [getContacts.pending]: () => null,
  [getContacts.rejected]: (_, { payload }) => payload,

  [removeContact.pending]: () => null,
  [removeContact.rejected]: (_, { payload }) => payload,

  [addContact.pending]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,
});
