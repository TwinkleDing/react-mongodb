import React, { useState } from 'react';
import axios from 'axios';
import {userList as getList, regUser, loginUser} from '../api/user'
import store from '../store/index'
import {Button,Input} from 'antd';
import '../App.css';

function Users(props) {
    const [user, getUser] =useState({})
    const [, setUserInfo] =useState({})
    const [addUser, addUsers] =useState({
        user_name:'',
        user_pwd:'woshidingyuliang',
        user_id:'dingyuliang'
    })
    function userList() {
        axios.get(getList).then(({data})=>{
            getUser(data.data)
        })
    }
    function hideUserList() {
        getUser({})
    }
    function handleChange(e,type) {
        let userInfo = addUser;
        let value = e.target.value
        if(type === 'name') {
            addUsers({
                user_name:value,
                user_pwd:userInfo.user_pwd,
                user_id:userInfo.user_id
            })
        }else if(type === 'pass') {
            addUsers({
                user_name:userInfo.user_name,
                user_pwd:value,
                user_id:userInfo.user_id
            })
        }else if(type === 'ids') {
            addUsers({
                user_name:userInfo.user_name,
                user_pwd:userInfo.user_pwd,
                user_id:value
            })
        }
    }
    function addNewUser() {
        axios.post(regUser,addUser).then(({data})=>{
            alert(data.msg)
        })
    }
    function login() {
        axios.post(loginUser,addUser).then(({data})=>{
            console.log(data)
            setUserInfo(data.data)
            alert(data.msg)
            const action = {
                type: 'user',
                value: data.data
            }
            store.dispatch(action)
            if(data.code === 200) {
                props.history.push('/index')
            }
        })
    }
    function List() {
        let userItem = user
        let arr =[]
        for(let i=0;i<userItem.length;i++){
            arr.push(<div key={i}>
                <div>user_name：{userItem[i].user_name}</div>
                <div>user_id：{userItem[i].user_id}</div>
                <div>_id：{userItem[i]._id}</div>
            </div>)
        }
        return(arr)
    }
    return (
        <div className='login'>
            <Input placeholder='用户名称' onChange={(e)=>handleChange(e,'name')} value={addUser.user_name} /><br />
            <Input placeholder='用户ID' onChange={(e)=>handleChange(e,'ids')} value={addUser.user_id} /><br />
            <Input placeholder='密码' onChange={(e)=>handleChange(e,'pass')} value={addUser.user_pwd} /><br />
            <Button type="primary" onClick={addNewUser}>添加用户</Button><Button type="primary" onClick={login}>登录</Button><br />
            <Button type="primary" onClick={userList}>查询用户列表</Button>
            <Button type="primary" onClick={hideUserList}>隐藏用户列表</Button>
            <List />
        </div>
    );
}

export default Users;
