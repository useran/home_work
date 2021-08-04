import React, { useState } from "react";
import { connect } from 'react-redux'; 
import check from '../actions/check';
import saveLogin from '../actions/saveLogin';

const Page = ({ saveLogin, savedLogin, checkData, checkState }) => {
  const [state, setState] = useState({});
  let {login, password} = state;
  saveLogin('logged@gmail.com'); //later to compare with the entered one

  return <div>
    {checkState ? 'Hellooooo!!!' : <div>
    <input id='login' type='text' placeholder='login' onChange ={e => setState({login: e.target.value, password})}/>
    <input id='password' type='text' placeholder='password' onChange ={e => setState({login, password: e.target.value})} />
    <button className='btn' type='button' onClick={()=>checkData(state.login, state.password, savedLogin)}>Check it!</button>
    </div>}
  </div>
};

const mapStateToProps = (state) => {
  return { 
    checkState: state.checkLogInState,
    savedLogin: state.savedLogin
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkData: (login, password, savedLogin) => dispatch(check(login, password, savedLogin)),
    saveLogin: (login) => dispatch(saveLogin(login))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
