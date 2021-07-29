import './Dogs.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Dogs({count}) {
  const loaders = [];
  const [pics, setPics] = useState(loaders);
  
  for (let i = 0; i < 3; i++) {
    loaders.push(<div className='cat'><div className='loader'></div></div>);
  }

  useEffect(() => {
    const links = [];
    for (let i = 0; i < 3; i++) {
      links.push(axios.get('https://dog.ceo/api/breed/hound/images/random'));
    }
    Promise.all(links)
      .then(res => {
        return res.map(el => {
          return <img alt='dog' src={el.data.message} />
        })
      })
      .then(res => setPics(res))
  }, [count])


  return (
    <div className = 'container'>
      {pics}
    </div>
  );
}


export default Dogs;
//<img alt='dog' src={el.data.message} className={`image ${ loaded ? 'visible' : 'hidden'}`} onLoad={()=>setLoaded(true)} />))