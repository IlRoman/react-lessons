import React from 'react';
import Online from './Online';
import Offline from './Offline';

const Status = isOnline => {
    return (
        <div className="status" >
            {isOnline == true
                ? <Online />
                : <Offline />
            }
        </div>
    )
}

export default Status;