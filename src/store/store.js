import { createStore, applyMiddleware } from 'redux';
import events from '../reducers/eventsReducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

export default function configureStore() {
    return createStore(
        events,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
}