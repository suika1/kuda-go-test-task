const proxyUrl = "https://cors-anywhere.herokuapp.com/"; //Resolves problem of CORS-policy
const url = new URL('https://kudago.com/public-api/v1.4/events/'); //Url of requested server

/**
 * Does initial request of events
 * @returns {Promise<Response>} resolves with response from API
 */
export const initialRequest = () => {
    let date1 = Math.round(new Date()/1000);
    let params = {
        actual_since: date1,
        page_size: 50,
        expand: 'place,images,location,dates',
        fields: 'id,images,title,place,location,dates'
    };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    return fetch(proxyUrl + url);
};

/**
 * Does request to API by given URL
 * @param givenUrl url to which send request, may be empty
 * @returns {Promise<Response>} resolves with response from API
 */
export const requestToApi = (givenUrl) => {
    if (givenUrl === ''){
        return initialRequest();
    }else {
        let url = new URL(givenUrl);
        let date1 = Math.round(new Date()/1000);
        let params = {
            actual_since: date1,
            page_size: 50,
            expand: 'place,images,location,dates,participants',
            fields: 'id,images,title,place,location,dates,participants'
        };
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        return fetch(proxyUrl + url);
    }
};