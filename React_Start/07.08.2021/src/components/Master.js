import React, { useState } from "react";
import { connect } from 'react-redux'; 
import slider from '../actions/slider';
import Slave from './Slave';

const Master = ({ number, slider }) => {
  const [btnOn, setBtnOn] = useState(false);

  return <div style={{display: 'flex'}}>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <input style={{width:'300px'}} type='range' onInput={e => slider(e.target.value)} defaultValue='0'/> <br/><br/>
      <input style={{width:'100px'}} type='button' onClick={() => btnOn ? setBtnOn(false) : setBtnOn(true)} value={btnOn ? 'Turn OFF' : 'Turn ON'}/>
    </div>
    <div>
      <Slave btnState={btnOn} number={number} />
    </div>
  </div>
};

const mapStateToProps = (state) => {
  return { 
    number: state.slider
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    slider: e => dispatch(slider(e)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Master);
