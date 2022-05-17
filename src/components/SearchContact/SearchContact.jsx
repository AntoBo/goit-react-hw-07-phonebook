import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterAction';

const SearchContact = () => {
  const searchValue = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <div className="searchWrap">
      <label>
        Find contact by name:
        <input
          type="text"
          name="filter"
          value={searchValue}
          required
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchContact;
