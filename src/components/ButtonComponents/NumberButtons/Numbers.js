import React, { useState } from "react";
import NumberButton from "./NumberButton"
import {numbers} from "../../../data"

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
  const numArray = numbers;
  return (
    <div className="numbers-container">
      {numArray.map( ele => {
        return <NumberButton number = {ele} onClick={props.onClick}/>
      })}
    </div>
  );
};

export default Numbers