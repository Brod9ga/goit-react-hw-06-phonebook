const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  wordForFilter: '',
};

const contactListSlice = createSlice({
  name: 'contactList',
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    filteredContacts: (state, action)=>{
        state.filter = action.payload;
    },
    setWordForFilter: (state, action)=>{
state.wordForFilter = action.payload
    }
  },
});

export const { setContacts, setFilter, filteredContacts, setWordForFilter } = contactListSlice.actions;
export const contactListReducer = contactListSlice.reducer;
