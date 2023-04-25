import { configureStore } from '@reduxjs/toolkit';
import alphabetReducer from './reducer';

const store = configureStore({
  reducer: {
    alphabet: alphabetReducer,
  },
});

export default store;