import React, { Component} from "react";
import Content from "../content";
import Header from "../header";
import Footer from "../footer";

import "./style.css";

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
