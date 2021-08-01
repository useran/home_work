import React from "react";
import { connect } from 'react-redux'; 
import { bindActionCreators } from "redux";
import * as actions from '../actions/count';

const Page = ({ count1, count2, c1plus1, c1minus1, c2plus1, c2minus1 }) => {

  return <div>
    <h1> { count1 } </h1>
    <hr />
    <button onClick={ c1plus1 } className='plus1' type='button'> +2 </button>
    <button onClick={ c1minus1 } className='minus1' type='button'> -5 </button>
    <hr />

    <h1> { count2 } </h1>
    <hr />
    <button onClick={ c2plus1 } className='plus1' type='button'> +1 </button>
    <button onClick={ c2minus1 } className='minus1' type='button'> -1 </button>
    <hr />
    <div><h2>SUM: {count1+count2}</h2></div>
    <hr />
  </div>
};

const mapStateToProps = (state) => {
  return { 
    count1: state.count1, 
    count2: state.count2
  };
};

const mapDispathToProps = (dispath) => {
  return bindActionCreators(actions, dispath);   
};

export default connect(mapStateToProps, mapDispathToProps)(Page);
