export const EVENTS_REQUEST = 'EVENTS_REQUEST';
export const EVENTS_SUCCESS = 'EVENTS_SUCCESS';
export const EVENTS_ERROR = 'EVENTS_ERROR';

/* Action creators */
const eventRequest = () => {
    return {
        type: EVENTS_REQUEST,
    }
};

const eventSuccess = (events) => {
    return {
        type: EVENTS_SUCCESS,
        eventList: events,
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
export const getEventsRequest = dispatch => () => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    let url = new URL('https://kudago.com/public-api/v1.4/events/'),
        params = {actual_since: new Date().toISOString(),
            page_size: 10,
            expand: 'place,location,dates,participants',
            fields: 'id,title,place,location,dates,participants'};
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    fetch(proxyUrl + url)
        .then(res => res.json())
        .then(json => {
            console.log(`incoming json`, json);
        });
};

