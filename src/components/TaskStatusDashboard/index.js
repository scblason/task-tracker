import React from 'react';

export const TaskStatusDashboard = (props) => {
    return (<table style={{width: '100%'}}>
    <thead>
        <tr>
            <th>State</th>
            <th>Estimate</th>
        </tr>
    </thead>
    <tbody>
        {props.items.map((state) => {
            return (
                <tr key={state.id}>
                    <td>{state.name}</td>
                    <td>{state.estimate}</td>
                </tr>
            );
        })}
        <tr>
            <td>Total</td>
            <td>{props.statusTotal}</td>
        </tr>
    </tbody>
</table>   );
}