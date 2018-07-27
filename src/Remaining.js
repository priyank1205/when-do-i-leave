import React from 'react';

const showTime = (props) => {
    return(
        <div className="RemainingTimeContainer">
            <div className="Label">{props.label}</div>
            <div className="RemainingTime">{props.time} hours</div>
        </div>
    )
};

export default showTime;