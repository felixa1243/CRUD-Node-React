import React, { useState } from 'react';
import Button from '@mui/material/Button';
const Buttons = (props) => {
  let [click,setClick]=useState(false)
  const handler=(e)=>{
    click?setClick(false):setClick(true)
  }
    return (
        <Button variant="contained" color={!click?'primary':'secondary'} onClick={(e)=>handler(e)}>{props.fields}</Button>
    );
};

export default Buttons;
