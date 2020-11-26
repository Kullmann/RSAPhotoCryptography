/*
    upload screen
    author: Hosung Lee, Sean Kullmann
    date: 2020-10-07
*/
import React, { Component } from "react";
import "./style.css";

export default class Result extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="ResultContent">
        <div>
          <p className="ResultText">Result Cryptophoto</p>
        </div>
        <div className="ImageFrame">
          <img
            src={"data:image/bmp;base64," + this.props.image}
            alt="Encrypted Result"
            download="encrypted_photo.png"
          ></img>
        </div>
        <div>
          <button className="Button BackButton" onClick={() => this.props.setimg("")}>
            Encrypt another photo
          </button>
        </div>
      </div>
    );
  }
}
