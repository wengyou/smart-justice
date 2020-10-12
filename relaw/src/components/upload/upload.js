import React, {useEffect, useState} from 'react';
import { Upload, message, Input, List ,Checkbox, Button  } from 'antd';
import { InboxOutlined, RightOutlined } from '@ant-design/icons';
import './upload.scss'
import Item from 'antd/lib/list/Item';


const { Dragger } = Upload;
const { TextArea } = Input;
const { Search } = Input;
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['责任划分', '伤害赔偿范围', '交通事故认定书', '伤情/死亡相关性', '鉴定意见书', '财产赔偿范围'];

const UploadCom = (props) => {
    const propsUpload = {
        name: 'file',
        multiple: false,
        action: 'http://www.estationaeolus.xyz:8080/court/ctvFocus'
    }
    const [left, setLeft] = useState([]);
    const [right, setRight] = useState([]);
    const onChange = info => {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            const res = info.file.response;           
            setLeft([res.original_claim]);
            setRight([res.defendant_argued]);
            message.success(`${info.file.name} 上传成功.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} 上传失败.`);
        }
    };
    const [flag, setFlag] = useState('upload');
    useEffect(() => {
        flag === 'disputeDetail' && props.parent(flag);
    }, [flag]);
    return(
        <div className='dispute-container'>
            <div className='upload' >
                <Dragger 
                    {...propsUpload}
                    onChange={onChange}
                >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">点击将文件拖拽到这里上传</p>
                    <p className="ant-upload-hint">
                        支持拓展名为 .docx、.txt
                    </p>
                </Dragger>
            </div>
            <div className='content'>
                <List
                    header={<div>原告诉称:</div>}
                    bordered
                    dataSource={left}
                    style={{width: '48%'}}
                    renderItem={item => 
                        <Item>{item}</Item>
                    }
                />
                <List
                    header={<div>被告辩诉:</div>}
                    bordered
                    dataSource={right}
                    style={{width: '48%'}}
                    renderItem={item => 
                        <Item>{item}</Item>
                    }
                />
            </div>
            <Search
                placeholder="请输入案件ID"
                enterButton="确定"
                size="small"
                onSearch={value => console.log(value)}
                style={{marginLeft: '50vw', width: '20vw', marginTop: '10px'}}
            />
            <div className='select'>
                <div className="site-checkbox-all-wrapper">
                    <Checkbox>
                        全选
                    </Checkbox>
                    <CheckboxGroup
                    options={plainOptions}/>
                </div>
            </div>
            <Button 
                type="link" 
                className='see'
                onClick={() => {setFlag('disputeDetail')}}
            >
                查看争议焦点
                <RightOutlined />
            </Button>
        </div>
    )
}

export default UploadCom;