import React from 'react';

class ConnectionStatus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 'online'
        }
    }

    componentDidMount() {
        window.addEventListener('offline', this.setState({
            status: false,
        }));
        window.addEventListener('online', this.setState({
            status: true,
        }));
    }

    componentWillUnmount() {
        window.removeEventListener('offline', this.setState({
            status: false,
        }));
        window.removeEventListener('online', this.setState({
            status: true,
        }));
    }

    render() {
        return (
            this.state.status
                ? <div className="status">online</div>
                : <div className="status status_offline">offline</div>
        )
    }
}

export default ConnectionStatus;