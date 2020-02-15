import React, { Component } from 'react';
import moment from 'moment';

const getTime = offset => {
    return moment(new Date().setHours(new Date().getHours() + offset)).format('LTS');
};

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: getTime(props.offset),
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                date: getTime(this.props.offset),
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="clock">
                <div className="clock__location">
                    {this.props.location}
                </div>
                <div className="clock__time">
                    {this.state.date}
                </div>
            </div>
        )
    }
}

export default Clock;