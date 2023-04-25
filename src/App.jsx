import React from 'react';
import AlphabetButtons from './AlphabetButtons';
import AlphabetTable from './AlphabetTable';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <Provider store={store}>
      <AlphabetButtons />
      <AlphabetTable />
      </Provider>
    </div>
  );
}

export default App;
