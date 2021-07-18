import Colors from './data.json';
import './InputRange.css';

function InputRange({setColor, color, keyArr}) {
  
  const showCurrColor = index => { 
    return <div className='container'>
      current: 
      <input value={Colors[keyArr[index]]} style={{marginLeft:'30px'}}/>
      <input style={{backgroundColor: keyArr[index]}}/>
    </div>
  };

  const showNeighbors = index => { 
    const leftKey = index - 1 < 0 ? 'No neighbor' : keyArr[index - 1];
    const rightKey = Number(index) + 1 > keyArr.length-1 ? 'No neighbor' : keyArr[Number(index) + 1];

    return <div className='container'>
        neighbors: 
        <input value={`${leftKey} ${Colors[leftKey]}`} style={{marginLeft:'10px'}} />
        <input value={`${rightKey} ${Colors[rightKey]}`} />
      </div>
  };

  const handleChange = el => {
    setColor(el.target.value);
  };
  
  return (
    <div className='wrap-container'>
      <input 
      type='range' 
      min='0' max={`${keyArr.length-1}`}
      value={color} 
      onInput={handleChange}
      step='1'
      />
      {showCurrColor(color)}
      {showNeighbors(color)}
    </div>
  );
}

export default InputRange;
