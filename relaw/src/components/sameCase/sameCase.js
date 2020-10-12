import React, {useEffect, useState} from 'react';
import { Table } from 'antd';
import { InboxOutlined, RightOutlined } from '@ant-design/icons';
import './sameCase.scss'

const SameCase = props => {
    const columns = [
        {
          title: '类别',
          dataIndex: 'category',
          key: 'category',
        },
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '陈述',
          dataIndex: 'state',
          key: 'state',
        },
        {
            title: '时间',
            dataIndex: 'time',
            key: 'time',
          },
          {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
          },
      ];
    return(
        <div className="sameCase-container">
            <p className='title'>相似案例</p>
            <Table 
                columns={columns}
                className='table'
            />
        </div>
    )
}

export default SameCase;