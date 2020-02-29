import React from 'react';

class User extends React.Component {
    state = {
        userName: '',
        userAvatar: '',
        userLocation: '',
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.url !== this.props.match.url) {
            this.fetchUserData(this.props.match.url);
        }
    }

    componentDidMount() {
        this.fetchUserData(this.props.match.url);
    }

    fetchUserData = (path) => {
        fetch(`https://api.github.com${path}`)
            .then(response => response.json())
            .then(user => this.setState({
                userName: user.name,
                userAvatar: user.avatar_url,
                userLocation: user.location
            }));
    }

    render() {
        const { userName, userLocation, userAvatar } = this.state;
        return (
            <div className="user">
                <img alt="User Avatar" src={userAvatar} className="user__avatar" />
                <div className="user__info">
                    <span className="user__name">{userName}</span>
                    <span className="user__location">{userLocation}</span>
                </div>
            </div>
        );
    }
};

export default User;