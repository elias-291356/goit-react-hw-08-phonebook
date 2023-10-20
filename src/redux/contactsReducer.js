import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addContactRequest, deleteContactRequest, getContactsRequest } from "service/api";




export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContactsThunk',
  async (_, thunkAPI) => {
    try {
      const contacts = await getContactsRequest();

      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (formData, thunkAPI) => {
    try {
      const newContact = await addContactRequest(formData);
      console.log('first', newContact)

      return newContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const deletedContact = await deleteContactRequest(contactId);
      console.log('deletedContact', deletedContact)

      return deletedContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const initialState = {
  isLoading: false,
  error: null,
  contacts: [],

};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    // ========================== contacts below
    builder
      .addCase(fetchContactsThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;

      })
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ========================== addContacts below
      .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;

      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = [action.payload, ...state.contacts];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ========================== deleteContact below
      .addCase(deleteContact.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;

      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
})

export const contactsReducer = contactsSlice.reducer
export default initialState;