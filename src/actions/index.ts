import { ADD_NEW_TASK } from "./types";

export const actionAddNewTask = payload => {
    return ({
        type: ADD_NEW_TASK,
        payload
    });
}