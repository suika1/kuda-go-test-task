import React from 'react';
import Event from './Event';
import {sortFunc} from "../reducers/eventsReducer";

//class responsible for rendering current page
export default class EventPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
        }
    }

    componentDidMount = () => {
        //get initial list
        this.props.getEvents();
    };

    componentDidUpdate = () => {
        //if not enough events for this page - load more
        if (!this.props.isFetching && this.props.list.length/10 < this.state.page){
            this.props.getEvents(this.props.next);
        }
    };

    //filter and sort array, then render each event of this array
    renderList = () => {
      let {list} = this.props;
      return list.filter((a, index) => (this.state.page - 1) * 10 < index && index <= this.state.page * 10).sort(sortFunc).map(a => (
          <Event
              key={a.id}
              data={a}
          />
      ))
    };

    //loading or error message
    renderLoadingOrError = () => {
        let {isFetching, error} = this.props;
        if (error){
            return (<h3 className='errorMsg'>Ошибка во время загрузки</h3>);
        }else if (isFetching){
            return (<h3 className='loadingMsg'>Загрузка...</h3>)
        }
    };

    onNextPageBtnClick = () => this.setState({page: this.state.page + 1});

    render(){
        let nextPageBtnVisibility = this.props.isFetching || this.props.list.length === 0 ? 'hidden' : 'visible';
        return (
            <React.Fragment>
                <table className='eventTable'>
                    <thead>
                    <tr>
                        <td>Картинка</td>
                        <td>Название</td>
                        <td>Дата и время начала </td>
                        <td>Местонахождение</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderList()}
                    </tbody>
                </table>
                <button
                    className='prevPage'
                    style={{visibility: this.state.page === 1 ? 'hidden' : 'visible'}} //hide previous page button only if current page is the first
                    onClick={() => this.state.page > 1 ? this.setState({page: this.state.page - 1}) : false}
                >
                    Назад
                </button>
                <button
                    className='nextPage'
                    style={{visibility: nextPageBtnVisibility}} // hide next page button if data is now fetching or if list is empty
                    onClick={() => nextPageBtnVisibility === 'visible' ? this.onNextPageBtnClick() : false}
                >
                    Вперёд
                </button>
                {this.renderLoadingOrError()}
            </React.Fragment>
        )
    }
}