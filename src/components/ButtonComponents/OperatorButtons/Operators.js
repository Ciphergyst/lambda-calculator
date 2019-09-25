import React from "react";
import OperatorButton from "./OperatorButton"
import {operators} from "../../../data"

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  const operArray = operators;
  return (
    <div className="operators">
      {operArray.map( ele => {
        return <OperatorButton operator = {ele} onClick={props.onClick}/>
      })}
    </div>
  )
};




export default Operators;