import React from "react";
import SpecialButton from "./SpecialButton"
import {specials} from "../../../data"

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  const specialArray = specials;
  return (
    <div className="specials-container">
      {specialArray.map( ele => {
        return <SpecialButton char={ele} onClick={props.onClick}/>
      })}
    </div>
  )
};


export default Specials;