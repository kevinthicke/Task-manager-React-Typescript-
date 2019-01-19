import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

const initialState = {
    tasks: []
}

export const store = createStore(
    reducer, 
    initialState as any,
    applyMiddleware(thunk)
);
