import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Clock = ({ location, num }) => {
    const [localTime, setLocalTime] = useState(null);

    const getLocaleTime = num => {
        const setHours = new Date().setHours(new Date().getHours() + num);
        const formatTime = moment(setHours).format('LTS');
        return formatTime;
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLocalTime(getLocaleTime(num));
        }, 1000);

        return () => clearInterval(intervalId);
    })

    return (
        <div className="clock">
            <div className="clock__location">
                {location}
            </div>
            <div className="clock__time">
                {localTime}
            </div>
        </div>
    );
};

export default Clock;