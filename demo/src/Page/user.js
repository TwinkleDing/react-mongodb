import React, { useState } from 'react';
import axios from 'axios';
import {userList as getList, addUser as regUser} from '../api/user'
function Users() {
    const [user, getUser] =useState({})
    const [addUser, addUsers] =useState({
        user_name:'',
        user_pwd:'',
        user_id:''
    })
    function userList() {
        axios.get(getList).then(({data})=>{
            console.log(data)
            getUser(data.data)
        })
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
            console.log(data)
            alert(data.msg)
        })
    }
    function List() {
        let userItem = user
        let arr =[]
        for(let i=0;i<userItem.length;i++){
            arr.push(<div key={i}>
                <div>user_name：{userItem[i].user_name}</div>
                <div>user_pwd：{userItem[i].user_pwd}</div>
                <div>token：{userItem[i].token}</div>
                <div>user_id：{userItem[i].user_id}</div>
            </div>)
        }
        return(arr)
    }
    return (
        <div>
            <input placeholder='用户名称' onChange={(e)=>handleChange(e,'name')} value={addUser.user_name} />
            <input placeholder='密码' onChange={(e)=>handleChange(e,'pass')} value={addUser.user_pwd} />
            <input placeholder='用户ID' onChange={(e)=>handleChange(e,'ids')} value={addUser.user_id} />
            <button onClick={()=>addNewUser()}>添加用户</button>
            <button onClick={()=>userList()}>查询用户列表</button>
            <List />
        </div>
    );
}

export default Users;
