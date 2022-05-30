import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
    return(
        <div className='searchbar'>
            <input
                className='search' 
                type='search' 
                placeholder='Search Name'
                onChange={searchChange}
            />
        </div>
    )
}

export default Searchbox;