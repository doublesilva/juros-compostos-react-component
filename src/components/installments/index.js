import React from "react";

import "./installments.css"


export default class Installments extends React.Component{

formattedMoney =  new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});
  
  render(){    
    return(
      <div className="divPeriodos">
          { this.props.installments.map(installment => (
            <div key={installment.installment} className="divPeriodo">
              <h1>{installment.installment}</h1>
              <div className={( installment.rateMonth > 0 ? 'divPositivo': 'divNegativo')}>
                <p>{this.formattedMoney.format(installment.amount)}</p>
                <p>{ (installment.rateMonth > 0 ? '+': '') + this.formattedMoney.format(installment.amountMonth)}</p>
                <p>{installment.rateMonth + '%'}</p>
              </div>
            </div>))
          }
        </div>
    )

  }

}