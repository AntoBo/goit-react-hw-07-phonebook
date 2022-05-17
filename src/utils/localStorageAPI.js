const getContactsfromLS = () => {
  const localContacts = JSON.parse(localStorage.getItem('contacts'));
  if (localContacts) {
    //   dispatch(setContacts(localContacts));
  }
};
