import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Recipe } from './reducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
export const reducers = combineReducers({
    Recipe,
});


export function configureStore() {
    const store = createStore(reducers, applyMiddleware(thunk, logger));
    return store;
}

export const store = configureStore();