import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, object } from 'prop-types';

import { TaskTrackerHeader } from 'components/TaskTrackerHeader';
import { TaskTrackerList } from 'components/TaskTrackerList';
import { TaskTrackerForm } from 'components/TaskTrackerForm';
import { TaskStatusDashboard } from 'components/TaskStatusDashboard';
import { Header } from 'components/Header';

import { getTasks, removeTask, addTask, updateTask } from './actions';
import { tasksSelector, statusSelector, statusTotalSelector } from './selectors';

import './style.css';
import { Loading, ErrorMessage } from 'common';

class TaskTracker extends React.Component {
    constructor(props) {
        super(props);

        this.state = { show: false };
    }

    componentDidMount() {
		this.props.getTasks();
	}

    addTask = (task) => {
        this.props.addTask(task);
        this.addTaskForm();
    }

    addTaskForm = () => {
        this.setState({ show: !this.state.show });
    }

    removeTask = (id) => {
        this.props.removeTask(id);
    }

    updateTask = (task) => {
        this.props.updateTask(task);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.tasks && 
                        <div style={{marginTop: 25}}>
                            <div className="three columns">
                                <Header title={"Status"} />
                                <TaskStatusDashboard items={this.props.status} statusTotal={this.props.statusTotal} />
                            </div>
                            <div className="nine columns">
                                <TaskTrackerHeader showAddTask={this.addTaskForm} title={'Task Tracker'} />
                                {this.state.show && <TaskTrackerForm addTask={this.addTask} />}
                                <TaskTrackerList items={this.props.tasks} removeTask={this.removeTask} updateTask={this.updateTask} />
                            </div>
                        </div>
                    }
                    {this.props.loading && <Loading></Loading>}
                    {this.props.error && <ErrorMessage error={this.props.error}></ErrorMessage>}
                </div>
            </div>
        );
    }
}

TaskTracker.propTypes = {
    tasks: arrayOf(object)
};

const mapStateToProps = (state) => ({
    tasks: tasksSelector(state),
    loading: state.taskTracker.loading,
    status: statusSelector(state),
    statusTotal: statusTotalSelector(state),
    error: state.taskTracker.error
});

export default connect(mapStateToProps, { getTasks, removeTask, addTask, updateTask })(TaskTracker);

