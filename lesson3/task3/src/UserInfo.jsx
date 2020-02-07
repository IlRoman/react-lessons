import React from 'react';
import UserAvatar from './Avatar';

const UserInfo = props => {
    return (
        <div className="user-info">
            <UserAvatar avatarUrl={props.user.avatarUrl} />
            <div>{props.user.name}</div>
        </div>
    );
};

export default UserInfo;