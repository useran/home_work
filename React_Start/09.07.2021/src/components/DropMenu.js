import './DropMenu.css';
import React, { useState } from 'react';

function DropMenu({ text, className, data }) {
  const [isShown, setIsShown] = useState(false);

  const compDropMenu = obj => {
    const arr = [];
    for (const [key, value] of Object.entries(obj)) {
      arr.push(<li key={key}><value.font>{key}</value.font></li>)
    }
    return arr;
  }

  return (
    <div className = 'container' 
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      
      <div className = 'menu'>{text}</div>

      {isShown && (
        <div id = 'dropdown' className = {className} >
          <ul>
            { compDropMenu(data) }    
          </ul>
        </div>
      )}
    </div>
    
  );
}

export default DropMenu;
