import React, {useState} from "react";
import classes from '../input/MyInput.module.css'

function MyInput(props) {

  return (
   <input className={classes.myInput}{...props}/>
  );
}

export default MyInput;
