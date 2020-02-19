import React from 'react';

class Expand extends React.Component {
    state = {
        shown: false,
    }

    onToggle = () => {
        this.setState({
            shown: !this.state.shown,
        })
    }

    render() {
        return (
            <div className="expand border">
                <div className="expand__header">
                    <span className="expand__title">
                        {this.props.title}
                    </span>
                    <button className="expand__toggle-btn" onClick={this.onToggle}>
                        <i className={
                            this.state.shown
                                ? "fas fa-chevron-up"
                                : "fas fa-chevron-down"
                        }
                        ></i>
                    </button>
                </div>
                <div className="expand__content">
                    {this.state.shown
                        ? this.props.children
                        : ''}
                </div>
            </div >
        )
    }
}

export default Expand;