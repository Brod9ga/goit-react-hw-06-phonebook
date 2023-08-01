import React from "react";
import { useSelector } from "react-redux";

const ContactList = ({ onDelete }) => {
  const contacts = useSelector(state => state.contactList.contacts);
  
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
