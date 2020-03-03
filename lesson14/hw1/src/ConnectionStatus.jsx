import React, { Component, useState, useEffect } from 'react';

const ConnectionStatus = () => {
    const [status, setStatus] = useState('online');

    useEffect(() => {
        let online = element => {
            setStatus(element.type);
        }
        window.addEventListener('online', online);

        let offline = element => {
            setStatus(element.type);
        }
        window.addEventListener('offline', offline);

        return () => {
            window.removeEventListener('online', online);
            window.removeEventListener('offline', offline);
        }
    }, []);

    const classes = status === 'online' ?
        "status" : "status status_offline";

    return (
        <div className={classes}>{status}</div>
    );
};

export default ConnectionStatus;