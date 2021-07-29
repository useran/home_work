import './Cats.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Cats({count}) {
  const loaders = [];
  const [pics, setPics] = useState(loaders);
  
  for (let i = 0; i < 3; i++) {
    loaders.push(<div className='cat'><div className='loader'></div></div>);
  }

  useEffect(() => {
    const links = [];
    for (let i = 0; i < 3; i++) {
      links.push(axios.get('https://api.thecatapi.com/v1/images/search'));
    }
    Promise.all(links)
      .then(res => {
        return res.map(el => {
          return <img alt='cat' src={el.data[0].url} />
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


export default Cats;
