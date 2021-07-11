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
    const newArr = arr.map(el => <button id={el} className='oper' onClick={() => {
      const btnArr = document.querySelectorAll('.oper');
      btnArr.forEach(el => el.style.backgroundColor = 'white');
      setRes(mathOperations[el](input1, input2));
      document.getElementById(el).style.backgroundColor = 'orange';
    }}>{el}</button>)
    return newArr;
  }

  return (
    <div className = 'container'>
      { rendDivEl() }
    </div>
    
  );
}

export default Operation;
