
const API_URL = 'http://localhost:3000/tasks/';


export const apiGetTasks = async () => {
	return fetch(API_URL).then((response) => {
		return response.ok ? response.json() : null;
	}).catch((error) => false);
};

export const apiRemoveTasks = async (taskId) => {
	return fetch(API_URL + taskId, { method: 'DELETE'}).then((response) => {
		return response.ok;
    }).catch((error) => false);
};

export const apiAddTasks = async (task) => {
    return fetch(API_URL, 
        { 
            method: 'POST', 
            body: JSON.stringify(task), 
            headers: {'Content-Type': 'application/json'}
        }).then((response) => {
		return response.ok;
    }).catch((error) => false);
};

export const apiUpdateTasks = async (task) => {
    return fetch(API_URL + task.id, 
        { 
            method: 'PUT', 
            body: JSON.stringify(task), 
            headers: {'Content-Type': 'application/json'}
        }).then((response) => {
		return response.ok;
    }).catch((error) => false);
};
