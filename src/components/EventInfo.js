import React from 'react';
import { Button, Dialog, DialogTitle, DialogActions,
    DialogContent} from '@material-ui/core';

export default class EventInfo extends React.Component{

    //constructs nodes for info where possible
    renderInfoBody = () => {
        let {dates, images, location, place} = this.props.data;
        let finalDates = '', finalImages = '', finalLocation = '', finalPlace = '';
        if (dates){
            finalDates = dates.map((a, i) => <p key={i}>Дата: {a.start_date}, время: {a.start_time}</p>)
        }
        if (images){
            finalImages = images.map((a, i) => <img key={i} className='eventImg' alt='' src={a.image}/>)
        }
        if (location){
            finalLocation = <p>Местонахождение: {location.name}</p>;
        }
        if (place){
            finalPlace = (
                <div>
                    <p>Название места: {place.title}</p>
                    <p>Адрес: {place.address}</p>
                    <p>{place.phone}</p>
                </div>
            )
        }
        return (
            <DialogContent>
                {finalLocation}
                {finalPlace}
                {finalImages}
                {finalDates}
            </DialogContent>
        )
    };

    render(){
        return(
            <Dialog open={this.props.open} onClose={this.props.handleClose}>
                <DialogTitle>{this.props.data.title}</DialogTitle>
                {this.renderInfoBody()}
                <DialogActions>
                    <Button onClick={this.props.handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        )
    }
}