import React from 'react';
import './UserOutput.css'

const userInput = (props) => {
    return (
        <div className="holder">
            <p>Her name is <strong className="name">{props.name}</strong></p>
            <p><strong className="name">{props.name}</strong> is good girl!</p>
        </div>
    )
};

export default userInput;