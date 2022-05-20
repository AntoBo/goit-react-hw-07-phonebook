import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  getContacts,
  removeContact,
} from 'redux/contacts/contactsOperation';

export const errorReducer = createReducer(null, {
  [getContacts.rejected]: (_, { payload }) => payload,
  [removeContact.rejected]: (_, { payload }) => payload,
  [addContact.rejected]: (_, { payload }) => payload,
});
