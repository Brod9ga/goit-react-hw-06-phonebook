import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContacts } from "redux/contactListReduser";


const ContactList = () => {
  const contacts = useSelector(state => state.contactList.contacts);
  const wordForFilter = useSelector(state=>state.contactList.wordForFilter)

const dispatch=useDispatch()
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(wordForFilter.toLowerCase())
  );
  const handleDelete = contactId => {
    const updatedContacts = contacts.filter(contact => contact.id !== contactId);
    dispatch(setContacts(updatedContacts));
  };
  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
