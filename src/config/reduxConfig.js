import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import loadingReducer from '../store/reducer/loading';

import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    const reducers = {loadingReducer};
    const middleWares = [thunk];
    const rootReducer = combineReducers({
        ...reducers
    });

    const enhancers = [];
    const isDevelopment = true
    if(
        isDevelopment &&
        typeof window !== 'undefined' &&
        window.devToolsExtensions
    ) {
        enhancers.push(window.devToolsExtensions());
    }

    const combineReducersApp = (state, action) => rootReducer(state, action);

    return createStore(
        combineReducersApp,
        initialState,
        compose(
            applyMiddleware(...middleWares),
            ...enhancers
        )
    )
}