import React, { useState } from 'react';
import './App.css';
import CountBtn from './CountBtn.jsx';
import logo from './logo192.png';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" />
        <div>
          <p>You clicked {count} times</p>
          <CountBtn
            setCount={setCount}
            count={count}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
