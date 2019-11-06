import React, { useState, useEffect } from 'react';
import axios from '../axios/index';
import store from '../store/index'
import { userInfo } from '../api/user'
import { leaveList } from '../api/leave'
import '@/css/header.less'
import {Button,Input,Pagination,message} from 'antd';

function Header(props) {
    let userS = store.getState().user
    const [user, setUser] = useState({});
    useEffect(() => {
        if(userS){
            axios.get(userInfo,{
                params:{
                    _id: userS.value._id
                }
            }).then(({data})=>{
                setUser(data.data)
            })
        }
    },[]);
    let logOut = ()=>{
        console.log(1)
        sessionStorage.clear()
            message.success('退出登录');
            props.history.push('/login')
    }
    return(
        <div className='header'>
            <img alt='' src={user.avatar} />
            <div>{user.user_name}已登录</div>
            <Button type="primary" onClick={logOut}>退出登录</Button>
        </div>
    )
}

export default Header;
