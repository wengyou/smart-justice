import React, {useEffect, useState} from 'react';
import { Upload, message, Input, List ,Checkbox, Button  } from 'antd';
import { InboxOutlined, RightOutlined } from '@ant-design/icons';
import './dispute.scss'
import UploadCom from '../../components/upload/upload';
import DisputeDetail from '../../components/disputeDetail/disputeDetail';
import Graph from '../../components/graph/graph';


const Dispute = () => {
    const [flag, setFlag] = useState('upload');
    useEffect(() => {
        setFlag(flag);
    }, [flag])
    return(
        <div>
            {
                flag === 'upload' && <UploadCom parent={flag => setFlag(flag)} />
            }
            {
                flag === 'disputeDetail' && <DisputeDetail parent={flag => setFlag(flag)} />
            }
            {
                flag === 'graph' && <Graph parent={flag => setFlag(flag)} />
            }
        </div>
    )
}

export default Dispute;