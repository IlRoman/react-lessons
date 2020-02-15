import React from 'react';

const Pagination = props => {
    return (
        <div className="pagination">

            <button
                className="btn"
                onClick={props.goPrev}
                disabled={
                    props.currentPage === 0
                        ? 'disabled'
                        : ''
                }>
                {
                    props.currentPage === 0
                        ? ''
                        : '←'
                }
            </button>

            <div className="pagination__page">{props.currentPage + 1}</div>

            <button
                className="btn"
                onClick={props.goNext}
                disabled={
                    (props.currentPage + 1) * 3 >= props.totalItems
                        ? 'disabled'
                        : ''
                }>
                {(props.currentPage + 1) * 3 >= props.totalItems
                    ? ''
                    : '→'
                }
            </button>

        </div>
    )
};

export default Pagination;
