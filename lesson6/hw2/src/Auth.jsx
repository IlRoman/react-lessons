import React from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            actionsAfterSpinner: false,
        }
    }

    onLogin = () => {
        this.setState({
            isLogged: true,
        })
    }

    onLogout = () => {
        this.setState({
            isLogged: false,
            actionsAfterSpinner: false,
        })
    }

    render() {
        if (this.state.isLogged == false) {
            return <Login onLogin={this.onLogin} />
        }

        if (this.state.actionsAfterSpinner == true) {
            return <Logout onLogout={this.onLogout} />
        }

        if (this.state.isLogged == true) {
            setTimeout(() => {
                this.setState({
                    actionsAfterSpinner: true,
                })
            }, 2000)
            return <Spinner />
        }
    }
}

export default Auth;