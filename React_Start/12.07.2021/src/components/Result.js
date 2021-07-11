import './Result.css';
import Input from './Input';

function Result({ res, setRes }) {

  return (
    <div className = 'result'>
      <Input setRes={setRes} /> 
      <input value={res} />
    </div>
  );
}

export default Result;
