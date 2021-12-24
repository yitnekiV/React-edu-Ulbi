import React from 'react';

const Pagination = ({pagesArray, page, changePage}) => {
    return (
        <div className="page__wrapper">
            {pagesArray.map(p => 
            <span 
                key={p}
                className={page === p ? "page__current page" : 'page'}
                onClick = {() => changePage(p)}
            >
                {p}
            </span>
            )}
        </div>
    )
}

export default Pagination
