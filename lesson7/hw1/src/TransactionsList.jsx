import React from 'react';
import Transaction from './Transaction';

const TransactionsList = props => {
    return (
        <ul className="transactions">
            {props.transactions.map(elem => <Transaction key={elem.id} {...elem} />)}
        </ul>
    )
}

export default TransactionsList;