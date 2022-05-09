const SearchContact = ({ searchValue, handleChange }) => {
  return (
    <div className="searchWrap">
      <label>
        Find contact by name:
        <input
          type="text"
          name="filter"
          value={searchValue}
          required
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchContact;
