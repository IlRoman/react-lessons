import React from 'react';

const Filter = props => {
    return (
        <div className="filter">
            <span className="filter__count">
                {props.count}
            </span>
            <input type="text" className="filter__input" value={props.name} onChange={props.handleChange} />
        </div>
    )
}

export default Filter;