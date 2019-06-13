import { apiGetTasks, apiRemoveTasks, apiAddTasks, apiUpdateTasks } from './api';

export const API_CALL = 'API_CALL';
export const API_CALL_OK = 'API_CALL_OK';
export const API_CALL_OK_NORESULT = 'API_CALL_OK_NORESULT';
export const API_CALL_FAIL = 'API_CALL_FAIL';


//// Thunks
export function updateTask(task) {
	return (dispatch) => {
		dispatch(serviceLoading());
		return apiUpdateTasks(task).then((ok) => {
			if (ok) {
                dispatch(serviceOkNoResult());
                dispatch(getTasks());
            }
			else { 
                dispatch(serviceFail('There was a problem updating the task'));
            }
		});
	};
}

export function addTask(task) {
	return (dispatch) => {
		dispatch(serviceLoading());
		return apiAddTasks(task).then((ok) => {
			if (ok) {
                dispatch(serviceOkNoResult());
                dispatch(getTasks());
            }
			else { 
                dispatch(serviceFail('There was a problem adding the task'));
            }
		});
	};
}

export function removeTask(id) {
	return (dispatch) => {
		dispatch(serviceLoading());
		return apiRemoveTasks(id).then((ok) => {
            console.log(ok);
			if (ok) {
                dispatch(serviceOkNoResult());
                dispatch(getTasks());
            }
			else { 
                dispatch(serviceFail('There was a problem removing the task'));
            }
		});
	};
}

export function getTasks() {
	return (dispatch) => {
		dispatch(serviceLoading());
		return apiGetTasks().then((data) => {
			if (data) dispatch(serviceOk(data));
			else dispatch(serviceFail('There was a problem loading the tasks'));
		});
	};
}

//// Actions
export function serviceOk(data) {
	return {
		type: API_CALL_OK,
		payload: data
	};
}

export function serviceFail(error) {
	return {
		type: API_CALL_FAIL,
		payload: error
	};
}

export function serviceOkNoResult() {
	return {
		type: API_CALL_OK_NORESULT,
	};
}


export function serviceLoading() {
	return {
		type: API_CALL
	};
}

