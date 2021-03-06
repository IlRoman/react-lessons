import React, { Component } from 'react';

class Toggler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Off',
        };
    }

    render() {
        return (
            <button
                className="toggler"
                onClick={() => this.setState({
                    text: this.state.text == 'Off'
                        ? this.state.text = 'On'
                        : this.state.text = 'Off'
                })}
            >
                {this.state.text}
            </button>
        )
    }
}

export default Toggler;