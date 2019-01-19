import { ADD_NEW_TASK, FETCH_TASKS } from '../actions/types';

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_NEW_TASK: 
            return ({
                ...state,
                tasks: state.tasks.concat(action.payload)
            });
        case FETCH_TASKS:
            return ({
                ...state,
                tasks: action.payload
            })
        default:
            return state;
    }
}

export default reducer;