import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
    return(
        <div className='pa2'>
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