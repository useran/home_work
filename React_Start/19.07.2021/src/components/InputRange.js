import Colors from './data.json';
import './InputRange.css';

function InputRange({setColor, color, maxRange}) {

  const showCurrColor = index => { 
    index = `#${Number(index).toString(16).padStart(6, '0')}`;
    return <div className='container'>
      current: 
      <input value={index} style={{marginLeft:'30px'}}/>
      <input type='color' value={index} />
    </div>
  };

  const showNeighbors = index => {
    const valuesToInt = Object.values(Colors).map(el => parseInt(el.slice(1), 16));
    const neighbors = { left: {}, right: {} };

    //getting the left neighbor by searching for a negative difference between int values
    const diffNegativeArr = [];
    valuesToInt.forEach((el, i) => {
      if (el - index < 0) {
        diffNegativeArr[i] = el - index;
      } else {
        diffNegativeArr[i] = -1e8; //any number that won't be the max value in the array
      }
    })
    const leftEl = diffNegativeArr.indexOf(Math.max(...diffNegativeArr));

    //getting the right neighbor by searching for a positive difference between int values
    const diffPositiveArr = [];
    valuesToInt.forEach((el, i) => {
      if (el - index > 0) {
        diffPositiveArr[i] = el - index;
      } else {
        diffPositiveArr[i] = 1e8; //any number that won't be the min value in the array
      }
    })
    const rightEl = diffPositiveArr.indexOf(Math.min(...diffPositiveArr));
    
    neighbors.left.code = index - 1 < 0 ? 'No neighbor' : Object.values(Colors)[leftEl];
    neighbors.left.name = index - 1 < 0 ? '' : Object.keys(Colors).find(key => Colors[key] === neighbors.left.code);
    neighbors.right.code = Number(index) + 1 > maxRange ? 'No neighbor' : Object.values(Colors)[rightEl]; 
    neighbors.right.name = Number(index) + 1 > maxRange ? '' : Object.keys(Colors).find(key => Colors[key] === neighbors.right.code);

    return <div className='container'>
        neighbors: 
        <input value={`${neighbors.left.name} ${neighbors.left.code}`} style={{marginLeft:'10px'}} />
        <input value={`${neighbors.right.name} ${neighbors.right.code}`} />
      </div>
  };

  const handleChange = el => {
    setColor(el.target.value);
  };
  
  return (
    <div className='wrap-container'>
      <input 
      type='range' 
      min='0' max={maxRange}
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
