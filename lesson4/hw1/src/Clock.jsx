import React, { Component } from 'react';
import './index.scss';

function getTime(num) {
    let hours = new Date(new Date().setHours(new Date().getHours() + num)).getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    return `${hours}:${minutes}:${seconds}`
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: '00:00:00',
        }

        setInterval(() => {
            this.setState({
                currentTime: getTime(this.props.offset),
            });
        }, 1000)
    }

    render() {
        return (
            <div className="clock">
                <div className="clock__location">
                    {`${this.props.location}`}
                </div>
                <div className="clock__time">
                    {this.state.currentTime}
                </div>
            </div>
        )
    }
}

export default Clock;