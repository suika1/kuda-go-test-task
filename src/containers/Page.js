import React from 'react';
import { connect } from 'react-redux';

class Page extends React.Component{
    render(){
        return (<p>Page</p>);
    }
}

const mapStateToProps = store => {
    return {
        isFetching: store.isFetching,
        error: store.error,
        eventList: store.eventList,
    }

};

export default connect(
    mapStateToProps,
)(Page);