import './App.css';
import React, { useState } from 'react';
import Colors from './data.json';
import InputRange from './InputRange';


function App() {
  const keyArr = Object.keys(Colors);
  const maxRange = keyArr.length - 1;

  const [color, setColor] = useState(Math.floor(Math.random() * maxRange));

  return (
    <div className = 'App'>
      <InputRange setColor={setColor} color={color} keyArr={keyArr} />
    </div>
  );
}

export default App;
