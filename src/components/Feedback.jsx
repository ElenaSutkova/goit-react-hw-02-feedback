import React from 'react';

const Feedback = ({ options, onLeaveFeedback }) => (
    <div className="section">
        {options.map((option) => (
            <button key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
        ))}
    </div>
);

export default Feedback;