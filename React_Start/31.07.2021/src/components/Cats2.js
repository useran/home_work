import './Cats.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Cats({count}) {
  const loaders = qty => {
    const loadersArr = []; 
    for (let i = 0; i < qty; i++) {
      loadersArr.push(<div className='cat'><div className='loader'></div></div>);
    }
    return loadersArr;
  }

  const [pics, setPics] = useState(loaders(3));

  const getCats = qty => {
    const links = [];
    for (let i = 0; i < qty; i++) {
      links.push(axios.get('https://api.thecatapi.com/v1/images/search'));
    }
    Promise.all(links)
      .then(res => {
        return res.map(el => {
          return <img alt='cat' src={el.data[0].url} />
        })
      })
      .then(res => setPics(res))
  }

  useEffect(() => {
    getCats(3);
  }, [count])


  return (
    <div className = 'container'>
       {pics}
    </div>
  );
}


export default Cats;
