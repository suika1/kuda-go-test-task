import React from 'react';
import EventInfo from './EventInfo';

export default class Event extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            eventInfoOpened: false, //for dialog window
        }
    }

    //render dialog window with additional info about event
    renderEventInfo = () => {
        if (this.state.eventInfoOpened){
            return (<EventInfo open={this.state.eventInfoOpened} data={this.props.data} handleClose={() => this.setState({eventInfoOpened: false})}/>);
        }
    };

    //construct date, images and place information containing nodes, if possible
    constructFields = () => {
        let {dates, images, place} = this.props.data;
        let startDate = 'no date';
        if (dates && dates.length > 0){
            startDate = dates[dates.length-1].start_date;
        }
        let image = 'no image';
        if (images && images.length > 0){
            image = (<img className='eventImg' alt={''} src={images[0].image}/>);
        }
        let placeTitle, placeAddress;
        if (place){
            placeTitle = place.title + ' ,';
            placeAddress = place.address;
        }else{
            placeTitle = '-';
            placeAddress = '';
        }
        return {startDate, image, placeTitle, placeAddress}
    };

    render(){
        let {startDate, image, placeTitle, placeAddress} = this.constructFields();
        let {title} = this.props.data;
        return (
            <React.Fragment>
                <tr onClick={() => this.setState({eventInfoOpened: true})} className='eventRow'>
                    <td>{image}</td>
                    <td>{title}</td>
                    <td>{startDate}</td>
                    <td>{placeTitle} {placeAddress}</td>
                </tr>
                {this.renderEventInfo()}
            </React.Fragment>
        );
    }
}