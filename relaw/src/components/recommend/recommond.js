import React, {useEffect, useState} from 'react';
import './recommond.scss';
import Card from './card/card';

const Recommond = () => {
    return(
        <div className='recommond-container'>
            <p className='title'>推荐一下律师</p>
            <div className='wrapper'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
export default Recommond;