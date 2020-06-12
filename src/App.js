import React from 'react';
import {Header, Balance,IncExp, TransactionList, AddTransaction} from './components';

import {GlobalProvider} from './Context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className ="container" >
        <Balance />
          <IncExp />
          <TransactionList />
          <AddTransaction />
        
      </div>
    </GlobalProvider>
  );
}

export default App;
