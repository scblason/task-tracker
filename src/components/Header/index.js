import React from 'react';
import './style.css'

export const Header = (props) => {
    return (
            <span className="header">{props.title}</span>
    );
}

