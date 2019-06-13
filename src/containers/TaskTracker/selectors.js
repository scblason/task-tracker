import { createSelector } from 'reselect';
import { STATE_OPTIONS } from 'common/model';

export const taskTrackerSelector = (state) => {
	return state.taskTracker;
};

export const tasksSelector = createSelector(taskTrackerSelector, tasktracker => tasktracker.tasks);

export const statusSelector = createSelector(tasksSelector, tasks => {

    if(tasks) {
        let result = {};
        tasks.forEach(element => {
            const value = result[element.state];
            if(value) {
                result[element.state] = result[element.state] + element.estimate;
            } else {
                result[element.state] = element.estimate;
            }
        });

        return STATE_OPTIONS.map((item) => {
            return {...item, estimate: result[item.id] ? result[item.id] : 0}
        });
    } 

    return [];
});

export const statusTotalSelector = createSelector(statusSelector, statusList => {
    return statusList.reduce((acum, state) => acum + state.estimate, 0);
});


