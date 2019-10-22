import React from 'react';
import './App.css';
import CounterWithReduxState from "./components/CounterWithReduxState";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterWithReduxState/>
      </header>
    </div>
  );
}

export default App;
