import {requestToApi} from "../API/requestsToApi";

export const EVENTS_REQUEST = 'EVENTS_REQUEST';
export const EVENTS_SUCCESS = 'EVENTS_SUCCESS';
export const EVENTS_ERROR = 'EVENTS_ERROR';

/* Action creators */
const eventRequest = () => {
    return {
        type: EVENTS_REQUEST,
    }
};

const eventSuccess = (events, next) => {
    return {
        type: EVENTS_SUCCESS,
        eventList: events,
        next: next,
    }
};

const eventError = (e) => {
    return {
        type: EVENTS_ERROR,
        error: e,
    }
};

/* Async actions */

//Make request and get event list
export const getEventsRequest = (url = '') => dispatch => {
    dispatch(eventRequest());
    requestToApi(url)
        .then(res => res.json())
        .then(json => {
            console.log(`incoming json`, json);
            dispatch(eventSuccess(json.results, json.next));
        })
        .catch(e => eventError(e));
};
