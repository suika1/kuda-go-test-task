import React from 'react';
import Event from './Event';

export default class EventPage extends React.Component{
    renderList = () => {
      let {list} = this.props;
      return list.map(a => (
          <Event
              key={a.id}
              data={a}
          />
      ))
    };

    render(){
        let {isFetching, error} = this.props;
        console.log(`Page props:`, this.props);
        if (isFetching){
            return (<h2>Loading .....</h2>)
        }else if (error){
            return (<h2>Error occurred, please try to reload page</h2>)
        }else {
            return this.renderList();
        }
    }
}