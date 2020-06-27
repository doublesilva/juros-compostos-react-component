import React, { Component} from "react";

import InputTax from "../input";
import Header from "../header";
import Footer from "../footer";

import "./style.css";
import Content from "../content";

export default class Main extends Component{

  render(){
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    )
  }
}
