import React from "react"
import InputTax from "../input";
import Form from "../form";
import Installments from "../installments";

import "./content.css"
import CalculateInterest from "../../helpers/calc-interest";


export default class Content extends React.Component {
 
  state = {
    numInstallments: '',
    interestRate: '',
    initAmount: 0,
    installments: [],
  }

  handleOnChangeNumInstallments(e) {
    this.setState({  ...this.state, numInstallments: e.target.value }, () => {
      this.loadInstallments();
    })    
  }

  handleOnChangeInterestRate(e) {
    this.setState({ ...this.state, interestRate: e.target.value }, () => {
      this.loadInstallments();
    })      
  }

  handleOnChangeInitAmount(e) { 
    const valor = e.target.value;   
    this.setState({  ...this.state, initAmount: e.target.value}, () => {
      this.loadInstallments();
    })
  }
  
  loadInstallments() {    
    const { numInstallments, interestRate, initAmount } = this.state;
    if (!isNaN(numInstallments) && !isNaN(interestRate) && !isNaN(initAmount) > 0) {
      const newTemp = Array.from({ length: Number(numInstallments) });

      const newInstallments = [];
      newTemp.reduce((acumulador, _, indice) => {
        console.log(acumulador, +initAmount);
        const amount = +CalculateInterest.Calculate(interestRate, acumulador);        
        const incomeAmount = (amount - +initAmount);
        console.log(amount, +initAmount, incomeAmount);
        newInstallments.push({
          installment: indice + 1,
          amount: amount.toFixed(2),
          amountMonth: incomeAmount.toFixed(2),
          rateMonth: (CalculateInterest.CalculateRate(initAmount, incomeAmount)).toFixed(2),
        })
        return acumulador = amount;
      }, initAmount);
      this.setState({ ...this.state, installments: newInstallments });      
    }
  }

  render() {

    return (
      <div className="divContent">
        <Form onChangeInitAmount={(e) => {this.handleOnChangeInitAmount(e)}} 
              onChangeInterestRate={ (e) => { this.handleOnChangeInterestRate(e) }}
              onChangeNumInstalments={(e) => { this.handleOnChangeNumInstallments(e) }}/>
        <Installments isPositive={this.state.interestRate > 0} installments={this.state.installments} />
      </div>
    );
  }

}