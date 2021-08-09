import React, { useState } from "react";
import { connect } from 'react-redux'; 
import slider from '../actions/slider';
import btnState from '../actions/btnState';
import Slave from './Slave';

const Master = ({ number, slider, btnState, btnSetState }) => {

  return <div style={{display: 'flex'}}>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <input style={{width:'300px'}} type='range' onInput={e => slider(e.target.value)} defaultValue='0'/> <br/><br/>
      <input style={{width:'100px'}} type='button' onClick={() => btnSetState() } value={btnState ? 'Turn OFF' : 'Turn ON'}/>
    </div>
    <div>
      <Slave btnState={btnState} number={number} />
    </div>
  </div>
};

const mapStateToProps = (state) => {
  return { 
    number: state.slider,
    btnState: state.btnState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    slider: e => dispatch(slider(e)),
    btnSetState: () => dispatch(btnState())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Master);
