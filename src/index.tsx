import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'antd/dist/antd.css';
import App from './App';
import { ConnectedRouter } from 'connected-react-router'
import { store, history } from "./state/store";
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';

console.log(store)
console.log(history)
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root") as HTMLElement
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
