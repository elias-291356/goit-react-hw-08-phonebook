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
      <h2 className="title is-3">Add contact</h2>
      <form className="field" onSubmit={handleSubmit}>
        <label>
          <span className="title is-6">Name:</span>
          <input
            className="label"
            type="text"
            required
            minLength={3}
            name="contactName"
          />
        </label>
        <label>
          <span className="title is-6">Number:</span>
          <input
            className="label"
            type="text"
            required
            minLength={3}
            name="contactNumber"
          />
        </label>
        <button className="button is-success is-light">Add contact</button>
      </form>
    </div>
  );
};

export default AddContacts;
