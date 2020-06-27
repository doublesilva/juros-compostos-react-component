import React from "react";

import "./installments.css"


export default class Installments extends React.Component{

  render(){
    return(
      <div className="divPeriodos">
          { this.props.installments.map(installment => (
            <div key={installment.installment} className="divPeriodo">
              <h1>{installment.installment}</h1>
              <div className={(this.props.isPositive > 0 ? 'divPositivo': 'divNegativo')}>
                <p>{installment.amount}</p>
                <p>{ (this.props.isPositive ? '+': '') + installment.amountMonth}</p>
                <p>{installment.rateMonth}</p>
              </div>
            </div>))
          }
        </div>
    )

  }

}