import './App.css';
import React, { useState } from 'react';
import Dogs from './Dogs'


function App() {
  const [count, setCount] = useState(0);
  
  const addOne = () => {
    setCount(count+1);
  }

  return (
    <div className = 'App'>
      <button type='button' onClick={ () => { addOne() } }>Change it!</button>
      <Dogs count={count} />
    </div>
  );
}

export default App;
