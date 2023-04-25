import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alphabetData: {},
};

const alphabetSlice = createSlice({
  name: 'alphabet',
  initialState,
  reducers: {
    updateAlphabetData(state, action) {
      const { letter } = action.payload;
      if (state.alphabetData[letter]) {
        state.alphabetData[letter].count++;
      } else {
        state.alphabetData[letter] = { count: 1 };
      }
    },
  },
});

export const { updateAlphabetData } = alphabetSlice.actions;

export default alphabetSlice.reducer;
