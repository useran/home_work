import React from "react";
import { connect } from 'react-redux'; 
import btnR from '../actions/cats';
import { btnP } from '../actions/cats';

const Page2 = ({ urlImg, btnRefresh, btnPrev }) => {

  return <div>
    <div style={{width: '300px', display: 'flex', justifyContent: 'space-between'}}>
    <button type='button' onClick={ btnPrev }>
        Previous
      </button>
      <button type='button' onClick={ btnRefresh }>
        REFRESH
      </button>
      {<div>{urlImg.split('/')[4]}</div>}
    </div>
    <br />
    <img src={ urlImg } alt='' />
    
  </div>
};

const mapStateToProps = (state) => {
  return { 
    urlImg: state.urlCat,
  };
};

const mapDispathToProps = (dispath) => {
  return {
    btnRefresh: () => dispath(btnR()),
    btnPrev: () => dispath(btnP()),
  }
};

export default connect(mapStateToProps, mapDispathToProps)(Page2);
