import './Result.css';

function Result({ res }) {

  return (
    <div className = 'result'>
      <input value={res} />
    </div>
  );
}

export default Result;
