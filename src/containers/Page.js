import { connect } from 'react-redux';
import EventPage from '../components/EventPage';
import {getEventsRequest} from "../actions/eventsActions";

const mapStateToProps = store => {
    return {
        isFetching: store.isFetching,
        error: store.error,
        list: store.eventList,
        next: store.next,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getEvents: url => dispatch(getEventsRequest(url)),
    }
};

//container for EventPage class
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventPage)