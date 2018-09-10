import React, { Component } from 'react';
import moment from 'moment';
import ShowTime from './showTime';
import Remaining from './Remaining';
import MetaTags from 'react-meta-tags';
import './index.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inTime: '',
            goingTime: '',
            remainingTime: ''
         };
    }

    componentDidMount(){
        this.fetchHours();
    }

    fetchHours = () => {
        fetch('/api')
        .then(resp => {return resp.json()})
        .then(data => {
            let now = moment();
            let offTime = moment(data.firstIn).add(510, 'm');
            this.setState({
                inTime: moment(data.firstIn).format('hh:mm A'),
                goingTime: offTime.format('hh:mm A'),
                remainingTime: moment.utc(offTime.diff(now)).format('h:mm')
            })
            console.log(offTime);
            console.log(now);
        })
    }

    render() {
        return (
            <div className="Card">
            <MetaTags>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </MetaTags>
                <div className='timeRow'>
                    <div className='attendanceTime'>
                        <ShowTime label="Check-in Time" time={this.state.inTime} />
                        <ShowTime label="Check-out Time" time={this.state.goingTime} />
                    </div>
                    <Remaining label="Remaining Time" time={this.state.remainingTime} />
                    {/* <div className='RemainingTime'>Remaining Time : {this.state.remainingTime} hours</div> */}
                </div>
                <div className='Refresh' onClick={this.fetchHours}> Refresh </div>
            </div>
        );
    }
}

export default App;