import React, {useEffect, useState} from 'react';
import './card.scss'

const Card = () => {
    return(
        <div className='card-container'>
            <div className='img'></div>
            <div className='wrapper'>
                <p className='p1'>XX律师</p>
                <p className='p2'>擅长XXXX</p>
                <a className='p3'>与他联系</a>
            </div>
        </div>
    )
}

export default Card;