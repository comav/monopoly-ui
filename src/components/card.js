import React from "react";

import '@material-design-icons/font';

import './styles/card.css';

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <h1 className="header-text">{props.title}</h1>
      </div>
      <div className="card-body">
        <div className="iconWrapper">
          <span className="material-icons">bolt</span>
        </div>
        <div className="fee-wrapper">
          <h2>Ціна: {props.price}</h2>
        </div>
      </div>
    </div>
  )
}