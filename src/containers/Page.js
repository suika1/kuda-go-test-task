import React from 'react';
import { connect } from 'react-redux';
import EventPage from '../components/EventPage';

const mapStateToProps = store => {
    return {
        isFetching: store.isFetching,
        error: store.error,
        list: store.eventList,
    }
};

export default connect(
    mapStateToProps,
)(EventPage)