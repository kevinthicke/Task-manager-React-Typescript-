import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/index';
import { actionFetchTasks } from "./actions";

store.dispatch(actionFetchTasks());

const rootComponent = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(rootComponent, document.getElementById("app"));
