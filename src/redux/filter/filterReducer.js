import { setFilter } from './filterAction';
const { createReducer } = require('@reduxjs/toolkit');

const filterReducer = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});

export default filterReducer;
