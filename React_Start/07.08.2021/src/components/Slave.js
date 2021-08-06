import React from "react";

const Slave = ({btnState, number}) => {

  return <div>
    {btnState && (<div style={{fontSize: '80px', marginLeft: '100px'}}>
    {number}
    </div>)}
  </div>
};

export default Slave;
