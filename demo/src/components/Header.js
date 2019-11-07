import React, { useState } from 'react';
import store from '../store/index'
import '@/css/header.less'
import {Button,message} from 'antd';

function Header(props) {
    const [user] = useState(store.getState().user);
    let logOut = ()=>{
        sessionStorage.clear()
            message.success('退出登录');
            props.history.push('/login')
    }
    return(
        <div className='header'>
            <img alt='' src={user?user.value.avatar:''} />
            <div>{user?user.value.user_name:''}已登录</div>
            <Button type="primary" onClick={logOut}>退出登录</Button>
        </div>
    )
}

export default Header;
