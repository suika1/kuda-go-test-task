import {EVENTS_ERROR, EVENTS_REQUEST, EVENTS_SUCCESS} from "../actions/eventsActions";

const defaultState = {
    isFetching: false,
    error: null,
    eventList: [],
};

export default function events(state = defaultState, action) {
    switch (action.type) {
        case EVENTS_REQUEST:
            return { ...state, isFetching: true };
        case EVENTS_SUCCESS: {
            return { ...state, isFetching: false, eventList: action.eventList }
        }
        case EVENTS_ERROR:
            return { ...defaultState, error: action.error, isFetching: false };
         default:
            return state
    }
}