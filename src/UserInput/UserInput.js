import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    return (
        <div className="holder-input">
            <span className="title">Please enter new Name</span>
            <input type="text"
                   style={props.style}
                   onChange={props.changed}
                   value={props.name}
            />
        </div>
    )
};

export default userInput;