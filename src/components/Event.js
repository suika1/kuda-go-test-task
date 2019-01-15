import React from 'react';

export default class Event extends React.Component{
    render(){
        console.log(`props from Event:`, this.props.data);
        let {dates, images, title, place} = this.props.data;
        let startDate = 'no date';
        if (dates){
            startDate = dates[0].start_date;
        }
        let image = 'no image';
        if (images){
            image = (<img className='eventImg' alt={images[0].image} src={images[0].image}/>);
        }
        let placeTitle = 'no title', placeAdress = 'no adress';
        if (place){
            placeTitle = place.title;
            placeAdress = place.address;
        }
        return (
            <div className='eventCard'>
                <p>Date/Time: {startDate}</p>
                <p>Picture: {image}</p>
                <p>Title of Event: {title}</p>
                <p>Title of place: {placeTitle}</p>
                <p>Address of place: {placeAdress}</p>
            </div>
        );
    }
}