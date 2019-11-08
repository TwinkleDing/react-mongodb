import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '@/css/App.css';
import '@/css/user.less';
import {userList as getList} from '@/api/user'
import { Button, Table } from 'antd';
const { Column } = Table;

function Users(props) {
    const [user, getUser] =useState([])
    useEffect(()=>{
        userList()
    },[])
    function userList() {
        axios.get(getList).then(({data})=>{
            getUser(data.data)
        })
    }
    return (
        <div className='user'>
            {/* <div className='user-btns'>
                <Button type="primary" onClick={userList}>查询用户列表</Button>
                <Button type="primary" onClick={hideUserList}>隐藏用户列表</Button> 
            </div> */}
            <Table dataSource={user} rowKey="user_id" >
                <Column title="姓名" dataIndex="user_name" key="user_name" />
                <Column title="ID" dataIndex="user_id" key="user_id" />
                {/* <Column title="头像" dataIndex="avatar" key="avatar" render={(text, record)=>{
                    
                }} /> */}
                <Column
                    title="头像"
                    key="avatar"
                    render={(text, record) => {
                        if(text.avatar !== '') {
                            return (<img src={text.avatar} alt='' />)
                        }else{
                            return 
                        }
                    }}
                />
                <Column
                    title="操作"
                    key="action"
                    className='user-handle'
                    render={(text, record) => {
                        return <span>
                                <Button type="primary" >修改</Button>
                                <Button type="primary" >删除</Button>
                            </span>
                            
                    }}
                />
            </Table>
        </div>
    );
}

export default Users;
