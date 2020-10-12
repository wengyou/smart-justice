import React, {useEffect, useState} from 'react';
import { Table, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './disputeDetail.scss'


const DisputeDetail = (props) => {
    const columns = [
        {
            title: '争议焦点',
            dataIndex: 'dispute',
            key: 'dispute',
        },
        {
            title: '可信度',
            dataIndex: 'reliability',
            key: 'reliability'
        }
    ];
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState('disputeDetail');
    useEffect(() => {
        flag === 'upload' && props.parent(flag);
        flag === 'graph' && props.parent(flag);
    }, [flag]);
    return(
        <div className="disputeDeatil-container">
            <h2 className="title">争议焦点</h2>
            <Table className='table' columns={columns} dataSource={data} />
            <div className='result'>
                <b>最终结果：</b>
                <span></span>
            </div>
            <div className="footer">
                <Button
                    type="link" 
                    onClick={() => setFlag('upload')}
                >
                    <LeftOutlined />
                    争议焦点
                </Button>
                <span className='advise'>专家建议</span>
                <Button
                    type="link"
                    onClick={() => setFlag('graph')}
                >
                    查看知识图谱
                    <RightOutlined />
                </Button>
            </div>
        </div>
    )
}

export default DisputeDetail;