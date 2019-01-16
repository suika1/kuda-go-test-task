import React from 'react';
import { Dialog, DialogTitle, DialogActions,
    DialogContent} from '@material-ui/core';

import './EventInfo.css';

//Component responsible for rendering additional data in dialog window
export default class EventInfo extends React.Component{
    //constructs nodes for info where possible
    renderInfoBody = () => {
        let {dates, images, location, place} = this.props.data;
        let finalDates = '', finalImages = '', finalLocation = '', finalPlace = '';
        if (dates){
            finalDates = (
                <React.Fragment>
                    <h3>Даты проведения:</h3>
                    <table className='dates-table'>
                        <thead>
                            <tr>
                                <th>
                                    Дата
                                </th>
                                <th>
                                    Время
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                             {dates.map((a, i) => <tr key={i}><td>{a.start_date}</td><td>{a.start_time}</td></tr>)}
                        </tbody>
                    </table>
                </React.Fragment>
                )
        }
        if (images){
            finalImages = images.map((a, i) => <img key={i} className='event-info-img' alt='' src={a.image}/>)
        }
        if (location){
            finalLocation = <p>Местонахождение: {location.name}</p>;
        }
        if (place){
            finalPlace = (
                <div className='place-info'>
                    <p className='place-title'>{place.title}</p>
                    <p className='address'>{place.address}</p>
                    <p className='phone'>{place.phone}</p>
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
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                className='event-info-dialog'
            >
                <DialogTitle className='title'>{this.props.data.title}</DialogTitle>
                {this.renderInfoBody()}
                <DialogActions>
                    <button className='close-btn' onClick={this.props.handleClose}>Close</button>
                </DialogActions>
            </Dialog>
        )
    }
}