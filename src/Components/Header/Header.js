import React from "react";
import './Header.css';

function Header(props) {
    const handleTracker = () => props.onClickFunction(props.decrement);
    
    return (
        <>
            <div className="title"><strong>MathButtons</strong>#justForKicks</div>
            <div className="tracker">{handleTracker}</div>
        </>
    )
};

export default Header;
