import React from 'react';
import moment from 'moment';

const Transaction = props => {
    return (
        <li className="transaction">
            <span className="transaction__date">{moment(props.date).format('DD MMM')}</span>
            <span className="transaction__time">{moment(props.time).format('HH:mm')}</span>
            <span className="transaction__assets">{`${props.from} → ${props.to}`}</span>
            <span className="transaction__rate">{props.rate}</span>
            <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(props.amount)}</span>
        </li>
    );
};

export default Transaction;