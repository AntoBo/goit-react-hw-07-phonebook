import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  getContacts,
  removeContact,
} from 'redux/contacts/contactsOperation';

export const loadingReducer = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,

  [removeContact.pending]: () => true,
  [removeContact.fulfilled]: () => false,
  [removeContact.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
});
