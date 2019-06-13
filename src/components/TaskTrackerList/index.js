import React from 'react';
import { TaskTrackerItem } from "../TaskTrackerItem";

export const TaskTrackerList = (props) => {
    const items = props.items.map((item) => {
    return (
            <TaskTrackerItem key={item.id} item={item} removeTask={props.removeTask} updateTask={props.updateTask} />
        );
    });

    return (<table style={{width: '100%'}}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Estimate</th>
                <th colSpan="2">State</th>
            </tr>
        </thead>
        <tbody>
            {items}
        </tbody>
    </table>);
}