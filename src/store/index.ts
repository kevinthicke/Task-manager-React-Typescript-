import { createStore } from 'redux'

/* types.ts */
const ADD_NEW_TASK = 'ADD_NEW_TASK';

/* actions.ts */

export const actionAddNewTask = payload => {
    return ({
        type: ADD_NEW_TASK,
        payload
    })
}

/* reducer.ts */

const initialState = {
    tasks: []
}

const reducer = (state: any, action: any) => {
    switch(action.type) {
        case ADD_NEW_TASK: 
            return ({
                ...state,
                tasks: state.tasks.concat(action.payload)
            });
        default:
            return state;
    }
}

export const store = createStore(reducer, initialState as any);
