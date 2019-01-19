import { ADD_NEW_TASK, FETCH_TASKS } from './types';

export const actionAddNewTask = payload => {
    return ({
        type: ADD_NEW_TASK,
        payload
    });
}

export const actionFetchTasks = () => dispatch => {
    return fetch('http://localhost:3000/tasks').then(
        response => response.json()).then(
            payload => dispatch({
                type: FETCH_TASKS,
                payload
            })
        )
}