import React from "react";
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dogs from './Dogs2';
import Cats from './Cats2';
import './App.css';


function App() {
  const [count, setCount] = useState(0);
  
  const addOne = () => {
    setCount(count+1);
  }

/*   const getPet = (who, qty) => {
    const petArr = [];
    if (who === 'Dogs') {
      for (let i=0; i < qty; i++) {
        petArr.push(<Dogs count={count}/>)
      } 
    } else {
      for (let i=0; i < qty; i++) {
        petArr.push(<Cats count={count}/>)
      } 
    }
    return petArr;
  } */

  return (
    <Router>
      <div className='basic'>
        <div className='links'>
          <Link to="/dog" onClick={ () => { addOne() }}><button>New dog</button></Link>
          <Link to="/cat" onClick={ () => { addOne() }}><button>New cat</button></Link>
        </div>
        
        <div className='components'>
          <Switch>
            <Route path="/dog" >
              {<Dogs count={count}/>}
            </Route>
            <Route path="/cat" >
            {<Cats count={count}/>}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

