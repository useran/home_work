import './Dogs.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Dogs({ count }) {
  const [pic, setPic] = useState();
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    axios.get('https://dog.ceo/api/breed/hound/images/random')
    .then(res => {
      setPic(res.data.message);
    })
  }, [count])
  
  return (
    <div className = 'container'>
       {!pic ? <div className='dog'><div className='loader'></div></div> : <img alt='dog' src={pic} 
        className={`image ${loaded ? 'visible' :  'hidden'}`}
        onLoad={()=> setLoaded(true)} />}
    </div>
  );
}

export default Dogs;
