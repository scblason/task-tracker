import React from 'react';
import { Header } from 'components/Header';
import './style.css';

export const TaskTrackerHeader = (props) => {
    return (
        <div>
            <Header title={props.title}></Header>
            <button className="addButton" onClick={props.showAddTask}>Add</button>
        </div>
    );
}

