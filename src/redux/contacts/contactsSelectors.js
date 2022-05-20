import { createSelector } from '@reduxjs/toolkit';

export const getContactsSelector = state => state.contacts;
export const getFilterSelector = state => state.filter;

export const getFilteredContacts = createSelector(
  [getContactsSelector, getFilterSelector],
  (contacts, filter) => {
    if (filter)
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );

    return contacts;
  }
);
