import React from 'react';

const showTime = (props) => {
    return(
        <div className="TimeContainer">
            <div className="Label">{props.label}</div>
            <div className="Time">{props.time}</div>
        </div>
    )
};

export default showTime;