import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    const reducers = {};
    const middleWares = [thunk];
    const rootReducer = combineReducers({
        ...reducers
    });

    const combineReducersApp = (state, action) => rootReducer(state, action);

    return createStore(
        combineReducersApp,
        initialState,
        compose(
            applyMiddleware(...middleWares)
        )
    )
}