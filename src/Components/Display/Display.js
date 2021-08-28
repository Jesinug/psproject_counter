import React from "react";
import './Display.css';

function Display(props) {
	return (
  	<div className="display" style={{ color: props.message > 0 ? 'white' : 'red' }}>{props.message}</div>
  );
}

export default Display;
