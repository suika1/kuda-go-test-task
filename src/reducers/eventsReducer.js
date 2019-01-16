import {EVENTS_ERROR, EVENTS_REQUEST, EVENTS_SUCCESS} from "../actions/eventsActions";

/**
 * Comparator for event objects
 * Orders: by increase of events start dates
 * @param a first event obj
 * @param b second event obj
 * @returns {number}
 */
export const sortFunc = (a, b) => {
    if (!a.dates){
        return 1;
    }
    if (!b.dates){
        return -1;
    }
    if (new Date(b.dates[b.dates.length-1].start*1000).getMonth() > new Date(a.dates[a.dates.length-1].start*1000)){
        return -1;
    }
    return a.dates[a.dates.length-1].start - b.dates[b.dates.length-1].start;
};

/**
 * Checks out if event needs to be shown - if it's start date less than 14 later from today
 * @param a event object
 * @returns {boolean}
 */
const filterFunc = a => {
    let dates = a.dates;
    let eventDate = new Date(dates[dates.length-1].start*1000);
    let nowDate = new Date();
    if (!dates
        || dates.length < 1 //if no dates
        || eventDate - nowDate < 0 //if start was before
        //if start is too late
        || (eventDate.getMonth() === nowDate.getMonth() && eventDate.getDate() - nowDate.getDate() > 14)
        || (eventDate.getMonth() === nowDate.getMonth() + 1 && (31 - nowDate.getDate() > 14 || eventDate.getDate() < 14 - (31 - nowDate.getDate())))
        || (eventDate.getMonth() - nowDate.getMonth() > 1)
    ) {
        return false;
    }
    return true;
};

const defaultState = {
    isFetching: false,
    error: null,
    eventList: [],
    next: '',
};

export default function events(state = defaultState, action) {
    switch (action.type) {
        case EVENTS_REQUEST:
            return { ...state, isFetching: true, error: null };
        case EVENTS_SUCCESS: {
            return {
                ...state,
                error: null,
                isFetching: false,
                eventList: [...state.eventList, ...action.eventList.filter(filterFunc)],
                next: action.next,
            }
        }
        case EVENTS_ERROR:
            return { ...defaultState, error: action.error, isFetching: false };
         default:
            return state
    }
}