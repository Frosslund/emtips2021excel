import DateCountdown from 'react-date-countdown-timer';
import React, { Component } from 'react';

export class Countdown extends Component {

    render() {
        return (
            <DateCountdown dateTo='June 14, 2024 21:00:00 GMT+01:00' numberOfFigures={4}/>
        )
    }
}



