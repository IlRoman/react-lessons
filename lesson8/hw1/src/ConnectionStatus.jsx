import React from 'react';

class ConnectionStatus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 'Online'
        }
    }

    componentDidMount() {
        window.addEventListener('offline', this.offline);
        window.addEventListener('online', this.online);
    }

    componentWillUnmount() {
        window.removeEventListener('offline', this.offline);
        window.removeEventListener('online', this.online);

    }

    offline = () => {
        this.setState({
            status: false,
        })
    }

    online = () => {
        this.setState({
            status: true,
        })
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