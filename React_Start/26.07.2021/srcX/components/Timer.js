import './Timer.css';
import moment from 'moment';
import React, { useState, useEffect } from 'react';

function Timer() { 
  const [timeLeft, setTimeLeft] = useState('00:00:00');
  const [active, setActive] = useState(false);

  const countTimeLeft = (el) => {    
    let timeNow = moment();
    let destTime = moment(el, 'HH:mm:ss');
    
    if (moment(destTime).isBefore(timeNow)){
      destTime.add(1, 'd');
    }
    
    let diffTime = moment(destTime.diff(timeNow)).utc();
    
    if (diffTime.isDST()){
      diffTime.subtract(1, 'h');
    }

    if (diffTime < 1000) {
      setActive(false);
      return "Time is up!";
    }
    return diffTime.format('HH:mm:ss');
  }

  useEffect(() => {
    const inputTime = document.getElementById('timeset').value;
    if(active) {
      const timer = setTimeout(() => {
        setTimeLeft(countTimeLeft(inputTime));
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  const handleClick = () => {
    setActive(!active);
  }
  
  return (
    <div className="main">
        <div id="countset" className="countdown">{timeLeft}</div>
        <div className="timing">
          <div className="timeset">
            <form>
              <input id="timeset" className='timesetInp' type="time" step="1" />
            </form>
          </div>
          <div className="start">
            <input type="button" className={`btn ${active ? 'play' : 'stop'}`} value={!active ? 'Start' : 'Pause'} onClick={()=>{handleClick()}}/>
            <div className='circle-icon2' style={{ animationPlayState : `${!active ? 'paused' : 'running'}` }}></div>
          </div>
        </div>
        <div className='currTime'>Current time: {moment().format('HH:mm')}</div>
      </div>
  );
}

export default Timer;
