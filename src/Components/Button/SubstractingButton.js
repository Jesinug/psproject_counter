import React from "react";
import './Button.css';

function SubstractingButton(props) {
    const handleClick = () => props.onClickFunction(props.decrement);
    
      return (
        <button className="substracting-btn" onClick={handleClick}>
        <strong>-{props.decrement}</strong>
      </button>
    );
  }

export default SubstractingButton;