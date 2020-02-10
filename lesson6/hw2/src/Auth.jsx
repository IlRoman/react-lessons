import React from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
        }
    }

    onLogin() {
        this.setState({
            isLogged: true,
        })
    }

    onLogout() {
        this.setState({
            isLogged: false,
        })
    }

    render() {
        return (
            this.state.isLogged == false
                ? <Login onClick={() => this.onLogin()} />
                : <Logout onClick={() => this.onLogout()} />
        )
    }
}

export default Auth;