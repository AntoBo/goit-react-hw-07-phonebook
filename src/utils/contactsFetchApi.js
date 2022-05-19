import axios from 'axios';

axios.defaults.baseURL = 'https://6284dcbc3060bbd347407afd.mockapi.io/contacts';

export const fetchContacts = async () => {
  const res = await axios.get('?sortBy=createdAt&order=asc');
  //   console.log(res.data);
  return res.data;
};

export const fetchDeleteContact = async id => {
  await axios.delete('/' + id);
  return id;
};

export const fetchAddContact = async contact => {
  const newContact = await axios.post(null, contact);
  return newContact.data;
};
