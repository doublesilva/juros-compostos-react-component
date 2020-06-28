import React from "react"
import "./form.css"
import CalculateInterest from "../../helpers/calc-interest";
import InputTax from "../input";

export default class Form extends React.Component{
  state = {
    numInstallments: '',
    interestRate: '',
    initAmount: 0
  }

  constructor(props){
    super(props);
    this.handleChangeInitAmount = this.handleChangeInitAmount.bind(this);
    this.handleChangeInterestRate = this.handleChangeInterestRate.bind(this);
    this.handleChangeNumInstallments = this.handleChangeNumInstallments.bind(this);    
  }

  handleChangeInitAmount(e){
     this.setState({...this.state, initAmount: e.target.value}, () => {
      this.doCreateInstallments();
    })
  }

  handleChangeInterestRate(e){
    this.setState({...this.state, interestRate: e.target.value}, () => {
      this.doCreateInstallments();
    })
  }

  handleChangeNumInstallments(e){
    this.setState({...this.state, numInstallments: e.target.value}, () => {
      this.doCreateInstallments();
    })
  }

  doCreateInstallments(){
    const { numInstallments, interestRate, initAmount } = this.state;
    if (!isNaN(numInstallments) && !isNaN(interestRate) && !isNaN(initAmount) > 0) {
      const newTemp = Array.from({ length: Number(numInstallments) });

      const installments = [];
      newTemp.reduce((acumulador, _, indice) => {
        console.log(acumulador, +initAmount);
        const amount = +CalculateInterest.Calculate(interestRate, acumulador);        
        const incomeAmount = (amount - +initAmount);
        console.log(amount, +initAmount, incomeAmount);
        installments.push({
          installment: indice + 1,
          amount: amount.toFixed(2),
          amountMonth: incomeAmount.toFixed(2),
          rateMonth: (CalculateInterest.CalculateRate(initAmount, incomeAmount)).toFixed(2),
        })
        return acumulador = amount;
      }, initAmount);

      this.props.onSetInstallments(installments)
    }
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