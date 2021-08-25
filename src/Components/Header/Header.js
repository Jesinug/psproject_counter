import React from "react";
import './Header.css';

function Header(props) {
    const handleTracker = () => props.onClickFunction(props.decrement);
    
    return (
        <>
            <div className="title">MathButtons #justForKicks</div>
            <div className="tracker">{handleTracker}</div>
        </>
    )
};

export default Header;
