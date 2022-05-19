import Loading from 'components/Loading/Loading';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const ContactsItem = ({ id, name, number, removeContact }) => {
  const isLoading = useSelector(state => state.isLoading);
  const [showLoader, setShowLoader] = useState(false);

  const handleClick = () => {
    removeContact(id);
    setShowLoader(true);
  };
  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <button onClick={handleClick} type="button">
        Delete
      </button>
      {/* <Loading /> */}
      {isLoading && showLoader && <Loading />}
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsItem;
