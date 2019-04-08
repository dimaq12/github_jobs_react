import { createBrowserHistory } from "history";
import { detailsReducer, detailsSaga } from "./details";
import { searchReducer, searchSaga } from "./search";
import createSagaMiddleware from "redux-saga";

import { combineReducers, compose, createStore, applyMiddleware } from "redux";
const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
import { routerMiddleware, connectRouter  } from 'connected-react-router'


export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export const store = createStore<AppState, any, any, any>(
    combineReducers<AppState>({
        router: connectRouter(history),
        details: detailsReducer,
        search: searchReducer,
    }),
    composeEnhancers( applyMiddleware(sagaMiddleware, routerMiddleware(history)))
);


sagaMiddleware.run(function*() {
    yield all([
        detailsSaga(),
        searchSaga()
    ]);
});