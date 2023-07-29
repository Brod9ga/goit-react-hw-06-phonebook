import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { setContacts, setFilter } from 'redux/contactListReduser';

export const App = () => {
  const contacts = useSelector(state => state.contactList.contacts);
  const filter = useSelector(state => state.contactList.filter);
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    const updatedContacts = contacts.filter(contact => contact.id !== contactId);
    dispatch(setContacts(updatedContacts));
  };

  const handleAddContact = (name, number) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert('Контакт с таким именем уже существует!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(setContacts([...contacts, newContact]));
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  // useEffect(() => {
  //   const savedStringifiedContacts = localStorage.getItem('contacts');
  //   const contacts = JSON.parse(savedStringifiedContacts) ?? [];
  //   dispatch(setContacts(contacts));
  // }, [dispatch]);

  // useEffect(() => {
  //   const savedStringifiedContacts = JSON.stringify(contacts);
  //   localStorage.setItem('contacts', savedStringifiedContacts);
  // }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonеbook</h1>

      <ContactForm onAddContact={handleAddContact} />

      <h2>Contacts</h2>

      <Filter filter={filter} onChange={handleFilterChange} />

      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
