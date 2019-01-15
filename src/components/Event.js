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
        let placeTitle, placeAdress;
        if (place){
            placeTitle = place.title + ' ,';
            placeAdress = place.address;
        }else{
            placeTitle = '-';
            placeAdress = '';
        }
        return (
            <tr>
                <td>{image}</td>
                <td>{title}</td>
                <td>{startDate}</td>
                <td>{placeTitle} {placeAdress}</td>
            </tr>
        );
    }
}