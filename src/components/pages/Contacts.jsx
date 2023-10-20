import AddContacts from 'components/AddContacts';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContactsThunk } from 'redux/contactsReducer';

const Contacts = () => {
  const disptach = useDispatch();
  const userData = useSelector(state => state.user.userData);
  const contacts = useSelector(state => state.phonebook.contacts);
  // const isLoading = useSelector(state => state.phonebook.isLoading);
  const error = useSelector(state => state.phonebook.error);
  useEffect(() => {
    if (!userData) return;
    disptach(fetchContactsThunk());
  }, [disptach, userData]);
  const showContacts = Array.isArray(contacts) && contacts.length > 0;
  const showEmptyContactsMessage =
    Array.isArray(contacts) && contacts.length === 0;

  const handleDeleteContact = contactId => {
    disptach(deleteContact(contactId));
  };
  return (
    <div>
      <h1>contacts</h1>
      <AddContacts />
      {error && <p>{error}</p>}
      <ul>
        {showContacts &&
          contacts.map(contact => {
            return (
              <li key={contact.id}>
                <h3>{contact.name}</h3>
                <p>
                  {contact.number}{' '}
                  <button onClick={() => handleDeleteContact(contact.id)}>
                    &times;
                  </button>
                </p>
              </li>
            );
          })}
      </ul>
      {showEmptyContactsMessage && <h2>Theare no contacts in your list</h2>}
    </div>
  );
};

export default Contacts;
