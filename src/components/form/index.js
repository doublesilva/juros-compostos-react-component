import React from "react"
import "./form.css"
import CalculateInterest from "../../helpers/calc-interest";
import InputTax from "../input";

export default class Form extends React.Component{
  
  constructor(props){
    super(props);
    this.handleChangeInitAmount = this.handleChangeInitAmount.bind(this);
    this.handleChangeInterestRate = this.handleChangeInterestRate.bind(this);
    this.handleChangeNumInstallments = this.handleChangeNumInstallments.bind(this);    
  }

  handleChangeInitAmount(e){
    this.props.onChangeInitAmount(e);
  }

  handleChangeInterestRate(e){
    this.props.onChangeInterestRate(e);
  }

  handleChangeNumInstallments(e){
    this.props.onChangeNumInstalments(e)
  }


  render(){
   
    return(
      <div className="divInputs">
          <InputTax lblText="Montante Inicial"
            handleChangeValue={(e) => this.handleChangeInitAmount(e) } />
          <InputTax lblText="Taxa de juros mensal"
            handleChangeValue={(e) => this.handleChangeInterestRate(e)} />
          <InputTax lblText="Período (meses)"
            handleChangeValue={(e) => this.handleChangeNumInstallments(e) } />
        </div>
    )
  }
  
}