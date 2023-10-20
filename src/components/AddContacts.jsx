import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsReducer';

const AddContacts = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const formChildren = event.currentTarget.elements;
    const name = formChildren.contactName.value;
    const number = formChildren.contactNumber.value;

    dispatch(addContact({ name, number }));
    event.currentTarget.reset();
  };
  return (
    <div>
      <h2>Add contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input type="text" required minLength={3} name="contactName" />
        </label>
        <label>
          <span>Number:</span>
          <input type="text" required minLength={3} name="contactNumber" />
        </label>
        <button>Add contact</button>
      </form>
    </div>
  );
};

export default AddContacts;
