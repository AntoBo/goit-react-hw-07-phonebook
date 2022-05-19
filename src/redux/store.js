import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';
import filterReducer from './filter/filterReducer';
import { loadingReducer } from './loading/loadingReducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    isLoading: loadingReducer,
  },
});

export default store;
