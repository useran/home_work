import React from "react";
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dogs from './Dogs';
import Cats from './Cats';
import './App.css';

export default function BasicExample() {
  const [count, setCount] = useState(0);
  
  const addOne = () => {
    setCount(count+1);
  }

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
              <Dogs count={count}/>
            </Route>
            <Route path="/cat" >
              <Cats count={count}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}



