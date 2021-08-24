import React from "react";
import './Button.css';

function AddingButton(props) {
    const handleClick = () => props.onClickFunction(props.increment);
    
      return (
        <button className="adding-btn" onClick={handleClick}>
        <strong>+{props.increment}</strong>
      </button>
    );
  }

export default AddingButton;