import React from 'react';
import { connect } from 'react-redux';
import './loading.scss';

const Loading = (props) => {
    const { loading } = props;
    return (
        <div style={{
           display: loading ? 'flex': 'none'
        }}  className='loading_wrap center'>
            <div className='loading'></div>
            <div className='spinner flex between'>
                <div className='rect1'></div>
                <div className='rect2'></div>
                <div className='rect3'></div>
                <div className='rect4'></div>
                <div className='rect5'></div>
            </div>
        </div>
    )

};

export default connect(
    state => ({
        loading: state.loading.loading
    }),
    dispatch => ({

    })
)(Loading);