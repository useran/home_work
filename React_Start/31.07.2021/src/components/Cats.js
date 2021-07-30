import './Cats.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Cats({ count }) {
  const [pic, setPic] = useState();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search')
    .then(res => {
      setPic(res.data[0].url);
    })
  }, [count])
  
  return (
    <div className = 'container'>
       {!pic ? <div className='cat'><div className='loader'></div></div> : <img alt='cat' src={pic} 
        className={`image ${loaded ? 'visible' :  'hidden'}`}
        onLoad={()=> setLoaded(true)} />}
    </div>
  );
}


export default Cats;
