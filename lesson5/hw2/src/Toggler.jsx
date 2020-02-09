import React, { Component } from 'react';

class Toggler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'no color',
        };
    }

    showColor = color => {
        this.setState({
            text: color
        })
    }

    noColor() {
        this.setState({
            text: 'no color'
        })
    }

    render() {
        return (
            <>
                <div className="picker__title">
                    {this.state.text}
                </div>
                <div>
                    <button
                        className="picker__button picker__button_coral"
                        onMouseOver={() => this.showColor('coral')}
                        onMouseOut={() => this.noColor()}
                    />
                    <button
                        className="picker__button picker__button_aqua"
                        onMouseOver={() => this.showColor('aqua')}
                        onMouseOut={() => this.noColor()}
                    />
                    <button
                        className="picker__button picker__button_bisque"
                        onMouseOver={() => this.showColor('bisque')}
                        onMouseOut={() => this.noColor()}
                    />
                </div>
            </>
        )
    }
}

export default Toggler;