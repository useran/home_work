import './App.css';
import React, { useState } from 'react';
import Result from './Result';
import Input from './Input';
import Button from './Button';


function App() {
  const [res, setRes] = useState(0);
  
  const operArr = ['+', '-', '*', '/'];
  const btnCompArr = operArr.map((el, index) => <Button key={index} setRes={setRes} operation={el}/>)
  
  return (
    <div className = 'App'>
      <Input />
      <div className='operations'>
        {btnCompArr}
      </div>
      <Result res={res} />
    </div>
  );
}

export default App;
