import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';
import { errorReducer } from './error/errorReducer';
import filterReducer from './filter/filterReducer';
import { loadingReducer } from './loading/loadingReducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    isLoading: loadingReducer,
    error: errorReducer,
  },
});

export default store;
