import React from "react"
import InputTax from "../input";
import Form from "../form";
import Installments from "../installments";

import "./content.css"
import CalculateInterest from "../../helpers/calc-interest";


export default class Content extends React.Component {

  state = {
    installments: []
  }



  render() {

    return (
      <div className="divContent">
        <Form
          onSetInstallments={
            (installments) => this.setState({ installments })
          }
        />
        <Installments installments={this.state.installments} />
      </div>
    );
  }

}