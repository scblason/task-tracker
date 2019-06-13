import React from 'react';
import './style.css'

export class TaskTrackerForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            estimate: 0,
            formError: false
        }

    }

    onNewTask = () => {
        if (this.validate(this.state)) {

            const {name, description, estimate} = this.state;
            this.props.addTask(
                {
                    name, description,
                    estimate: parseInt(estimate),
                    state: 1
                }
            );
        } else {
            this.setState({formError: true});
        }
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value, formError: false })

    validate = ({ name, description, estimate }) => {
        return name.length !== 0 && description.length !== 0 && estimate.length !== 0 && parseInt(estimate) > 0;
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="five columns">
                        <label htmlFor="nameInput">Name</label>
                        <input name="name" onChange={this.onChange} className="u-full-width" type="text" placeholder="Name" id="nameInput" value={this.state.name} />
                    </div>
                    <div className="five columns">
                        <label htmlFor="descInput">Description</label>
                        <input name="description" onChange={this.onChange} className="u-full-width" type="text" placeholder="Description" id="descInput" value={this.state.description} />
                    </div>
                    <div className="two columns">
                        <label htmlFor="estimateInput">Estimate</label>
                        <input name="estimate" onChange={this.onChange} className="u-full-width" type="number" placeholder="Hours" id="estimateInput" value={this.state.estimate} />
                    </div>
                </div>
                <div className="row">
                    <button className="button-primary" onClick={this.onNewTask} >Add</button>
                    {this.state.formError && <span className="error">There are invalid fields. Please, try again.</span>}
                </div>
            </div>
        );
    }
}
