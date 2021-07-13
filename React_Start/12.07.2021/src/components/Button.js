import './Button.css';

function Operation({ setRes, operation }) {
  const mathOperations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
  }

  const rendDivEl = operation => {
    return <button id={operation} className='oper' onClick={() => {
      const valArr = document.querySelectorAll('.value');
      const btnArr = document.querySelectorAll('.oper');

      btnArr.forEach(el => el.style.backgroundColor = 'white');
      setRes(mathOperations[operation](Number(valArr[0].value), Number(valArr[1].value)));

      document.getElementById(operation).style.backgroundColor = 'orange';
    }}>{operation}</button>
  }

  return (
    <div className = 'container'>
      { rendDivEl(operation) }

    </div>
    
  );
}

export default Operation;
