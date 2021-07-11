import './Input.css';
import Operation from './Operation';
import React, { useState } from 'react';

function Input({setRes}) {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  return (
    <div className = 'container'> 
      <div className = 'input'>
        <input onChange={event => setValue1(Number(event.target.value))} />
        <input onChange={event => setValue2(Number(event.target.value))} />
      </div>
      <Operation setRes={setRes} input1={value1} input2={value2}/>
    </div>
  );
}

export default Input;
