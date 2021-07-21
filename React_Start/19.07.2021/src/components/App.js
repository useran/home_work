import './App.css';
import React, { useState } from 'react';
import InputRange from './InputRange';


function App() {
  const maxRange = 16777215;
  const [color, setColor] = useState(Math.floor(Math.random() * maxRange));

  return (
    <div className = 'App'>
      <InputRange setColor={setColor} color={color} maxRange={maxRange} />
    </div>
  );
}

export default App;
