import './Operation.css';

function Operation({ setRes, input1, input2 }) {
  const mathOperations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
  }

  const rendDivEl = () => {
    const arr = ['+', '-', '*', '/'];
    const newArr = arr.map(el => <button className='oper' onClick={()=>setRes(mathOperations[el](input1, input2))}>{el}</button>)
    return newArr;
  }

  return (
    <div className = 'container'>
      { rendDivEl() }
    </div>
    
  );
}

export default Operation;
