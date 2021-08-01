import React from "react";
import { connect } from 'react-redux'; 
import swapiYear from '../actions/swapi';

const Page3 = ({ count1, year, name, swapiYearF }) => {
  return <div>
    {swapiYearF(count1)}
    <div><b>{name}</b> : {year}</div>
  </div>
};

const mapStateToProps = (state) => {
  return { 
    count1: state.count1,
    year: state.dataSwapi.years,
    name: state.dataSwapi.name,
  };
};

const mapDispathToProps = (dispath) => {
  return {
    swapiYearF: (id) => dispath(swapiYear(id)),
  }
};

export default connect(mapStateToProps, mapDispathToProps)(Page3);