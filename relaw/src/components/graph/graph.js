import React, {useEffect, useState} from 'react';
import { Table, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import graphImg from '../../static/images/9.png';
import './graph.scss'

const Graph = props => {
    const [flag, setFlag] = useState('graph');
    useEffect(() => {
        flag === 'disputeDetail' && props.parent(flag);
    }, [flag]);
    return(
        <div className="graph-container">
            <h2 className="title">争议焦点</h2>
            <img className="img" src={graphImg} />
            <Button 
                type="link"
                className='return'
                onClick={() => setFlag('disputeDetail')}
            >
                <LeftOutlined />
                争议焦点表
            </Button>
        </div>
    )
}

export default Graph;