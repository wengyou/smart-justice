import React, {useEffect, useState} from 'react';
import { Upload, message, List, Button } from 'antd';
import { InboxOutlined, RightOutlined } from '@ant-design/icons';
import './abstractUpload.scss'

const { Dragger } = Upload;
const propsUpload = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

const AbstractUpload = props => {
    const [left, setLeft] = useState([]);
    const [right, setRight] = useState([]);
    const [flag, setFlag] = useState('abstractUpload');
    useEffect(() => {
        flag === 'same' && props.parent(flag);
    }, [flag]);
    return(
        <div className='abstract-container'>
            <div className='upload' >
                <Dragger 
                    {...propsUpload}
                    // onChange={onChange}
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
                    header={<div>原告陈述:</div>}
                    bordered
                    dataSource={left}
                    style={{width: '48%'}}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
                <List
                    header={<div>被告辩诉:</div>}
                    bordered
                    dataSource={right}
                    style={{width: '48%'}}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
            <Button 
                type="link" 
                className='same'
                onClick={() => {setFlag('same')}}
            >
                查看相似案例
                <RightOutlined />
            </Button>
        </div>
    )
}

export default AbstractUpload;