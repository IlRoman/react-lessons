import React from 'react';
import moment from "moment";

const getBirthDate = date => moment(date).format("DD MMM YY");

const Greeting = props => {
    return (
        <>
            <div className="greeting__name">
                {`${props.userInfo.firstName} ${props.userInfo.lastName}`}
            </div>
            <div className="greeting__birth">
                {`Was born ${getBirthDate(props.userInfo.birthDate)} in ${props.userInfo.birthPlace}`}
            </div>
        </>
    )
};
export default Greeting;