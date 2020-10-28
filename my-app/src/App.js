import React, { useState } from 'react';
import './App.css';
import CountBtn from './CountBtn.jsx';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
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
