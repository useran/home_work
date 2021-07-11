import './App.css';
import React, { useState } from 'react';
import Result from './Result';

function App() {
  const [res, setRes] = useState(0);

  return (
    <div className = 'App'>
      <Result res={res} setRes={setRes}/>
    </div>
  );
}

export default App;
