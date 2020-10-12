import React, {useEffect, useState} from 'react';
import { Upload, message, Table, Tag, Space  } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import './forecast.scss';

const { Dragger } = Upload;
const props = {
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
  const columns = [
    {
      title: '焦点',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '真实焦点数',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '预测焦点数',
      dataIndex: 'address',
      key: 'address',
    },
    {
        title: '焦点覆盖数',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '焦点覆盖数/真实焦点数',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '焦点覆盖数/预测焦点数',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'F1-Measure',
        dataIndex: 'address',
        key: 'address',
      }
]
const Forecast = () => {
    return(
        <div className='forecast-container'>
            <div className='upload' >
                <Dragger 
                    {...props}
                    // onChange={onChange}
                >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">点击将文件拖拽到这里上传</p>
                    <p className="ant-upload-hint">
                        支持拓展名为 .csv
                    </p>
                </Dragger>
            </div>
            <Table 
                columns={columns} 
                // dataSource={data} 
                size='middle'
                style={{marginTop: '30px'}}
            />
        </div>
    )
}

export default Forecast;