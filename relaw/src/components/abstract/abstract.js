import React, {useEffect, useState} from 'react';
import { Upload, message, Input, List ,Checkbox  } from 'antd';
import { InboxOutlined, RightOutlined } from '@ant-design/icons';
import './abstract.scss'
import AbstractUpload from '../../components/abstractUpload/abstractUpload';
import SameCase from '../../components/sameCase/sameCase';

const { Dragger } = Upload;
const { TextArea } = Input;
const { Search } = Input;
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['责任划分', '伤害赔偿范围', '交通事故认定书', '伤情/死亡相关性', '鉴定意见书', '财产赔偿范围'];

const Abstract = () => {
    const [flag , setFlag ] = useState('abstractUpload');
    return(
        <div>
            {
                flag === 'abstractUpload' && <AbstractUpload parent={(flag) => setFlag(flag)} />
            }
            {
                flag === 'same' && <SameCase />
            }
        </div>
    )
}

export default Abstract;