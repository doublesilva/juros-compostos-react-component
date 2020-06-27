import React from "react"
import "./style.css"

export default function InputTax (props) {
 return (<div className="inputTax">
    <label>{props.lblText}</label>
    <input type="text" value={props.txtValue} onChange={props.handleChangeValue}/>
  </div>)
}
