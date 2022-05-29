import React from 'react';
import './CardStyle.css';

const Card = (props) => {
    return(
        <div className='cardshape'>
            <img alt='robot' src={`https://robohash.org/${props.username}?200x200`}></img>
            <div class='color'>
                <h2 class="name">{props.name}</h2>
                <p>{props.username}</p>
                <p class="email">{props.email}</p>
            </div>
        </div>
    );
}

export default Card;