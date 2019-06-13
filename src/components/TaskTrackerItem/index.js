import React from 'react';
import { STATE_OPTIONS } from 'common/model';

export class TaskTrackerItem extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            selected: this.props.item.state
        }
    }
  
    onClickRemove = () => {
        this.props.removeTask(this.props.item.id);
    }
    
    onClickUpdate = (e) => {
        this.setState({selected: e.target.value});

        this.props.updateTask({...this.props.item, state: e.target.value});
    }

    render () {
        console.log(this.state.selected);
        return (<tr key={this.props.item.id}>
            <td>{this.props.item.name}</td>
            <td>{this.props.item.description}</td>
            <td>{this.props.item.estimate}</td>
            <td>
                <select	value={this.state.selected} onChange={this.onClickUpdate} id="stateSelect">
                    {STATE_OPTIONS.map((item) => {
                        return (
                            <option value={item.id} key={item.id}>
                                {item.name}
                            </option>
                        );
                    })}
				</select>
            </td>
            <td>
                <button type="button"  onClick={this.onClickRemove}>REMOVE</button>
            </td>
        </tr>
        );
    }
}