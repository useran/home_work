import './App.css';
import React, { useState } from 'react';
import Result from './Result';
import Input from './Input';
import Button from './Button';

function App() {
  const [res, setRes] = useState(0);

  const operations = () => {
    const operArr = ['+', '-', '*', '/'];
    const btnArr = operArr.map((el, index) => <Button key={index} setRes={setRes} operation={el}/>)
    return btnArr;
  }

  return (
    <div className = 'App'>
      <Input />
      <div className='operations'>
        {operations()}
      </div>
      <Result res={res} setRes={setRes}/>
    </div>
  );
}

export default App;
